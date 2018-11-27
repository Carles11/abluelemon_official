import React, { createContext } from 'react';
import LOCALES from '../utils/locales/en.json';

const LocalesContext = createContext(LOCALES);

export { LocalesContext };
