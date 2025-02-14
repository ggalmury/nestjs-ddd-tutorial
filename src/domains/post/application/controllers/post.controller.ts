import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";

import PostService from "@/domains/post/domain/services/post.service";

@Controller("post")
export default class PostController {
  constructor(private readonly postService: PostService) {}
}
