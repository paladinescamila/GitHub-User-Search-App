import {useAppStore} from '../stores/AppStore';

import ProfileStats from './ProfileStats';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
	const {user} = useAppStore();

	if (!user) return null;

	return (
		<div className='px-6 py-8 md:p-12 md:pr-13 bg-neutral-0 shadow dark:bg-neutral-800 dark:shadow-none rounded-2xl grid grid-cols-[70px_1fr] md:grid-cols-[117px_1fr] gap-x-5 gap-y-6 md:gap-x-8 md:gap-y-6'>
			<img
				className='w-17.5 h-17.5 md:w-29.25 md:h-29.25 rounded-full bg-neutral-0 md:row-span-4'
				src={user.photo}
				alt={`${user.name} profile picture`}
			/>
			<div className='flex flex-col md:flex-row justify-between gap-x-4 gap-y-1 overflow-hidden'>
				<div className='flex flex-col gap-0.5 overflow-hidden'>
					<h1 className='text-preset-1 text-neutral-700 dark:text-neutral-0 truncate'>
						{user.name}
					</h1>
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
			<ProfileStats />
			<ProfileInfo />
		</div>
	);
}
