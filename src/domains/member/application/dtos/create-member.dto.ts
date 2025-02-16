import { IsNotEmpty, IsString } from "class-validator";

export default class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly tel: string;

  @IsNotEmpty()
  @IsString()
  readonly introduction: string;

  constructor(name: string, tel: string, introduction: string) {
    this.name = name;
    this.tel = tel;
    this.introduction = introduction;
  }
}
