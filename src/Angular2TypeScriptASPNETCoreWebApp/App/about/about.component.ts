import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template: `
        <h1>About</h1>
        <p>Hi! I'm Adrien Torris, my blog is https://adrientorris.github.io/ and I'm on Twitter ;)</p>
    `
})
export class AboutComponent implements OnInit {

    constructor() {
        console.log('AboutComponent -> constructor');

    }

    ngOnInit() {
        console.log('AboutComponent -> ngOnInit');

    }
}