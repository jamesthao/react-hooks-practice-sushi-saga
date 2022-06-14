import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {

  const [sushiIndex, setSushiIndex] = useState (0)

  const sushiComponents = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => (<Sushi key = {sushi.id} sushi = {sushi}/>));

  function handleMoreSushi (){
    setSushiIndex(sushiIndex + 4)
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
