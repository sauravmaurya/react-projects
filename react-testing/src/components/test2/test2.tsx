import React from "react";
import { test2Props } from "./test2.types";

const Test2 = (props: test2Props) => {
  return <div>hello {props.name}</div>;
};

export default Test2;
