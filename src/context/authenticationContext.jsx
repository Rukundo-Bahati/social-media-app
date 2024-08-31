import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = ({ username, password }) => {
    console.log("login function called with:", { username, password }); // Add this line
    if (username === "Nelly" && password === "123") {
      setCurrentUser({
        id: 1,
        name: "Nelly",
        profilePic: "https://scontent.fkgl1-1.fna.fbcdn.net/v/t39.30808-6/417481001_709406524642678_4683012726706448586_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=pNLfowmXwjMAX_fO3s-&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfChRHxzYbb5SXY2x4MyhXnzpGiYICfOZ0RrRFFAKx06lg&oe=65E8115E",
      });
    } else {
      console.error("Invalid username or password");
    }
  };
  
  useEffect(() => {
    if (currentUser) {
      console.log("User logged in:", currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);
  
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
