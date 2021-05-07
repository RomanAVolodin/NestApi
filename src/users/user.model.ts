import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-role.model";
import { Post } from "../posts/post.model";


interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {

  @ApiProperty({example: '88ba017c-fe9d-42df-8e72-7648a085a5ee', description: 'Уникальный идентификатор'})
  @Column({type: DataType.UUID, unique: true, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @ApiProperty({example: 'test@mail.ru', description: 'Адрес почты'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '123456', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'Забанен или нет'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'Много ругани в текстах', description: 'Причина блокировка'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}