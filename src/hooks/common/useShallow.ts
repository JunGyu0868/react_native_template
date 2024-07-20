import { StoreApi, UseBoundStore } from 'zustand';
import { shallow } from 'zustand/shallow';

const useShallowStore = <T, K extends keyof T>(
  store: UseBoundStore<StoreApi<T>>,
  keys: K[],
): Pick<T, K> => {
  return store((state) => {
    const result = {} as { [K in keyof T]: T[K] };
    keys.forEach((key) => {
      result[key] = state[key];
    });
    return result;
  }, shallow);
};

export default useShallowStore;
