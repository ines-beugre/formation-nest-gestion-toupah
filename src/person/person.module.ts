import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entity/person.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    exports: [TypeOrmModule],
    providers: [PersonService],
    controllers: [PersonController],
})
export class PersonModule {}
