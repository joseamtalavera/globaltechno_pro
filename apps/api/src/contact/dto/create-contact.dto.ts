import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Equals, IsBoolean, IsEmail, IsOptional, IsString, Length } from 'class-validator';

const normalize = ({ value }: { value: unknown }): unknown =>
  typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value;

export class CreateContactDto {
  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  @Length(2, 120)
  @Transform(normalize)
  name!: string;

  @ApiPropertyOptional({ example: 'Globaltechno OÜ' })
  @IsOptional()
  @IsString()
  @Length(1, 120)
  @Transform(normalize)
  company?: string;

  @ApiProperty({ example: 'jane@example.com' })
  @IsEmail()
  @Transform(normalize)
  email!: string;

  @ApiProperty({
    example: 'We need advisory on zero-trust architecture for distributed systems.'
  })
  @IsString()
  @Length(20, 2000)
  @Transform(normalize)
  message!: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @Equals(true, { message: 'Consent must be true' })
  consent!: true;
}
