import { Component, OnInit } from '@angular/core';
import { HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) public platformId: string) { }

  public scrolled: boolean = false;
  public awake: boolean = false;
  public  display: boolean = false;
  public ltkLogo = 'assets/logo/tuankhoilogo.png';

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 30;
      this.awake = window.scrollY > 100;
      if (window.scrollY > 30) {
        this.ltkLogo = '/assets/logo/tuankhoilogo-color.png';
        this.display = true;
      } else {
        this.ltkLogo = '/assets/logo/tuankhoilogo.png';
        this.display = false;
      }
    }
  }

  ngOnInit() {
  }




}
