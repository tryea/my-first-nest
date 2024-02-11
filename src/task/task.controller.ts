import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getTask(): { id: number; title: string }[] {
        return this.taskService.getAllTask();
    }

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body);
    }
}
