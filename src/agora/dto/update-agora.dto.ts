import { PartialType } from '@nestjs/swagger';
import { CreateVideoAgoraDto } from './create-agora.dto';

export class UpdateAgoraDto extends PartialType(CreateVideoAgoraDto) {}
