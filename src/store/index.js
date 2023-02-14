import { create } from 'zustand';

const isWindow = () => global.toString() === '[object Window]';

const useAppStore = create((set, get) => ({
  entries: isWindow() ? window.initState.entries : [],
  entry: isWindow() ? window.initState.entry : null,
  setEntries: (entries) => set({ entries }),
  setEntry: (entry) => set({ entry }),
  deleteEntry: async (id) => {
    set({ entries: get().entries.filter((el) => el.id !== id) });
  },
}));

export default useAppStore;
