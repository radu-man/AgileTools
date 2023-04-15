import React from "react";
import List from "../components/ListComponents/List";
import Row from "../components/ListComponents/Row";

function RetroBoard() {
  return (
    <div>
      <List>
        {
          <>
            <Row />
            <Row />
            <Row />
          </>
        }
      </List>
    </div>
  );
}

export default RetroBoard;
