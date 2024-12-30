import {create} from 'zustand';

const usePreloader = create((set) => ({
  isLoading: true, 
  isPlaying: true,
  setPlaying: (state) => set({isPlaying: state}),
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default usePreloader;
