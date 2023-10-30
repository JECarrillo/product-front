import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AuthModule { }
