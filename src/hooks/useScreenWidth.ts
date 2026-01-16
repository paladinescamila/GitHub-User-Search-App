import {useEffect, useMemo, useState} from 'react';

export const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

	const isMobile = useMemo<boolean>(() => screenWidth < 768, [screenWidth]);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {screenWidth, isMobile};
};
