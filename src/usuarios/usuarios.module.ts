import { Module } from '@nestjs/common';
import { UsersService } from './usuarios.service';
import { UsersController } from './usuarios.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsuariosModule {}
