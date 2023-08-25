import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Day-2/HomePage";
import { Login } from "../Day-2/Login";
import { TodoApp } from "../Day-2/TodoApp";
import { QuotesApp } from "../Day-2/QuotesApp";
import { Payment } from "../Day-2/Payment";

 export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/quotes" element={<QuotesApp />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};
