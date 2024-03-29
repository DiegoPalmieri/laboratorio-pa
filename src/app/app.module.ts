import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './angular-material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './components/registro/registro.component';
import { ProfesorComponent } from './components/usuarios/profesor/profesor.component';
import { AdminComponent } from './components/usuarios/admin/admin.component';
import { PeticionesComponent } from './components/usuarios/admin/peticiones/peticiones.component';
import { HistorialComponent } from './components/usuarios/admin/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ProfesorComponent,
    AdminComponent,
    PeticionesComponent,
    HistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
