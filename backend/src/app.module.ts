import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfiguration } from './config/database.config';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: `.env.${process.env.NODE_ENV}`
      }),
      TypeOrmModule.forRootAsync({
          useClass: DatabaseConfiguration
      }),
      // TypeOrmModule.forRootAsync({
      //     inject: [ConfigService],
      //     useFactory: (config: ConfigService) => {
      //         return {
      //             type: 'postgres',
      //             database: config.get<string>('DB_NAME'),
      //             host: config.get<string>('DB_HOST'),
      //             port: config.get<number>('DB_PORT'),
      //             username: config.get<string>('DB_USER'),
      //             password: config.get<string>('DB_PASSWORD'),
      //             synchronize: false
      //         }
      //     }
      // })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
