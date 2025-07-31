import { create } from 'zustand'

export const useThemeStore = create((set) => {
  return {
    theme: localStorage.getItem("streamify-theme") || "forest",
    setTheme: (theme) => {
        localStorage.setItem("streamify-theme", theme)
        set({ theme });
    },
  };
});