import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminsService } from 'src/admins/admins.service';
import { Admin } from 'src/admins/entities/admin.entity';
import { AuthInput } from './dto/auth.input';
import { compareSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { TokenValidType } from './dto/auth.type';


@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminsService,
    private jwtService: JwtService,
  ) {}



  async valiteAdmin(data: AuthInput) {
    const admin: Admin = await this.adminService.findOne({
      where: [{ email: data.email }]
    });

    if(!admin) {
      throw new UnauthorizedException('Usuário não encontrado.')
    }

    if(!admin.password) {
      throw new UnauthorizedException('Usuário não encontrado.')
    }

    const isValidPassword = compareSync(data.password, admin.password);


    if (!isValidPassword) {
      throw new UnauthorizedException('Erro ao realizar login.');
    }

    const token = await this.jwtToken(admin);

    return {
      admin,
      token
    };
  }

  
  private async jwtToken(admin: Admin): Promise<string> {
    const payload = { name: admin.name, sub: admin.id };
    return this.jwtService.sign(payload);
  }

  async validateToken(token: string): Promise<TokenValidType> {
    const jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });
    try {
      jwtService.verify(token);
      const tokenContent = jwtService.decode(token);
      const admin: Admin = await this.adminService.findOne({
        where: { id: tokenContent.sub },
      });
      if (admin) {
        return { valid: true };
      }
      return { valid: false };
    } catch (error) {
      return { valid: false };
    }
  }
}
