import { Task, TaskStatus } from '../tasks-model';

class CreateTaskDto implements Pick<Task, 'title' | 'description'> {
  title: string;
  description: string;
}
export default CreateTaskDto;
