import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  message: '',
  type: 'success',       // 'success' | 'error'
  isOpen: false,
  duration: 3000,

  showNotification: (message, type = 'success', duration = 3000) => {
    set({ message, type, duration, isOpen: true });
    setTimeout(() => set({ isOpen: false }), duration);
  },

  closeNotification: () => set({ isOpen: false }),
}));
