/** @format */

import { FC } from 'react';

import { ButtonContainer } from './styles';

export const Button: FC = ({ children }) => {
	return <ButtonContainer type='button'>{children}</ButtonContainer>;
};
