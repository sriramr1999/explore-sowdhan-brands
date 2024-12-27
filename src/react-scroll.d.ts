declare module 'react-scroll' {
  import * as React from 'react';

  interface ElementProps {
    name: string;
    children?: React.ReactNode; // Add children support
  }

  export const Element: React.ComponentType<ElementProps>;
}