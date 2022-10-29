import './main.css';
import Navbar from './Navbar';

function Main(){
    return(
        <div className="mainDiv">
            <Navbar />
            <div className="mainContainer">
                <div className="mainContent" id="picArea"></div>
                <div className="mainContent" id="details"></div>
                <div className="decide">
                    <ul className="checkX">
                       <li className="btnList">
                            <button class="btn" id="check">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#008000">
                                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                </span>
                            </button>
                        </li>
                       <li className="btnList">
                            <button class="btn" id="X">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ff0000">
                                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                                    </svg>
                                </span>
                            </button>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;