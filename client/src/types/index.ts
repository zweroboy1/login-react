export type Deal = {
  name: string;
  price: number;
  yield: number;
  sold: number;
  ticket: number;
  daysLeft: number;
  image: string;
};

export interface UserCredential {
  userId: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
