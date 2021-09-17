// import PropTypes from "prop-types";
import { useState } from "react";
import {
  TitleFeedBack,
  TitleStatistic,
  ContainerButtons,
} from "./FeedBack.styled";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export function FeedBack({ title, titleStatistic, titleNoStatistic }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedBack = (option) => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        return;
    }
    setTotal(total + 1);
  };

  return (
    <>
      <TitleFeedBack>{title}</TitleFeedBack>
      <ContainerButtons>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedBack={onLeaveFeedBack}
        />
      </ContainerButtons>
      <TitleStatistic>{titleStatistic}</TitleStatistic>
      {total !== 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      ) : (
        <TitleFeedBack>{titleNoStatistic}</TitleFeedBack>
      )}
      )
    </>
  );
}
