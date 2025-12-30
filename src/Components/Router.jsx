import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage"
import Sample from "./Sample"

const AppRouter = () => (
    <Router>
        <div className="first_sec">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sample" element={<Sample />} />
                {/* <Route path="/real-estate" element={<RealEstateForm />} /> */}
            </Routes>
        </div>
    </Router>
);

export default AppRouter;
