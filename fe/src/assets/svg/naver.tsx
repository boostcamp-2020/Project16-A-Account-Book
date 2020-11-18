import React, { FC } from 'react';

interface Props {
  size?: string;
}
const NaverSvg: FC<Props> = ({ size = 'sm' }): React.ReactElement => {
  return (
    <>
      <svg
        data-name="Слой 1"
        id="Слой_1"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        width={size === 'sm' ? '1.3rem' : '2rem'}
        height={size === 'sm' ? '1.3rem' : '2rem'}
      >
        <title />
        <path d="M126,128H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H126a2,2,0,0,1,2,2V126A2,2,0,0,1,126,128ZM4,124H124V4H4Z" />
        <path d="M98,97H75a2,2,0,0,1-1.63-.84L55,70.27V95a2,2,0,0,1-2,2H30a2,2,0,0,1-2-2V33a2,2,0,0,1,2-2H53a2,2,0,0,1,1.63.84L73,57.73V33a2,2,0,0,1,2-2H98a2,2,0,0,1,2,2V95A2,2,0,0,1,98,97ZM76,93H96V35H77V64a2,2,0,0,1-3.63,1.16L52,35H32V93H51V64a2,2,0,0,1,3.63-1.16Z" />
      </svg>
    </>
  );
};

export default NaverSvg;
