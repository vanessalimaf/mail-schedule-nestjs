import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { SendEmailInterface } from '../interface/send-email.interface';
import { SendgridService } from './sendgrid.service';

describe('SendgridService', () => {
  let sendGridService: SendgridService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendgridService,
        {
          provide: HttpService,
          useValue: {
            post: jest.fn(),
          },
        },
      ],
    }).compile();

    sendGridService = module.get<SendgridService>(SendgridService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(sendGridService).toBeDefined();
    expect(httpService).toBeDefined();
  });

  describe('sendEmail', () => {
    it('should send an email with success', async () => {
      //arrange
      const data: SendEmailInterface = {
        personalizations: [
          {
            to: [
              {
                name: 'Vanessa',
                email: 'teste@teste.com',
              },
            ],
          },
        ],
        from: {
          email: 'destinatario@teste.com',
          name: 'Destinatário',
        },
        reply_to: {
          email: 'teste@teste.com',
          name: 'Vanessa',
        },
        subject: 'Conta de Luz',
        content: [
          {
            type: 'text/html',
            value: '<p>Conta de Luz Março de 2023</p>',
          },
        ],
      };
      jest.spyOn(httpService, 'post').mockReturnValueOnce(
        of({
          status: 202,
          statusText: 'ACCEPTED',
          config: {},
          headers: {},
          data: '',
        }),
      );
      //act
      const result = await sendGridService.sendEmail(data);
      //assert
      expect(result).toBeTruthy();
      expect(httpService.post).toBeCalledTimes(1);
    });
  });
});
