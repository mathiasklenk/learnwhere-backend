import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthenticationModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { SubsModule } from './subs/subs.module';
import { VotesModule } from './votes/votes.module';

import jwtConfig from '../config/jwtConfig';

@Module({
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
      load: [jwtConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    SubsModule,
    VotesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
