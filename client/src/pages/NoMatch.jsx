import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <div className="text-2xl mx-auto my-24">
          <h1>
            You drunk? That page don't friggin exist {" "}
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </div>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
