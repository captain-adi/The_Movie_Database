import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import { ThemeProvider } from "./context/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Header />
          <Outlet />
          <Footer />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
