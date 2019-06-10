import { CommonService } from './services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { FileService } from './services/file.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [],
  providers: [
    JwtService,
    UserService,
    AuthGuard,
    FileService,
    CommonService
  ]
})
export class CoreModule { }
