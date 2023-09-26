import { Test, TestingModule } from '@nestjs/testing';
import { AuthtwoController } from './authtwo.controller';

describe('AuthtwoController', () => {
  let controller: AuthtwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthtwoController],
    }).compile();

    controller = module.get<AuthtwoController>(AuthtwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
