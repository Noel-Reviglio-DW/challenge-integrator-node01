import { Module } from '@nestjs/common';
import { ClientOptions, ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { TalentService } from './talent.service';
import { TalentController } from './talent.controller';


const connectionFactory = {
  provide: 'TALENTS',
  useFactory: (_configService: ConfigService) => {
    const clientsOptions : ClientOptions = {
      transport: Transport.TCP,
      options: { 
        host : _configService.get("HOSTTALENTMS"),
        port: _configService.get("PORTTALENTMS"),
      },
    };
    return ClientProxyFactory.create(clientsOptions);
  },
  inject: [ConfigService]
}


@Module({
  controllers: [TalentController],
  providers: [TalentService,
    connectionFactory  
  ]
})
export class TalentModule {}
