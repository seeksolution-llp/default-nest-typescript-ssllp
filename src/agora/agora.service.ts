import { Injectable } from '@nestjs/common';
import { CreateVideoAgoraDto } from './dto/create-agora.dto';
import { UpdateAgoraDto } from './dto/update-agora.dto';

import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import moment from 'moment';

@Injectable()
export class AgoraService {
private APP_ID:string="378ec87ca0444928a42977b917f6459f"
private APP_CERTIFICATE:string="84ce49a48d3c48e3835b8e0d275471a8"

  publishVideoCall(publishVideoAgoraDto: CreateVideoAgoraDto) {
    let token;
    // if (publishVideoAgoraDto.tokenType === 'userAccount') {
      token = RtcTokenBuilder.buildTokenWithAccount(this.APP_ID, this.APP_CERTIFICATE, publishVideoAgoraDto.channelName, publishVideoAgoraDto.userId, publishVideoAgoraDto.role == "publisher" ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER, moment().add("day",1).valueOf());
    // } else if (publishVideoAgoraDto.tokenType === 'uid') {
      // token = RtcTokenBuilder.buildTokenWithUid(this.APP_ID, this.APP_CERTIFICATE, publishVideoAgoraDto.channelName, 1,  publishVideoAgoraDto.role == "publisher" ? RtcRole.PUBLISHER : RtcRole.SUBSCRIBER, moment().add("day",1).valueOf());
    // }
    return token
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
