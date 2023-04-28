import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Postcontacts from "./components/Postcontacts";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import EditContacts from "./components/EditContacts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Header></Header>

          <Routes>
            <Route path="/" exact element={<Home></Home>}></Route>

            <Route path="/contacts" exact element={<Home></Home>}></Route>
            <Route
              path="/contacts/:id"
              exact
              element={<Contact></Contact>}
            ></Route>
            <Route
              path="/Edit/:id"
              exact
              element={<EditContacts></EditContacts>}
            ></Route>

            <Route
              path="/postcontact"
              exact
              element={<Postcontacts></Postcontacts>}
            ></Route>

            {/* <Route path="/blog/:id" element={<Blog></Blog>}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
