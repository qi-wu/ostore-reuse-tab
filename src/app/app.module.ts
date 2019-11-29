import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { RouterModule, Route, RouteReuseStrategy } from '@angular/router';
import { ReuseTabStrategy, ReuseTabService, ReuseTabModule } from 'projects/reuse-tab/src';

const route: Route[] = [
  {path: 'demo1', component: Demo1Component, data: {title: 'demo1'} },
  {path: 'demo2', component: Demo2Component, data: {title: 'demo2'} },
];


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    ReuseTabModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: ReuseTabStrategy,
      deps: [ReuseTabService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
