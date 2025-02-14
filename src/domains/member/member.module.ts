import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import MemberController from "@/domains/member/application/controllers/member.controller";
import MemberService from "@/domains/member/domain/services/member.service";
import { MEMBER_REPOSITORY } from "@/domains/member/domain/repositories/member.repository";
import MemberRepositoryImpl from "@/domains/member/infrastructure/repositories/member.repository.impl";
import MemberOrmEntity from "@/domains/member/infrastructure/entities/member-orm.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MemberOrmEntity])],
  controllers: [MemberController],
  providers: [MemberService, { provide: MEMBER_REPOSITORY, useClass: MemberRepositoryImpl }],
})
export default class MemberModule {}
