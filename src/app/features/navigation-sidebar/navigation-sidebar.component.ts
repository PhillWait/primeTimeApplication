import {Component, ViewChild} from '@angular/core';
import {Drawer} from 'primeng/drawer';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [
    Drawer,
    NgOptimizedImage
  ],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss'
})
export class NavigationSidebarComponent {

  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;

}
