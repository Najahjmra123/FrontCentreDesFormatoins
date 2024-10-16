import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CentreFormationFrontEnd';
  showNavbar = true;
  showFooter = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.activatedRoute.root;
        if (currentRoute?.firstChild?.routeConfig?.path === 'login') {
          this.showNavbar = false;
          this.showFooter = false;
        } else {
          this.showNavbar = true;
          this.showFooter = true;
        }

      }})
  }


}
