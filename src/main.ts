import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";


async function start() {
  const PORT = process.env.PORT || 6000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Урок по продвинутому беку')
    .setDescription('Документация РЕСТ АПИ')
    .setVersion('1.0.0')
    .addTag('Roman')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => console.log(`Server started at port = ${PORT}`))
}

start()