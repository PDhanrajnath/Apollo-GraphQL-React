import React from "react";

const Link = (props) => {
  const { link } = props;
  return (
    <>
      <div>
        | id: {link.id} | name: {link.name}
      </div>
    </>
  );
};

export default Link;
