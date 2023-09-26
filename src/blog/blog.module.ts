import { Module } from '@nestjs/common';
import { BlogController } from './controllers/blog/blog.controller';
import { BlogService } from './services/blog/blog.service';
import { SERVICES } from 'src/utils/enum';

@Module({
  controllers: [BlogController],
  providers: [{
    provide: SERVICES.BLOG,
    useClass: BlogService
  }]
})
export class BlogModule {}
