import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input }, { allowReinits: true });

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
