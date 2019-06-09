import React from 'react';
import styled from 'react-emotion';
import {
    Deck,
    Slide,
    Image,
    Heading,
    Text,
    Layout,
    Fill,
    Fit,
    List,
    ListItem,
    Appear
} from 'spectacle';
import Counter from './components/Counter';

import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
    primary: '#141518',
    secondary: '#FAFBFC',
    quaternary: '#1CC1FF',
    heading: 'papayawhip'
});

const CustomText = styled(Text)`
    color: #e98f97;
`;

const BestText = styled(CustomText)`
    font-family: Comic Sans MS;
    font-size: 0.8em;
`;

const images = {
    spectacle: require('./assets/spectacle.png'),
    egghead: require('./assets/egghead.png')
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme} transition={['slide']} transitionDuration={500}>
                <Slide>
                    <Heading>Learn spectacle</Heading>
                    <CustomText>by @tlakomy</CustomText>
                </Slide>

                <Slide bgColor="secondary">
                    <CustomText>
                        {`To add a slide to your presentation, use a <Slide /> component`}
                    </CustomText>
                </Slide>

                <Slide>
                    <CustomText>{`To add text, use <Heading /> or <Text /> components`}</CustomText>
                </Slide>

                <Slide>
                    <Heading textColor="heading">Themes</Heading>
                    <CustomText>
                        To create a theme use createTheme(colors, fonts)
                        function
                    </CustomText>
                </Slide>

                <Slide>
                    <Heading size={3} textColor="heading">
                        Style base components
                    </Heading>
                    <BestText>
                        Use react-emotion to create custom base components
                    </BestText>
                </Slide>

                <Slide>
                    <Heading
                        size={5}
                        caps
                        italic
                        padding={50}
                        textColor="heading"
                    >{`Use props to style a <Heading /> component`}</Heading>
                    <CustomText
                        caps
                    >{`Text also extends from <Base />`}</CustomText>
                </Slide>

                <Slide>
                    <Heading size={6} textColor="heading" padding="0 0 30px 0">
                        {`Use <Image/> component to add images to your slides`}
                    </Heading>
                    <Image src={images.spectacle} height="200px" />
                    <Image src={images.egghead} height="200px" />
                </Slide>

                <Slide>
                    <Heading textColor="heading" caps fit>
                        {`Use <Layout /> and <Fill /> tags for flexible layouts`}
                    </Heading>
                    <Layout>
                        <Fill>
                            <Fit>
                                <Image
                                    src={images.spectacle}
                                    padding={10}
                                    margin={0}
                                />
                            </Fit>
                        </Fill>
                        <Fill>
                            <Fit>
                                <Image
                                    src={images.egghead}
                                    padding={10}
                                    margin={0}
                                />
                            </Fit>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={['zoom', 'spin', 'fade', 'slide']}>
                    <Heading textColor="heading" size={5}>
                        Provide a transition for the whole deck or a single
                        slide with transition prop
                    </Heading>
                </Slide>

                <Slide>
                    <List>
                        <Appear>
                            <ListItem>
                                {`Use a <List /> component to create a list`}
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                {`Each item in the list is an instance of an <ListItem /> component`}
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                By default they all appear at once
                            </ListItem>
                        </Appear>
                        <Appear
                            transitionDuration={4000}
                            startValue={{
                                opacity: 0,
                                color: 'red',
                                fontSize: '10px'
                            }}
                            endValue={{
                                opacity: 1,
                                color: 'blue',
                                fontSize: '60px'
                            }}
                        >
                            <ListItem>
                                {`Use <Appear /> component to show them one by one`}
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
