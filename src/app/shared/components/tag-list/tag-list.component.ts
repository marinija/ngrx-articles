import { Component, Input } from "@angular/core";
import { PopularTagType } from "../populat-tags/types/popular-tag.type";
import { NgFor } from "@angular/common";

@Component({
  selector: 'tag-list',
  templateUrl: './tag-list.component.html',
  standalone: true,
  imports: [NgFor]
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = [];
}
