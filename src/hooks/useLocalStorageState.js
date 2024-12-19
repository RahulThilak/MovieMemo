import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  // Lazy evaluation: Initializing state based on callback function
  // because we wanted to get the value from local storage. Here we cannot pass arguments in the callback function, it needs to be a pure function.

  //Data was stored as string we stored it, so we now need to convert it back to array
  const [value, setValue] = useState(function () {
    const storedVal = localStorage.getItem(key);
    // Checking if the storedVal exists
    return storedVal ? JSON.parse(storedVal) : initialState;
  });

  useEffect(
    function () {
      // In Local storage we store key-value pairs and values are ONLY in strings, so we convert
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
