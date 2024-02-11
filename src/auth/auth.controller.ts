import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { AuthGuard } from "./auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("register")
    async register(@Body() data: RegisterDto) {
        return await this.authService.register(data);
    }

    @Post("login")
    async login(@Body() data: LoginDto) {
        return await this.authService.login(data);
    }

    @ApiBearerAuth("accessToken")
    @UseGuards(AuthGuard)
    @Get("profile")
    async profile(@Req() req) {
        const user = await this.authService.profile(req.user.id);

        return {
            message: "Success Get Profile Data",
            data: user,
        };
    }

    @ApiBearerAuth("accessToken")
    @ApiConsumes("multipart/form-data")
    @ApiBody({
        schema: {
            type: "object",
            properties: {
                avatar: {
                    type: "string",
                    format: "binary",
                },
            },
        },
    })
    @UseGuards(AuthGuard)
    @UseInterceptors(
        FileInterceptor("avatar", {
            storage: diskStorage({
                destination: "public/uploads/image",
                filename: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
        }),
    )
    @Post("avatar")
    async avatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
        await this.authService.uploadAvatar(
            req.user.id,
            `${file.destination}/${file.filename}`,
        );

        return {
            message: "Change Avatar Image Success",
        };
    }
}
