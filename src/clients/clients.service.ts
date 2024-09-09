import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll() {
    return `Estamos probando e metodo get para clients....aqui se devuelve todos los clientes`;
  }

  findOne(id: number) {
    return `este metedo get + el parametro #${id} devolvere un cliente con codigo #100`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
