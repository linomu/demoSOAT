import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './components/layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'soat',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './components/inicio/inicio.module'
                                ).then((m) => m.InicioModule),
                        },
                        {
                            path: 'registrar-datos-vehiculo',
                            loadChildren: () =>
                                import(
                                    './components/registrar-datos-vehiculo/registrar-datos-vehiculo.module'
                                ).then((m) => m.RegistrarDatosVehiculoModule),
                        },
                        {
                            path: 'registrar-datos-propietario',
                            loadChildren: () =>
                                import(
                                    './components/registrar-datos-propietario/registrar-datos-propietario.module'
                                ).then(
                                    (m) => m.RegistrarDatosPropietarioModule
                                ),
                        },
                        {
                            path: 'consultar-registro',
                            loadChildren: () =>
                                import(
                                    './components/consultar-registro/consultar-registro.module'
                                ).then((m) => m.ConsultarRegistroModule),
                        },
                        {
                            path: 'comprar-soat',
                            loadChildren: () =>
                                import(
                                    './components/comprar-soat/comprar-soat.module'
                                ).then((m) => m.ComprarSoatModule),
                        },
                        {
                            path: 'consultar-soat',
                            loadChildren: () =>
                                import(
                                    './components/consultar-soat/consultar-soat.module'
                                ).then((m) => m.ConsultarSoatModule),
                        },
                        {
                            path: 'registrar-datos-vehiculo/:id',
                            loadChildren: () =>
                                import(
                                    './components/registrar-datos-vehiculo/registrar-datos-vehiculo.module'
                                ).then((m) => m.RegistrarDatosVehiculoModule),
                        },
                        {
                            path: 'registrar-datos-propietario/:id',
                            loadChildren: () =>
                                import(
                                    './components/registrar-datos-propietario/registrar-datos-propietario.module'
                                ).then(
                                    (m) => m.RegistrarDatosPropietarioModule
                                ),
                        },

                        {
                            path: 'uikit',
                            loadChildren: () =>
                                import(
                                    './demo/components/uikit/uikit.module'
                                ).then((m) => m.UIkitModule),
                        },
                        {
                            path: 'utilities',
                            loadChildren: () =>
                                import(
                                    './demo/components/utilities/utilities.module'
                                ).then((m) => m.UtilitiesModule),
                        },
                        {
                            path: 'documentation',
                            loadChildren: () =>
                                import(
                                    './demo/components/documentation/documentation.module'
                                ).then((m) => m.DocumentationModule),
                        },
                        {
                            path: 'blocks',
                            loadChildren: () =>
                                import(
                                    './demo/components/primeblocks/primeblocks.module'
                                ).then((m) => m.PrimeBlocksModule),
                        },
                        {
                            path: 'pages',
                            loadChildren: () =>
                                import(
                                    './demo/components/pages/pages.module'
                                ).then((m) => m.PagesModule),
                        },
                    ],
                },
                {
                    path: '',
                    loadChildren: () =>
                        import(
                            './components/terminos-condiciones/terminos-condiciones.module'
                        ).then((m) => m.TerminosCondicionesModule),
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./demo/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: 'landing',
                    loadChildren: () =>
                        import('./demo/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
