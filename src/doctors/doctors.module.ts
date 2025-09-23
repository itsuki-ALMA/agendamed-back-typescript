// src/doctors/doctors.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DoctorRegister } from './entities/doctor-register.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorRegister]), UsuariosModule],
  providers: [DoctorsService],
  controllers: [DoctorsController],
})
export class DoctorsModule {}
