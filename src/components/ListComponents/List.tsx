import React from "react";

function List({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cyan-700 w-full max-w-5xl flex flex-col">{children}</div>
  );
}

export default List;
