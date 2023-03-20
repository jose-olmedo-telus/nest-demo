import {
  Injectable,
  NotFoundException,
  GoneException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Task, TaskStatus } from './tasks-model';
import { generator } from 'rand-token';
import CreateTaskDto from './dto/tasks-create.dto';
import UpdateTaskDto from './dto/tasks-update.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks = () => {
    return [...this.tasks];
  };

  createTask = (taskToCreate: CreateTaskDto) => {
    const token = generator({ chars: 'numeric' }).generate(4);
    const task: Task = {
      id: token,
      //title: taskToCreate.title,
      //description: taskToCreate.description,
      status: 'NEW',
      ...taskToCreate,
    };
    this.tasks.push(task);
    return { ...task };
  };

  getTaskById = (id: string): Task => {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (taskFound === undefined) {
      throw new NotFoundException('Task not found');
    }
    return { ...taskFound };
  };
  deleteTaskByid = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };
  updateTaskByid = (id: string, dto: UpdateTaskDto): Task => {
    const taskToUpdate: Task = this.getTaskById(id);
    taskToUpdate.status = dto.status;
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskToUpdate.id) {
        return taskToUpdate;
      }
      return task;
    });
    return taskToUpdate;
  };
}
