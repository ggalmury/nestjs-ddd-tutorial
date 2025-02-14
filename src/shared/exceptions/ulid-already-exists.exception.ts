import { HttpException, HttpStatus } from "@nestjs/common";

export default class UlidAlreadyExistsException extends HttpException {
  constructor() {
    super("Ulid가 이미 할당되었습니다.", HttpStatus.CONFLICT);
  }
}
