import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23lixO0U1M1vYjW3iR',
            clientSecret: '6f5f146f529620848380d0862f9db852ed93ccaf'
        })
    ]
}

export default NextAuth(authOptions);