import React, {useState} from "react"
import axios from "axios"

const Register = () => {
    const [response, setResponse] = useState(null)
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const register = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/api/register", {
            id,
            password,
            name
        }).then((res) => {
            setResponse(res)
        })
    }

    const login = () => {
      window.location.href = "/login"
    }

    const handleInputChange = (e, type) => {
        console.log(e.target.value)
        if(type == "id") {
            setId(e.target.value)
        } else if(type == "password") {
            setPassword(e.target.value)
        }
        else {
            setName(e.target.value)
        }
    }

    
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label>
          이름
          <input onChange={(e) => handleInputChange(e, "name")} />
        </label>
        <label>
          아이디
          <input onChange={ (e) =>handleInputChange(e, "id")} />
        </label>
        <label>
          비밀번호
          <input onChange={ (e) => handleInputChange(e, "password")} />
        </label>
        <button onClick={register}>등록</button>
      </form>
      {response && <p>{response.data.message}</p>}
      {response && response.status === 200 && (
        <button onClick={login}>로그인 페이지로 이동</button>
      )}
    </div>
  )
}

export default Register