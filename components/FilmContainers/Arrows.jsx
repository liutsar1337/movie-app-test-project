import React from 'react'
import PropTypes from "prop-types"; // Import PropTypes
import "./FilmContainer.css";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ direction, children, disabled, onClick }) {
  return (
    <button
    aria-label={`Scroll ${direction === 'right' ? 'rightArrow' : 'leftArrow'}`}
      className={"movieCardArrow " + `${direction === 'right' ? 'rightArrow' : 'leftArrow'}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "0" : "1",
      }}
    >
      {children}
    </button>
  );
}

// PropTypes for the Arrow component
Arrow.propTypes = {
 direction: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow direction={'left'} disabled={disabled} onClick={() => scrollPrev()}>
      <span className="scroll-button-prev"></span>      
    </Arrow>
  );
}

export function RightArrow({ limit, pushNewItems }) {
  const { isLastItemVisible, scrollNext, visibleElements, items } =
    React.useContext(VisibilityContext);
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (isLastItemVisible) {
      pushNewItems();
    }
    if (items.toItemsWithoutSeparators().length >= limit) {
      setDisabled(isLastItemVisible);
    }
  }, [items, limit, isLastItemVisible]);

  return (
    <Arrow direction={'right'} disabled={disabled} onClick={() => scrollNext()}>
      <span className="scroll-button-next"></span>      
    </Arrow>
  );
}

// PropTypes for the RightArrow component
RightArrow.propTypes = {
  limit: PropTypes.number.isRequired,
  pushNewItems: PropTypes.func.isRequired,
};
