import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from './hashPassword';
/*
{
  "email": "alex@gmail.com",
  "password": "123fGH"
}
*/

const userSelectFields = {
  id: true,
  email: true,
  password: true,
};

PrismaService;
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) { }

  async signup(email: string, password: string) {
    const hashedPassword = await hashPassword(password, process.env.CRYPT_SALT);
    const newUser = await this.prisma.user.create({
      data: { email, password: hashedPassword },
      select: userSelectFields,
    });
    return newUser;
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
      select: userSelectFields,
    });

    if (!user) {
      throw new NotFoundException('This user is not found');
    }

    const hashedPassword = await hashPassword(password, process.env.CRYPT_SALT);
    if (user?.password !== hashedPassword) {
      throw new UnauthorizedException('Wrong password!');
    }

    const payload = { userId: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.TOKEN_EXPIRE_TIME,
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_REFRESH_KEY,
      expiresIn: process.env.TOKEN_REFRESH_EXPIRE_TIME,
    });

    return {
      ...payload,
      accessToken,
      refreshToken,
    };
  }
}
