import {useState} from 'react';
import {useAppStore} from '../stores/AppStore';
import {COLORS} from '../constants/styles';

import SunIcon from '../assets/SunIcon';
import MoonIcon from '../assets/MoonIcon';

export default function Header() {
	const {theme, switchTheme} = useAppStore();

	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<header className='flex flex-row justify-between items-center'>
			<h1 className='text-preset-0 text-neutral-900 dark:text-neutral-0'>devfinder</h1>
			<button
				className='flex flex-row items-center gap-200 cursor-pointer group'
				onClick={switchTheme}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<p className='text-neutral-500 dark:text-neutral-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-0 text-preset-8 uppercase'>
					{theme === 'light' ? 'dark' : 'light'}
				</p>

				{theme === 'light' ? (
					<MoonIcon color={isHovered ? COLORS.neutral700 : COLORS.neutral500} />
				) : (
					<SunIcon color={isHovered ? COLORS.neutral0 : COLORS.neutral200} />
				)}
			</button>
		</header>
	);
}
