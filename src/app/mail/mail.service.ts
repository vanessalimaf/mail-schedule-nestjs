import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveMailDto } from './dto/save-mail.dto';
import { MailEntity } from './mail.entity';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(MailEntity)
    private readonly mailRepository: Repository<MailEntity>,
  ) {}

  async save(data: SaveMailDto): Promise<MailEntity> {
    const dbEntity = this.mailRepository.create(data);
    return this.mailRepository.save(dbEntity);
  }
}
