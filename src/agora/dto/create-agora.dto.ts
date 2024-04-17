import { ApiProperty } from "@nestjs/swagger";

export class CreateVideoAgoraDto {

    @ApiProperty()
    channelName: string
}
