import { FunctionComponent } from "react";

import Card from "../card/Card";
import { smallCardStyles } from "../card/Card.css";
import {
  cardContainerScrollStyles,
  cardContainerStyles,
  historyStyles,
  historyTitleStyles,
} from "./CardHistory.css";

import { Card as CardData } from '../../../shytl-data/card';

interface CardHistoryProps {
  cardHistory: CardData[];
}

const CardHistory: FunctionComponent<CardHistoryProps> = ({ cardHistory }) => {
  return (
    <div className={historyStyles}>
      <div className={historyTitleStyles}>previous cards</div>
      <div className={cardContainerStyles}>
        <div className={cardContainerScrollStyles}>
          {cardHistory.map((c, i) => (
            <Card styleName={smallCardStyles} card={c} key={String(i)+"history"} contentTagsOn={false}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
