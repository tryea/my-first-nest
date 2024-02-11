import { Controller, Get } from "@nestjs/common";
import { LatihanService } from "./latihan.service";

@Controller("latihan") // meaning we can access the route name "latihan"
export class LatihanController {
    constructor(
        // LatihanService should be inside providers and should be injectable
        // before can include here
        private latihanService: LatihanService,
    ) {}

    @Get()
    getLatihan(): string {
        return this.latihanService.panggiLatihan();
    }
}
