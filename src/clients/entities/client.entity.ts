import { ApiProperty } from '@nestjs/swagger';

export class Client {
    @ApiProperty({ example:'54759eb3c090d83494e2d804' })
    readonly id: string;

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
