import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller("tasks")
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        const data = await this.taskService.createTask(body);
        return {
            message: `Task '${data.task_name}' created successfully`,
            data: data,
        };
    }

    @Get(":id")
    async getTaskById(@Param("id") id: string) {
        return await this.taskService.getTaskById(+id);
    }

    @Patch(":id")
    async updateTaskById(@Param("id") id: string, @Body() body: UpdateTaskDto) {
        return await this.taskService.updateTaskById(+id, body);
    }

    @Delete(":id")
    async deleteTaskById(@Param("id") id: string) {
        return await this.taskService.deleteTaskById(+id);
    }
}
