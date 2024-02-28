import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoPrismaClient } from '@cyber-sight/database';

@Injectable()
export class MongoPrismaService extends MongoPrismaClient.PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
