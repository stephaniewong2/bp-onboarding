import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id = "main-page">
            <div id = "sign-in">
                <div id = "header-titles">
                    <h1 id = "welcome-back">Welcome Back!</h1> 
                    <h4 id = "header-signin">Sign in to continue</h4>
                </div>
                <div id = "inputs">
                    <div id = "inputs-headers">
                        <p class = "input-text">EMAIL</p>
                        <p class = "input-text">PASSWORD</p>
                    </div>
                    <div id = "signin-fields">
                        <input type = "email" value = "thisisanemail@email.com"></input>
                        <input type = "password" value = "Create Password"></input>
                    </div>
                </div>
                <div id = "footer">
                    <p>Haven't activated your account yet? <a href = "htttps">Activate Now</a></p> 
                    {/* <a href = "htttps">Activate Now</a> */}
                    <div id = "signin-button">
                      <button type = "button">Sign In</button>
                    </div>
                   
                </div>
            </div>
        </div>
  );
}

export default App;
