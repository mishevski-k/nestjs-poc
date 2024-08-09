import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;
    
    @IsEnum(["INTERN" , "ENGINEER" , "ADMIN"], {
        message: 'Valid role required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}

export class UpdateUserDto extends PartialType(CreateUserDto) {  }