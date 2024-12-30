import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/Auth';
import MainStack from './src/Stacks/MainStack';

export default () => {
	

	return (
		<AuthProvider>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</AuthProvider>
	)
}