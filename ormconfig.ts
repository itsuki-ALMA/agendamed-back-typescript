import { DataSource } from 'typeorm';
import { User } from './src/usuarios/entities/usuario.entity';
import { DoctorRegister } from './src/doctors/entities/doctor-register.entity';
import { Agenda } from './src/entity/agendamento.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'nestdb',
  entities: [User, DoctorRegister, Agenda],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
