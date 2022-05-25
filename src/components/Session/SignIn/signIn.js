// import React, { Component } from 'react';


// class SignIn extends Component {
//     render () {
//         return <div>
//             sign In
//         </div>
//     }
// }

// export default SignIn

import styled from "styled-components";
import React, { useState } from 'react'




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.businessnewsdaily.com/app/uploads/2022/04/04080148/1554242443-scaled.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #703B09;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

// const Login = () => {
//   const [userName, setuserName] = useState('')
//   const [password, setPassword] = useState('')
//   const [loading, setLoading] = useState(false)
//   const {login} = useAuth()
 
//     const handleChange = async (e) =>{
//       e.preventDefault()
//      const userObject = {
//        username: userName,
//        password: password
//    };
//    try{
//      setLoading(true)
//      const {data} = await axiosInstance.post('/api/auth/signin', userObject)
//      if (data) {
//        console.log("data...",data)
//      }
//      setLoading(false)
//    }catch(e){
//      setLoading(false)
//      console.log("error", e)
//    }
   
     
//     }

const SignIn = () => {
//   const [loading, setLoading] = useState(false)
//   const [userInfo, setUserInfo] = useState({
//       username: '',
//       password: '',
//   })
//   const [message, setMessage] = useState(null)
//   const { login } = useAuth()

//   // const classes = useStyles()

//   const handleChange = ({ target: { name, value } }) => {
//       let temp = { ...userInfo }
//       temp[name] = value
//       setUserInfo(temp)
//   }

//   const handleFormSubmit = async (event) => {
//       setLoading(true)
//       try {
//           await login(userInfo.username, userInfo.password)
//           history.push('/Home')
//       } catch (e) {
//           console.log(e)
//           setLoading(false)
//       }
//   }



  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
         <Form>
          <Input 
          // onChange = {(e)=>setuserName(e.target.value)}
        //   onChange={handleChange}
          type="text"
          name="username"
        //   value={userInfo.username}
          // value={userInfo.username}
          placeholder="username" />
          <Input 
          // onChange = {(e)=>setPassword(e.target.value)}
        //   onChange={handleChange}
          type="password"
          name="password"
        //   value={userInfo.password}
          // value={userInfo.password}
          placeholder="password" />
          <Button
          // onClick={handleChange}
        //   onSubmit={handleFormSubmit}
          ></Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;