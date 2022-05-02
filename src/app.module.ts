import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './clients/client.module';
import { ProjectModule } from './projects/project.module';
import { TalentModule } from './talents/talent.module';


const loggerOption : winston.LoggerOptions ={
  level: 'info', 
  format: winston.format.combine( 
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports: [ 
    new winston.transports.File({
      dirname: path.join(__dirname, './../log/debug/'),
      filename: 'debug.log',
      level: 'debug',
    }),
    new winston.transports.File({
      dirname: path.join(__dirname, './../log/error/'),
      filename: 'error.log',
      level: 'error',
    }),
    new winston.transports.File({
      dirname: path.join(__dirname, './../log/info/'),
      filename: 'info.log',
      level: 'info',
    }),
    new winston.transports.Console({ level: 'debug' }),
  ],
}


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
            WinstonModule.forRoot(loggerOption), 
            ClientModule,
            ProjectModule, 
            TalentModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  static port : number;
  constructor( private readonly _configService : ConfigService ){
    AppModule.port = +this._configService.get("PORT");
  }
}
