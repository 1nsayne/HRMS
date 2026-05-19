import { Module } from '@nestjs/common'
import { OidcAuthGuard } from './oidc-auth.guard.js'

@Module({
  providers: [OidcAuthGuard],
  exports: [OidcAuthGuard],
})
export class AuthModule {}
