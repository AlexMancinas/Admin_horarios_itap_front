export interface Session {
    user: {
      name: string;
      email: string;
    };
  }
  
  export type Status = "loading" | "authenticated" | "unauthenticated";