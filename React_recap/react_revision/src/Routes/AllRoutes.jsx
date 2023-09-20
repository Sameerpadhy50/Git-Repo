import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Day-2/HomePage";
import { Login } from "../Day-2/Login";
import { TodoApp } from "../Day-2/TodoApp";
import { QuotesApp } from "../Day-2/QuotesApp";
import { Payment } from "../Day-2/Payment";
import { ProductsPage } from "../Pages/ProductsPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { SingleProduct } from "../Pages/SingleProduct";
import { Counter } from "../Day-2/Counter";
import { FireCalculator } from "../Pages/FireCalculator";
import { LoginRed } from "../Pages/LoginRed";

 export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login1" element={<LoginRed/>} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/quotes" element={<PrivateRoutes><QuotesApp /></PrivateRoutes>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/fire" element={<FireCalculator/>} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/product/:id" element={<SingleProduct/>} />
    </Routes>
  );
};
