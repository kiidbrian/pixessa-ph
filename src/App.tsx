import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";
import ClientGalleriesPage from "./pages/ClientGalleriesPage";
import CreateCollectionPage from "./pages/CreateCollectionPage";
import GallaryPage from "./pages/GallaryPage";
import LoginPage from "./pages/LoginPage";
import AccessGalleryPage from "./pages/AccessGalleryPage";
import GalleryLive from "./pages/GalleryLive";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="client-galleries" element={<ClientGalleriesPage />} />
      <Route path="create-collection" element={<CreateCollectionPage />} />
      <Route path="gallery" element={<GallaryPage />} />
      <Route path="access-gallery" element={<AccessGalleryPage />} />
      <Route path="gallery-live" element={<GalleryLive />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
