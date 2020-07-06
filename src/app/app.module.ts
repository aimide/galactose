import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { DeactivateGuard } from './core/guards/deactivate.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { AppInitService } from './core/services/app-init.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { Page404Component } from './core/error/page404/page404.component';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';
import { MemberLayoutComponent } from './core/layouts/member-layout/member-layout.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoadingComponent } from './core/components/loading/loading.component';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    AdminLayoutComponent,
    MemberLayoutComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
