import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot()],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {}
