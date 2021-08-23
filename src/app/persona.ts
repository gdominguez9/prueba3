export class Persona{
    
    id: number;
    name: string;
    surname: string;
    personal_email: string;
    created_date: string;
    imagen_url: string;


    constructor(id: number, name: string, surname: string, personal_email: string, created_date: string, imagen_url: string){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.personal_email = personal_email;
        this.created_date = created_date;
        this.imagen_url = imagen_url;
    }
    
}