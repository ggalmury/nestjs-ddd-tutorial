import { Module } from "@nestjs/common";

import PostController from "@/domains/post/application/controllers/post.controller";
import PostService from "@/domains/post/domain/services/post.service";

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export default class PostModule {}
