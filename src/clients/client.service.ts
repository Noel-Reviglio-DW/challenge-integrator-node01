import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  private logger = new Logger('ClientService');

  constructor(
    @Inject('CLIENTS') private readonly clientsClient: ClientProxy) {}

  findAll(params) : Observable<Client[]>{
    this.logger.log(`Calling to CLient-ms to get all Clients!`);
    return this.clientsClient.send<Client[]>('get_all_client',params);
    }

  findOne(id: string) : Observable<Client> {
    this.logger.log(`Calling to Client-ms to get the Client with id: ${id}!`);
    return this.clientsClient.send<Client>('get_client',id);
  }
  
  create(createClientDto: CreateClientDto) : Observable<CreateClientDto>{
    this.logger.log(`Calling to Client-ms to try create a new Client!`);
    return this.clientsClient.send<CreateClientDto>('new_client',createClientDto);
  }
  
  update(id: number, updateClientDto: UpdateClientDto) : Observable<UpdateClientDto>{
    this.logger.log(`Calling to Client-ms to update the Client with id: ${updateClientDto.id}!`);
    return this.clientsClient.send<UpdateClientDto>('update_client',updateClientDto);
  }
  
  remove(id: number) : Observable<string>{
    this.logger.log(`Calling to Client-ms to remove the Client with id: ${id}!`);
    return this.clientsClient.send<string>('delete_client',id);
  }
}
