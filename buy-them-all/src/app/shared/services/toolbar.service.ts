import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { IMenuItem } from '../models/menu-item';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolbarService {
    activeMenuItem$: Observable<IMenuItem>;

    constructor(private router: Router, private titleService: Title) {
        this.activeMenuItem$ = this.router.events
            .filter(e => e instanceof NavigationEnd)
            .map(() => this.router.routerState.root)
            .map(route => {
                const active = this.lastRouteWithMenuItem(route.root);
                this.titleService.setTitle(active.title);
                return active;
            });
    }

    getMenuItems(): IMenuItem[] {
        return this.router.config
            .filter(route => route.data && route.data.title)
            .map(route => {
                return {
                    path: route.path,
                    title: route.data.title,
                    icon: route.data.icon,
                    color: route.data.color,
                    hidden: route.data.hidden,
                    noToolbar: route.data.noToolbar,
                    authRequired: route.data.authRequired
                };
            });
    }

    private lastRouteWithMenuItem(route: ActivatedRoute): IMenuItem {
        let lastMenu;
        do { lastMenu = this.extractMenu(route) || lastMenu; }
        while ((route = route.firstChild));
        return lastMenu;
    }

    private extractMenu(route: ActivatedRoute): IMenuItem {
        const cfg = route.routeConfig;
        return cfg && cfg.data
            ? {
                path: cfg.path,
                title: cfg.data.title,
                icon: cfg.data.icon,
                color: cfg.data.color,
                hidden: cfg.data.hidden,
                noToolbar: cfg.data.noToolbar,
                authRequired: cfg.data.authRequired
            }
            : undefined;
    }
}
