import {useAppStore} from '../stores/AppStore';

export default function ProfileStats() {
	const {user} = useAppStore();

	if (!user) return null;

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-4 bg-neutral-100 dark:bg-neutral-900 rounded-[10px] px-5 py-4 md:px-8 md:py-4 col-start-1 col-end-3 md:col-start-2'>
			<div className='flex flex-col gap-1'>
				<a
					className='text-neutral-500 dark:text-neutral-0 text-preset-7 hover:underline w-max'
					href={`https://github.com/${user.username}?tab=repositories`}
					target='_blank'>
					Repos
				</a>
				<p className='text-neutral-700 dark:text-neutral-0 text-preset-2'>{user.repos}</p>
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
	);
}
