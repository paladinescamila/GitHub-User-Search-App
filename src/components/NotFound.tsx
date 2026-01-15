export default function NotFound() {
	return (
		<div className='p-12 bg-neutral-0 dark:bg-neutral-800 shadow dark:shadow-none rounded-2xl flex flex-col items-center gap-4'>
			<p className='text-preset-2 text-neutral-700 dark:text-neutral-0 text-center'>
				No results found!
			</p>
			<p className='text-preset-6 text-neutral-300 dark:text-neutral-200 text-center'>
				We couldn’t find any GitHub users matching your search. Please double-check the
				username and try again.
			</p>
		</div>
	);
}
