import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { HealthDashboardAppOemComponent } from './pages/admin/health-dashboard-app-oem/health-dashboard-app-oem.component';
import { HealthDashboardCotsComponent } from './pages/admin/health-dashboard-cots/health-dashboard-cots.component';
import { HealthDashboardInfraComponent } from './pages/admin/health-dashboard-infra/health-dashboard-infra.component';
import { HealthDashboardPortalComponent } from './pages/admin/health-dashboard-portal/health-dashboard-portal.component';
import { HealthComponent } from './pages/admin/health/health.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
// import { ProfileComponent } from './pages/profile/profile/profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SuperadminComponent } from './pages/superadmin/superadmin/superadmin.component';
import { UserComponent } from './pages/user/user/user.component';
import { AdminGuard } from './service/admin.guard';
import { SuperadminGuard } from './service/superadmin.guard';
import { UserGuard } from './service/user.guard';
import { UpComingRenewalComponent } from './pages/admin/up-coming-renewal/up-coming-renewal.component'
import { InsertCotsComponent } from './pages/admin/health-dashboard-cots/insert-cots/insert-cots.component';
import { UpdateCotsComponent } from './pages/admin/health-dashboard-cots/update-cots/update-cots.component';
import { UpdateInfraComponent } from './pages/admin/health-dashboard-infra/update-infra/update-infra.component';
import { InsertInfraComponent } from './pages/admin/health-dashboard-infra/insert-infra/insert-infra.component';
import { InsertPortalComponent } from './pages/admin/health-dashboard-portal/insert-portal/insert-portal.component';
import { UpdatePortalComponent } from './pages/admin/health-dashboard-portal/update-portal/update-portal.component';
import { UpdateOemComponent } from './pages/admin/health-dashboard-app-oem/update-oem/update-oem.component';
import { InsertOemComponent } from './pages/admin/health-dashboard-app-oem/insert-oem/insert-oem.component';
import { UpdateRenewalComponent } from './pages/admin/up-coming-renewal/update-renewal/update-renewal.component';
import { InsertRenewalComponent } from './pages/admin/up-coming-renewal/insert-renewal/insert-renewal.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { SuperAdminHealthComponent } from './pages/superadmin/super-admin-health/super-admin-health.component';
import { SuperAdminProfileComponent } from './pages/superadmin/super-admin-profile/super-admin-profile.component';
import { SuperAdminHealthDashboardAppOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/super-admin-health-dashboard-app-oem.component';
import { SuperAdminHealthDashboardCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/super-admin-health-dashboard-cots.component';
import { SuperAdminHealthDashboardInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/super-admin-health-dashboard-infra.component';
import { SuperAdminHealthDashboardPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/super-admin-health-dashboard-portal.component';
import { SuperAdminSidebarComponent } from './pages/superadmin/super-admin-sidebar/super-admin-sidebar.component';
import { SuperAdminUpComingRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/super-admin-up-coming-renewal.component';
import { InsertSuperAdminOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/insert-super-admin-oem/insert-super-admin-oem.component';
import { UpdateSuperAdminOemComponent } from './pages/superadmin/super-admin-health-dashboard-app-oem/update-super-admin-oem/update-super-admin-oem.component';
import { UpdateSuperAdminCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/update-super-admin-cots/update-super-admin-cots.component';
import { InsertSuperAdminInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/insert-super-admin-infra/insert-super-admin-infra.component';
import { InsertSuperAdminPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/insert-super-admin-portal/insert-super-admin-portal.component';
import { InsertSuperAdminRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/insert-super-admin-renewal/insert-super-admin-renewal.component';
import { UpdateSuperAdminInfraComponent } from './pages/superadmin/super-admin-health-dashboard-infra/update-super-admin-infra/update-super-admin-infra.component';
import { UpdateSuperAdminPortalComponent } from './pages/superadmin/super-admin-health-dashboard-portal/update-super-admin-portal/update-super-admin-portal.component';
import { UpdateSuperAdminRenewalComponent } from './pages/superadmin/super-admin-up-coming-renewal/update-super-admin-renewal/update-super-admin-renewal.component';
import { InsertSuperAdminCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/insert-super-admin-cots/insert-super-admin-cots.component';
import { DeleteSuperAdminCotsComponent } from './pages/superadmin/super-admin-health-dashboard-cots/delete-super-admin-cots/delete-super-admin-cots.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserHealthComponent } from './pages/user/user-health/user-health.component';
import { UserHealthDashboardAppOemComponent } from './pages/user/user-health-dashboard-app-oem/user-health-dashboard-app-oem.component';
import { UserHealthDashboardCotsComponent } from './pages/user/user-health-dashboard-cots/user-health-dashboard-cots.component';
import { UserHealthDashboardInfraComponent } from './pages/user/user-health-dashboard-infra/user-health-dashboard-infra.component';
import { UserHealthDashboardPortalComponent } from './pages/user/user-health-dashboard-portal/user-health-dashboard-portal.component';
import { UserUpComingRenewalComponent } from './pages/user/user-up-coming-renewal/user-up-coming-renewal.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   component: LoginComponent,
  //   pathMatch: 'full'
  // },

  /////////////////////////////-- Start Admin --//////////////////////////////////////  
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'app-admin-profile',
    component: AdminProfileComponent,
    canActivate: [AdminGuard],
    // pathMatch:'full'
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    canActivate: [AdminGuard],
    // pathMatch:'full'
  },

  {
    path: 'health',
    component: HealthComponent,
    // pathMatch:'full',
    canActivate: [AdminGuard],
  },

  {
    path: 'app-health-dashboard-app-oem',
    component: HealthDashboardAppOemComponent,
    // pathMatch:'full'
    canActivate: [AdminGuard],
  },

  {
    path: 'app-health-dashboard-cots',
    component: HealthDashboardCotsComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'app-health-dashboard-infra',
    component: HealthDashboardInfraComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'app-health-dashboard-portal',
    component: HealthDashboardPortalComponent,
    // pathMatch:'full'
    canActivate: [AdminGuard],
  },

  {
    path: 'app-up-coming-renewal',
    component: UpComingRenewalComponent,
    // pathMatch:'full'
    canActivate: [AdminGuard],
  },

  {
    path: 'app-insert-cots',
    component: InsertCotsComponent,
    // pathMatch:'full'
    canActivate: [AdminGuard],
  },
  {
    path: 'app-insert-infra',
    component: InsertInfraComponent,
    // pathMatch:'full'
    canActivate: [AdminGuard],

  },
  {
    path: 'app-insert-portal',
    component: InsertPortalComponent,
    // pathMatch:'full',
    canActivate: [AdminGuard],

  },

  {
    path: 'app-insert-oem',
    component: InsertOemComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },

  {
    path: 'app-insert-renewal',
    component: InsertRenewalComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },

  {
    path: "app-update-cots/:id/:applicationName/:cleanUpMountPoint/:dateTime/:frequency/:healthDashboard/:infoUpdatedBy/:mountPointUtilization/:serverIp/:serviceStatus/:thresholdMountPoint/:diskSize/:usedDiskSpace/:freeDiskSpace/:mountedOn",
    component: UpdateCotsComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },

  {
    path: "app-update-infra/:id/:applicationName/:dateTime/:diskUtilization/:frequency/:healthDashboard/:infoUpdatedBy/:memory/:serverIp/:cpu/:diskSize/:usedDiskSpace/:freeDiskSpace/:mountedOn",
    component: UpdateInfraComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },

  {
    path: "app-update-portal/:id/:applicationName/:cleanUpMountPoint/:dateTime/:frequency/:healthDashboard/:infoUpdatedBy/:mountPointUtilization/:serverIp/:serviceStatus/:thresholdMountPoint/:diskSize/:usedDiskSpace/:freeDiskSpace/:mountedOn",
    component: UpdatePortalComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },

  {
    path: "app-update-oem/:id/:applicationName/:applicationOem/:heatlhDasboard/:l1/:l2/:oemSupportStatus/:serverIp",
    component: UpdateOemComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },

  {
    path: "app-update-renewal/:id/:applicationInfra/:dueDate/:infoUpdatedBy/:owner/:renewalType",
    component: UpdateRenewalComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
  },
  /////////////////////////////-- End Admin --//////////////////////////////////////


  /////////////////////////////-- Start Super Admin --//////////////////////////////  

  {
    path: 'superadmin',
    component: SuperadminComponent,
    canActivate: [SuperadminGuard]
  },

  {
    path: 'app-super-admin-profile',
    component: SuperAdminProfileComponent,
    canActivate: [SuperadminGuard]
  },

  {
    path: 'app-super-admin-health',
    component: SuperAdminHealthComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-super-admin-health-dashboard-app-oem',
    component: SuperAdminHealthDashboardAppOemComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-super-admin-health-dashboard-cots',
    component: SuperAdminHealthDashboardCotsComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-super-admin-health-dashboard-infra',
    component: SuperAdminHealthDashboardInfraComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-super-admin-health-dashboard-portal',
    component: SuperAdminHealthDashboardPortalComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-super-admin-sidebar',
    component: SuperAdminSidebarComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-super-admin-up-coming-renewal',
    component: SuperAdminUpComingRenewalComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-insert-super-admin-oem',
    component: InsertSuperAdminOemComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-insert-super-admin-cots',
    component: InsertSuperAdminCotsComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-insert-super-admin-infra',
    component: InsertSuperAdminInfraComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-insert-super-admin-portal',
    component: InsertSuperAdminPortalComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-insert-super-admin-renewal',
    component: InsertSuperAdminRenewalComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-update-super-admin-oem/:id/:applicationName/:applicationOem/:heatlhDasboard/:l1/:l2/:oemSupportStatus/:serverIp',
    component: UpdateSuperAdminOemComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-update-super-admin-cots/:id/:applicationName/:cleanUpMountPoint/:dateTime/:frequency/:healthDashboard/:infoUpdatedBy/:mountPointUtilization/:serverIp/:serviceStatus/:thresholdMountPoint/:diskSize/:usedDiskSpace/:freeDiskSpace/:mountedOn',
    component: UpdateSuperAdminCotsComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-update-super-admin-infra/:id/:applicationName/:dateTime/:diskUtilization/:frequency/:healthDashboard/:infoUpdatedBy/:memory/:serverIp/:cpu/:diskSize/:usedDiskSpace/:freeDiskSpace/:mountedOn',
    component: UpdateSuperAdminInfraComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-update-super-admin-portal/:id/:applicationName/:cleanUpMountPoint/:dateTime/:frequency/:healthDashboard/:infoUpdatedBy/:mountPointUtilization/:serverIp/:serviceStatus/:thresholdMountPoint/:diskSize/:usedDiskSpace/:freeDiskSpace/:mountedOn',
    component: UpdateSuperAdminPortalComponent,
    canActivate: [SuperadminGuard],
  },
  {
    path: 'app-update-super-admin-renewal/:id/:applicationInfra/:dueDate/:infoUpdatedBy/:owner/:renewalType',
    component: UpdateSuperAdminRenewalComponent,
    canActivate: [SuperadminGuard],
  },

  // {
  //   path: 'app-delete-super-admin-cots/:id',
  //   component: DeleteSuperAdminCotsComponent,
  //   canActivate: [SuperadminGuard],
  // },





  /////////////////////////////-- End Super Admin --//////////////////////////////   


  /////////////////////////////-- Start User --//////////////////////////////  

  {
    path: 'user',
    component: UserComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-profile',
    component: UserProfileComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-sidebar',
    component: UserSidebarComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-health',
    component: UserHealthComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-health-dashboard-app-oem',
    component: UserHealthDashboardAppOemComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-health-dashboard-app-oem',
    component: UserHealthDashboardAppOemComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-health-dashboard-cots',
    component: UserHealthDashboardCotsComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-health-dashboard-infra',
    component: UserHealthDashboardInfraComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-health-dashboard-portal',
    component: UserHealthDashboardPortalComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },
  {
    path: 'app-user-up-coming-renewal',
    component: UserUpComingRenewalComponent,
    // pathMatch: 'full',
    canActivate: [UserGuard]
  },


  /////////////////////////////-- End User --////////////////////////////// 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
