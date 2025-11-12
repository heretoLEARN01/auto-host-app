type Callback = (payload: any) => void;
const listeners: Record<string, Callback[]> = {};

export const eventBus = {
  on: (event: string, cb: Callback) => {
    listeners[event] = listeners[event] || [];
    listeners[event].push(cb);
  },
  emit: (event: string, payload: any) => {
    listeners[event]?.forEach((cb) => cb(payload));
  },
};
