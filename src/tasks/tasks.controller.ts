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
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import CreateTaskDto from './dto/tasks-create.dto';
import UpdateTaskDto from './dto/tasks-update.dto';

@ApiTags('Modulo Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @ApiOperation({
    summary: 'Obtener todas las tareas',
  })
  @Get('/')
  getTasks(@Response() res): Task[] {
    res.set('hellow', 'world');
    res.send(this.taskService.getAllTasks());
    return this.taskService.getAllTasks();
  }

  @ApiBody({ required: true, type: CreateTaskDto })
  @ApiOperation({
    summary: 'Crear una nueva tarea',
  })
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
