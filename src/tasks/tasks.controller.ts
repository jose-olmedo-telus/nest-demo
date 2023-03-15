import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  HttpStatus,
  HttpCode,
  Response,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks-model';
import CreateTaskDto from './dto/tasks-create.dto';
import UpdateTaskDto from './dto/tasks-update.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('/')
  getTasks(@Response() res): Task[] {
    res.set('hellow', 'world');
    res.send(this.taskService.getAllTasks());
    return this.taskService.getAllTasks();
  }

  @Post('/')
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    console.log(id);
    return this.taskService.getTaskById(id);
  }
  @Delete(':id')
  deleteTaskByid(@Param('id') id: string) {
    this.taskService.deleteTaskByid(id);
  }
  @Patch(':id')
  updateTaskByid(
    @Param('id') id: string,
    @Body() updateDto: UpdateTaskDto,
  ): Task {
    return this.taskService.updateTaskByid(id, updateDto);
  }
}
