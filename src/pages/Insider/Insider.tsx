import { 
    Box,
    Page, 
    PageContent,
    ThemeContext, 
} from 'grommet';
import { Hero } from './Hero';
import { Stories } from './Stories';

export const Insider = () => {
    const adjustedTheme = {
        global: {
            colors: {
                'bkg-component-primary': {
                    light: '#FFFFFF',
                    dark: '#1D1F27'
                },
                'bkg-card-primary': {
                    light: '#F7F7F7',
                    dark: '#292D3A'
                }
            },
            // edgeSize: {
            //     '4xlarge': '96px',
            // },
        },
    };

    return (
        <ThemeContext.Extend value={adjustedTheme}>
            <Page pad={{ bottom: '3xlarge' }}>
                <Box background={{dark: true}}>
                    <PageContent 
                        background={{
                            fill: 'horizontal', 
                            color: 'bkg-component-primary'
                        }}
                    >
                        <Hero as="section" />
                    </PageContent>
                </Box>
                <PageContent
                    background={{
                        fill: 'horizontal',
                        color: 'bkg-component-primary'
                    }}
                >
                    <Stories as="section" border={{style: 'dashed'}}/>
                </PageContent>
            </Page>
        </ThemeContext.Extend>
    );
}
