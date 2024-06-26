import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3070;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes();
  app.enableCors();

  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}

bootstrap();
