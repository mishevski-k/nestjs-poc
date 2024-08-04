import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { DatabaseTodoRepository } from './todo.repository';
import { TypeOrmConfigModule } from '../config/typeorm/typeOrmConfigModule';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Todo])],
  providers: [DatabaseTodoRepository],
  exports: [DatabaseTodoRepository],
})
export class RepositoriesModule {}
