import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Only include GitHub provider if credentials are properly configured
    ...(process.env.GITHUB_ID && 
        process.env.GITHUB_SECRET && 
        process.env.GITHUB_ID !== 'YOUR_DEV_GITHUB_CLIENT_ID'
        ? [GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          })]
        : []
    ),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log('NextAuth redirect callback:', { url, baseUrl });
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  pages: {
    error: '/auth/error', // Error code passed in query string as ?error=
  },
  debug: process.env.NODE_ENV === 'development',
});
