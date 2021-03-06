import { Component, OnInit } from '@angular/core';

const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  // !responsivenes by adding breakpoint, at which screen-size need to break
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`);

  links = [
    {
      name: 'Invoices',
      url: 'invoices'
    },
    {
      name: 'Clients',
      url: 'clients'
    },
  ];

  constructor() { }

  ngOnInit() {
  }


  isScreenSmall() {
    return this.mediaMatcher.matches;
  }


}
