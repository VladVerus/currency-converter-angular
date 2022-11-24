import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav/drawer';
import { Store } from '@ngrx/store';
import { isShowSideNavSelector } from 'src/app/reducers/sidemenu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(private store: Store) {}

  @ViewChild('drawer', { static: false })
  drawer: MatDrawer | undefined;

  //? Observable on change state
  isShow$ = this.store.select(isShowSideNavSelector).subscribe({
    next: (v) => {
      this.drawer?.toggle();
    },
  });

  ngOnInit(): void {}
}
