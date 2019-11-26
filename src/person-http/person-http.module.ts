import { Module } from '@nestjs/common';
import { PersonModule } from 'src/person/person.module';
import { PersonService } from 'src/person/person.service';
import { PersonController } from 'src/person/person.controller';

@Module({
    imports: [PersonModule],
    providers: [PersonService],
    controllers: [PersonController]
})
export class PersonHttpModule {}
