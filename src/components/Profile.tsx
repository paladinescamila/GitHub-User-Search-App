import {useAppStore} from '../stores/AppStore';

import LocationIcon from '../assets/LocationIcon';
import TwitterIcon from '../assets/TwitterIcon';
import WebsiteIcon from '../assets/WebsiteIcon';
import CompanyIcon from '../assets/CompanyIcon';

export default function Profile() {
	const {user} = useAppStore();

	if (!user) return null;

	return (
		<div className='p-12 dark:bg-neutral-800 rounded-2xl flex flex-row gap-8'>
			<img className='w-29.25 h-29.25 rounded-full bg-neutral-0' src={user.photo} />
			<div className='flex flex-col gap-6 w-full overflow-hidden'>
				<div className='flex flex-col flex-1'>
					<div className='flex flex-row justify-between gap-2 flex-1'>
						<h2 className='text-preset-1 text-neutral-0 truncate flex-1'>
							{user.name}
						</h2>
						<p className='text-preset-6 text-neutral-0'>Joined {user.joinedDate}</p>
					</div>
					<a
						className='text-preset-4 text-blue-300 cursor-pointer hover:underline truncate  flex-1'
						href={`https://github.com/${user.username}`}
						target='_blank'>
						@{user.username}
					</a>
				</div>
				<p
					className={`text-preset-6 text-neutral-0 truncate  flex-1 ${
						user.bio ? '' : 'opacity-70'
					}`}>
					{user.bio || 'This profile has no bio'}
				</p>
				<div className='flex flex-row dark:bg-neutral-900 rounded-[10px] px-8 py-4'>
					<div className='flex flex-col gap-1 flex-1'>
						<a
							className='text-neutral-0 text-preset-7 hover:underline w-max'
							href={`https://github.com/${user.username}?tab=repositories`}
							target='_blank'>
							Repos
						</a>
						<p className='text-neutral-0 text-preset-2'>{user.repos}</p>
					</div>
					<div className='flex flex-col gap-1 flex-1'>
						<a
							className='text-neutral-0 text-preset-7 hover:underline w-max'
							href={`https://github.com/${user.username}?tab=followers`}
							target='_blank'>
							Followers
						</a>
						<p className='text-neutral-0 text-preset-2'>{user.followers}</p>
					</div>
					<div className='flex flex-col gap-1 flex-1'>
						<a
							className='text-neutral-0 text-preset-7 hover:underline w-max'
							href={`https://github.com/${user.username}?tab=following`}
							target='_blank'>
							Following
						</a>
						<p className='text-neutral-0 text-preset-2'>{user.following}</p>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div
						className={`flex flex-row gap-4 items-center ${
							user.location ? '' : 'opacity-70'
						}`}>
						<LocationIcon />
						<p className='text-preset-6 text-neutral-0 truncate flex-1'>
							{user.location}
						</p>
					</div>
					<div
						className={`flex flex-row gap-4 items-center ${
							user.twitter ? '' : 'opacity-70'
						}`}>
						<TwitterIcon />
						<p className='text-preset-6 text-neutral-0 truncate flex-1'>
							{user.twitter || 'Not available'}
						</p>
					</div>
					<div
						className={`flex flex-row gap-4 items-center ${
							user.website ? '' : 'opacity-70'
						}`}>
						<WebsiteIcon />
						<a
							className={`text-preset-6 text-neutral-0 truncate flex-1 ${
								user.website ? 'cursor-pointer hover:underline' : ''
							}`}
							href={user.website}>
							{user.website || 'Not available'}
						</a>
					</div>
					<div
						className={`flex flex-row gap-4 items-center ${
							user.company ? '' : 'opacity-70'
						}`}>
						<CompanyIcon />
						<p className='text-preset-6 text-neutral-0 truncate flex-1'>
							{user.company || 'Not available'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
