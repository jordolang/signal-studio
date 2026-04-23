import { create } from 'zustand';

interface ContentState {
  filterType: string | null;
  filterStatus: string | null;
  showNsfw: boolean;
  searchQuery: string;
  viewMode: 'grid' | 'list';

  setFilterType: (type: string | null) => void;
  setFilterStatus: (status: string | null) => void;
  setShowNsfw: (show: boolean) => void;
  setSearchQuery: (query: string) => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  reset: () => void;
}

const initialState = {
  filterType: null as string | null,
  filterStatus: null as string | null,
  showNsfw: false,
  searchQuery: '',
  viewMode: 'grid' as const,
};

export const useContentStore = create<ContentState>((set) => ({
  ...initialState,

  setFilterType: (filterType) => set({ filterType }),
  setFilterStatus: (filterStatus) => set({ filterStatus }),
  setShowNsfw: (showNsfw) => set({ showNsfw }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setViewMode: (viewMode) => set({ viewMode }),
  reset: () => set(initialState),
}));
