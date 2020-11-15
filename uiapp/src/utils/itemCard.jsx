import PropTypes from "prop-types";
import { connect } from "react-redux";

const itemCard = ({
  item,
  buttonMessage,
  cartFunction,
  cardStyles,
  buttonStyles,
  body,
}) => {
  const { inStock } = item;
  const availability = inStock ? "In Stock" : "Out of Stock";
  return (
    <div style={cardStyles}>
      {body}
      <button
        disabled={!inStock}
        style={buttonStyles}
        onClick={() => cartFunction(item)}
      >
        {buttonMessage}
      </button>
    </div>
  );
};

itemCard.propTypes = {
  item: PropTypes.object.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  cartFunction: PropTypes.func.isRequired,
  buttonStyles: PropTypes.object.isRequired,
  cardStyles: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
};

export default connect()(itemCard);
