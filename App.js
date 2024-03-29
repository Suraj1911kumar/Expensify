import Navigation from "./src/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
