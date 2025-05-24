import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import {
  CheckCircle,
  FileIcon,
  FileText,
  Hammer,
  HelpCircle,
  LayoutDashboard,
  LucideAngularModule,
  MenuIcon,
  PhoneCall,
  Settings,
} from 'lucide-angular';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    LucideAngularModule,
  ],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss',
})
export class TopnavComponent {
  constructor(public route: Router) {}
  readonly FileIcon = FileIcon;
  showFiller = false;
  readonly menuIcon = MenuIcon;
  navItems = [
    {
      path: 'dashboard',
      menuItem: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      path: 'maintenance',
      menuItem: 'Maintenance',
      icon: Hammer,
    },
    {
      path: 'documents',
      menuItem: 'Documents',
      icon: FileText,
    },
    {
      path: 'emergency-contacts',
      menuItem: 'Emergency Contacts',
      icon: PhoneCall,
    },
    {
      path: 'inspections',
      menuItem: 'Inspections',
      icon: CheckCircle,
    },
    {
      path: 'settings',
      menuItem: 'Settings',
      icon: Settings,
    },
    {
      path: 'help-support',
      menuItem: 'Help Support',
      icon: HelpCircle,
    },
  ];
}
