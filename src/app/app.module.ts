import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




//          --Modulos--
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
//          --componentes--
import { NavbarComponent } from './crud/navbar/navbar.component';
import { ListProductsComponent } from './crud/list-products/list-products.component';
import { AddEditProductsComponent } from './crud/add-edit-products/add-edit-products.component';
import { LoginComponent } from './auth/login/login.component';
import { CrudModule } from './crud/crud.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent

    ],
    providers: [],
    // bootstrap: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        // AddEditProductsComponent,
        FormsModule,
        RouterModule,
        CrudModule,
        AuthModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        // LoginComponent
    ]
})
export class AppModule { }
