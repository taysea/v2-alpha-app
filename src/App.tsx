import {
  Grommet,
} from "grommet";
import { LinkNext } from "grommet-icons";
import { hpePop } from "grommet-theme-hpe";
import { StickerSheet } from "./pages";

function App() {
  return (
    <Grommet theme={hpePop} full="min">
      <StickerSheet />
    </Grommet>
  );
}

export default App;
