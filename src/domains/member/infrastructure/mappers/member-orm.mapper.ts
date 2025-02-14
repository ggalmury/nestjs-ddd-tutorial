import { Injectable } from "@nestjs/common";

import MemberEntity from "@/domains/member/domain/entities/member.entity";
import MemberOrmEntity from "@/domains/member/infrastructure/entities/member-orm.entity";

@Injectable()
export default class MemberOrmMapper {}
