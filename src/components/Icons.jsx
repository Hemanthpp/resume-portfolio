import React from 'react';

export function ArrowUpRight({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
    </svg>
  );
}

export function PlayIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
         fill="currentColor" className={className}>
      <polygon points="6 4 20 12 6 20 6 4"/>
    </svg>
  );
}
