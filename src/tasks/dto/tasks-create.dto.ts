import { Task, TaskStatus } from '../tasks-model';

class CreateTaskDto implements Pick<Task, 'title' | 'description'> {
  title: String;
  description: String;
}
export default CreateTaskDto;
