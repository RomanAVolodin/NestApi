import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/user.model";
import { UserRoles } from "./user-role.model";


interface RoleCreationAttributes {
  value: string;
  description: string;
}


@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttributes> {

  @ApiProperty({example: '88ba017c-fe9d-42df-8e72-7648a085a5ee', description: 'Уникальный идентификатор'})
  @Column({type: DataType.UUID, unique: true, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @ApiProperty({example: 'ADMIN', description: 'Значение роли'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: 'Роль для добавления задач', description: 'Описание роли'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}