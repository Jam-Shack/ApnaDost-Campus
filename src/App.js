import { Routes, Route } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "./FirebaseConfig";
import "./App.css";
import { motion } from "framer-motion";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

const Home = lazy(() => import("./pages/homepage"));
const Contact = lazy(() => import("./pages/contact"));
const Navbar = lazy(() => import("./components/navbar"));
const Login = lazy(() => import("./pages/login"));
const Product = lazy(() => import("./pages/Products/Product"));
const ProductDetails = lazy(() => import("./pages/Products/ProductDetails"));

//admin Routings
const SellerDashboard = lazy(() =>
  import("./components/Seller/SellerDashboard")
);
const AddProducts = lazy(() =>
  import("./components/Seller/AddProducts/AddProducts")
);
const ViewProducts = lazy(() =>
  import("./components/Seller/ViewProducts/ViewProducts")
);

function App() {
  const dispatch = useDispatch();
  var separatedString1;
  const { loggedInUser } = useSelector((state) => ({ ...state }));

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
                phone: separatedString1.phone
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
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/product_details" element={<ProductDetails />} />

          {loggedInUser && loggedInUser.role.indexOf("seller") === 1 && (
            <>
              <Route
                exact
                path="/seller/dashboard"
                element={<SellerDashboard />}
              />
              <Route
                exact
                path="/seller/addProduct"
                element={<AddProducts />}
              />
              <Route
                exact
                path="/seller/viewProducts"
                element={<ViewProducts />}
              />
            </>
          )}

          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </motion.div>
  );
}

export default App;
