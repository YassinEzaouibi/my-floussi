// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
//
// const GoogleCallback = () => {
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/auth/google/callback",
//           { withCredentials: true },
//         );
//         if (response.data.success) {
//           localStorage.setItem("token", response.data.token);
//           navigate("/dashboard");
//         }
//       } catch (error) {
//         console.error("Error during Google authentication:", error);
//       }
//     };
//
//     fetchUser();
//   }, [navigate]);
//
//   return <div>Loading...</div>;
// };
//
// export default GoogleCallback;
