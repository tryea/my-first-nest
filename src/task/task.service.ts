import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { tasks } from "./data/tasks";

@Injectable()
export class TaskService {
    getAllTask() {
        return {
            message: "Get All Tasks Success",
            data: tasks,
        };
    }

    async createTask(data: CreateTaskDto) {
        return {
            message: `Task '${data.task_name}' created successfully`,
        };
    }

    async getTaskById(id: number) {
        const task = tasks.find((item) => {
            return item.id === id;
        });

        if (!task) {
            return {
                message: "Task Not Found",
                data: null,
            };
        }

        return {
            message: "Get Task Success",
            data: task,
        };
    }
}
