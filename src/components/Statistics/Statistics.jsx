import PropTypes from "prop-types";
import { NameStatic, ValueStatistic } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  positivePercentage = Math.round((good / total) * 100);

  return (
    <div>
      <NameStatic>
        Good:
        <ValueStatistic>{good}</ValueStatistic>
      </NameStatic>
      <NameStatic>
        Neutral:
        <ValueStatistic>{neutral}</ValueStatistic>
      </NameStatic>
      <NameStatic>
        Bad:
        <ValueStatistic>{bad}</ValueStatistic>
      </NameStatic>
      <NameStatic>
        Total:
        <ValueStatistic>{total}</ValueStatistic>
      </NameStatic>
      <NameStatic>
        Positive feedback:
        <ValueStatistic>{positivePercentage}%</ValueStatistic>
      </NameStatic>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
