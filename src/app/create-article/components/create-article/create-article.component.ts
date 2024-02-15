import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ArticleFormComponent } from "@shared/components/article-form/article-form.component";
import { IArticleFormValues } from "@shared/components/article-form/types/article-form-values.interface";
import { combineLatest } from "rxjs";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducers";
import { IArticleRequest } from "@shared/types/article-request.interface";
import { createArticleActions } from "../../store/actions";
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'create-article',
  templateUrl: 'create-article.component.html',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule]
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  });

  constructor(private store: Store) {}

  onSubmit(articleFormValues: IArticleFormValues): void {
    const request: IArticleRequest = {
      article: articleFormValues
    };
    this.store.dispatch(createArticleActions.createArticle({request}))
  }
}
