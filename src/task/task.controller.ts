import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getTask(): { id: number; title: string }[] {
        return this.taskService.getAllTask();
    }
}
