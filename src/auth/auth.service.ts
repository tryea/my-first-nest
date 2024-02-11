import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import { compare, hash } from "bcrypt";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(data: RegisterDto) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                email: data.email,
            },
        });

        if (checkUserExists) {
            throw new HttpException(
                "User already registered",
                HttpStatus.FOUND,
            );
        }

        data.password = await hash(data.password, 12);

        const createUser = await this.prisma.users.create({
            data: data,
        });

        if (createUser) {
            return {
                statusCode: 200,
                message: "Register Successfull",
            };
        }
    }

    /**
     * Login user
     * @param data
     */
    async login(data: LoginDto) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                email: data.email,
            },
        });

        if (!checkUserExists) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        }

        const checkPassword = await compare(
            data.password,
            checkUserExists.password,
        );

        if (checkPassword) {
            return {
                statusCode: 200,
                message: "Login berhasil",
            };
        } else {
            throw new HttpException(
                "User or password not match",
                HttpStatus.UNAUTHORIZED,
            );
        }
    }
}
