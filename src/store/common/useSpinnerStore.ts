import useShallowStore from '@/hooks/common/useShallow';
import { isEmpty } from '@/utils/common';
import { create } from 'zustand';

interface State {
  isLoading: Array<boolean>;
}

interface Action {
  activeLoading: () => void;
  inactiveLoading: () => void;
}

const initStoreData: State = {
  isLoading: [],
};

const spinnerStore = create<State & Action>((setState) => ({
  ...initStoreData,

  activeLoading: () =>
    setState((prev) => ({ isLoading: [...prev.isLoading, true] })),
  inactiveLoading: () =>
    setState((prev) => ({
      isLoading: !isEmpty(prev.isLoading) ? prev.isLoading.slice(1) : [],
    })),
}));

const useSpinnerStore = <T extends keyof (State & Action)>(keys: T[]) => {
  return useShallowStore(spinnerStore, keys);
};

export default useSpinnerStore;
