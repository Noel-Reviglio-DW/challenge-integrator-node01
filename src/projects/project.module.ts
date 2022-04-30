import { Module } from '@nestjs/common';
import { ClientOptions, ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ConfigService } from '@nestjs/config';


const connectionFactory =     {
  provide: 'PROJECTS',
  useFactory: (_configService: ConfigService) => {
    const clientsOptions : ClientOptions = {
      transport: Transport.TCP,
      options: { 
        host : _configService.get("HOSTPROJECTMS"),
        port: _configService.get("PORTPROJECTMS"),
      },
    };
    return ClientProxyFactory.create(clientsOptions);
  },
  inject: [ConfigService]
}

@Module({
  controllers: [ProjectController],
  providers: [ProjectService,
    connectionFactory
  ]
})
export class ProjectModule {}
