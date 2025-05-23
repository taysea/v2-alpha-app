import { Image } from "grommet";
import image from "../../../../assets/resource-groups.png";
import { StoryCard } from "../components";

export const ResourceGroupEvents = ({ ...rest }) => {
  return (
    <StoryCard
      level={3}
      headline="Resource Group events"
      description="News and updates for June"
      cta="View upcoming events"
      image={
        <Image
          src={image}
          alt="HPE employees seated, listening intently to a presentation."
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
