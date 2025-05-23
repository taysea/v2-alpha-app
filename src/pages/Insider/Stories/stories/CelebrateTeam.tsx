import { Image } from "grommet";
import image from "../../../../assets/celebrate.png";
import { StoryCard } from "../components";

export const CelebrateTeam = ({ ...rest }) => {
  return (
    <StoryCard
      level={3}
      headline="Celebrate your teammates"
      description="And save the date to be celebrated yourself!"
      cta="Browse celebrations"
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
