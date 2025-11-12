import { create } from 'zustand';

interface GarageState {
  selectedCustomer: string | null;
  setSelectedCustomer: (name: string) => void;

  jobs: string[];
  addJob: (job: string) => void;

  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useGarageStore = create<GarageState>((set) => ({
  selectedCustomer: null,
  setSelectedCustomer: (name) => set({ selectedCustomer: name }),

  jobs: [],
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),

  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  })),
}));
