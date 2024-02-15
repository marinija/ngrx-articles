import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { BannerComponent } from "@shared/components/banner/banner.component";
import { ErrorMessageComponent } from "@shared/components/error-message/error-message.component";
import { FeedTogglerComponent } from "@shared/components/feed-toggler/feed-toggler.component";
import { FeedComponent } from "@shared/components/feed/feed.component";
import { PopularTagsComponent } from "@shared/components/populat-tags/popular-tags.component";

@Component({
  selector: 'tag-feed',
  templateUrl: './tag-feed.component.html',
  standalone: true,
  imports: [
    BannerComponent,
    FeedComponent,
    FeedTogglerComponent,
    ErrorMessageComponent,
    PopularTagsComponent
  ]
})
export class TagFeedComponent implements OnInit {
  apiUrl = '';
  tagName = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (param: ParamMap) => {
          this.tagName = String(param.get('slug'));
          this.apiUrl = `/articles?tag=${this.tagName}`;
        }
      });
  }
}
