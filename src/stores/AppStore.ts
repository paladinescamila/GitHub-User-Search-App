import {create} from 'zustand';
import {getDefaultTheme} from '../utils/theme';
import {getUser} from '../api/getUser';

export const useAppStore = create<{
	theme: Theme;
	switchTheme: () => void;
	search: string;
	setSearch: (search: string) => void;
	user: User | null;
	error: string | null;
	onSearch: () => void;
	loadDefault: () => void;
}>((set, get) => ({
	theme: getDefaultTheme(),
	switchTheme: () => set((state) => ({theme: state.theme === 'light' ? 'dark' : 'light'})),
	search: '',
	setSearch: (search) => set({search}),
	user: null,
	error: null,
	onSearch: () => {
		const {search} = get();

		getUser(search).then(({user, error}) => set({user, error}));
	},
	loadDefault: () => {
		getUser('octocat').then(({user, error}) => set({user, error}));
	},
}));
