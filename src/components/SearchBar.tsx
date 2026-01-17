import SearchIcon from '../assets/SearchIcon';

import {COLORS} from '../constants/styles';
import {useScreenWidth} from '../hooks/useScreenWidth';
import {useAppStore} from '../stores/AppStore';
import OutlineContainer from './OutlineContainer';

export default function SearchBar() {
	const {search, setSearch, theme, error, onSearch} = useAppStore();
	const {isMobile} = useScreenWidth();

	return (
		<form className='relative'>
			<label className='absolute left-3 md:left-6 top-1/2 -translate-y-1/2'>
				<SearchIcon
					color={theme === 'dark' ? COLORS.blue300 : COLORS.blue500}
					size={isMobile ? 20 : 24}
				/>
			</label>
			<input
				type='text'
				placeholder='Search GitHub username…'
				aria-label='Search GitHub username'
				className='text-preset-3-mobile md:text-preset-3 text-neutral-500 dark:text-neutral-0 min-w-0 bg-neutral-0 dark:bg-neutral-800 shadow dark:shadow-none rounded-2xl py-[25.5px] md:py-5.5 w-full pl-11 md:pl-17 pr-32 focus:dark-outline'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyPress={(e) => (e.key === 'Enter' ? onSearch() : null)}
			/>
			{error ? (
				<p className='text-preset-5 text-red-500 absolute top-1/2 -translate-y-1/2 right-32 bg-neutral-0 dark:bg-neutral-800 pl-2'>
					No results
				</p>
			) : null}
			<OutlineContainer
				className='rounded-[10px] absolute right-3 top-1/2 -translate-y-1/2 text-neutral-0 text-preset-5 px-6 py-3 bg-blue-500 hover:bg-blue-300 cursor-pointer'
				onClick={onSearch}>
				Search
			</OutlineContainer>
		</form>
	);
}
