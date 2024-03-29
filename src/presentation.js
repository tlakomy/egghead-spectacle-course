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
    List,
    ListItem,
    Appear,
    CodePane,
    GoToAction,
    Markdown,
    MarkdownSlides,
    Notes
} from 'spectacle';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Counter from './components/Counter';
import counterExample from './examples/counterExample';
import counterDemo from './examples/counterDemo';
import createTheme from 'spectacle/lib/themes/default';

import './presentation.css';

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
                    <Notes>
                        <h3>Slide notes</h3>
                        <ol>
                            <li>It's going to be okay</li>
                            <li>Take a deep breath</li>
                            <li>You got this</li>
                        </ol>
                    </Notes>
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
                            <Image
                                src={images.spectacle}
                                padding={10}
                                margin={0}
                            />
                        </Fill>
                        <Fill>
                            <Image
                                src={images.egghead}
                                padding={10}
                                margin={0}
                            />
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

                <Slide>
                    <h1
                        className="my-custom-title"
                        onClick={() => alert("It's just React!")}
                    >
                        You can do whatever you want
                    </h1>
                    <Counter />
                </Slide>

                <Slide>
                    <CodePane
                        lang="jsx"
                        contentEditable={true}
                        source={counterExample}
                        theme={'light'}
                    />
                </Slide>

                <Slide>
                    <Heading textColor="heading" size={5}>
                        Use react-live to demo your components
                    </Heading>
                </Slide>

                <Slide>
                    <LiveProvider code={counterDemo}>
                        <LiveEditor />
                        <LivePreview />
                        <LiveError />
                    </LiveProvider>
                </Slide>

                <Slide id="jump-slide">
                    <Heading textColor="heading" size={5}>
                        Jump to first slide with GoToAction
                    </Heading>
                    <GoToAction slide={1}>Jump to 1st slide</GoToAction>

                    {/* <GoToAction
                        render={goToSlide => (
                            <button
                                className="jump-button"
                                onClick={() => goToSlide(1)}
                            >
                                Jump to 1st slide
                            </button>
                        )}
                    /> */}
                </Slide>

                <Slide>
                    <Heading textColor="heading" size={5}>
                        You can use Markdown too!
                    </Heading>
                </Slide>

                <Slide bgColor="#bbb">
                    <Markdown>
                        {`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* Add some \`inline code\` to your slides!`}
                    </Markdown>
                </Slide>
                {MarkdownSlides`
## Create Multiple Slides in Markdown
---
* Separated by - - -
* Can be used anywhere within the deck
---
\`\`\`js
const myCode = console.log('Woah, this is awesome!');
\`\`\`
          `}
            </Deck>
        );
    }
}
