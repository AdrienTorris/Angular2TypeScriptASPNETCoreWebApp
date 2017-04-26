"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        console.log('AppComponent -> constructor');
    }
    ngOnInit() {
        console.log('AppComponent -> ngOnInit');
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
        <div class="container">
            <h1>Angular 2 & TypeScript web application</h1>
            <h2>Made with ASP.NET Core and Visual Studio 2017</h2>
            <nav>
                <a routerLink="home" routerLinkActive="active">Home</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map