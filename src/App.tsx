import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grommet } from "grommet";
import { hpePop } from "grommet-theme-hpe";
import { Examples, Insider, StickerSheet } from "./pages";

const themeMode = 'auto';



function App() {
  return (
    <Grommet theme={hpePop} full="min" themeMode={themeMode}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Examples />} />
        <Route path="/insider" element={<Insider />} />
        <Route path='/sticker-sheet' element={<StickerSheet />} />
      </Routes>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
