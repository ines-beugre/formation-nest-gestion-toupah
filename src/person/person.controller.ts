import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person-dto';
import { PersonService } from './person.service';
import { Person } from 'src/entity/person';

@Controller('person')
export class PersonController {
    personService: PersonService;

    @Get()
    TestPerson() {
        return 'Person App';
    }

    @Get()
    async findAll(): Promise<Person[]> {
        return this.personService.findAll();
    }
    
    @Post()
    async create(@Body() CreatePersonDto: CreatePersonDto) {
       this.personService.create(CreatePersonDto) ;
    }

    @Get('/hello/:name')
    getPersonalHello(@Param('name') name: string) {
        return this.personService.getPersonalHello(name);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
        return this.personService.update(id, updatePersonDto);
    }
    
}
