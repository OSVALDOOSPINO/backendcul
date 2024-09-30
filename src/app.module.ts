import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Client } from './clients/entities/client.entity';

@Module({
  imports: [
    ClientsModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0606',
      database: 'culdb',
      entities: [
        User,
        Client
      ],
      synchronize: true,
    }),],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
