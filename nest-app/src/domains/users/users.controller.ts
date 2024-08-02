import { Controller, Get} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
