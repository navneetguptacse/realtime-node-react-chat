import axios from "axios";
import PropTypes from "prop-types";

const AuthPage = (props) => {
  const onSubmit = (err) => {
    err.preventDefault();
    const { value } = err.target[0];
    axios
      .post("http://localhost:3001/auth", { username: value })
      .then((err) => props.onAuth({ ...err.data, secret: value }))
      .catch((err) => console.log("Auth Error", err));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

// Define propTypes for your component
AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
