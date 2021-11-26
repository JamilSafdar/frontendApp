export const Signup = ({setUserName, setEmail, setPassword,submitHandler}) =>{
    return (
        <form onSubmit={submitHandler}>
            <input placeholder="username" 
            onchange={(e) => setUserName(e.target.value)}/>
            <input placeholder="email" 
            onchange={(e) => setEmail(e.target.value)}/>
             <input placeholder="password" 
            onchange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}