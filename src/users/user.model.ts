import { Column, DataType, Model, Table } from "sequelize-typescript";


interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {

  @Column({type: DataType.UUID, unique: true, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}