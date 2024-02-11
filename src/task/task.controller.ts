import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Patch,
    Post,
    Req,
    UseGuards,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { REQUEST } from "@nestjs/core";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Tasks")
@Controller("tasks")
export class TaskController {
    constructor(
        private taskService: TaskService,
        @Inject(REQUEST) private req: any,
    ) {}

    @UseGuards(AuthGuard)
    @Get()
    async getTask() {
        const tasks = await this.taskService.getAllTask(this.req.user.id);
        return {
            message: "Get All Tasks Success",
            data: tasks,
        };
    }

    // UsePipes here is add individual pipe to specific function
    // @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        body.user_id = this.req.user.id;

        const data = await this.taskService.createTask(body);
        return {
            message: `Task '${data.task_name}' created successfully`,
            data: data,
        };
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    async getTaskById(@Param("id") id: string, @Req() req) {
        const task = await this.taskService.getTaskById(+id, req.user.id);
        return {
            message: "Get Task Success",
            data: task,
        };
    }

    @UseGuards(AuthGuard)
    @Patch(":id")
    async updateTaskById(
        @Param("id") id: string,
        @Body() body: UpdateTaskDto,
        @Req() req,
    ) {
        body.user_id = req.user.id;
        const task = await this.taskService.updateTaskById(+id, body);

        return {
            message: `Update Task id ${id} Success`,
            data: task,
        };
    }

    @UseGuards(AuthGuard)
    @Delete(":id")
    async deleteTaskById(@Param("id") id: string, @Req() req) {
        const task = await this.taskService.deleteTaskById(+id, req.user.id);

        return {
            message: `Delete Task id ${id} Success`,
            data: task,
        };
    }
}
