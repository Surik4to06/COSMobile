import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/Auth';
import MainStack from './src/Stacks/MainStack';
import MainTab from './src/Stacks/MainTab';

export default () => {
	return (
		<AuthProvider>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</AuthProvider>
	)
}