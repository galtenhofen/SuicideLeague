import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent }  from './profile.component';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]

})
export class ProfileModule { }