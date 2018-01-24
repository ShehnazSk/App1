import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SecAComponent } from './sec-a/sec-a.component';
import { SecBComponent } from './sec-b/sec-b.component';
import { SecCComponent } from './sec-c/sec-c.component';
import { SecDComponent } from './sec-d/sec-d.component';

const myRoutes: Routes = [
  { path:'',component:BodyComponent },
  { path:'A',component:SecAComponent },
  { path:'B',component:SecBComponent },
  { path:'C',component:SecCComponent },
  { path:'D',component:SecDComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SecAComponent,
    SecBComponent,
    SecCComponent,
    SecDComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
