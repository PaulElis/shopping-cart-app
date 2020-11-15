import { connect } from "react-redux";
import Inventory from "../inventory/inventory";

const Landing = () => {
  return <Inventory />;
};

export default connect()(Landing);
