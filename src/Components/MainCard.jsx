import Image from "./Image";
import Title from "./MainTitle";
import Text from "./Text";
import Button from "./Button";
import "../Styles/maincard.css";
import "../Styles/image.css";
import "../Styles/buttons.css";
const Card = ({ image, title, text, button }) => {
  return (
    <div className="container">
      <Image image={image} />
      <Title title={title} />
      <Text text={text} />
      <div className="btn-container">
        <div className="btn-display">
          {button.map((text) => (
            <Button button={text} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
