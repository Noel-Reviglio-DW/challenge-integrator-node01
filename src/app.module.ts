import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './clients/client.module';
import { ProjectModule } from './projects/project.module';
import { TalentModule } from './talents/talent.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), 
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
