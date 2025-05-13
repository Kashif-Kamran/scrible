import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./providers/theme/theme.provider";
import { queryClient } from "./lib/query-client";
import { Provider } from "react-redux";
import store from "./providers/redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/game";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
