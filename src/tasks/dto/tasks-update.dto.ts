import { Task, TaskStatus } from '../tasks-model';
import { IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateTaskDto implements Pick<Task, 'status'> {
  @IsIn(['NEW', 'IN_PROGRESS', 'DONE'])
  @ApiProperty({
    nullable: false,
    example: 'DONE',
    description: 'Propiedad a actualizar de task',
  })
  status: TaskStatus;
}
export default UpdateTaskDto;
