import {Anchor, Box, Heading, Paragraph, type BoxProps } from 'grommet';
import { type HeadingProps } from 'grommet';
import { LinkNext } from "grommet-icons";
import type { ReactNode } from 'react';

interface StoryCardProps extends BoxProps {
    cta: string;
    description: string;
    headline: string;
    href: string;
    image: ReactNode;
    level: HeadingProps["level"];
    size: HeadingProps["size"];
    pad?: BoxProps["pad"];
}

export const StoryCard: React.FC<StoryCardProps> = ({
    cta, 
    description, 
    headline, 
    href, 
    image, 
    level, 
    size,
    pad = 'xlarge',
    ...rest
}) => {
    return (
        <Box as="article" justify="between" {...rest}>
            <Box flex>
                {image}
            </Box>
            <Box pad={pad} gap="medium">
                <Box gap="medium" height={{min: '3xsmall'}}>
                    <Heading level={level} size={size} margin="none">{headline}</Heading>
                    <Paragraph margin="none">{description}</Paragraph>
                </Box>
                <Anchor 
                label={cta} 
                icon={<LinkNext aria-label={undefined} />} 
                href={href} 
                reverse 
                size='medium'
                />
            </Box>
        </Box>
    );
}