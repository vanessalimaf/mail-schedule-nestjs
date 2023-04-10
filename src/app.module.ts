import { Module } from '@nestjs/common';
import { SendgridModule } from './app/sendgrid/service/sendgrid.module';

@Module({
  imports: [SendgridModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
