import './style.css';
import './media.css';

function App() {
  return (
    <div class="globalContainer">
        <div class="mainContainer">
            <div class="headerDiv">
                <h1 class="logoHeader">finesse</h1>
                <h2 class="briefDescription">Finesse connects you with new potential partners.</h2>
            </div>
            <div class="mainDiv">
                <div class="signupLoginDiv">
                    <form action="">
                        <div>
                            <div class="emailPass">
                                <input class="userCred inputText" type="text" name="emailNo" placeholder="Email address or phone number" autofocus/>
                            </div>
                            <div>
                                <div class="emailPass">
                                    <input class="userCred inputText" type="password" name="pass" placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div class="loginDiv">
                            <button class="loginBtn" name="login" type="submit">Log in</button>
                        </div>
                        <div class="forget">
                            <a href="">Forgotten password?</a>
                        </div>
                        <div class="separator"></div>
                        <div class="createDiv">
                            <a class="createAcc" role="button" href="">Create New Account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
