import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Deal } from '@prisma/client';

//import { Deal } from '../types';
/*import { Deals } from '../../../client/src/components/Deals/Deals';

const deals: Deal[] = [
  {
    name: 'The Marina Torch',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: 'deal1.jpg',
  },
  {
    name: 'HHHR Tower',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: 'deal2.jpg',
  },
  {
    name: 'Ocean peaks',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: 'deal3.jpg',
  },
  {
    name: 'Al Yaqoub Tower',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: 'deal4.jpg',
  },
];
*/

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Deal[]> {
    const deals = await this.prisma.deal.findMany();
    return deals;
  }
}
