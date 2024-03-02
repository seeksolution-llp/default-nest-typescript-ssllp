import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Sessions } from 'src/users/schema/session.schema';
import { Users } from 'src/users/schema/users.schema';


export class Common {
  constructor(
    @InjectModel(Users.name) private readonly model: Model<Users>,
    @InjectModel(Sessions.name) private readonly session: Model<Users>,
    private readonly jwtService: JwtService
  ) { }

  async generateOtp() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  async encriptPass(pass: string) {
    const saltOrRounds = 10;
    const password = pass;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async bcriptPass(old_password, user_pass) {
    return await bcrypt.compare(old_password, user_pass);
  }

  async set_options(pagination: any, limit: any) {
    let options: any = {
      lean: true,
      sort: { _id: -1 }
    };
    if (pagination == undefined && limit == undefined) {
      options = {
        lean: true,
        sort: { _id: -1 },
        limit: 100,
        pagination: 0,
        skip: 0
      };
    }
    else if (pagination == undefined && typeof limit != undefined) {
      options = {
        lean: true,
        sort: { _id: -1 },
        limit: Number(limit),
        skip: 0
      };
    }
    else if (typeof pagination != undefined && limit == undefined) {
      options = {
        lean: true,
        sort: { _id: -1 },
        skip: Number(pagination) * Number(process.env.DEFAULT_LIMIT),
        limit: Number(process.env.DEFAULT_LIMIT)
      };
    }
    else if (typeof pagination != undefined && typeof limit != undefined) {
      options = {
        lean: true,
        sort: { _id: -1 },
        limit: Number(limit),
        skip: (0 + (pagination - 1) * limit)
      };
    }
    return options;
  }

  async createSession(payload) {
    const access_token = await this.jwtService.signAsync(payload)
    await this.session.create({
      user_id: payload?.id,
      access_token: access_token,
    })
    return access_token
  }
}