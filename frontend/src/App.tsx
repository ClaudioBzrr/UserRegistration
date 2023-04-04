import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({path,element},index) =><Route key={String(index)} path={path} element={element}/>)
        }
      </Routes>
    </BrowserRouter>
  )
}
