import { Controller, Get } from "@nestjs/common";

@Controller("latihan") // meaning we can access the route name "latihan"
export class LatihanController {
    @Get()
    getLatihan(): string {
        return "Latihan route";
    }
}
