import { HttpException, HttpStatus } from "@nestjs/common";

export default class InvalidTelFormatException extends HttpException {
  constructor() {
    super("유효하지 않는 전화번호 형식입니다.", HttpStatus.BAD_REQUEST);
  }
}
