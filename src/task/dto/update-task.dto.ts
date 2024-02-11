import { IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsOptional() // inject validation
    @IsString() // inject validation
    task_name: string;

    @IsOptional() // inject validation
    @IsString() // inject validation
    task_description: string;

    user_id: number;
}
