import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";

import MemberService from "@/domains/member/domain/services/member.service";

@Controller("member")
export default class MemberController {
  constructor(private readonly memberService: MemberService) {}
}
