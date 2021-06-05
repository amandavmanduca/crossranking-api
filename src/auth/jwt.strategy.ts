
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminsService } from 'src/admins/admins.service';
import { Admin } from 'src/admins/entities/admin.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private adminService: AdminsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: Admin['id']; name: string }): Promise<Admin> {
    const admin = await this.adminService.findOne({
      where: {
        id: payload.sub,
      },
    });
    if (!admin) {
      throw new UnauthorizedException('Usuário não autorizado');
    }
    return admin;
  }
}
