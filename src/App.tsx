import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Outlet />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
