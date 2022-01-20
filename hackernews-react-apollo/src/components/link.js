import React from "react";

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      id: {link.id} <br></br> name: ({link.name})
    </div>
  );
};

export default Link;
