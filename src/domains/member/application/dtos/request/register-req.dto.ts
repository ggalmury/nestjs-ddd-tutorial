import { IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

import CreateMemberDto from "@/domains/member/application/dtos/create-member.dto";

export default class RegisterReqDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateMemberDto)
  readonly member: CreateMemberDto;

  constructor(member: CreateMemberDto) {
    this.member = member;
  }
}
