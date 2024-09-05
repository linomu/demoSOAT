import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { AppConfigModule } from 'src/app/layout/config/config.module';
import { AppFooterComponent } from '../footer/app.footer.component';
import { InicioModule } from '../inicio/inicio.module';
import { AppMenuComponent } from '../menu/app.menu.component';
import { AppMenuitemComponent } from '../menu/app.menuitem.component';
import { AppSidebarComponent } from '../menu/app.sidebar.component';
import { RegistrarDatosPropietarioModule } from '../registrar-datos-propietario/registrar-datos-propietario.module';
import { RegistrarDatosVehiculoModule } from '../registrar-datos-vehiculo/registrar-datos-vehiculo.module';
import { AppTopBarComponent } from '../top-bar/app.topbar.component';
import { AppLayoutComponent } from './app.layout.component';
import { ConsultarRegistroModule } from '../consultar-registro/consultar-registro.module';
import { ComprarSoatModule } from '../comprar-soat/comprar-soat.module';
import { ConsultarSoatModule } from '../consultar-soat/consultar-soat.module';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        InicioModule,
        RegistrarDatosVehiculoModule,
        RegistrarDatosPropietarioModule,
        ConsultarRegistroModule,
        ComprarSoatModule,
        ConsultarSoatModule,
    ],
    exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
