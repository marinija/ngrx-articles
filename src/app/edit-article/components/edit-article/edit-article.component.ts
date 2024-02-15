import { IArticle } from '@shared/components/feed/types/article.interface';
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ArticleFormComponent } from "@shared/components/article-form/article-form.component";
import { IArticleFormValues } from "@shared/components/article-form/types/article-form-values.interface";
import { Observable, combineLatest, filter, map } from "rxjs";
import { selectIsSubmitting, selectValidationErrors, selectIsLoading, selectArticle } from "../../store/reducers";
import { IArticleRequest } from "@shared/types/article-request.interface";
import { editArticleActions } from "../../store/actions";
import { CommonModule, NgIf } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { LoadingComponent } from '@shared/components/loading/loading.component';

@Component({
  selector: 'edit-article',
  templateUrl: 'edit-article.component.html',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule, LoadingComponent]
})
export class EditArticleComponent implements OnInit {


  initialValues$: Observable<IArticleFormValues> = this.store.pipe(
    select(selectArticle),
    filter((article): article is IArticle => article !== null),
    map((article: IArticle) => {
      return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        };
    })
  )
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
    isLoading: this.store.select(selectIsLoading),
    initialValues: this.initialValues$
  });

  slug = this.route.snapshot.paramMap.get('slug') ?? '';

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.store.dispatch(editArticleActions.getArticle({slug: this.slug}));
  }

  onSubmit(articleFormValues: IArticleFormValues): void {
    const request: IArticleRequest = {
      article: articleFormValues
    };
    this.store.dispatch(editArticleActions.updateArticle({request, slug: this.slug}))
  }
}
