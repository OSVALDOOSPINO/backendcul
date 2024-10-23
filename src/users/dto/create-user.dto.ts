import { IsNotEmpty,IsEmail, IsInt, Max, Min,} from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty({ message: "El nombre debe contener al menos 3 caracteres" })
    name: string;

    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Max(70, { message: "La edad no puede ser mayor de 70" })
    @Min(18, { message: "La edad debe ser mayor a 18" })
    age: number;
}
