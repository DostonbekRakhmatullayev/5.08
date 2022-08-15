import "./login.css"
import axios from "axios";
import { useRef } from "react";
import { useAuth } from "../../hook/UseAuth";

export const Login = () => {
  const { token, setToken } = useAuth();

  const elEmail = useRef();
  const elPassword = useRef();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: elEmail.current.value,
        password: elPassword.current.value,
      })
      .then(function (response) {
        if (response.data) {
          setToken(response.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="login--box mt-5 mb-4">
      <h1>Login page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          ref={elEmail}
          className="form-control w-25 mx-auto my-3"
          type="email"
          placeholder="Email..."
          name="Email"
        />
        <input
          ref={elPassword}
          className="form-control w-25 mx-auto"
          type="password"
          placeholder="Password..."
          name="Pass"
        />
        <button className="btn btn-primary mt-3" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
