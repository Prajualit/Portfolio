/* eslint-disable react-hooks/exhaustive-deps */
import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { firebase } from '@/common/libs/firebase';
import { MessageProps } from '@/common/types/chat';

import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Chat = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data: session } = useSession();

  const [messages, setMessages] = useState<MessageProps[]>([]);

  const database = getDatabase(firebase);
  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB as string;

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message);
    console.log('Session:', session);
    console.log('Database chat path:', databaseChat);
    
    const messageId = uuidv4();
    const messageRef = ref(database, `${databaseChat}/${messageId}`);

    const messageData = {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
    };

    console.log('Message data to save:', messageData);

    set(messageRef, messageData)
      .then(() => {
        console.log('Message saved successfully');
      })
      .catch((error) => {
        console.error('Error saving message:', error);
      });
  };

  const handleDeleteMessage = (id: string) => {
    const messageRef = ref(database, `${databaseChat}/${id}`);

    if (messageRef) {
      remove(messageRef);
    }
  };

  useEffect(() => {
    console.log('Setting up Firebase listener for:', databaseChat);
    const messagesRef = ref(database, databaseChat);
    onValue(messagesRef, (snapshot) => {
      console.log('Firebase snapshot received:', snapshot.val());
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.values(messagesData) as MessageProps[];
        console.log('Messages array:', messagesArray);
        console.log('Number of messages:', messagesArray.length);
        // Log each message
        messagesArray.forEach((msg, index) => {
          console.log(`Message ${index + 1}:`, {
            name: msg.name,
            email: msg.email,
            message: msg.message,
            created_at: msg.created_at
          });
        });
        const sortedMessage = messagesArray.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateA.getTime() - dateB.getTime();
        });
        console.log('Sorted messages:', sortedMessage);
        setMessages(sortedMessage);
      } else {
        console.log('No messages found in Firebase');
        setMessages([]);
      }
    }, (error) => {
      console.error('Firebase listener error:', error);
    });
  }, [database]);

  return (
    <>
      <ChatList
        isWidget={isWidget}
        messages={messages}
        onDeleteMessage={handleDeleteMessage}
      />
      {session ? (
        <ChatInput onSendMessage={handleSendMessage} isWidget={isWidget} />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};

export default Chat;
