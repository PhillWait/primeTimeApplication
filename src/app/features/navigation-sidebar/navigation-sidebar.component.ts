import { Component, signal, ViewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { NgOptimizedImage } from '@angular/common';
import { NavigationItems } from './model/navigation-sidebar.model';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [Drawer, NgOptimizedImage],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss',
})
export class NavigationSidebarComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  menuItems = signal<any[]>(NavigationItems);

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;
}
