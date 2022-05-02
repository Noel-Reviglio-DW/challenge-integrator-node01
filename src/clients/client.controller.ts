import { Controller, Get, 
         Post, Body, 
         Patch, Param, 
         Delete, Req, 
         Inject, Res, 
         HttpStatus} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, 
         ApiOperation, ApiResponse, 
         ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiTags('client')
@Controller({
  path: 'clients',
  version: '1',
})
export class ClientController {

  constructor(private readonly clientsService: ClientService,
              @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}
  
  /** 
   *
   * @returns {Client[]} Returns a list of clients
   * @param {Request} request The list of params to filter
   */
  @Get()
  @ApiOperation({ summary: 'Get a list of all clients' })
  @ApiOkResponse({ 
    description: 'List of Client',
    type: [Client], 
  })
  findAll( @Req() request: Request, @Res() res ) : Observable<Client[]>{
    let startTime = Date.now();
    try {
      let data = this.clientsService.findAll(request.query);
      
      this.writeLog('info', startTime, request, HttpStatus.OK, 'Return the list of all clients OK');

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: data
      });
      
    } catch (error) {
      this.writeLog('error', startTime, request, 500, `Error: ${error}`);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `ERROR: ${error}`,
      });
    }
  }
  
  /** 
   *
   * @returns {Client} Returns a client
   * @param {id} id The value to filter
   */
  @Get(':id')
  @ApiOperation({ summary: 'Get a client' })
  @ApiOkResponse({ 
    description: 'A Client',
    type: Client, 
  })
  findOne(@Param('id') id: string, @Req() request: Request, @Res() res ) :Observable<Client> {
    let startTime = Date.now();
    try {
      const client = this.clientsService.findOne(id);
      
      this.writeLog('info', startTime, request, HttpStatus.OK, 'Return the list of all clients OK');

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: client
      });
    } catch (error) {
      this.writeLog('error', startTime, request, 500, `Error: ${error}`);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `ERROR: ${error}`,
      });
    }      
  }

  /** 
   *
   * @returns {Client} Returns the new client created
   * @param {Body} body The values to create a new client
   */
   @Post()
   @ApiOperation({ summary: 'Create a client' })
   @ApiCreatedResponse({ 
     description: 'Create a new Client',
     type: Client, 
   })
  create(@Body() createClientDto: CreateClientDto) :Observable<CreateClientDto>{
    return this.clientsService.create(createClientDto);
  }

  /** 
   *
   * @returns {Client} Returns the client that was updated
   * @param {Body} body The values to update a client
   * @param {id} id The representative value to update a client
   */
   @Patch(':id')
   @ApiOperation({ summary: 'Update a client' })
   @ApiResponse({ 
     status: 200,
     description: 'Update a Client',
     type: Client, 
   })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) :Observable<UpdateClientDto>{
    return this.clientsService.update(+id, updateClientDto);
  }

  /** 
   *
   * @returns {Client} Returns a message to confirm the deleted client
   * @param {id} id The representative value to delete a client
   */
   @Delete(':id')
   @ApiOperation({ summary: 'Delete a client' })
   @ApiResponse({ 
     status: 200,
     description: 'Delete a Client, by its id',
     type: String, 
   })
  remove(@Param('id') id: string) : Observable<string> {
    return this.clientsService.remove(+id);
  }
  
  writeLog(level: string, startTime: any, request: any, statusCode: number, message: string) {
    let finishTime = Date.now();
    let elapsedTime = finishTime - startTime;

    this.logger.log({
      level: level,
      message: message,
      statusCode: statusCode,
      method: request['method'],
      url: request['url'],
      duration: elapsedTime,
    });
  }
}
