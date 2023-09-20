import React, { useContext, useState, useEffect } from 'react';
import './FilmContainer.css';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

interface ArrowProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

function Arrow({ direction, children, disabled, onClick }: ArrowProps) {
  return (
    <button
      aria-label={`Scroll ${direction === 'right' ? 'rightArrow' : 'leftArrow'}`}
      className={`movieCardArrow ${direction === 'right' ? 'rightArrow' : 'leftArrow'}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0 : 1,
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow direction="left" disabled={disabled} onClick={() => scrollPrev()}>
      <span className="scroll-button-prev"></span>
    </Arrow>
  );
}

interface RightArrowProps {
  limit: number;
  pushNewItems: () => void;
}

export function RightArrow({ limit, pushNewItems }: RightArrowProps) {
  const { isLastItemVisible, scrollNext, visibleElements, items } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  );

  useEffect(() => {
    if (isLastItemVisible) {
      pushNewItems();
    }
    if (items.toItemsWithoutSeparators().length >= limit) {
      setDisabled(isLastItemVisible);
    }
  }, [items, limit, isLastItemVisible]);

  return (
    <Arrow direction="right" disabled={disabled} onClick={() => scrollNext()}>
      <span className="scroll-button-next"></span>
    </Arrow>
  );
}