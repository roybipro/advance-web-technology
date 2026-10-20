import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const saved = await this.employeeRepository.save(
      this.employeeRepository.create(dto),
    );
    return this.findOne(saved.id);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ order: { id: "ASC" } });
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  async update(id: number, dto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOne(id);
    Object.assign(employee, dto);
    await this.employeeRepository.save(employee);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number; deleted: boolean }> {
    const employee = await this.findOne(id);
    await this.employeeRepository.remove(employee);
    return { id, deleted: true };
  }
}
