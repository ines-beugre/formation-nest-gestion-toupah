export class CreatePersonDto {
    readonly lastname: string;
    readonly firstname: string;
    readonly generation: string;  
}

export class UpdatePersonDto {
    readonly lastname: string;
    readonly firstname: string;
    readonly generation: string;  
}

export class listAllPersons {
    readonly persons: [];
    limit: 12;
}