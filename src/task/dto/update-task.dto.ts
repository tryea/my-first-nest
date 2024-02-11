import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsNotEmpty() // inject validation
    @IsString() // inject validation
    task_name: string;

    @IsNotEmpty() // inject validation
    @IsString() // inject validation
    task_description: string;
}
