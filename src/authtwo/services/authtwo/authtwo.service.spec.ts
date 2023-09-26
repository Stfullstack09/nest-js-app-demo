import { Test, TestingModule } from '@nestjs/testing';
import { AuthtwoService } from './authtwo.service';

describe('AuthtwoService', () => {
  let service: AuthtwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthtwoService],
    }).compile();

    service = module.get<AuthtwoService>(AuthtwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
