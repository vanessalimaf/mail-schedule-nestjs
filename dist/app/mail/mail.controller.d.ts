import { SaveMailDto } from './dto/save-mail.dto';
import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    save(body: SaveMailDto): Promise<import("./mail.entity").MailEntity>;
}
