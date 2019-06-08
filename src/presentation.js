import React from 'react';
import { Deck, Slide, Heading, Text } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
    {
        primary: '#141518',
        secondary: '#FAFBFC',
        heading: 'papayawhip',
        text: '#E98F97'
    },
    {
        bestFont: 'Comic Sans MS'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme}>
                <Slide>
                    <Heading>Learn spectacle</Heading>
                    <Text textColor="text">by @tlakomy</Text>
                </Slide>

                <Slide bgColor="secondary">
                    <Text textColor="text">
                        {`To add a slide to your presentation, use a <Slide /> component`}
                    </Text>
                </Slide>

                <Slide>
                    <Text textColor="text">{`To add text, use <Heading /> or <Text /> components`}</Text>
                </Slide>

                <Slide>
                    <Heading textColor="heading">Themes</Heading>
                    <Text textFont="bestFont" textColor="text">
                        To create a theme use createTheme(colors, fonts)
                        function
                    </Text>
                </Slide>
            </Deck>
        );
    }
}
