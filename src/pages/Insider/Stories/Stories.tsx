import { Box, Button, Grid } from "grommet";
import {
  CelebrateTeam,
  CodeWars,
  EarningsQ2,
  HPEDiscover,
  HPENvidia,
  ResourceGroupEvents,
} from "./stories/index";
import { LinkDown } from "grommet-icons";

const areas = [
  ["story-1", "story-1", "story-2", "story-2"],
  ["story-3", "story-4", "story-5", "story-6"],
];

const columns = ["flex", "flex", "flex", "flex"];
const rows = [
  ["large", "auto"],
  ["small", "auto"],
];
const gap = "xlarge";

export const Stories = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Grid
        areas={areas}
        columns={columns}
        rows={rows}
        gap={gap}
        pad={{ vertical: "xxlarge" }}
      >
        <HPEDiscover gridArea="story-1" />
        <HPENvidia gridArea="story-2" />
        <CodeWars gridArea="story-3" />
        <EarningsQ2 gridArea="story-4" />
        <CelebrateTeam gridArea="story-5" />
        <ResourceGroupEvents gridArea="story-6" />
      </Grid>
      <Box pad="large">
        <Button
          label="Get more HPE Insider stories"
          icon={<LinkDown />}
          reverse
          onClick={() => {}}
          primary
          alignSelf="center"
          size="large"
        />
      </Box>
    </Box>
  );
};
