export interface Task {
  id: String;
  title: String;
  description: String;
  status: TaskStatus;
}
export type TaskStatus = 'NEW' | 'IN_PROGRESS' | 'DONE';
