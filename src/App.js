import { lazy, Suspense, useContext } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { TransactionContext } from "./context/TransactionContext";
import { ColorRing } from "react-loader-spinner";

const InstallMetamask = lazy(() =>
  import("./pages/InstallMetamaskPage/InstallMetamaskPage")
);
const Header = lazy(() => import("./components/Header/Header"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const Projects = lazy(() => import("./pages/ProjectsPage/Projects"));
const UPMain = lazy(() => import("./pages/UPMainPage/UPMain"));
const Swap = lazy(() => import("./pages/SwapPage/SwapMain"));
const StackingMain = lazy(() => import("./pages/StackingPage/StackingMain"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const News = lazy(()=>(import("./pages/NewsPage/News")));

const styles = {
  wrapper: `h-min-screen w-full bg-white text-[#373C3D] select-none flex flex-col items-center overflow-hidden`,
  loaderContainer: `h-screen w-screen flex items-center justify-center`,
  transactionLoader: `w-screen h-screen absolute z-[1000] bg-black/60 flex items-center justify-center`,
};

function RequireAuth({ children }) {
  const { isAuth } = useContext(UserContext);

  return isAuth === true ? (
    children
  ) : (
    <Navigate to="/landsplatform-dex-frontend/" replace />
  );
}

function Authed({ children }) {
  const { isAuth } = useContext(UserContext);

  return isAuth === false ? (
    children
  ) : (
    <Navigate to="/landsplatform-dex-frontend/user-page/" replace />
  );
}

function App() {
  const { isMetamask } = useContext(UserContext);
  const { isTransactionLoading } = useContext(TransactionContext);

  const Loader = () => {
    return (
      <div className={styles.transactionLoader}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        />
      </div>
    );
  };

  if(isTransactionLoading) {
    return <Loader />
  }

  return (
    <div className={styles.wrapper}>
      {!isMetamask ? (
        <InstallMetamask />
      ) : (
        <BrowserRouter>
          <Suspense
            fallback={
              <div className={styles.loaderContainer}>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#049CA6",
                    "#056F76",
                    "#049CA6",
                    "#056F76",
                    "#049CA6",
                  ]}
                />
              </div>
            }
          >
            <Header />
            <Routes>
              <Route
                path="/landsplatform-dex-frontend/"
                element={
                  <Authed>
                    <MainPage />
                  </Authed>
                }
              />
              <Route
                path="/landsplatform-dex-frontend/user-page/"
                element={
                  <RequireAuth>
                    <UPMain />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform-dex-frontend/user-page/swap"
                element={
                  <RequireAuth>
                    <Swap />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform-dex-frontend/user-page/stacking"
                element={
                  <RequireAuth>
                    <StackingMain />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform-dex-frontend/user-page/projects"
                element={
                  <RequireAuth>
                    <Projects />
                  </RequireAuth>
                }
              />
              <Route
                path="/landsplatform-dex-frontend/user-page/news"
                element={
                  <RequireAuth>
                    <News />
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
