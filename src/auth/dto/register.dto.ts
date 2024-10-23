import { Transform } from "class-transformer";
import {IsNotEmpty,IsInt, Max, Min, IsString, IsEmail, MinLength} from "class-validator";

export class RegisterDto{

    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(6)
    password:string;

    @IsInt()
    @Max(70, { message: "La edad no puede ser mayor de 70" })
    @Min(18, { message: "La edad debe ser mayor a 18" })
    age: number;

}