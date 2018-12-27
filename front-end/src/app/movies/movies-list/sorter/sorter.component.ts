import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mm-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {
  sort: string = 'rating';
  sortDirection: string = 'desc';
  @Output() sortChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  changeDirection() {
    this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    this.sortChange.emit({"sortDirection": this.sortDirection});
  }

  changeSort() {
    this.sortChange.emit({"sort": this.sort});
  }
}
