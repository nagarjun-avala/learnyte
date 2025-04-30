import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles/global.css";

import { refreshToken } from "./redux/actions/authAction";

import StatusModal from "./components/StatusModal";

import About from "./pages/aboutUs/about";
import UserDetails from "./pages/auth/userDetails";
import Contact from "./pages/contact";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";
import Policy from "./pages/policy";
import Login from "./pages/auth/login";
import Questions from "./pages/questions/questions";
import Profile from "./pages/profile";
import Landing from "./pages/landing";
import Search from "./pages/search";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { auth, status, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = auth && auth.token ? true : false;
  const isUserDetails =
    isAuth &&
    !(
      auth?.user?.collage === "" ||
      auth?.user?.department === "" ||
      auth?.user?.year === 0 ||
      auth?.user?.city === "" ||
      auth?.user?.mobile === "" ||
      auth?.user?.whatsappMobile === ""
    );
  const isScore = isUserDetails && auth.user.score !== 0;

  // console.log("isAuth", isAuth);
  // console.log("isUserDetails", isUserDetails);
  // console.log("isScore", isScore);


  useEffect(() => {
    dispatch(refreshToken({ token: auth.token }));
  }, []);

  return (
    <>
      <div className={`${(status || modal) && "mode"}`}>
        <div className="main">{status && <StatusModal />}</div>
      </div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route
          exact
          index
          path="/"
          element={
            isAuth ? (
              isUserDetails ? (
                <>{isScore ? navigate("/home") : <Questions />}</>
              ) : (
                <UserDetails />
              )
            ) : (
              <Landing />
            )
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile/:id" element={<Profile />} />

          <Route exact path="/questions" element={<Questions />} />

          <Route exact path="/search/:search" element={<Search />} />
        </Route>



        {/* <Route exact path="/home" element={auth.token ? <Home /> : <Login />} />
        <Route
          exact
          path="/questions"
          element={auth.token ? <Questions /> : <Login />}
        />
        <Route
          exact
          path="/profile/:id"
          element={auth.token ? <Profile /> : <Login />}
        />

        <Route
          exact
          path="/search/:search"
          element={auth.token ? <Search /> : <Login />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
