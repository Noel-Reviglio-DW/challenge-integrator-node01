import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {

    @ApiProperty({ example:'54759eb3c090d83494e2d804' })
    id: string;

    @ApiProperty({ example:'Noel' })
    firstName: string;

    @ApiProperty({ example:'Reviglio' })
    lastName: string;

    @ApiProperty({ example:'noel@reviglio.com' })
    email: string;

    @ApiProperty({ example:'image.jpg' })
    image: string;

    @ApiProperty({ example:1234567890 })
    phoneNumber: number;

    @ApiProperty({ example:true })
    active: Boolean;
}
