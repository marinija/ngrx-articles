import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { articleActions } from "../../store/actions";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { combineLatest, filter, map } from "rxjs";
import { selectArticleData, selectError, selectIsLoading } from "../../store/reducers";
import { selectCurrentUser } from "src/app/auth/store/reducers";
import { ICurrentUser } from "@shared/types/current-user.interface";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { ErrorMessageComponent } from "@shared/components/error-message/error-message.component";
import { TagListComponent } from "@shared/components/tag-list/tag-list.component";

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LoadingComponent,
    ErrorMessageComponent,
    TagListComponent
  ]
})
export class ArticleComponent implements OnInit {

  slug = this.route.snapshot.paramMap.get('slug') ?? '';

  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store.select(selectCurrentUser).pipe(filter(
      (currentUser): currentUser is ICurrentUser | null => currentUser !== undefined))
  }).pipe(map(({article, currentUser}) => {
    if(!article || !currentUser) {
      return false;
    }
    return article.author.username === currentUser.username
  }));

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    isError: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$
  })

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.store.dispatch(articleActions.getArticle({slug: this.slug}));
  }

  deleteArticle(): void {
    this.store.dispatch(articleActions.deleteArticle({slug: this.slug}));
  }
}
