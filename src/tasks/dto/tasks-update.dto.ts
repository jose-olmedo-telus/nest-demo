import { Task, TaskStatus } from '../tasks-model';

class UpdateTaskDto implements Pick<Task, 'status'> {
  status: TaskStatus;
}
export default UpdateTaskDto;
