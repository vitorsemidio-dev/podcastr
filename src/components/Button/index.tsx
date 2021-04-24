/** @format */

import { FC } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
	onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<ButtonContainer type='button' onClick={onClick}>
			{children}
		</ButtonContainer>
	);
};
