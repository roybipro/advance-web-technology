import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(dto: CreateProductDto): Promise<Product> {
    return this.productRepository.save(this.productRepository.create(dto));
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find({ order: { id: "ASC" } });
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, dto);
    await this.productRepository.save(product);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number; deleted: boolean }> {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return { id, deleted: true };
  }
}
