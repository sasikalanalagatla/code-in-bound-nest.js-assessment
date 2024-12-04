import { Injectable, HttpStatus, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) 
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);
      return {
        msg: "Product added successfully",
        status: HttpStatus.CREATED,
        data: product,
      };
    } catch (error) {
      throw new BadRequestException('Error adding product');
    }
  }

  async findAll() {
    try {
      const [result, total] = await this.productRepository.findAndCount();
      if (!result || result.length === 0) {
        throw new NotFoundException('No products found');
      }
      return {
        status: HttpStatus.OK,
        message: 'Data fetched successfully',
        totalData: total,
        result: result,
      };
    } catch (error) {
      throw new BadRequestException('Error fetching products');
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      return {
        status: HttpStatus.OK,
        message: 'Product fetched successfully',
        result: product,
      };
    } catch (error) {
      throw new BadRequestException('Error fetching product');
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      await this.productRepository.update(id, updateProductDto);
      return {
        status: HttpStatus.OK,
        message: 'Product updated successfully',
      };
    } catch (error) {
      throw new BadRequestException('Error updating product');
    }
  }

  async remove(id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      await this.productRepository.delete(id);
      return {
        status: HttpStatus.OK,
        message: 'Product deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException('Error deleting product');
    }
  }
}
