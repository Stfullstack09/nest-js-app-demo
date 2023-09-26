import { Controller, Inject } from '@nestjs/common';
import { AuthtwoService } from 'src/authtwo/services/authtwo/authtwo.service';
import { SERVICES } from 'src/utils/enum';

@Controller('authtwo')
export class AuthtwoController {
    constructor(@Inject(SERVICES.AUTH_TWO) private readonly authService: AuthtwoService) {}
    
}
