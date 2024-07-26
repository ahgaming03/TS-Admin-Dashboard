import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Footer } from "./components/_footer";
import { TopNav } from "./components/_topnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarList } from "./components/Sidebar/SidebarList";
import { Dashboard } from "./routes/Dashboard/Dashboard";
import { Blank } from "./routes/Other_Pages/Blank";
import { NotFound } from "./routes/Other_Pages/NotFound";
import { Cards } from "./routes/Components/Cards";
import { Buttons } from "./routes/Components/Buttons";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <TopNav />
      <div className="flex">
        {/* Sidebar */}
        <div className="flex w-full max-w-56 flex-col bg-blue-500 capitalize text-white">
          <ul>
            <SidebarList />
            <hr className="my-4 opacity-50" />

            <li className="pb-4 text-center">
              <FontAwesomeIcon
                icon={["fas", "circle-chevron-left"]}
                size="2x"
                className="cursor-pointer opacity-50 hover:opacity-100"
              />
            </li>
            <li className="flex justify-center gap-2">
              <Link to={"https://github.com/ahgaming03"} target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} size="xl" />
              </Link>
              <Link to={"https://github.com/ahgaming03"} target="_blank">
                <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" />
              </Link>
              <Link to={"https://github.com/ahgaming03"} target="_blank">
                <FontAwesomeIcon icon={["fab", "discord"]} size="xl" />
              </Link>
              <Link to={"https://github.com/ahgaming03"} target="_blank">
                <FontAwesomeIcon icon={["fab", "youtube"]} size="xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex min-h-screen w-full flex-col justify-between">
          {/* Content */}
          <div className="">
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact/*" element={<Contact />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/blank" element={<Blank />} />
                <Route path="/button" element={<Buttons />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
