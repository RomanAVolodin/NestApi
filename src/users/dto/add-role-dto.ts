import { IsString, IsUUID } from "class-validator";

export class AddRoleDto {
  @IsString({message: 'Должно быть строкой'})
  readonly value: string

  @IsUUID(4, {message: 'Должно быть UUID'})
  readonly id: string
}