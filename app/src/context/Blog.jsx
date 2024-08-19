import { createContext, useContext } from "react";

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PostsProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {

  const user = {
    name: "Dog",
    avatar:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };


  return (
    <BlogContext.Provider
      value={{
        user
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
