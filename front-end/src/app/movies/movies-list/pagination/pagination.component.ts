import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'mm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  @Input() pageSize: number;
  @Output() pageChange = new EventEmitter();

  currentPage: number = 1;
  pageCount: number;
  pages: number[];
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.pageCount = Math.ceil(this.totalItems / this.pageSize);
    this.pages = new Array(this.pageCount);
  }

  changePage(page) {
    if(page > 0 && page <= this.pageCount) {
      this.currentPage = page;
      this.pageChange.emit({"page": this.currentPage});
    }
  }
}
