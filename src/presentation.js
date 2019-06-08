import React from 'react';
import { Deck, Slide, Heading, Text } from 'spectacle';

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck>
                <Slide>
                    <Heading>Learn spectacle</Heading>
                    <Text>by @tlakomy</Text>
                </Slide>
                <Slide>
                    <Text>
                        {`To add a slide to your presentation, use a <Slide /> component`}
                    </Text>
                </Slide>
                <Slide>
                    <Text>{`To add text, use <Heading /> or <Text /> components`}</Text>
                </Slide>
            </Deck>
        );
    }
}
