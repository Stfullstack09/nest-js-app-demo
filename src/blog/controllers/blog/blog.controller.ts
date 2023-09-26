import { Controller, Inject } from '@nestjs/common';
import { BlogService } from 'src/blog/services/blog/blog.service';
import { SERVICES } from 'src/utils/enum';

@Controller('blog')
export class BlogController {
    constructor(@Inject(SERVICES.BLOG) private readonly blogService: BlogService) {}
}    