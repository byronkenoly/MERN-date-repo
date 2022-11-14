import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import Welcome from './Welcome';
import CreateAcc from './CreateAcc';
//import Main from './Main';
//import Popup from './Popup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path='/signin' element={<Welcome />} />*/}
                <Route path='/signup' element={<CreateAcc />} />
                {/*<Route path='/' element={<Main />}/>*/}
                {/*<Route path='/' element={<Popup />}/>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App;