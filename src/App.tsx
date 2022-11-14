import { Routes, Route } from "react-router-dom";

import Media from "./components/media/Media";
import MediaCardPhotos from "./components/media/MediaCardPhotos";
import MediaCardVideos from "./components/media/MediaCardVideos";
import Interface from "./pages/interface/Interface";

function App() {
  return (
    <Routes>
      <Route path="/interface" element={<Interface />} />
      <Route
        path="/photos"
        element={<Media children={<MediaCardPhotos />} />}
      />
      <Route
        path="/videos"
        element={<Media children={<MediaCardVideos />} />}
      />
    </Routes>
  );
}

export default App;
