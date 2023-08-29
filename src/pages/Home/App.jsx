import Home from "../../component/Home/Home";
import APropos from "../../component/APropos";
import Error from "../../component/404";
import FicheLogement from "../../component/FicheLogement";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="FicheLogement/:id" element={<FicheLogement />} />
                </Route>
                <Route path="/APropos" element={<APropos />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
        
    );
}

export default App;