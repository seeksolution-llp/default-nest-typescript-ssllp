import { ApiProperty } from "@nestjs/swagger";

export class CreateVideoAgoraDto {

    @ApiProperty()
    channelName: string

    @ApiProperty()
    userId: string

    @ApiProperty({ enum: ["userAccount", "uid"] })
    tokenType: string

    @ApiProperty({ enum: ["publisher", "audience"] })
    role: string
}
