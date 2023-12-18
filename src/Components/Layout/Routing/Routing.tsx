import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../Home/Home";
import ProductsArea from "../../BrandsArea/BrandsArea";
import OurSuccessArea from "../../OurSuccessArea/OurSuccessArea";
import AboutUsArea from "../../AboutUsArea/AboutUsArea";
import PageNotFound from "../PageNotFound/PageNotFound";
import EmployeesArea from "../../EmployeesArea/EmployeesArea";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/brands" element={<ProductsArea />} />
                <Route path="/stories_of_successful" element={<OurSuccessArea />} />
                <Route path="/about" element={<AboutUsArea />} />
                {/* Default Route */}
                <Route path="/" element={<Navigate to="/home" />} />
                {/* Page not found */}
                <Route path="*" element={<PageNotFound />} />
                {/* Employees  */}
                <Route path="/employees" element={<EmployeesArea />} />
            </Routes>
        </div>
    );
}

export default Routing;
