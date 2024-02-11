import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import { compare, hash } from "bcrypt";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { jwt_config } from "src/config/jwt_config";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    /**
     * Generate JWT Token
     * @param payload
     * @returns
     */
    generateJWT(payload: any) {
        return this.jwtService.sign(payload, {
            secret: jwt_config.secret,
            expiresIn: jwt_config.expired,
        });
    }

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
            const accessToken = this.generateJWT({
                sub: checkUserExists.id,
                name: checkUserExists.name,
                email: checkUserExists.email,
            });

            return {
                statusCode: 200,
                message: "Login berhasil",
                accessToken: accessToken,
            };
        } else {
            throw new HttpException(
                "User or password not match",
                HttpStatus.UNAUTHORIZED,
            );
        }
    }

    /**
     * User Detail
     * @param user_id
     * @returns
     */
    async profile(user_id: number) {
        return await this.prisma.users.findFirst({
            where: {
                id: user_id,
            },
            select: {
                name: true,
                email: true,
                avatar: true,
                tasks: true,
            },
        });
    }

    /**
     * Upload Avatar
     * @param user_id
     * @param avatar
     * @returns
     */
    async uploadAvatar(user_id: number, avatar) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                id: user_id,
            },
        });

        if (checkUserExists) {
            const updateAvatar = await this.prisma.users.update({
                data: {
                    avatar: avatar,
                },
                where: {
                    id: user_id,
                },
            });

            if (updateAvatar) {
                return {
                    statusCode: 200,
                    message: "Upload avatar berhasil",
                };
            }
        }

        throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
}
