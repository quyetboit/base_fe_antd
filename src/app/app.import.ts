import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { RouterModule } from "@angular/router";

export const APP_IMPORT = [
  CommonModule,
  RouterModule,
  SidebarComponent,
  HeaderComponent,
]
