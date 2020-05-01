export interface AuthStateModel {
  token: string | null;
  refreshToken: string | null;
  expires_in: number | null;
  granted_at: number | null;
}
