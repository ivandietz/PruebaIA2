import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const CarIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.337 2.053a.75.75 0 01.463 0l12.5 5.001a.75.75 0 01.012 1.4l-3.321 1.328a.75.75 0 00-.498.498l-1.328 3.321a.75.75 0 01-1.4-.012l-5.001-12.5a.75.75 0 010-.463zM15.75 12.375a3.375 3.375 0 10-4.773 4.773l1.875 1.875a.75.75 0 001.06 0l1.838-1.838a.75.75 0 000-1.06l-1.875-1.875zM12.375 15.75a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"
      clipRule="evenodd"
    />
    <path d="M21.75 12.375a.75.75 0 01-1.06 0l-4.125-4.125a.75.75 0 010-1.061l.25-.25a.75.75 0 011.06 0l4.125 4.125a.75.75 0 010 1.06l-.25.25z" />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.52.176 1.078.292 1.664.39A9 9 0 1121 12c-1.294 0-2.522-.31-3.646-.865l-1.663-1.664M11.42 15.17L5.877 21A2.652 2.652 0 013 17.25l5.877-5.877m0 0a3 3 0 10-4.243-4.243m4.243 4.243L15.17 11.42" />
    </svg>
);
