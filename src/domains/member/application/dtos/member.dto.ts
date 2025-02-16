import { IsNotEmpty, IsString, IsBoolean, IsDate } from "class-validator";

export default class MemberDto {
  @IsNotEmpty()
  @IsString()
  readonly ulid: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly tel: string;

  @IsNotEmpty()
  @IsString()
  readonly introduction: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsBoolean()
  readonly isDeleted: boolean;

  constructor(ulid: string, name: string, tel: string, introduction: string, createdAt: Date, isDeleted: boolean) {
    this.ulid = ulid;
    this.name = name;
    this.tel = tel;
    this.introduction = introduction;
    this.createdAt = createdAt;
    this.isDeleted = isDeleted;
  }
}
