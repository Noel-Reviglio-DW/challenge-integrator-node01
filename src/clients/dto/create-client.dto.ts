import { ApiProperty } from '@nestjs/swagger'; 

export class CreateClientDto {
    
    @ApiProperty({ example:'Noel' })
    readonly firstName: string;
    
    @ApiProperty({ example:'Reviglio' })
    readonly lastName: string;
    
    @ApiProperty({ example:'noel@reviglio.com' })
    readonly email: string;
    
    @ApiProperty({ example:'image.jpg' })
    readonly image: string;
    
    @ApiProperty({ example:1234567890 })
    readonly phoneNumber: number;
    
    @ApiProperty({ example:true })
    readonly active: Boolean;
}
