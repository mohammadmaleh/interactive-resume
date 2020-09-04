import React, { ReactElement } from "react";

interface Props {
  value: number;
}

export default function TestPage({ value }: Props): ReactElement {
  return <div>{value}</div>;
}
