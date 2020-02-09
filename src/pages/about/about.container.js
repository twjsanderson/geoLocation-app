import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id='about'>
            <Row>
                <Col className='text-center'>
                    <h1>About</h1>
                </Col>
            </Row>
            <Row>
                <Col className=''>
                    <h2>Tom Sanderson</h2>
                    <h3>Web Developer | Hacker</h3>
                    <p>
                        The idea for Browser Power came to me just before I graduated from the Web Development bootcamp at Lighthouse Labs in 2019.
                        After talking to friends and family members about my experience at the bootcamp and what kind of technologies I used, people 
                        would start pitching me app ideas. They would also ask about the kind of features I could build, but I didn't get a lot of questions about
                        security or data privacy and the value of user data was rarely mentioned. As a newbie developer, I would consider how to implement these 
                        ideas from a technical perspective. If the idea seemed interesting I would ask myself questions like, what 
                        tech stack could I use to build it? Which libraries and packages would be most helpful? And of course, how 
                        would I collect and handle user data? Simple but important questions that need to be answered before building an app. 
                    </p>
                    <p>
                        In most conversations, people describe the movement of data flowing into their application (through a form or 
                        an input of some kind) and producing a result in another part of the application (a chart, confirmation of a purchase, etc.).
                        What is not considered, is the unsubmitted but freely available data that exists every time a user naviagtes to a webpage or opens an app. 
                        It seems that most people are completely unaware of how big their digital footprints really are. Modern browsers 
                        offer huge amounts of easily accesible data about users and their behaviour that don't require formal permissions, include obvious inputs or even 
                        notifications in many cases. Over the last decade more rules and regualtions have been created by countries and international bodies to ensure that data collection
                        practices are somewhat clearer to users, but overall this continues with little indication that anything is happening in the background of an application.
                    </p>
                    <p>
                        I realized that most people don't really understand the issues surrounding their online data privacy becasue they don't know how and who
                        is collecting their data. Moreover, people don't know what kind of data is available to websites and how to limit those sites from
                        grabbing their information. I decided to build this application as an educational tool that highlights how data collection  
                        happens using a method (through the browser via the Browser Object Model) that is relatively simple to understand and safeguard against.
                        My hope is that Browser Power is used to create a more informed public discussion about data privacy and data collection more broadly. 
                    </p>
                </Col>
            </Row>


        </section>
    )
}

export default About;
