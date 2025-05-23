import { Image } from "grommet";
import image from "../../../../assets/earnings.png";
import { StoryCard } from "../components";

export const EarningsQ2 = ({ ...rest }) => {
  return (
    <StoryCard
      level={3}
      headline="Earnings: Our Q2 results"
      description="Delivered year-over-year revenue and EPS growth"
      cta="See highlights"
      image={
        <Image
          src={image}
          alt="Abstract purple and teal digital waves on black background"
          fit="cover"
        />
      }
      href="#"
      background={undefined}
      pad={{ top: "xlarge" }}
      {...rest}
    />
  );
};
