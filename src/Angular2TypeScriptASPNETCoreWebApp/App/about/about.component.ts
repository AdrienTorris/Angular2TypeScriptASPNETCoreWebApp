import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.html'
})
export class AboutComponent implements OnInit {

    constructor() {
        console.log('AboutComponent -> constructor');

    }

    ngOnInit() {
        console.log('AboutComponent -> ngOnInit');

    }
}