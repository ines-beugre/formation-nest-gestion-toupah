import { Controller, Get } from '@nestjs/common';

@Controller('person')
export class PersonController {

    @Get()
    TestPerson() {
        return 'Person App';
    }
}
