import { CdkAccordionModule } from '@angular/cdk/accordion';
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
  BellIcon,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FileIcon,
  FileText,
  Hammer,
  HelpCircle,
  LayoutDashboard,
  LucideAngularModule,
  MenuIcon,
  PhoneCall,
  Settings,
  UserIcon,
  UsersIcon,
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
    CdkAccordionModule,
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
  readonly bellIcon = BellIcon;
  readonly userIcon = UserIcon;
  readonly usersIcon = UsersIcon;
  readonly chevronupIcon = ChevronUp;
  readonly chevronDownIcon = ChevronDown;
  items = ['Placeholder 1'];
  navItems = [
    {
      path: 'dashboard',
      menuItem: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      path: 'login',
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
  community = [
    {
      path: 'community-members',
      menuItem: 'Community Members',
      icon: UsersIcon,
    },
    {
      path: 'forgot-password',
      menuItem: 'Community Documents',
      icon: FileIcon,
    },
  ];
}
