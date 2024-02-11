import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body);
    }

    @Get(":id")
    async getTaskById(@Param("id") id: string) {
        return await this.taskService.getTaskById(+id);
    }
}
