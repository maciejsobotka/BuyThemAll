import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {

  constructor() { }

  saveScroll(api: string) {
    localStorage.setItem('scroll' + api, JSON.stringify(document.querySelector('.mat-sidenav-content').scrollTop));
  }

  scrollPosition(api: string): number {
    const scrollElement = document.querySelector('.mat-sidenav-content');
    if (scrollElement) {
      console.log(scrollElement.scrollTop);
      return document.querySelector('.mat-sidenav-content').scrollTop;
    }else {
      return 0;
    }
  }

  scrollTop() {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  }

  retriveScroll(api: string): number {
    return JSON.parse(localStorage.getItem('scroll' + api));
  }
}
