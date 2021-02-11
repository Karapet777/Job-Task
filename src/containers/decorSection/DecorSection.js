import Item from "components/decorItem/Item";
import React from "react";

import LivingRoom from "assets/img/LivingRoom.png";
import Kitchen from "assets/img/Kitchen-img.png";
import Bathroom from "assets/img/Bathroom-img.png";
import Bedroom from "assets/img/Bedroom-img.png";

import "./DecorSection.scss";

const DecorSection = () => {
  return (
    <div className="app-Decor-container">
      <div className="app-Decor-container__block-title">
        <h2>High quality home decor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu
          sagittis feugiat nunc sit est vitae eget. Nisl at sed ultrices
          pharetra massa consectetur lobortis velit fames. Iaculis arcu rhoncus
          tellus porta ornare nunc libero. Accumsan nisi, ullamcorper non
          venenatis egestas convallis sed dignissim massa.
        </p>
      </div>
      <div className="app-Decor-container__block-items">
        <div className="app-Decor-container__block-item">
          <Item src={LivingRoom} nameDecor="Living Rooom" />
        </div>
        <div className="app-Decor-container__block-item">
          <Item src={Kitchen} nameDecor="Kitchen" />
        </div>
      </div>
      <div className="app-Decor-container__block-items">
        <div className="app-Decor-container__block-item">
          <Item src={Bedroom} nameDecor="Bedroom" />
        </div>
        <div className="app-Decor-container__block-item Bathroom">
          <Item src={Bathroom} nameDecor="Bathroom" />
        </div>
      </div>
    </div>
  );
};

export default DecorSection;
