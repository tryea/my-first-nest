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
    async getTask() {
        const tasks = await this.taskService.getAllTask();
        return {
            message: "Get All Tasks Success",
            data: tasks,
        };
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
        const task = await this.taskService.getTaskById(+id);
        return {
            message: "Get Task Success",
            data: task,
        };
    }

    @Patch(":id")
    async updateTaskById(@Param("id") id: string, @Body() body: UpdateTaskDto) {
        const task = await this.taskService.updateTaskById(+id, body);

        return {
            message: `Update Task id ${id} Success`,
            data: task,
        };
    }

    @Delete(":id")
    async deleteTaskById(@Param("id") id: string) {
        const task = await this.taskService.deleteTaskById(+id);

        return {
            message: `Delete Task id ${id} Success`,
            data: task,
        };
    }
}
