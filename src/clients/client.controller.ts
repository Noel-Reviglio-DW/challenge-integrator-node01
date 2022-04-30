import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('clients')
@ApiTags('clients')
export class ClientController {
  private logger = new Logger('ClientController');

  constructor(private readonly clientsService: ClientService) {}
  
  @Get()
  findAll(@Req() request: Request) : Observable<Client[]>{
    return this.clientsService.findAll(request.query);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) :Observable<Client> {
    this.logger.log('I will say hello to: '+ id);
    return this.clientsService.findOne(id);
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto) :Observable<CreateClientDto>{
    return this.clientsService.create(createClientDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) :Observable<UpdateClientDto>{
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : Observable<string> {
    return this.clientsService.remove(+id);
  }
}
