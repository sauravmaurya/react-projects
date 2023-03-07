import Route from './components/Route'
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage'
import CounterPage from './pages/CounterPage';
import CounterFeaturesPage from './pages/CounterFeaturesPage';

function App() {


    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/">
                    <DropdownPage></DropdownPage>
                </Route>
                <Route path="/accordion">
                    <AccordionPage></AccordionPage>
                </Route>
                <Route path="/button">
                    <ButtonPage></ButtonPage>
                </Route>
                <Route path="/modal">
                    <ModalPage></ModalPage>
                </Route>
                <Route path="/counter">
                    <CounterPage initialCounter={10}></CounterPage>
                </Route>
                <Route path="/counter-features">
                    <CounterFeaturesPage initialCounter={10}></CounterFeaturesPage>
                </Route>
            </div>
        </div>
    )
}

export default App