import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader finishLoading={() => setLoading(false)} />}
      {!loading && (
        <div className="text-white bg-gray-900 min-h-screen">
          <h1 className="text-5xl text-center mt-20">🏠 Home Page</h1>
        </div>
      )}
    </>
  );
}

export default App;

