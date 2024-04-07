import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';
import { BullModule } from '@nestjs/bull';
import { MailingModule } from './mailing/mailing.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'sqlite',
        storage: join(__dirname, 'database.sqlite'),
        autoLoadModels: true,
        synchronize: true
      } as SequelizeModuleOptions),
    }),
    TweetsModule,
    MailingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
