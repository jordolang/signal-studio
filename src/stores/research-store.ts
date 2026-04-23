import { create } from 'zustand';

interface ResearchState {
  selectedSubreddits: string[];
  timePeriod: 'daily' | 'weekly' | 'monthly';
  showNsfw: boolean;
  searchQuery: string;

  toggleSubreddit: (subreddit: string) => void;
  setTimePeriod: (period: 'daily' | 'weekly' | 'monthly') => void;
  setShowNsfw: (show: boolean) => void;
  setSearchQuery: (query: string) => void;
  reset: () => void;
}

const initialState = {
  selectedSubreddits: [] as string[],
  timePeriod: 'weekly' as const,
  showNsfw: false,
  searchQuery: '',
};

export const useResearchStore = create<ResearchState>((set) => ({
  ...initialState,

  toggleSubreddit: (subreddit) =>
    set((state) => ({
      selectedSubreddits: state.selectedSubreddits.includes(subreddit)
        ? state.selectedSubreddits.filter((s) => s !== subreddit)
        : [...state.selectedSubreddits, subreddit],
    })),

  setTimePeriod: (timePeriod) => set({ timePeriod }),
  setShowNsfw: (showNsfw) => set({ showNsfw }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  reset: () => set(initialState),
}));
