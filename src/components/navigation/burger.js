export const Burger = ({ open, setOpen }) => {
  const styleDiv1 = {
    transform: open ? 'rotate(45deg)' : 'rotate(0)',
  };

  const styleDiv2 = {
    opacity: open ? '0' : '1',
  };

  const styleDiv3 = {
    transform: open ? 'rotate(-45deg)' : 'rotate(0)',
  };

  return (
    <div
      className="burger"
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
      }}
    >
      <div style={styleDiv1} />
      <div style={styleDiv2} />
      <div style={styleDiv3} />
    </div>
  );
};
