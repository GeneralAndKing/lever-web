/* eslint-disable */
// noinspection JSUnusedGlobalSymbols

export type Type = HttpServletRequest & Map & HttpServletResponse & JwtAuthenticationToken;
export type JwtNullable = {
  claims?: MapStringObjectNullable;
  expiresAt?: InstantNullable;
  headers?: MapStringObjectNullable;
  issuedAt?: InstantNullable;
  tokenValue?: string | null;
} & ({
  claims?: MapStringObjectNullable;
  expiresAt?: InstantNullable;
  headers?: MapStringObjectNullable;
  issuedAt?: InstantNullable;
  tokenValue?: string | null;
} | null);
export type MapStringObjectNullable = {} | null;
export type InstantNullable = {} | null;

export interface HttpServletRequest {}
export interface Map {}
export interface HttpServletResponse {}
export interface JwtAuthenticationToken {
  authenticated?: boolean;
  authorities?: GrantedAuthority[] | null;
  credentials?: unknown;
  details?: unknown;
  name?: string | null;
  principal?: unknown;
  token?: JwtNullable;
}
export interface GrantedAuthority {}
