import { HttpException, HttpStatus } from "@nestjs/common";

export default class TransactionInitFailedException extends HttpException {
  constructor() {
    super("트랜잭션 초기화에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
