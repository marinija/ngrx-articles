type User = {
  email: string;
  password: string;
  username: string;
}
export interface IRegisterRequest {
  user: User;
}
