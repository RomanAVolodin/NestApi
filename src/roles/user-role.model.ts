import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./roles.model";
import { User } from "../users/user.model";


@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

  @Column({type: DataType.UUID, unique: true, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @ForeignKey(() => Role)
  @Column({type: DataType.UUID,  allowNull: false})
  roleId: string;

  @ForeignKey(() => User)
  @Column({type: DataType.UUID, allowNull: false})
  userId: string;

}