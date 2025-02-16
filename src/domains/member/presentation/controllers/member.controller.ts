import { Controller, Post, Body, Inject, HttpCode } from "@nestjs/common";

import RegisterUsecase, { REGISTER_USECASE } from "@/domains/member/application/usecases/register.usecase";
import RegisterReqDto from "@/domains/member/application/dtos/request/register-req.dto";
import RegisterResDto from "@/domains/member/application/dtos/response/register-res.dto";

@Controller({ path: "member", version: "1" })
export default class MemberController {
  constructor(@Inject(REGISTER_USECASE) private readonly registerUsecase: RegisterUsecase) {}

  @Post("create")
  @HttpCode(201)
  async register(@Body() registerReqDto: RegisterReqDto): Promise<RegisterResDto> {
    return await this.registerUsecase.execute(registerReqDto);
  }
}
