import { useState } from "react";
import { Users } from "./components/features/Users";
import Header from "./components/common/NavigationBar/Header/Header";
import AdBanner from "./components/common/AdBanner";
import RegisterForm from "./components/common/RegisterForm/RegisterForm";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header onSignUpClick={toggleRegisterForm} />
      <main className="flex-grow container mx-auto p-4 mt-20">
        {showRegister ? (
          <RegisterForm />
        ) : (
          <>
            <AdBanner />
            <Users />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
