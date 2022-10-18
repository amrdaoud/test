export interface RegisterModel{
  FirstName: string;
  LastName: string;
  Username: string;
  Email: string;
  Password: string;
}

export interface Authentication{
  Message: string;
  IsAuthenticated: boolean;
  UserName: string;
  Email: string;
  Roles: string[];
  Token: string;
  RefreshToken: string;
  TokenDate: number;
}
