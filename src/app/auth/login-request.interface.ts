type User = {
  email: string;
  password: string;
}

export interface ILoginRequest {
  user: User
}
