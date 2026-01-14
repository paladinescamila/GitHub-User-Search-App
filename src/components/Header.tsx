import {useAppStore} from '../stores/AppStore';
import SunIcon from '../assets/SunIcon';

export default function Header() {
	const {theme, switchTheme} = useAppStore();

	return (
		<header className='flex flex-row justify-between items-center'>
			<h1 className='text-preset-1 dark:text-neutral-0'>devfinder</h1>
			<button
				className='flex flex-row items-center gap-200 cursor-pointer'
				onClick={switchTheme}>
				<p className='dark:text-neutral-200 dark:hover:text-neutral-0 text-preset-8 uppercase'>
					{theme === 'light' ? 'dark' : 'light'}
				</p>

				<SunIcon />
			</button>
		</header>
	);
}
