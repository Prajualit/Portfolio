import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import Button from '@/common/components/elements/Button';

const Providers = [
  {
    id: 'google',
    icon: <GoogleIcon size={18} />,
    bgColor: '!bg-white',
    textColor: 'text-black',
    label: 'Sign in with Google',
  },
  // Only show GitHub in production or if dev GitHub credentials are configured
  ...(process.env.NODE_ENV === 'production' || 
      (process.env.GITHUB_ID && process.env.GITHUB_ID !== 'YOUR_DEV_GITHUB_CLIENT_ID')
      ? [{
          id: 'github',
          icon: <GithubIcon size={18} />,
          bgColor: '!bg-black',
          textColor: 'text-white',
          label: 'Sign in with Github',
        }] 
      : [])
];

const ChatAuth = ({ isWidget = false }: { isWidget?: boolean }) => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (providerId: string) => {
    try {
      setIsLoading(providerId);
      setError(null);
      
      const result = await signIn(providerId, {
        callbackUrl: window.location.origin + '/guestbook',
        redirect: false,
      });
      
      if (result?.error) {
        setError(`Failed to sign in with ${providerId}. Please try again.`);
      } else if (result?.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      setError(`An unexpected error occurred. Please try again.`);
      console.error('Sign in error:', err);
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className='flex flex-col border-t border-neutral-300 py-1 dark:border-neutral-900'>
      <div className='mb-1 space-y-5 px-4 py-3 text-center text-neutral-700 dark:text-neutral-400'>
        <p className='text-sm'>
          Please sign in to start. Don't worry, your data is safe.
        </p>
        
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}
        
        <div
          className={clsx(
            'flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-5',
            isWidget && '!flex-col !gap-4',
          )}
        >
          {Providers?.map((button) => (
            <Button
              key={button.id}
              onClick={() => handleSignIn(button.id)}
              disabled={isLoading !== null}
              className={`flex w-full items-center justify-center border ${button.bgColor} py-2.5 shadow-sm transition duration-300 hover:scale-[101%] lg:w-fit ${isWidget && '!w-full'} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              data-umami-event={`Sign In to Chat: ${button.label}`}
            >
              {isLoading === button.id ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  <span className={button.textColor}>Signing in...</span>
                </div>
              ) : (
                <>
                  {button.icon}
                  <span className={button.textColor}>{button.label}</span>
                </>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatAuth;
