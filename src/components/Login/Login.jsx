import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
import { setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/Firebase";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function goToDashboard() {
    let path = "/";
    navigate(path);
  }

  async function getDocument(uid) {
    const docRef = doc(db, "users", uid);
    let displayName;
    await getDoc(docRef).then((doc) => {
      displayName = doc.data().displayName;
    });
    return displayName;
  }

  const login = (e) => {
    e.preventDefault();
    // setPersistence;
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const displayName = await getDocument(user.uid);
        dispatch(
          setActiveUser({
            userId: user.uid,
            userName: displayName,
            userEmail: user.email,
          })
        );

        goToDashboard();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <h1 className="mb-3">Login</h1>
      <div className="acc mb-3">
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/Register">Register</Link>
          </span>
        </p>
      </div>
      <div className="or d-flex align-items-center  gap-4 my-4">
        <span></span>
        <p>or</p>
        <span></span>
      </div>
      <form onSubmit={login}>
        <div className="log">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Hussien@gmail.com"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={login} type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
