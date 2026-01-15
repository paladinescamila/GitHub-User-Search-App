import {useEffect} from 'react';
import {useAppStore} from './stores/AppStore';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
	const {user, error, initialLoad} = useAppStore();

	useEffect(() => {
		initialLoad();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className='bg-neutral-100 dark:bg-neutral-900 w-screen h-screen flex justify-center pt-10 md:pt-32.5 px-4 md:px-8'>
			<section className='flex flex-col gap-500 w-full md:w-182.5'>
				<Header />
				<SearchBar />
				{user ? <Profile /> : null}
				{error ? <NotFound /> : null}
			</section>
		</main>
	);
}

export default App;
