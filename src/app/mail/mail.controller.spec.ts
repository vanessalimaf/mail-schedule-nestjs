import { Test, TestingModule } from '@nestjs/testing';
import { SaveMailDto } from './dto/save-mail.dto';
import { MailController } from './mail.controller';
import { MailEntity } from './mail.entity';
import { MailService } from './mail.service';

describe('MailController', () => {
  let mailController: MailController;
  let mailService: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailController],
      providers: [
        {
          provide: MailService,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    mailController = module.get<MailController>(MailController);
    mailService = module.get<MailService>(MailService);
  });

  it('should be defined', () => {
    expect(mailController).toBeDefined();
    expect(mailService).toBeDefined();
  });

  describe('save', () => {
    it('should save a new email with success', async () => {
      const body: SaveMailDto = {
        destinationName: 'User',
        destinationAddress: 'teste@email.com',
        dueDate: '2022-05-01T12:00:00Z',
        subject: 'Testing email',
        body: '<p>Hello!</p>',
      };
      const mailEntityMock = { ...body } as unknown as MailEntity;

      jest.spyOn(mailService, 'save').mockResolvedValueOnce(mailEntityMock);
      const result = await mailController.save(body);

      expect(result).toBeDefined();
      expect(mailService.save).toBeCalledTimes(1);
    });
  });
});
