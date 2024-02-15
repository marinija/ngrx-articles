import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { UtilsService } from "@shared/services/utils.service";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ]
})
export class PaginationComponent implements OnInit {
  @Input() total = 0;
  @Input() limit = 20;
  @Input() currentPage = 1;
  @Input() url = '';

  pagesCount = 1;
  pages: Array<number> = [];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
      this.pagesCount = Math.ceil(this.total / this.limit);
      this.pages = this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : [];
      console.log(this.pages);
  }
}
