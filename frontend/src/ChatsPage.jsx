import PropTypes from "prop-types";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "006f32f2-bc29-4a2b-b924-141205ff0c06",
    props.username,
    props.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

// Define propTypes for your component
ChatsPage.propTypes = {
  username: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
};

export default ChatsPage;
