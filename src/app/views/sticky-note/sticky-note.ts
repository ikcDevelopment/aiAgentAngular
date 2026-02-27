import { Component } from '@angular/core';

@Component({
  selector: 'app-sticky-note',
  imports: [],
  templateUrl: './sticky-note.html',
  styleUrl: './sticky-note.css',
})
export class StickyNote {
    componentTitle: string = 'Sticky note';
    note:string = '';
    backgroundColor = '';

    constructor() {
    }

}
