// useClient.ts

import { useState as useStateClient, useEffect as useEffectClient } from 'react';

export function useState<T>(initialState: T | (() => T)) {
  if (typeof window !== 'undefined') {
    return useStateClient<T>(initialState);
  } else {
    return [initialState, () => {}] as const; // Dummy useState for server-side rendering
  }
}

export function useEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
  if (typeof window !== 'undefined') {
    return useEffectClient(effect, deps);
  } else {
    return; // Dummy useEffect for server-side rendering
  }
}
