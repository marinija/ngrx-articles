import { Component } from "@angular/core";
import { BannerComponent } from "@shared/components/banner/banner.component";
import { ErrorMessageComponent } from "@shared/components/error-message/error-message.component";
import { FeedTogglerComponent } from "@shared/components/feed-toggler/feed-toggler.component";
import { FeedComponent } from "@shared/components/feed/feed.component";
import { PopularTagsComponent } from "@shared/components/populat-tags/popular-tags.component";

@Component({
  selector: 'global-feed',
  templateUrl: './global-feed.component.html',
  standalone: true,
  imports: [
    BannerComponent,
    FeedComponent,
    FeedTogglerComponent,
    ErrorMessageComponent,
    PopularTagsComponent
  ]
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
