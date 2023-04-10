import { SendgridService } from './service/sendgrid.service';
export declare class SendgridController {
    private readonly sendgridService;
    constructor(sendgridService: SendgridService);
    sendEmail(body: any): Promise<boolean>;
}
