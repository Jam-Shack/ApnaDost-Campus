import { Routes, Route } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "./FirebaseConfig";
import "./App.css";
import { motion } from "framer-motion";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Contact from "./pages/contact";
import ProtectedRoute from "./ProtectedGuard/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const Home = lazy(() => import("./pages/homepage"));
const Navbar = lazy(() => import("./components/navbar"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Product = lazy(() => import("./pages/Products/Product"));
const ProductDetails = lazy(() => import("./pages/Products/ProductDetails"));

function App() {
  const dispatch = useDispatch();
  var separatedString1;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (loggedInUser) => {
      if (loggedInUser) {
        // isSeller = true;
        const idTokenResult = await loggedInUser.getIdTokenResult();
        await db
          .collection("users")
          .doc(loggedInUser.email)
          .get()
          .then((doc) => {
            if (doc && doc.exists) {
              separatedString1 = doc.data();
              // console.log("hello data", doc.data());
            }
            dispatch({
              type: "LOGGED_IN_USER2",
              payload: {
                name: separatedString1.name,
                email: separatedString1.email,
                token: idTokenResult.token,
                role: separatedString1.role,
                id: separatedString1.id,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Suspense
        fallback={
          <div className="load">
            <h1>
              Loading
              <div class="dots">
                <span class="dot z"></span>
                <span class="dot f"></span>
                <span class="dot s"></span>
                <span class="dot t">
                  <span class="dot l"></span>
                </span>
              </div>
            </h1>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/product_details" element={<ProtectedRoute> <ProductDetails /> </ProtectedRoute>} />
          <Route exact path="*" element={<PageNotFound /> } />
        </Routes>
      </Suspense>
    </motion.div>
  );
}

export default App;
