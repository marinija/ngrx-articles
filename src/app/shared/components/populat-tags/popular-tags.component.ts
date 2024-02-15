import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { popularTagsActions } from "./store/actions";
import { combineLatest } from "rxjs";
import { selectError, selectIsLoading, selectPopularTagsData } from "./store/reducers";
import { CommonModule, NgIf } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'popular-tags',
  templateUrl: './popular-tags.component.html',
  standalone: true,
  imports: [CommonModule, NgIf, LoadingComponent, ErrorMessageComponent, RouterLink]
})
export class PopularTagsComponent implements OnInit {

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    popularTags: this.store.select(selectPopularTagsData),
  })

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
