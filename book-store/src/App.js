import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Signup from "./components/Singup";
import Login from "./components/Login";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
			    <Route path="/" exact element={<Login />} />
			    {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
          <Route path="/Home" element={<Home />} exact />
			    <Route path="/signup" exact element={<Signup />} />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
