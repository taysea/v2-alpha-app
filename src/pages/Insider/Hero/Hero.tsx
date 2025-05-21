import {
    Box,
    Grid,
    Heading,
    Paragraph,
    Button
} from 'grommet';
import { LinkNext } from 'grommet-icons';

export const Hero = ({...rest}) => {
    return (
    <Grid 
        columns={['xlarge', 'flex']}
        gap="3xlarge"
        pad={{ vertical: '3xlarge', horizontal: 'xlarge'}}
        {...rest}
    >
        <Box align='start' gap="xxlarge" >
            <Box gap="xlarge">
                <Heading 
                    level={1} 
                    size="xxlarge" 
                    margin="none"
                >
                    It starts with<br />ambition.
                </Heading>
                <Paragraph margin="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl nunc
                    sagittis quam, id bibendum nunc nisl eget dolor.
                </Paragraph>
            </Box>
            <Button 
                label="Learn more about our new brand" 
                icon={<LinkNext />} 
                onClick={() => {}}
                primary
                reverse
                size='large'
            />
        </Box>
    </Grid>
    );
}
