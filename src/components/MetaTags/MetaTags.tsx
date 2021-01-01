import React, { ReactElement } from "react";
//@ts-ignore
import Meta from "react-meta-tags";
interface Props {}
export default function MetaTags({}: Props): ReactElement {
  return (
    <Meta>
      <title>Mohammad Maleh Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Meta>
  );
}
