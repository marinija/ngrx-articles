import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { IRegisterRequest } from "../registerRequest.interface";
import { ICurrentUser } from "../../shared/types/current-user.interface";
import { IBackendErrors } from "../../shared/types/backend-errors.interface";
import { ILoginRequest } from "../login-request.interface";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: IRegisterRequest}>(),
    'Register success': props<{currentUser: ICurrentUser}>(),
    'Register failure': props<{errors: IBackendErrors}>(),

    Login: props<{request: ILoginRequest}>(),
    'Login success': props<{currentUser: ICurrentUser}>(),
    'Login failure': props<{errors: IBackendErrors}>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{currentUser: ICurrentUser}>(),
    'Get current user failure': emptyProps()
  }
});
