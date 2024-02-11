import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { tasks } from "./data/tasks";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async getAllTask() {
        return await this.prisma.tasks.findMany();
    }

    async createTask(data: CreateTaskDto) {
        return await this.prisma.tasks.create({ data: data });
    }

    async getTaskById(id: number) {
        const task = await this.prisma.tasks.findFirst({ where: { id: id } });

        return task;
    }

    async updateTaskById(id: number, data: CreateTaskDto) {
        const task = tasks.find((item) => {
            return item.id === id;
        });

        if (!task) {
            return {
                message: "Task Not Found",
                data: null,
            };
        }

        task.title = data.task_name;
        task.description = data.task_description;

        return {
            message: `Update Task id ${id} Success`,
            data: null,
        };
    }

    async deleteTaskById(id: number) {
        return {
            message: `Delete Task id ${id} Success`,
            data: null,
        };
    }
}
