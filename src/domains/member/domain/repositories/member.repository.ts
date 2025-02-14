import MemberEntity from "@/domains/member/domain/entities/member.entity";

export const MEMBER_REPOSITORY = Symbol("member repository");

export default interface MemberRepository {
  findById(id: number): Promise<MemberEntity | null>;
  findByUlid(ulid: string): Promise<MemberEntity | null>;
  save(entity: MemberEntity): Promise<MemberEntity>;
  softRemove(entity: MemberEntity): Promise<void>;
  remove(entity: MemberEntity): Promise<void>;
}
