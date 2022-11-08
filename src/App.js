import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { ColorRing } from "react-loader-spinner";

const InstallMetamask = lazy(() =>import("./components/InstallMetamask/InstallMetamask"));
const Header = lazy(() => import("./components/Header/Header"));
const MainPage = lazy(() => import("./components/MainPage/Main"));
const Projects = lazy(() =>import("./components/UserPage/ProjectsPage/Projects"));
const UPMain = lazy(() => import("./components/UserPage/UPMainPage/UPMain"));
const Swap = lazy(() => import("./components/UserPage/SwapPage/SwapMain"));
const StackingMain = lazy(() =>import("./components/UserPage/StackingPage/StackingMain"));
const Contacts = lazy(() => import("./components/ContactsPage/Contacts"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const styles = {
  wrapper: `h-min-screen w-full bg-white text-[#373C3D] select-none flex flex-col items-center overflow-hidden`,
};

function RequireAuth({ children }) {
  const { isAuth } = useContext(UserContext);

  return isAuth === true ? (
    children
  ) : (
    <Navigate to="/landsplatform.dex/" replace />
  );
}

function Authed({ children }) {
  const { isAuth } = useContext(UserContext);

  return isAuth === false ? (
    children
  ) : (
    <Navigate to="/landsplatform.dex/user-page/" replace />
  );
}

function App() {
  const { isMetamask } = useContext(UserContext);

  return (
    <div className={styles.wrapper}>
      {!isMetamask ? (
        <InstallMetamask />
      ) : (
        <BrowserRouter>
          <Suspense
            fallback={
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#049CA6", "#056F76", "#049CA6", "#056F76", "#049CA6"]}
              />
            }
          >
            <Header />
            <Routes>
              <Route
                path="/landsplatform.dex/"
                element={
                  <Authed>
                    <MainPage />
                  </Authed>
                }
              />
              <Route
                path="/landsplatform.dex/contacts"
                element={
                  <Authed>
                    <Contacts />
                  </Authed>
                }
              />
              <Route
                path="/landsplatform.dex/user-page/"
                element={
                  <RequireAuth>
                    <UPMain />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform.dex/user-page/swap"
                element={
                  <RequireAuth>
                    <Swap />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform.dex/user-page/stacking"
                element={
                  <RequireAuth>
                    <StackingMain />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform.dex/user-page/projects"
                element={
                  <RequireAuth>
                    <Projects />
                  </RequireAuth>
                }
              />
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
