import { Button } from '../Styled/Button.styled';

type Option = 'good' | 'bad' | 'neutral';
type Props = {
  options: Option[];
  onLeaveFeedback: (type: Option) => void;
};

const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => (
  <div>
    {options.map(option => {
      let buttonColor;
      switch (option) {
        case 'good':
          buttonColor = '#04e24e';
          break;
        case 'neutral':
          buttonColor = '#bef53e';
          break;
        case 'bad':
          buttonColor = '#f84242';
          break;
        default:
          buttonColor = 'black';
      }

      return (
        <Button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{ background: buttonColor }}
        >
          {option}
        </Button>
      );
    })}
  </div>
);

export default FeedbackOptions;
