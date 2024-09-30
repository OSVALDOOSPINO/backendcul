import { IsEmail, IsInt, Max, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsInt()
    @Max(70, { message: "La edad no puede ser mayor de 70" })
    @Min(18, { message: "La edad debe ser mayor a 18" })
    age: number;

    @MinLength(3, { message: "El nombre debe contener al menos 3 caracteres" })
    name: string;
}
