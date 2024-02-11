import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNotEmpty,
    IsEmail,
    MinLength,
    MaxLength,
} from "class-validator";

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}
