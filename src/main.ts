import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client/client.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ClientModule, {
    logger: new ConsoleLogger({
      colors: true,
      logLevels: ['log', 'error', 'warn', 'debug', 'verbose'],
      compact: true,
    }),
  });

  await app.listen(3000); // or any port you want
  console.log('HTTP server running on http://0.0.0.0:3000');
}

bootstrap();
