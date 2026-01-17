import {useMemo} from 'react';
import {useAppStore} from '../stores/AppStore';
import {COLORS} from '../constants/styles';

import LocationIcon from '../assets/LocationIcon';
import TwitterIcon from '../assets/TwitterIcon';
import WebsiteIcon from '../assets/WebsiteIcon';
import CompanyIcon from '../assets/CompanyIcon';

export default function ProfileInfo() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 col-start-1 col-end-3 md:col-start-2'>
			<ProfileInfoItem type='location' />
			<ProfileInfoItem type='twitter' />
			<ProfileInfoItem type='website' />
			<ProfileInfoItem type='company' />
		</div>
	);
}

function ProfileInfoItem({type}: {type: 'location' | 'twitter' | 'website' | 'company'}) {
	const {user, theme} = useAppStore();

	const iconColor = useMemo(
		() => (theme === 'dark' ? COLORS.neutral0 : COLORS.neutral900),
		[theme],
	);

	const link = useMemo(() => {
		if ((type !== 'twitter' && type !== 'website') || !user || !user[type]) return '';

		const url = user?.[type] || '';

		return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
	}, [user, type]);

	if (!user) return null;

	return (
		<div className={`flex flex-row gap-4 items-center ${user[type] ? '' : 'opacity-70'}`}>
			{type === 'location' ? <LocationIcon color={iconColor} /> : null}
			{type === 'twitter' ? <TwitterIcon color={iconColor} /> : null}
			{type === 'website' ? <WebsiteIcon color={iconColor} /> : null}
			{type === 'company' ? <CompanyIcon color={iconColor} /> : null}
			<p
				className={`text-preset-6 text-neutral-500 dark:text-neutral-0 truncate flex-1 ${
					link ? 'cursor-pointer hover:underline' : ''
				}`}>
				{link ? (
					<a href={link} target='_blank' rel='noopener noreferrer'>
						{user[type] || 'Not Available'}
					</a>
				) : (
					user[type] || 'Not Available'
				)}
			</p>
		</div>
	);
}
