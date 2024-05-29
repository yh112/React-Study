import React, { useState } from "react";
import axios from "../../node_modules/axios/index";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = (e, type) => {
    if (type == "id") {
      setId(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const login = async () => {
    axios.post("http://localhost:8080/api/login", {
      id,
      password,
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("로그인 성공");
        setName(res.data);
      }
    });
  }

  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label>
          아이디
          <input onChange={(e) => handleInputChange(e, "id")} />
        </label>
        <label>
          비밀번호
          <input onChange={(e) => handleInputChange(e, "password")} />
        </label>
        <button onClick={login}>로그인</button>
      </form>
      <p>{name}</p>
    </div>
  );
};

export default Login;
