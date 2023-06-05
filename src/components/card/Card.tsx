import { clsx } from "clsx";
import { useState } from "react";
import { cardStyles, red, orange, yellow, green, blue } from "./Card.css";

import { Card as CardData } from '../../../shytl-data/card';

interface CardProps {
  styleName: string;
  /*question: string;*/
  contentTagsOn: boolean;
  card: CardData
}

const convertToContentTagClass = (tag: string) => {
  switch (tag) {
    case 'red':
      return red;
    case 'orange':
      return orange;
    case 'yellow':
      return yellow;
    case 'green':
      return green;
    case 'blue':
      return blue;
  }
};

const convertToContentTagText = (tag: string) => {
  if (tag === undefined || tag === "") {
    return "";
  } 

  let title = "";
  let desc = "";

  if (tag == "red") {
    title = "Gender";
    desc = "can range from: being the gender you are, gender discrimination, sexual harassment"
  }
  else if (tag == "orange") {
    title = "Race";
    desc = "can range from: racial equity, discrimination, racialized policies"
  }
  else if (tag == 'yellow') {
    title = "Nontraditional classes";
    desc = "disabled people, immigrants, basically people who are not young 20s-30s American citizens from privileged backgrounds who graduated from university";
  }
  else if (tag == "green") {
    title = "Interpersonal drama";
    desc = "can range from: from feeling misunderstood at work to psychological manipulation";
  }
  else {
    title = "Working conditions";
    desc = "fair pay/compensation, work-life balance, company policies"
  }

  return (<div><h2>{title}</h2><sub>{desc}</sub></div>)
};

function Card(props: CardProps) {
  /*const asterisk = props.question.indexOf('*');
  const contentTag = asterisk === -1 ? "" : props.question.slice(0, asterisk);*/
  const contentTag = props.card.contentTag || "";

  const [viewContent, setViewContent] = useState(false);

  const toggleViewContent = () => {
    setViewContent(true);
  };

  if (contentTag !== "" && viewContent === false && props.contentTagsOn) {
    return (<div className={clsx(cardStyles, props.styleName, convertToContentTagClass(contentTag))} onClick={toggleViewContent}>
      {convertToContentTagText(contentTag)}
    </div>);
  }
  else {
      return (<div className={clsx(cardStyles, props.styleName)}>
      {/*props.question.slice(asterisk+1)*/props.card.text}</div>);
  }
}

export default Card;
