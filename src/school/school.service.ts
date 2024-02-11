import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SchoolService {
    constructor(private prisma: PrismaService) {}

    async create(createSchoolDto: CreateSchoolDto) {
        const school = await this.prisma.schools.create({
            data: createSchoolDto,
        });
        return school;
    }

    async findAll() {
        const schools = await this.prisma.schools.findMany({});
        return schools;
    }

    async findOne(id: number) {
        const school = await this.prisma.schools.findFirst({
            where: {
                id,
            },
        });

        if (!school) {
            throw new HttpException("School Not Found", HttpStatus.NOT_FOUND);
        }

        return school;
    }

    async update(id: number, updateSchoolDto: UpdateSchoolDto) {
        const school = await this.prisma.schools.findFirst({
            where: {
                id,
            },
        });

        if (!school) {
            throw new HttpException("School Not Found", HttpStatus.NOT_FOUND);
        }

        const updatedData = {};

        if (updateSchoolDto.address) {
            updatedData["address"] = updateSchoolDto.address;
        }

        if (updateSchoolDto.email) {
            updatedData["email"] = updateSchoolDto.email;
        }

        if (updateSchoolDto.phone) {
            updatedData["phone"] = updateSchoolDto.phone;
        }

        if (updateSchoolDto.school_name) {
            updatedData["school_name"] = updateSchoolDto.school_name;
        }

        const updateSchool = await this.prisma.schools.update({
            where: { id },
            data: updatedData,
        });

        return updateSchool;
    }

    async remove(id: number) {
        const school = await this.prisma.schools.findFirst({
            where: {
                id,
            },
        });

        if (!school) {
            throw new HttpException("School Not Found", HttpStatus.NOT_FOUND);
        }

        const deletedData = await this.prisma.schools.delete({
            where: {
                id,
            },
        });

        return deletedData;
    }
}
