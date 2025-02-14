import { HttpException, HttpStatus } from "@nestjs/common";

export default class InvalidTelLengthException extends HttpException {
  constructor() {
    super("유효하지 않는 전화번호 길이입니다.", HttpStatus.BAD_REQUEST);
  }
}
