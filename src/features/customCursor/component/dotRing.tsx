import React, { useContext } from 'react';
import '../dotRing.scss';
import { MouseContext } from '../../../shared/context/mouse-context';
import UseMousePosition from '../../../shared/hooks/useMousePosition';

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = UseMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={'ring ' + cursorType}
      ></div>
      <div
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
