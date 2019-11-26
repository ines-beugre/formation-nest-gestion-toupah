import { Injectable, Logger, Body } from '@nestjs/common';
import { Person } from 'src/entity/person';
import { UpdatePersonDto } from 'src/dto/person-dto';

@Injectable()
export class PersonService {

    private persons: Person[] = [];
    
    findAll(): Person[] {
        Logger.log("find all persons");
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
