import React from 'react';
import styled from 'react-emotion';
import { Deck, Slide, Heading, Text } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
    primary: '#141518',
    secondary: '#FAFBFC',
    heading: 'papayawhip'
});

const CustomText = styled(Text)`
    color: #e98f97;
`;

const BestText = styled(CustomText)`
    font-family: Comic Sans MS;
    font-size: 0.8em;
`;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme}>
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
                    <Heading textColor="heading">Style base components</Heading>
                    <BestText>
                        Use react-emotion to create custom base components
                    </BestText>
                </Slide>

                <Slide>
                    <Heading textColor="heading">{`Use props to style a <Heading /> component`}</Heading>
                </Slide>
            </Deck>
        );
    }
}
