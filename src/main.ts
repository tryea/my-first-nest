import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // useGlobalPipes here is enable pipe as global,
    // in here, all system will have ValidationPipe
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle("Latihan Nest JS")
        .setDescription("Latihan API description")
        .addBearerAuth(
            {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                in: "header",
            },
            "accessToken",
        )
        .setVersion("1.0")
        .addTag("Latihan")
        .addTag("Tasks")
        .addTag("School")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("openapi", app, document);

    await app.listen(3000);
}
bootstrap();
