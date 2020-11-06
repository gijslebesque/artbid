import React, { useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

const Menu = ({ open, setOpen }) => {
  const ref = useRef();

  useOutsideClick(ref, () => setOpen(false));

  const style = {
    transform: open ? 'translateX(0%)' : 'translateX(100%)',
  };

  return (
    <div className="side-menu" style={style} ref={ref}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </div>
  );
};
export default Menu;
