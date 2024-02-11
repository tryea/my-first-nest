import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { SchoolService } from "./school.service";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";

@Controller("school")
export class SchoolController {
    constructor(private readonly schoolService: SchoolService) {}

    @Post()
    async create(@Body() createSchoolDto: CreateSchoolDto) {
        const school = await this.schoolService.create(createSchoolDto);
        return {
            message: "Create School Success",
            data: school,
        };
    }

    @Get()
    async findAll() {
        const schools = await this.schoolService.findAll();
        return {
            message: "Get All School List Success",
            data: schools,
        };
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const school = await this.schoolService.findOne(+id);
        return {
            message: "Get School Data Success",
            data: school,
        };
    }

    @Patch(":id")
    async update(
        @Param("id") id: string,
        @Body() updateSchoolDto: UpdateSchoolDto,
    ) {
        const school = await this.schoolService.update(+id, updateSchoolDto);
        return {
            message: "Update School Data Success",
            data: school,
        };
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        const school = await this.schoolService.remove(+id);
        return {
            message: "Delete School Data Success",
            data: school,
        };
    }
}
