import { Repository } from 'typeorm';
import { SaveMailDto } from './dto/save-mail.dto';
import { MailEntity } from './mail.entity';
export declare class MailService {
    private readonly mailRepository;
    constructor(mailRepository: Repository<MailEntity>);
    save(data: SaveMailDto): Promise<MailEntity>;
}
