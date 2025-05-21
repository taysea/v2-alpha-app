import {
  Box,
  Grommet,
  Page,
  PageContent,
  Button,
  Heading,
  Text,
} from "grommet";
import { LinkNext } from "grommet-icons";
import { hpePop } from "grommet-theme-hpe";

function App() {
  return (
    <Grommet theme={hpePop} full="min">
      <Page pad={{ vertical: "large" }}>
        <PageContent gap="medium">
          <Box gap="large">
            {["primary", "secondary", "default"].map((kind) => (
              <Box gap="medium" key={kind}>
                {["small", "medium", "large"].map((size) => (
                  <Box direction="row" gap="small" key={`${kind}-${size}`}>
                    <Box gap="small">
                      <Button
                        alignSelf="start"
                        label={`${kind} ${size}`}
                        size={size}
                        kind={kind}
                      />
                      <Button
                        alignSelf="start"
                        label={`${kind} ${size}`}
                        size={size}
                        kind={kind}
                        icon={<LinkNext />}
                        reverse
                      />
                    </Box>
                    <Box gap="small">
                      <Button
                        alignSelf="start"
                        label={`${kind} ${size}`}
                        size={size}
                        kind={kind}
                        disabled
                      />
                      <Button
                        alignSelf="start"
                        label={`${kind} ${size}`}
                        size={size}
                        kind={kind}
                        icon={<LinkNext />}
                        reverse
                        disabled
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box gap="medium">
            <Heading level="1" margin="none" size="xxlarge">
              Heading 1 Large Condensed (xxlarge)
            </Heading>
            <Heading level="1" margin="none" size="xlarge">
              Heading 1 Condensed (xlarge)
            </Heading>
            <Heading level="1" margin="none" size="large">
              Heading 1 Large
            </Heading>
            {["1", "2", "3", "4", "5", "6"].map((level) => (
              <Heading
                key={level}
                level={level as "1" | "2" | "3" | "4" | "5" | "6"}
                margin="none"
              >
                Heading {level}
              </Heading>
            ))}
          </Box>
          <Box gap="medium">
            <Text size="large">Large body</Text>
            <Text>Body</Text>
            <Text size="small">Small body</Text>
            <Text size="xsmall">Disclaimer (xsmall)</Text>
            <Text size="xxxlarge">Large quote (xxxlarge)</Text>
            <Text size="xxlarge">Quote (xxlarge)</Text>
            <Text size="xlarge">Small quote (xlarge)</Text>
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
