import { Module } from '@nestjs/common'
import { AuthModule } from './common/auth/auth.module.js'
import { PermissionsModule } from './common/permissions/permissions.module.js'

@Module({
  imports: [AuthModule, PermissionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
