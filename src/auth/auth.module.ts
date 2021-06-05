import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AdminsModule } from 'src/admins/admins.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    AdminsModule,
    JwtModule.registerAsync({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '20h',
        },
      }),
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy]
})
export class AuthModule {}
