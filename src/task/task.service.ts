import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    getAllTask() {
        return [{ id: 1, title: "Create Todo" }];
    }

    async createTask() {
        return {
            message: "Task created successfully",
        };
    }
}
