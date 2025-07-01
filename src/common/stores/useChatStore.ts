import { create, SetState } from 'zustand';

interface ChatStoreProps {
  isOpen: boolean;
  isAIMode: boolean;
  toggleChat: () => void;
  toggleAIMode: () => void;
  setAIMode: (isAI: boolean) => void;
}

const useChatStore = create<ChatStoreProps>(
  (set: SetState<ChatStoreProps>) => ({
    isOpen: false,
    isAIMode: true, // Default to AI mode
    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
    toggleAIMode: () => set((state) => ({ isAIMode: !state.isAIMode })),
    setAIMode: (isAI: boolean) => set({ isAIMode: isAI }),
  }),
);

export default useChatStore;
