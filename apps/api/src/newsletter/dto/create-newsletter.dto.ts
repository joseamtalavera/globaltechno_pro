import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Equals, IsBoolean, IsEmail } from 'class-validator';

const normalize = ({ value }: { value: unknown }): unknown =>
  typeof value === 'string' ? value.trim().toLowerCase() : value;

export class CreateNewsletterDto {
  @ApiProperty({ example: 'subscriber@example.com' })
  @IsEmail()
  @Transform(normalize)
  email!: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @Equals(true, { message: 'Consent must be true' })
  consent!: true;
}
