import { HttpService } from '@nestjs/axios';
import { SendEmailInterface } from '../interface/send-email.interface';
export declare class SendgridService {
    private readonly httpService;
    private readonly SENDGRID_API_URL;
    private readonly SENDGRID_API_KEY;
    constructor(httpService: HttpService);
    sendEmail(data: SendEmailInterface): Promise<boolean>;
}
