import React from "react";

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      title: {link.title} <br></br> author: ({link.author})
    </div>
  );
};

export default Link;
