import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        private readonly UsersService:UsersService,
        private readonly jwtservice: JwtService
    ){}

    async register({name,email,password,age}: RegisterDto){

        const user = await this.UsersService.findOneByEmail(email);

        if(user){
            throw new BadRequestException('el usuario ya existe');

        }

        return await this.UsersService.create({
            name,
            email,
            password: await bcrypt.hash(password,10),
            age})
    }

    async login({email,password}:loginDto){
    const user = await this.UsersService.findOneByEmail(email);
    if(!user){
        throw new UnauthorizedException('email es equivocado')
    }

    const ispasswordValid = await bcrypt.compare(password,user.password); 
    
    if(!ispasswordValid){
        throw new UnauthorizedException('contraseña equivocada');
    }

    const payload = {email: user.email};

    const token = await this.jwtservice.signAsync(payload)

    return {
        token,
        email,
    };

    }

}
