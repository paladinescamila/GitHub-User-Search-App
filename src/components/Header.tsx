import {useState} from 'react';
import {useAppStore} from '../stores/AppStore';
import {COLORS} from '../constants/styles';

import SunIcon from '../assets/SunIcon';
import MoonIcon from '../assets/MoonIcon';
import LightLogo from '../assets/light-logo.png';
import DarkLogo from '../assets/dark-logo.png';

import OutlineContainer from './OutlineContainer';

export default function Header() {
	const {theme, switchTheme} = useAppStore();

	const [themeButtonIsHovered, setThemeButtonIsHovered] = useState<boolean>(false);

	return (
		<header className='flex flex-row justify-between items-center'>
			{theme === 'light' ? (
				<img src={LightLogo} alt='GitHub User Search Logo' className='h-6.5' />
			) : (
				<img src={DarkLogo} alt='GitHub User Search Logo' className='h-6.5' />
			)}
			<OutlineContainer
				className='rounded-sm flex flex-row items-center gap-2.5 md:gap-3.5 cursor-pointer group'
				onClick={switchTheme}
				type='button'
				aria-label='Toggle theme'
				onMouseEnter={() => setThemeButtonIsHovered(true)}
				onMouseLeave={() => setThemeButtonIsHovered(false)}>
				<span className='text-neutral-500 dark:text-neutral-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-0 text-preset-8 uppercase'>
					{theme === 'light' ? 'dark' : 'light'}
				</span>

				{theme === 'light' ? (
					<MoonIcon
						color={themeButtonIsHovered ? COLORS.neutral700 : COLORS.neutral500}
					/>
				) : (
					<SunIcon color={themeButtonIsHovered ? COLORS.neutral0 : COLORS.neutral200} />
				)}
			</OutlineContainer>
		</header>
	);
}
