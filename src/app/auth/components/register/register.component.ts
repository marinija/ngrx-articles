import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Store, StoreModule } from "@ngrx/store";
import { authActions } from "../../store/actions";
import { IRegisterRequest } from "../../registerRequest.interface";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducers";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../services/auth.service";
import { combineLatest } from "rxjs";
import { BackendErrorMessages } from "../../../shared/components/backend-error-messages.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, StoreModule, CommonModule, BackendErrorMessages]
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  store = inject(Store);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  });

  submit() {
    const request: IRegisterRequest = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(authActions.register({request}));
    this.authService.register(request).subscribe(response => console.log(response));
  }
}
