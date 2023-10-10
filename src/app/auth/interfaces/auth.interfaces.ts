export interface User {
  name: string;
  username: string;
  password: string
}

export interface AuthResponse {
  token: string;
  username: string;
}
