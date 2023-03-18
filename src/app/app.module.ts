import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { SuperadminComponent } from './pages/superadmin/superadmin/superadmin.component';
import { UserComponent } from './pages/user/user/user.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { AdminGuard } from './service/admin.guard';
import { authInterceptorProviders } from './service/auth.interceptor';
import { SuperadminGuard } from './service/superadmin.guard';
import { UserGuard } from './service/user.guard';
// import { ProfileComponent } from './pages/profile/profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { HealthComponent } from './pages/admin/health/health.component';
import { HealthDashboardCotsComponent } from './pages/admin/health-dashboard-cots/health-dashboard-cots.component';
import { HealthDashboardInfraComponent } from './pages/admin/health-dashboard-infra/health-dashboard-infra.component';
import { HealthDashboardPortalComponent } from './pages/admin/health-dashboard-portal/health-dashboard-portal.component';
import { HealthDashboardAppOemComponent } from './pages/admin/health-dashboard-app-oem/health-dashboard-app-oem.component';
import { UpComingRenewalComponent } from './pages/admin/up-coming-renewal/up-coming-renewal.component';
import { InsertCotsComponent } from './pages/admin/health-dashboard-cots/insert-cots/insert-cots.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UpdateCotsComponent } from './pages/admin/health-dashboard-cots/update-cots/update-cots.component';
import { CotsService } from './service/cots.service';
import { InsertInfraComponent } from './pages/admin/health-dashboard-infra/insert-infra/insert-infra.component';
import { UpdateInfraComponent } from './pages/admin/health-dashboard-infra/update-infra/update-infra.component';
import { InsertPortalComponent } from './pages/admin/health-dashboard-portal/insert-portal/insert-portal.component';
import { UpdatePortalComponent } from './pages/admin/health-dashboard-portal/update-portal/update-portal.component';
import { InsertOemComponent } from './pages/admin/health-dashboard-app-oem/insert-oem/insert-oem.component';
import { UpdateOemComponent } from './pages/admin/health-dashboard-app-oem/update-oem/update-oem.component';
import { InsertRenewalComponent } from './pages/admin/up-coming-renewal/insert-renewal/insert-renewal.component';
import { UpdateRenewalComponent } from './pages/admin/up-coming-renewal/update-renewal/update-renewal.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { SuperAdminProfileComponent } from './pages/superadmin/super-admin-profile/super-admin-profile.component';
import { SuperAdminHealthComponent } from './pages/superadmin/super-admin-health/super-admin-health.component';
import { SuperAdminHealthDashboardAppOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/super-admin-health-dashboard-app-oem.component';
import { SuperAdminHealthDashboardCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/super-admin-health-dashboard-cots.component';
import { SuperAdminHealthDashboardInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/super-admin-health-dashboard-infra.component';
import { SuperAdminHealthDashboardPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/super-admin-health-dashboard-portal.component';
import { SuperAdminSidebarComponent } from './pages/superadmin/super-admin-sidebar/super-admin-sidebar.component';
import { SuperAdminUpComingRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/super-admin-up-coming-renewal.component';
import { InsertSuperAdminOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/insert-super-admin-oem/insert-super-admin-oem.component';
import { UpdateSuperAdminOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/update-super-admin-oem/update-super-admin-oem.component';
import { DeleteSuperAdminOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/delete-super-admin-oem/delete-super-admin-oem.component';
import { DeleteSuperAdminCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/delete-super-admin-cots/delete-super-admin-cots.component';
import { InsertSuperAdminCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/insert-super-admin-cots/insert-super-admin-cots.component';
import { UpdateSuperAdminCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/update-super-admin-cots/update-super-admin-cots.component';
import { InsertSuperAdminInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/insert-super-admin-infra/insert-super-admin-infra.component';
import { UpdateSuperAdminInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/update-super-admin-infra/update-super-admin-infra.component';
import { DeleteSuperAdminInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/delete-super-admin-infra/delete-super-admin-infra.component';
import { InsertSuperAdminPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/insert-super-admin-portal/insert-super-admin-portal.component';
import { UpdateSuperAdminPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/update-super-admin-portal/update-super-admin-portal.component';
import { DeleteSuperAdminPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/delete-super-admin-portal/delete-super-admin-portal.component';
import { InsertSuperAdminRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/insert-super-admin-renewal/insert-super-admin-renewal.component';
import { UpdateSuperAdminRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/update-super-admin-renewal/update-super-admin-renewal.component';
import { DeleteSuperAdminRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/delete-super-admin-renewal/delete-super-admin-renewal.component';
import { UserHealthComponent } from './pages/user/user-health/user-health.component';
import { UserHealthDashboardAppOemComponent } from './pages/user/user-health-dashboard-app-oem/user-health-dashboard-app-oem.component';
import { UserHealthDashboardCotsComponent } from './pages/user/user-health-dashboard-cots/user-health-dashboard-cots.component';
import { UserHealthDashboardInfraComponent } from './pages/user/user-health-dashboard-infra/user-health-dashboard-infra.component';
import { UserHealthDashboardPortalComponent } from './pages/user/user-health-dashboard-portal/user-health-dashboard-portal.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserUpComingRenewalComponent } from './pages/user/user-up-coming-renewal/user-up-coming-renewal.component';
import {DatePipe} from '@angular/common';   
// import { authInterceptorProviders } from './service/auth.Interceptor';
// import {Swal} 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    SuperadminComponent,
    UserComponent,
    AdminComponent,
    // ProfileComponent,
    SidebarComponent,
    HealthComponent,
    HealthDashboardCotsComponent,
    HealthDashboardInfraComponent,
    HealthDashboardPortalComponent,
    HealthDashboardAppOemComponent,
    UpComingRenewalComponent,
    InsertCotsComponent,
    UpdateCotsComponent,
    InsertInfraComponent,
    UpdateInfraComponent,
    InsertPortalComponent,
    UpdatePortalComponent,
    InsertOemComponent,
    UpdateOemComponent,
    InsertRenewalComponent,
    UpdateRenewalComponent,
    AdminProfileComponent,
    SuperAdminProfileComponent,
    SuperAdminHealthComponent,
    SuperAdminHealthDashboardAppOemComponent,
    SuperAdminHealthDashboardCotsComponent,
    SuperAdminHealthDashboardInfraComponent,
    SuperAdminHealthDashboardPortalComponent,
    SuperAdminSidebarComponent,
    SuperAdminUpComingRenewalComponent,
    InsertSuperAdminOemComponent,
    UpdateSuperAdminOemComponent,
    DeleteSuperAdminOemComponent,
    DeleteSuperAdminCotsComponent,
    InsertSuperAdminCotsComponent,
    UpdateSuperAdminCotsComponent,
    InsertSuperAdminInfraComponent,
    UpdateSuperAdminInfraComponent,
    DeleteSuperAdminInfraComponent,
    InsertSuperAdminPortalComponent,
    UpdateSuperAdminPortalComponent,
    DeleteSuperAdminPortalComponent,
    InsertSuperAdminRenewalComponent,
    UpdateSuperAdminRenewalComponent,
    DeleteSuperAdminRenewalComponent,
    UserHealthComponent,
    UserHealthDashboardAppOemComponent,
    UserHealthDashboardCotsComponent,
    UserHealthDashboardInfraComponent,
    UserHealthDashboardPortalComponent,
    UserProfileComponent,
    UserSidebarComponent,
    UserUpComingRenewalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    
  ],
  providers: [DatePipe,AdminGuard,SuperadminGuard,UserGuard,authInterceptorProviders,LoginComponent,HealthDashboardCotsComponent],
  // authInterceptorProviders
  bootstrap: [AppComponent]
})
export class AppModule { }
