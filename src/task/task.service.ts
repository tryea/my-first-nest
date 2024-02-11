import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskService {
    getAllTask() {
        return [{ id: 1, title: "Create Todo" }];
    }

    async createTask(data: CreateTaskDto) {
        return {
            message: `Task '${data.task_name}' created successfully`,
        };
    }
}
