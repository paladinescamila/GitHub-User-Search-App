import {useAppStore} from '../stores/AppStore';

import LocationIcon from '../assets/LocationIcon';
import TwitterIcon from '../assets/TwitterIcon';
import WebsiteIcon from '../assets/WebsiteIcon';
import CompanyIcon from '../assets/CompanyIcon';
import {COLORS} from '../constants/styles';

export default function Profile() {
	const {user, theme} = useAppStore();

	if (!user) return null;

	return (
		<div className='px-6 py-8 md:p-12 bg-neutral-0 shadow dark:bg-neutral-800 dark:shadow-none rounded-2xl grid grid-cols-[70px_1fr] md:grid-cols-[117px_1fr] gap-x-5 gap-y-6 md:gap-x-8 md:gap-y-6'>
			<img
				className='w-17.5 h-17.5 md:w-29.25 md:h-29.25 rounded-full bg-neutral-0 md:row-span-4'
				src={user.photo}
			/>
			<div className='flex flex-col md:flex-row justify-between gap-x-4 gap-y-1 overflow-hidden'>
				<div className='flex flex-col gap-[2px] overflow-hidden'>
					<h2 className='text-preset-1 text-neutral-700 dark:text-neutral-0 truncate'>
						{user.name}
					</h2>
					<a
						className='text-preset-4 text-blue-500 dark:text-blue-300 cursor-pointer hover:underline truncate'
						href={`https://github.com/${user.username}`}
						target='_blank'>
						@{user.username}
					</a>
				</div>
				<p className='text-preset-6 text-neutral-500 dark:text-neutral-0 text-nowrap'>
					Joined {user.joinedDate}
				</p>
			</div>
			<p
				className={`text-preset-6 text-neutral-500 dark:text-neutral-0  col-start-1 col-end-3 md:col-start-2 overflow-hidden truncate ${
					user.bio ? '' : 'opacity-70'
				}`}>
				{user.bio || 'This profile has no bio'}
			</p>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-neutral-100 dark:bg-neutral-900 rounded-[10px] px-8 py-4 col-start-1 col-end-3 md:col-start-2'>
				<div className='flex flex-col gap-1'>
					<a
						className='text-neutral-500 dark:text-neutral-0 text-preset-7 hover:underline w-max'
						href={`https://github.com/${user.username}?tab=repositories`}
						target='_blank'>
						Repos
					</a>
					<p className='text-neutral-700 dark:text-neutral-0 text-preset-2'>
						{user.repos}
					</p>
				</div>
				<div className='flex flex-col gap-1'>
					<a
						className='text-neutral-500 dark:text-neutral-0 text-preset-7 hover:underline w-max'
						href={`https://github.com/${user.username}?tab=followers`}
						target='_blank'>
						Followers
					</a>
					<p className='text-neutral-700 dark:text-neutral-0 text-preset-2'>
						{user.followers}
					</p>
				</div>
				<div className='flex flex-col gap-1'>
					<a
						className='text-neutral-500 dark:text-neutral-0 text-preset-7 hover:underline w-max'
						href={`https://github.com/${user.username}?tab=following`}
						target='_blank'>
						Following
					</a>
					<p className='text-neutral-700 dark:text-neutral-0 text-preset-2'>
						{user.following}
					</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 col-start-1 col-end-3 md:col-start-2'>
				<div
					className={`flex flex-row gap-4 items-center ${
						user.location ? '' : 'opacity-70'
					}`}>
					<LocationIcon color={theme === 'dark' ? COLORS.neutral0 : COLORS.neutral900} />
					<p className='text-preset-6 text-neutral-500 dark:text-neutral-0 truncate flex-1'>
						{user.location || 'Not available'}
					</p>
				</div>
				<div
					className={`flex flex-row gap-4 items-center ${
						user.twitter ? '' : 'opacity-70'
					}`}>
					<TwitterIcon color={theme === 'dark' ? COLORS.neutral0 : COLORS.neutral900} />
					<p className='text-preset-6 text-neutral-500 dark:text-neutral-0 truncate flex-1'>
						{user.twitter || 'Not available'}
					</p>
				</div>
				<div
					className={`flex flex-row gap-4 items-center ${
						user.website ? '' : 'opacity-70'
					}`}>
					<WebsiteIcon color={theme === 'dark' ? COLORS.neutral0 : COLORS.neutral900} />
					<a
						className={`text-preset-6 text-neutral-500 dark:text-neutral-0 truncate flex-1 ${
							user.website ? 'cursor-pointer hover:underline' : ''
						}`}
						href={user.website}
						target='_blank'>
						{user.website || 'Not available'}
					</a>
				</div>
				<div
					className={`flex flex-row gap-4 items-center ${
						user.company ? '' : 'opacity-70'
					}`}>
					<CompanyIcon color={theme === 'dark' ? COLORS.neutral0 : COLORS.neutral900} />
					<p className='text-preset-6 text-neutral-500 dark:text-neutral-0 truncate flex-1'>
						{user.company || 'Not available'}
					</p>
				</div>
			</div>
		</div>
	);
}
