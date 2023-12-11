import NextAuth, { Awaitable, RequestInternal, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
        type: 'credentials',
        credentials: {},
        authorize: function (credentials: Record<never, string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
            const {email, password} = credentials as {
                email: string,
                password: string,
              };
              // validate here your username and password
              if(email !== 'alex@email.com' && password !== "123456") {
                throw new Error('invalid credentials');
              }



              // confirmed users
              return {id: '1', name: 'Alex', email: 'alex@email.com'}
        }
    }),
  ],
  
})