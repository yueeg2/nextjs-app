import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div style={{ position: 'absolute', top: 0, right: 0 }}>
    {children}
  </div>
}