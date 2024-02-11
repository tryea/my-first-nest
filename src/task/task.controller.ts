import { Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller("tasks")
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getTask(): { id: number; title: string }[] {
        return this.taskService.getAllTask();
    }

    @Post()
    async createTask() {
        return await this.taskService.createTask();
    }
}
