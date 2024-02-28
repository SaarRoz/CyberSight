import { Injectable, OnModuleInit } from '@nestjs/common';
import { PostgresPrismaClient } from '@cyber-sight/database';

@Injectable()
export class PostgresPrismaService extends PostgresPrismaClient.PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
