import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { coffeeentity } from './app.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'dpg-cjpdq6m1208c739urjd0-a.oregon-postgres.render.com', 
    port: 5432, 
    username: 'projectsdb_9pg7_user',
    password: 'eQOsaclB6IcWOJePlPOE9sy45llfxY4e', 
    database: 'projectsdb_9pg7', 
    entities: [coffeeentity], 
    synchronize: false, 
    logging: true,
    ssl: true,
    autoLoadEntities: true,
  }),
  TypeOrmModule.forFeature([coffeeentity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
