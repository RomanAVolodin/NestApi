import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/user.model";


interface PostCreationAttributes {
  title: string
  content: string
  userId: string
  image: string
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttributes> {

  @ApiProperty({example: '88ba017c-fe9d-42df-8e72-7648a085a5ee', description: 'Уникальный идентификатор'})
  @Column({type: DataType.UUID, unique: true, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @ApiProperty({example: 'Над пропастью во ржи', description: 'Название'})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @ApiProperty({example: 'Текст поста', description: 'Текст поста'})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @Column({type: DataType.STRING})
  image: string

  @ForeignKey(() => User)
  @Column({type: DataType.UUID})
  userId: string;

  @BelongsTo(() => User)
  author: User
}