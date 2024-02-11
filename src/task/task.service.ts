import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async getAllTask(user_id: number) {
        return await this.prisma.tasks.findMany({
            where: {
                user_id,
            },
        });
    }

    async createTask(data: CreateTaskDto) {
        return await this.prisma.tasks.create({ data: data });
    }

    async getTaskById(id: number, user_id: number) {
        const task = await this.prisma.tasks.findFirst({
            where: { id: id, user_id },
        });

        if (!task) {
            throw new HttpException(
                { message: "Task tidak ditemukan" },
                HttpStatus.NOT_FOUND,
            );
        }

        return task;
    }

    async updateTaskById(id: number, data: UpdateTaskDto) {
        const task = await this.prisma.tasks.findFirst({ where: { id: id } });

        if (!task) {
            throw new HttpException(
                { message: "Task tidak ditemukan" },
                HttpStatus.NOT_FOUND,
            );
        }

        const updateData = {};
        if (data.task_description) {
            updateData["task_description"] = data.task_description;
        }

        if (data.task_name) {
            updateData["task_name"] = data.task_name;
        }

        const updatedTask = await this.prisma.tasks.update({
            where: { id },
            data: updateData,
        });

        return updatedTask;
    }

    async deleteTaskById(id: number, user_id: number) {
        const task = await this.prisma.tasks.findFirst({
            where: { id: id, user_id },
        });

        if (!task) {
            throw new HttpException(
                { message: "Task tidak ditemukan" },
                HttpStatus.NOT_FOUND,
            );
        }

        const deletedTask = await this.prisma.tasks.delete({
            where: { id },
        });

        return deletedTask;
    }
}
