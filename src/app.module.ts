import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'sqlite',
        storage: join(__dirname, 'database.sqlite'),
        autoLoadModels: true,
        synchronize: true
      } as SequelizeModuleOptions),
    }),
    TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
