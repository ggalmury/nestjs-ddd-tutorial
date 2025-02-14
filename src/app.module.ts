import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";
import { addTransactionalDataSource } from "typeorm-transactional";

import TypeOrmConfig from "@/shared/configs/typeorm.config";
import TransactionInitFailedException from "@/shared/exceptions/transaction-init-failed.exception";

import MemberModule from "@/domains/member/member.module";
import PostModule from "@/domains/post/post.module";
import AppController from "@/app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === "production" ? ".env.producton" : ".env.development",
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfig,
      async dataSourceFactory(options: DataSourceOptions) {
        if (!options) {
          throw new TransactionInitFailedException();
        }

        const datasource: DataSource = new DataSource(options);

        return addTransactionalDataSource(datasource);
      },
    }),
    MemberModule,
    PostModule,
  ],
  controllers: [AppController],
})
export default class AppModule {}
