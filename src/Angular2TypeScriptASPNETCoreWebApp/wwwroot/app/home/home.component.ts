import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <h1>Home</h1>
        <p>Hello you !</p>
    `
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log('HomeComponent -> constructor');

    }

    ngOnInit() {
        console.log('HomeComponent -> ngOnInit');

    }
}