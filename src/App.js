import React from "react";
import Footer from "./components/Footer/Footer";
import NavbarTest from "./components/Navbar/NavbarTest";
import UpNavbar from "./components/Navbar/UpNavbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
    return (
        <div>
            <UpNavbar />
            <NavbarTest />
            <MainRoutes />
            <Footer />
        </div>
    );
};

export default App;
