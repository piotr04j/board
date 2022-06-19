import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        database: 'board_db',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'qwe123',
        entities: [User],
        synchronize: false
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
