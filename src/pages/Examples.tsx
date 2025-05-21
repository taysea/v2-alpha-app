import {
  Anchor,
  Data,
  List,
  Page,
  PageContent,
  PageHeader,
  ThemeContext,
} from "grommet";
import { hpe } from "grommet-theme-hpe";

const examples = [
  { label: "Sticker sheet", href: "/sticker-sheet" },
  { label: "Insider", href: "/insider" },
];

export const Examples = () => {
  return (
    <ThemeContext.Extend value={hpe}>
      <Page background="background-back" height="100vh">
        <PageContent>
          <PageHeader title="Examples of V2-alpha theme" />
          <Data data={examples}>
            <List>
              {(item: { label: string; href: string }) => (
                <Anchor label={item.label} href={item.href} />
              )}
            </List>
          </Data>
        </PageContent>
      </Page>
    </ThemeContext.Extend>
  );
};
