import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import Todo from "./pages/todo-page";
import Update from "./pages/todo-page/update";


function App() {
  return (
    <div className="container py-3">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/update/:itemId" element={<Update />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
