import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'test@mail.ru', description: 'Адрес почты'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Адрес почты не корректен'})
  readonly email: string;

  @ApiProperty({example: '123456', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
  readonly password: string;
}