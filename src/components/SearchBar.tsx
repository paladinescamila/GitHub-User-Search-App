import SearchIcon from '../assets/SearchIcon';

import {COLORS} from '../constants/styles';
import {useAppStore} from '../stores/AppStore';

export default function SearchBar() {
	const {search, setSearch, theme, error, onSearch} = useAppStore();

	return (
		<div className='flex flex-row items-center dark:bg-neutral-800 rounded-2xl pl-6 pr-3 py-[10.5px] gap-5'>
			<SearchIcon color={theme === 'dark' ? COLORS.blue300 : COLORS.blue500} />
			<input
				type='text'
				placeholder='Search GitHub username...'
				className='flex-1 text-preset-3 text-neutral-0 outline-0'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyPress={(e) => (e.key === 'Enter' ? onSearch() : null)}
			/>
			{error ? <p className='text-preset-5 text-red-500'>No results</p> : null}
			<button
				className='text-neutral-0 text-preset-5 px-300 py-150 dark:bg-blue-500 dark:hover:bg-blue-300 rounded-[10px] cursor-pointer'
				onClick={onSearch}>
				Search
			</button>
		</div>
	);
}
