import "./App.css";
import Button from "@mui/material/Button";
import Popup from "./Components/Popup";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-screen h-screen grid place-content-center">
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Get Discount
      </Button>
      {open && <Popup setOpen={setOpen} />}
    </div>
  );
}

export default App;
