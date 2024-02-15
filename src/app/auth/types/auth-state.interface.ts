import { IBackendErrors } from "../../shared/types/backend-errors.interface";
import { ICurrentUser } from "../../shared/types/current-user.interface";

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null | undefined;
  isLoading: boolean;
  validationErrors: IBackendErrors | null;
}
