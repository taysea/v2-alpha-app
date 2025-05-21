import { Grommet } from "grommet";
import { hpePop } from "grommet-theme-hpe";
import { Insider, StickerSheet } from "./pages";

function App() {
  return (
    <Grommet theme={hpePop} full="min">
      <Insider />
      {/* <StickerSheet /> */}
    </Grommet>
  );
}

export default App;
