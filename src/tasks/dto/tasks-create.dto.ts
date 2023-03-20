import { Task, TaskStatus } from '../tasks-model';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsLowercase } from 'class-validator';

class CreateTaskDto implements Pick<Task, 'title' | 'description'> {
  @ApiProperty({
    nullable: false,
    example: 'Sacar la basura',
    description: 'Propiedad del titulo de una task',
  })
  @IsString()
  title: string;

  @ApiProperty({
    nullable: false,
    example: 'Lleva acumulandose desde el martes',
    description: 'Propiedad del description de una task',
  })
  @IsString()
  @IsOptional()
  @IsLowercase()
  description: string;
}
export default CreateTaskDto;
