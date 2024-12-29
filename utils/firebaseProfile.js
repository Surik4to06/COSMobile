import React from 'react';
import { Auth } from './firebase';

const user = Auth.currentUser;
export const displayName = user.displayName;
export const Email = user.email;
export const photoURL = user.photoURL;