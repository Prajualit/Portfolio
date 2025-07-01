import { signOut, useSession } from 'next-auth/react';
import { BiMinus as MinimizeIcon } from 'react-icons/bi';
import { HiOutlineLogout as SignOutIcon } from 'react-icons/hi';
import { HiOutlineSparkles as AIIcon } from 'react-icons/hi2';
import { IoChatbubblesOutline as ChatIcon } from 'react-icons/io5';
import { MdClose as CloseIcon } from 'react-icons/md';

import useChatStore from '@/common/stores/useChatStore';

const ChatWidgetHeader = () => {
  const { data: session } = useSession();
  const { toggleChat, isAIMode, toggleAIMode } = useChatStore();

  return (
    <div className='flex items-center justify-between border-b border-neutral-300 p-4 text-lg font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-300'>
      <div className='flex items-center gap-4'>
        <div className='flex gap-2'>
          <div
            onClick={toggleChat}
            className='group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-red-500 text-black'
            data-umami-event='Chat Widget: Close'
          >
            <CloseIcon size={13} className='hidden group-hover:flex' />
          </div>
          <div
            onClick={toggleChat}
            className='group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-yellow-500 text-black'
            data-umami-event='Chat Widget: Minimize'
          >
            <MinimizeIcon size={13} className='hidden group-hover:flex' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <h4 className='text-base'>{isAIMode ? 'AI Assistant' : 'Live Chat'}</h4>
          <button
            onClick={toggleAIMode}
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs transition-colors ${
              isAIMode
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
            }`}
            data-umami-event={`Chat Mode: Switch to ${isAIMode ? 'Live' : 'AI'}`}
          >
            {isAIMode ? (
              <>
                <AIIcon size={12} />
                <span>AI</span>
              </>
            ) : (
              <>
                <ChatIcon size={12} />
                <span>Live</span>
              </>
            )}
          </button>
        </div>
      </div>
      {session && !isAIMode && (
        <SignOutIcon
          onClick={() => signOut()}
          size={22}
          className='cursor-pointer text-red-400'
          data-umami-event='Sign Out from Chat Widget'
        />
      )}
    </div>
  );
};

export default ChatWidgetHeader;
