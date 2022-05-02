import { Module } from '@nestjs/common';
import { ClientOptions, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';


const connectionFactory = {
  provide: 'CLIENTS',
  useFactory: (_configService: ConfigService) => {
    const clientsOptions : ClientOptions = {
      transport: Transport.TCP,
      options: { 
        host : _configService.get("CLIENTMSHOST"),
        port: _configService.get("CLIENTMSPORT"),
      },
    };
    return ClientProxyFactory.create(clientsOptions);
  },
  inject: [ConfigService]
}


@Module({
  imports: [],
  controllers: [ClientController],
  providers: [ClientService,
    connectionFactory,
  ]
})

export class ClientModule {}