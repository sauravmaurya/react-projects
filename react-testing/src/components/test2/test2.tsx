import React from "react";

type test2Props = {
  name?: string;
};

const Test2 = (props: test2Props) => {
  return <div>hello {props.name}</div>;
};

export default Test2;
