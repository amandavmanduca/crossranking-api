import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { AuthType, TokenValidType } from './dto/auth.type';
import { AuthInput } from './dto/auth.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthType)
  public async login(@Args('data') data: AuthInput): Promise<AuthType> {
    const response = await this.authService.valiteAdmin(data);
    return {
      admin: response.admin,
      token: response.token,
    };
  }

  @Query(() => TokenValidType)
  public async isTokenValid(
    @Args({ name: 'token', type: () => String })
    token: string,
  ): Promise<TokenValidType> {
    return await this.authService.validateToken(token);
  }


  // @Mutation(() => Auth)
  // createAuth(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
  //   return this.authService.create(createAuthInput);
  // }

  // @Query(() => [Auth], { name: 'auth' })
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Query(() => Auth, { name: 'auth' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.authService.findOne(id);
  // }

  // @Mutation(() => Auth)
  // updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
  //   return this.authService.update(updateAuthInput.id, updateAuthInput);
  // }

  // @Mutation(() => Auth)
  // removeAuth(@Args('id', { type: () => Int }) id: number) {
  //   return this.authService.remove(id);
  // }
}
