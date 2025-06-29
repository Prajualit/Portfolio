import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';

const AuthErrorPage: NextPage = () => {
  const router = useRouter();
  const { error } = router.query;

  const getErrorMessage = (error: string | string[] | undefined): string => {
    if (!error || Array.isArray(error)) return 'An unknown error occurred';
    
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'AccessDenied':
        return 'Access denied. You do not have permission to sign in.';
      case 'Verification':
        return 'The verification link was invalid or has expired.';
      case 'OAuthSignin':
        return 'Error in constructing an authorization URL.';
      case 'OAuthCallback':
        return 'Error in handling the response from an OAuth provider.';
      case 'OAuthCreateAccount':
        return 'Could not create OAuth account in the database.';
      case 'EmailCreateAccount':
        return 'Could not create email account in the database.';
      case 'Callback':
        return 'Error in the OAuth callback handler route.';
      case 'OAuthAccountNotLinked':
        return 'The email on the account is already linked, but not with this OAuth account.';
      case 'EmailSignin':
        return 'Sending the e-mail with the verification token failed.';
      case 'CredentialsSignin':
        return 'The authorize callback returned null in the Credentials provider.';
      case 'SessionRequired':
        return 'The content of this page requires you to be signed in at all times.';
      default:
        return `An error occurred: ${error}`;
    }
  };

  return (
    <>
      <NextSeo title="Authentication Error - Prajualit Tickoo" />
      <Container data-aos='fade-up'>
        <PageHeading 
          title="Authentication Error" 
          description="Something went wrong during the authentication process"
        />
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
              Authentication Failed
            </h3>
            <p className="text-red-700 dark:text-red-300 mb-4">
              {getErrorMessage(error)}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => router.push('/guestbook')}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => router.push('/')}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Development Debug Info:
              </h4>
              <pre className="text-xs text-yellow-700 dark:text-yellow-300 overflow-x-auto">
                Error: {JSON.stringify(error, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default AuthErrorPage;
