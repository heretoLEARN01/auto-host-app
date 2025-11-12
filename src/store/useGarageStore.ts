import { create } from 'zustand';

export type Customer = {
  id: number;
  name: string;
};

type GarageStore = {
  customers: Customer[];
  addCustomer: (name: string) => void;
};

export const useGarageStore = create<GarageStore>((set) => ({
  customers: [{ id: 1, name: 'John Doe' }],
  addCustomer: (name) =>
    set((state) => ({
      customers: [
        ...state.customers,
        { id: state.customers.length + 1, name },
      ],
    })),
}));
