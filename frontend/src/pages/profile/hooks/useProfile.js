// import { UserContext } from "../../../contexts/AuthContext";
// import { useContext, useState, useEffect } from "react";
// const useProfile = () => {
//   const { user, setUser } = useContext(UserContext);
//   const [profileImage, setProfileImage] = useState(null);

//   useEffect(() => {
//     // Construct a unique key based on the user's email
//     const profileImageKey = `${user?.email}_profileImage`;

//     const storedImage = localStorage.getItem(profileImageKey);
//     if (storedImage) {
//       setProfileImage(storedImage);
//     } else {
//       setProfileImage(null); // If no image is stored for the user, clear the state
//     }
//   }, [user]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const result = reader.result;
//         setProfileImage(result);

//         // Store the image in localStorage using a unique key for the user
//         const profileImageKey = `${user?.email}_profileImage`;
//         localStorage.setItem(profileImageKey, result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleLogout = () => {
//     // Here you would handle the actual logout logic like clearing user data from context
//     setUser(null); // Clear the user data in context

//     // Additional logout handling logic here...
//   };

//   return { user,profileImage, handleImageChange, handleLogout };
// };

// export default useProfile;
