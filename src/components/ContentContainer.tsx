import React from "react";

function ContentContainer({ children }: React.PropsWithChildren) {
  return <div className="ml-60">{children}</div>;
}

export default ContentContainer;
