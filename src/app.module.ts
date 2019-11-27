import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { Connection } from 'typeorm/connection/Connection';
import { PersonHttpModule } from './person-http/person-http.module';
import { Person } from './entity/person.entity';
import { MYSQL} from './config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonModule,
    PersonHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
