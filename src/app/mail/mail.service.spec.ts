import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveMailDto } from './dto/save-mail.dto';
import { MailEntity } from './mail.entity';
import { MailService } from './mail.service';

describe('MailService', () => {
  let mailService: MailService;
  let mailRepository: Repository<MailEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: getRepositoryToken(MailEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    mailService = module.get<MailService>(MailService);
    mailRepository = module.get<Repository<MailEntity>>(getRepositoryToken(MailEntity));
  });

  it('should be defined', () => {
    expect(mailService).toBeDefined();
    expect(mailRepository).toBeDefined();
  });

  describe('save', () => {
    it('should save a new mail with success', async () => {
      const data: SaveMailDto = {
        destinationName: 'User',
        destinationAdress: 'teste@email.com',
        dueDate: '2022-05-01T12:00:00Z',
        subject: 'Testing email',
        body: '<p>Hello!</p>',
      };
      const mailEntityMock = {
        destinationName: 'User',
        destinationAdress: 'teste@email.com',
        dueDate: '2022-05-01T12:00:00Z',
        subject: 'Testing email',
        body: '<p>Hello!</p>',
      } as unknown as MailEntity;

      jest.spyOn(mailRepository, 'create').mockReturnValueOnce(mailEntityMock);
      jest.spyOn(mailRepository, 'save').mockResolvedValueOnce(mailEntityMock);

      const result = await mailService.save(data);
      expect(result).toBeDefined();
      expect(mailRepository.create).toBeCalledTimes(1);
      expect(mailRepository.save).toBeCalledTimes(1);
    });
  });
});
