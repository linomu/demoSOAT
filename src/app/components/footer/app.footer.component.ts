import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrl:'./app.footer.component.scss',
})
export class AppFooterComponent {
    textoCopy="@ Copyrigth 2024 RUNT ";
    version="Version 1.0.0";
    constructor(public layoutService: LayoutService) {}
}
