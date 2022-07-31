import React from 'react';
import {MemoryRouter} from "react-router-dom";

import '../src/index.css';


export const Decorator = ({children}) => (
  <MemoryRouter>{children}</MemoryRouter>
);