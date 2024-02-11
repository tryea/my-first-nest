import { Injectable } from "@nestjs/common";

@Injectable()
export class LatihanService {
    panggiLatihan(): string {
        return "yuk latihan";
    }
}
