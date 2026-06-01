import React from "react";

const Login = () => {
  const [emailId, setEmailId] = useState()
  const [password, setPassword ] = useState()

  return (
    <div className="flex justify-center">
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs  border p-4">
      <legend className="fieldset-legend bold text-2xl text-center">Login</legend>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" onChange={(e)=> setEmailId(e.target.valie)} />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>

      <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>
  </div>
  );
};

export default Login;
