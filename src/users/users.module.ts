import { Module } from '@nestjs/common';
import { UsersService } from './useres.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
