import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set) => ({
      // initial state
      user: {
        id: null,
        username: null,
        email: null
      },

      // actions
      setUser: (newUser) => set({ user: newUser }),
      clearUser: () =>
        set({
          user: {
            id: null,
            username: null,
            email: null
          },
        }),

      // hydration flag
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: 'user-storage',                            // key in localStorage
      storage: createJSONStorage(() => localStorage),  // use browser localStorage
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)                    // mark hydration complete
      },
    }
  )
)
