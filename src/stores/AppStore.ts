import {create} from 'zustand';
import {getDefaultTheme} from '../utils/theme';
import {getUser} from '../api/getUser';

export const useAppStore = create<{
	theme: Theme;
	setTheme: (theme: Theme) => void;
	switchTheme: () => void;

	search: string;
	setSearch: (search: string) => void;

	user: User | null;
	error: string | null;

	initialLoad: () => void;
	onSearch: () => void;
}>((set, get) => ({
	theme: getDefaultTheme(),

	setTheme: (theme) => {
		if (theme === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');

		set({theme});
	},

	switchTheme: () => {
		const {theme, setTheme} = get();
		setTheme(theme === 'dark' ? 'light' : 'dark');
	},

	search: '',
	setSearch: (search) => set({search}),

	user: null,
	error: null,

	initialLoad: () => {
		get().setTheme(getDefaultTheme());
		getUser('octocat').then(({user, error}) => set({user, error}));
	},

	onSearch: () => {
		const {search} = get();

		const trimmedSearch = search.trim();

		if (trimmedSearch === '') return;

		getUser(trimmedSearch).then(({user, error}) => set({user, error}));
	},
}));
