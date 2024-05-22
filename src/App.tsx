import { useState } from "react";
import { Button } from "./components/common/Button/Button";
import { Users } from "./components/features/Users";
import Header from "./components/common/NavigationBar/Header/Header";
import AdBanner from "./components/common/AdBanner";
import LoginForm from "./components/common/LoginForm/LoginForm";

function App() {
  const [count, setCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header onLoginClick={toggleLoginForm} />
      <main className="flex-grow container mx-auto p-4 mt-20">
        {showLogin && <LoginForm />}
        {!showLogin && (
          <>
            <AdBanner />
            <Users />
            <div className="flex justify-center mt-4">
              <Button onClick={() => setCount(count + 1)}>
                count is {count}
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
