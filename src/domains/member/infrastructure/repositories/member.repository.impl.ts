import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import MemberRepository from "@/domains/member/domain/repositories/member.repository";
import MemberEntity from "@/domains/member/domain/entities/member.entity";
import NameVo from "@/domains/member/domain/vos/name.vo";
import TelVo from "@/domains/member/domain/vos/tel.vo";
import IntroductionVo from "@/domains/member/domain/vos/introduction.vo";
import MemberOrmEntity from "@/domains/member/infrastructure/entities/member-orm.entity";

@Injectable()
export default class MemberRepositoryImpl implements MemberRepository {
  constructor(@InjectRepository(MemberOrmEntity) private readonly repository: Repository<MemberOrmEntity>) {}

  async findById(id: number): Promise<MemberEntity | null> {
    const result: MemberOrmEntity | null = await this.repository.findOne({ where: { id } });

    const entity: MemberEntity | null = result
      ? MemberEntity.create({
          id: result.id,
          ulid: result.ulid,
          name: NameVo.create({ name: result.name }),
          tel: TelVo.create({ tel: result.tel }),
          introduction: IntroductionVo.create({ introduction: result.introduction }),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          deletedAt: result.deletedAt,
        })
      : null;

    return entity;
  }

  async findByUlid(ulid: string): Promise<MemberEntity | null> {
    const result: MemberOrmEntity | null = await this.repository.findOne({ where: { ulid } });

    const entity: MemberEntity | null = result
      ? MemberEntity.create({
          id: result.id,
          ulid: result.ulid,
          name: NameVo.create({ name: result.name }),
          tel: TelVo.create({ tel: result.tel }),
          introduction: IntroductionVo.create({ introduction: result.introduction }),
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          deletedAt: result.deletedAt,
        })
      : null;

    return entity;
  }
}
