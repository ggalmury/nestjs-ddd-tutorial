import { HttpException, HttpStatus } from "@nestjs/common";

export default class IntroductionLengthExceededException extends HttpException {
  constructor() {
    super("소개글이 허용된 최대 길이를 초과했습니다.", HttpStatus.BAD_REQUEST);
  }
}
