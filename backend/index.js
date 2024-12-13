const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const contactRoute = require("./routes/ContactRoute.js");
const authRoutes = require("./routes/authRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const wishlistRoutes = require("./routes/wishlistRoutes.js");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://localhost:27017/tenFashion";

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://ten-fashion-five.vercel.app",
      ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());

connectDB(CONNECTION_URL);

app.get("/", (req, res) => {
  res.send("Welcome to Ten Fashion!");
});

app.use("/", productRoutes);
app.use("/", contactRoute);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/", wishlistRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db.js");
// const productRoutes = require("./routes/productRoutes.js");
// const contactRoute = require("./routes/ContactRoute.js");
// const authRoutes = require("./routes/authRoutes.js");
// const orderRoutes = require("./routes/orderRoutes.js");
// const wishlistRoutes = require("./routes/wishlistRoutes.js");
// const cookieParser = require("cookie-parser");
// // Load environment variables
// dotenv.config({ path: "../.env" });

// const app = express();
// const PORT = process.env.PORT || 8000;
// const CONNECTION_URL =
//   process.env.CONNECTION_URL || "mongodb://localhost:27017/tenFashion";

// // Middleware
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       const allowedOrigins = [
//         "http://localhost:5173",
//         "https://ten-fashion.netlify.app",
//         "https://ten-fashion.vercel.app",
//       ];
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true); // Allow the origin
//       } else {
//         callback(new Error("Not allowed by CORS")); // Reject the origin
//       }
//     },
//     credentials: true,
//   })
// );

// app.use(express.json());

// app.use(cookieParser());

// // Database connection
// connectDB(CONNECTION_URL);

// // Routes
// app.use("/", productRoutes);
// app.use("/", contactRoute);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/", wishlistRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db.js");
// const productRoutes = require("./routes/productRoutes.js");
// const contactRoute = require("./routes/ContactRoute.js");
// const authRoutes = require("./routes/authRoutes.js");
// const orderRoutes = require("./routes/orderRoutes.js");
// const wishlistRoutes = require("./routes/wishlistRoutes.js");
// const cookieParser = require("cookie-parser");

// // Load environment variables
// dotenv.config({ path: "../.env" });

// const app = express();
// const PORT = process.env.PORT || 8000;
// const CONNECTION_URL =
//   process.env.CONNECTION_URL || "mongodb://localhost:27017/tenFashion";

// // Middleware
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       const allowedOrigins = [
//         "http://localhost:5173",
//         "https://ten-fashion.netlify.app",
//         "https://ten-fashion.vercel.app",
//       ];
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true); // Allow the origin
//       } else {
//         callback(new Error("Not allowed by CORS")); // Reject the origin
//       }
//     },
//     credentials: true,
//   })
// );
// app.use(express.json());

// app.use(cookieParser());

// // Database connection
// connectDB(CONNECTION_URL);

// // Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to Ten Fashion!");
// });

// app.use("/products", productRoutes);
// app.use("/contact", contactRoute);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/wishlist", wishlistRoutes);

// // Start the server
// app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
// });
