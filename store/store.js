import { create } from 'zustand';

export const useStore = create((set) => ({
  // Modal state
  modalOpen: false,
  modalType: '',
  
  // Post state
  post: null,
  handlePost: false,
  useSSRPosts: true,
  
  // Modal actions
  openModal: (type) => set({ modalOpen: true, modalType: type }),
  closeModal: () => set({ modalOpen: false, modalType: '' }),
  
  // Post actions
  setPost: (post) => set({ post }),
  clearPost: () => set({ post: null }),
  setHandlePost: (value) => set({ handlePost: value }),
  setUseSSRPosts: (value) => set({ useSSRPosts: value }),
}));
