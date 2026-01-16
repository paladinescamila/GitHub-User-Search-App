import React, {useState} from 'react';

export default function OutlineContainer({
	className,
	children,
	duration = 500,
}: {
	className?: string;
	children: React.ReactNode;
	duration?: number;
}) {
	const [isOutlined, setIsOutlined] = useState<boolean>(false);

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		setIsOutlined(true);
		setTimeout(() => setIsOutlined(false), duration);
	};

	return (
		<button
			onClick={onClick}
			className={`${isOutlined ? 'light-outline dark:dark-outline' : ''} ${className || ''}`}>
			{children}
		</button>
	);
}
