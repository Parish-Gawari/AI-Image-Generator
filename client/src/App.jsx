import React from "react";
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <PageRoutes />
      </main>
    </>
  );
};

export default App;
