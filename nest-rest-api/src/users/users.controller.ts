import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    /**
     * GET /users
     * GET /users/:id
     * POST /users
     * PATCH /users/:id
     * DELETE /users/:id
     * 
     */

    constructor(private readonly usersService: UsersService){}

    @Get() // GET /users or /users/?role=value&age=24
    findAll(@Query('role') roles?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.usersService.findAll(roles);
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: number){
        return this.usersService.findOne(+id);
    }

    @Post() // POST /users
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: number, @Body() user: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        return this.usersService.update(+id, user);
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: number){
        return this.usersService.delete(+id); 
    }

}
