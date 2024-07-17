export type TLoginData = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export type TUserData = {
  id: number | undefined;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
};
