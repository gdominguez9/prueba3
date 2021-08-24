export class Persona{
    
    id: number;
    name: string;
    password: string;
    surname: string;
    personal_email: string;
    company_email: string;
    city: string;
    created_date: string;


    constructor(id: number, name: string, password: string, surname: string, personal_email: string, company_email: string, city: string, created_date: string){
        this.id = id;
        this.name = name;
        this.password = password;
        this.surname = surname;
        this.personal_email = personal_email;
        this.company_email = company_email;
        this.city = city;
        this.created_date = created_date;
    }
    
}