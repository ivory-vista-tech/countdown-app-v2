import { useState, useEffect } from "react";

interface LocalStorageProp {
  key: string;
  defaultValue: string;
}

function getStorageValue({ key, defaultValue }: LocalStorageProp) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key) || defaultValue;
    const initial = JSON.parse(saved);

    return initial;
  }

  return defaultValue;
}

export const useLocalStorage = ({ key, defaultValue }: LocalStorageProp) => {
  const [value, setValue] = useState(() => {
    return getStorageValue({ key, defaultValue });
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
