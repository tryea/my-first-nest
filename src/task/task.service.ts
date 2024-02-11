import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { tasks } from "./data/tasks";

@Injectable()
export class TaskService {
    getAllTask() {
        return tasks;
    }

    async createTask(data: CreateTaskDto) {
        return {
            message: `Task '${data.task_name}' created successfully`,
        };
    }

    async getTaskById(id: number) {
        return tasks.find((item) => {
            return item.id === id;
        });
    }
}
