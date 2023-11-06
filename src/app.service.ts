import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { coffeeentity } from './app.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(coffeeentity) private readonly coffeeRepository: Repository<coffeeentity>,
  ) {}


  getHello(): string {
    return 'Hello World!';
  }


  addcoffee(coffeeentitydto: coffeeentity): Promise<coffeeentity> {
    const user: coffeeentity = new coffeeentity();
    user.name = coffeeentitydto.name
    user.size = coffeeentitydto.size;
    user.flavour = coffeeentitydto.flavour;
    user.price = coffeeentitydto.price;
    user.strength = coffeeentitydto.strength;
    user.imageurl = coffeeentitydto.imageurl;
    return this.coffeeRepository.save(user);
  }

  findAll(): Promise<coffeeentity[]> {
    return this.coffeeRepository.find();
  }

  async viewCoffeeById(id: number): Promise<coffeeentity> {
    return this.coffeeRepository.findOne({ where: { id } });
  }


  async delete(id: number): Promise<coffeeentity[]> {
    const deletedRecords = await this.coffeeRepository.delete(id);
    return deletedRecords.raw;
  }


  deletebyid(id: number): Promise<any> {
    return this.coffeeRepository
    .createQueryBuilder()
    .delete()
    .from(coffeeentity)
    .where('id = :id', { id })
    .execute()
  }



}
