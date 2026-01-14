import {useEffect} from 'react';
import {useAppStore} from './stores/AppStore';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
	const {user, error, loadDefault} = useAppStore();

	useEffect(() => {
		loadDefault();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className='dark:bg-neutral-900 w-screen h-screen flex items-center justify-center'>
			<section className='flex flex-col gap-500 w-182.5'>
				<Header />
				<SearchBar />
				{user ? <Profile /> : null}
				{error ? <NotFound /> : null}
			</section>
		</main>
	);
}

export default App;
