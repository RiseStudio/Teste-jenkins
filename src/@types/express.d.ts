declare namespace Express {
  export interface Request {
    readonly auth: import('jsonwebtoken').JwtPayload & {
      readonly sub: string;
    };
  }
}
