import { Injectable } from '@nestjs/common';
import { CreateVideoAgoraDto } from './dto/create-agora.dto';
import { UpdateAgoraDto } from './dto/update-agora.dto';

import { RtcTokenBuilder, RtcRole, RtmTokenBuilder } from 'agora-access-token';
import * as moment from 'moment';

@Injectable()
export class AgoraService {
  private APP_ID: string = "378ec87ca0444928a42977b917f6459f"
  private APP_CERTIFICATE: string = "21f4ad48a98544ca825d664a375ad665"

  publishVideoCall(publishVideoAgoraDto: CreateVideoAgoraDto) {

    let token;
    token = RtcTokenBuilder.buildTokenWithUid(this.APP_ID, this.APP_CERTIFICATE, publishVideoAgoraDto.channelName, 0, RtcRole.PUBLISHER, Math.round(moment().add(1, "day").valueOf() / 1000));

    return {
      channel: publishVideoAgoraDto.channelName,
      token,
      appId: this.APP_ID
    }
  }

  findAll() {
    return `This action returns all agora`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agora`;
  }

  update(id: number, updateAgoraDto: UpdateAgoraDto) {
    return `This action updates a #${id} agora`;
  }

  remove(id: number) {
    return `This action removes a #${id} agora`;
  }
}
