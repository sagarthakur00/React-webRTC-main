// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import LobbyScreen from "./screens/Lobby";
// import RoomPage from "./screens/Room";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<LobbyScreen />} />
//         <Route path="/room/:roomId" element={<RoomPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="App app-container">
      <header className="app-header">
        <h1>React WebRTC Demo</h1>
        <p>Simple video chat using React &amp; Socket.IO</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;