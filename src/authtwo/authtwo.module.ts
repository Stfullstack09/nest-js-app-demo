import { Module } from '@nestjs/common';
import { AuthtwoController } from './controllers/authtwo/authtwo.controller';
import { AuthtwoService } from './services/authtwo/authtwo.service';
import { SERVICES } from 'src/utils/enum';

@Module({
  controllers: [AuthtwoController],
  providers: [{
    provide: SERVICES.AUTH_TWO,
    useClass : AuthtwoService
  }]
})
export class AuthtwoModule {}
