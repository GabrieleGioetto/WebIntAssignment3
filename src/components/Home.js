import "../App.css";
import { ChooseNews } from "./ChooseNews";
import { YourNews } from "./YourNews";

export const Home = ({ user }) => {
  return user?.interests?.length > 0 ? <YourNews /> : <ChooseNews />;
};
