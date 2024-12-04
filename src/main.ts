import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Strip non-whitelisted properties
    forbidNonWhitelisted: true,  // Throw an error if non-whitelisted properties are sent
    transform: true,  // Automatically transform payloads to DTO instances
    stopAtFirstError: true,  // Stop on first validation error
  }));

  await app.listen(3000);
}
bootstrap();
