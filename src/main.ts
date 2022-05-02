import { VersioningOptions, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


// Configurar títulos de documnentación
const documentationOptions = new DocumentBuilder() 
                          .setTitle('Challenge NODEJS REST API')
                          .setDescription('Challenge API REST en NodeJS propuesta por Darwoft.')
                          .setVersion('1.0')
                          .build();

const versioningOptions : VersioningOptions = {
  type: VersioningType.URI,
  defaultVersion: ['1'],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning(versioningOptions);
 
  const document = SwaggerModule.createDocument(app, documentationOptions); 
  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document); 
 
   await app.listen(AppModule.port);
}
bootstrap();
