import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ToolbarService } from './shared/services/toolbar.service';
import { AuthService } from './shared/services/auth.service';
import { CartService } from './shared/services/cart.service';

import { IMenuItem } from './shared/models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    activeMenuItem$: Observable<IMenuItem>;
    appName = 'Shop';
    mainMenuItems: any;
    isAuthorized: boolean;

    logOut() {
        this.authService.logOut().subscribe(() => this.authService.removeToken());
    }

    constructor(private authService: AuthService, private toolbarService: ToolbarService, private cartService: CartService) {
        this.mainMenuItems = this.toolbarService.getMenuItems();
        this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
    }
}
