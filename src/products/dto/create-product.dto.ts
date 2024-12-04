import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(4, { message: 'Title should have at least 4 characters' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @IsString()
  @IsNotEmpty({ message: 'Subcategory is required' })
  subcategory: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'Status is required' })
  status: string;
}
