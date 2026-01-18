import React, {useState} from 'react';

interface OutlineContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	duration?: number;
}

export default function OutlineContainer({
	className,
	children,
	onClick,
	duration = 500,
	...rest
}: OutlineContainerProps) {
	const [isOutlined, setIsOutlined] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		onClick?.(e);

		setIsOutlined(true);
		setTimeout(() => setIsOutlined(false), duration);
	};

	return (
		<button
			onClick={handleClick}
			className={`${isOutlined ? 'light-outline dark:dark-outline' : ''} ${className || ''}`}
			{...rest}>
			{children}
		</button>
	);
}
