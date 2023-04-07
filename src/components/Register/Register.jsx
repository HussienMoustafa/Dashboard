import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Await, Link, useNavigate } from "react-router-dom";
import { auth, createUserDocument } from "../../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  // const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  const navigate = useNavigate();
  function goToLogin() {
    let path = "/Login";
    navigate(path);
  }

  const register = (e) => {
    // console.log(5555);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(async (userCredential) => {
        // alert("You are successfully registered .. You can Login now");
        // setDisplayName();
        // console.log(userCredential.user);
        await createUserDocument(userCredential, { displayName });
        goToLogin();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // const register = async () => {
  //   console.log(55555);
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  return (
    <div className="register">
      <h1 className="mb-3">Register</h1>
      <div className="acc mb-3">
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/Login">Login</Link>
          </span>
        </p>
      </div>
      <div className="or d-flex align-items-center  gap-4 my-4">
        <span></span>
        <p>or</p>
        <span></span>
      </div>
      <form onSubmit={register}>
        <div className="reg">
          <div className="mb-4">
            <label htmlFor="displayName">Display Name</label>
            <br />
            <input
              type="text"
              name="displayName"
              placeholder="Hussien Moustafa"
              onChange={(event) => {
                setDisplayName(event.target.value);
              }}
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input type="text" name="lastName" placeholder="Moustafa" />
          </div> */}
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Hussien@gmail.com"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="*********"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={register} className="reg-button">
          Register
        </button>
      </form>
    </div>
  );
}
