import { Injectable, Logger, Body } from '@nestjs/common';
import { Person } from 'src/entity/person.entity';
import { UpdatePersonDto } from 'src/dto/person-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>
    ) {}
    
    private persons: Person[] = [];
    
    findAll(): Person[] {
        Logger.log("find all persons on the list after hmr -- and suppress module");
        return this.persons;
    }

    create(person: Person) {
        Logger.log(`creation of a person ${person.firstname} = "Yolande" `);
        this.persons.push(person);
    }

    getPersonalHello(name: string) {
        return `Hello "${name}" the beautiful name`;
    }

    update(id: string, @Body() updatePersonDto: UpdatePersonDto) {
        return updatePersonDto ;    
     }

}
