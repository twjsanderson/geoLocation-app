import React from 'react';
import './index.css';
import { Row, Col } from 'react-bootstrap';

// images
import profile2 from '../../assets/images/profile2.jpg';

const AboutView = () => {
    const profilePic = profile2;

    return (
        <section id='about-view'>
            <Row>
                <Col className='p-2'>
                    <img 
                        src={profilePic}
                        className='profilePic py-3 pr-3 rounded'
                        alt='profile'
                    />
                    <h2 className='px-2 pt-2 pb-1'>Tom Sanderson</h2>
                    <h4 className='pb-2'>Web Developer | Hacker</h4>
                    <p>
                        The idea for Browser Power came to me just before graduating from a Web Development bootcamp at Lighthouse Labs in 2019.
                        After talking to friends and family about my experiences and describing some of the things I was learning they 
                        would start pitching me app ideas. I was often asked about the kind of features I was able to build and how I could monetize them, 
                        but I didn't get a lot of questions about <strong>user security or data privacy</strong>. 
                    </p>
                    <p>
                        As a brand new developer, I would consider how to implement these 
                        ideas from a technical perspective. If the idea seemed interesting I would ask myself questions like, what 
                        tech stack could I use to build it? Which libraries and packages would be most helpful? And of course, how 
                        would I collect and handle user data? Simple but important questions that need to be answered before building any app. 
                    </p>
                    <p>
                        Most of the time they would describe data moving into the app (through a form or 
                        an input of some kind) and then produce some result (a chart, confirmation of a purchase, etc.) that would give value to a potential customer.
                        What most people didn't consider was the <strong>unsubmitted but freely available data</strong> that exists every time a user naviagtes to a webpage or opens an app. 
                        Even my tech savy friends seemed completely unaware of how big their digital footprints really were.
                    </p>
                    <p>
                        The reality is that modern browsers offer huge amounts of easily accesible data about users and their behaviour that don't require formal permissions, include obvious inputs or even 
                        notifications in many cases. Over the last decade more rules and regualtions have been created by countries and international bodies to ensure that data collection
                        practices are somewhat clearer to users, but overall this continues with little indication that anything is happening in the background of an application.
                    </p>
                    <p>
                        While most people acknowledged that their data was being collected as they surfed the web, I realized they didn't have an understanding of <strong>how</strong> the collection process was actually happening.
                        Moreover, they had no idea which data points were being collected and the ways that data was potentially being used. 
                    </p>
                    <p>
                        I decided to build this application as an educational tool that highlights some of the simpler methods that are used for data collection in the browser. 
                        I wanted offer the public a series of simple tools (using the browser via the Browser Object Model) that were <strong>easy to use</strong> and showed <strong>how this process takes place</strong>.
                        I also added some links to helpful resources that explain how someone can limit these collection processes with simple tools or a basic adjustment in their browser settings.
                    </p>
                    <p> 
                        Ultimately, my hope is that Browser Power helps create a more informed and critical discussion around data privacy and the collection/use of personal information. Happy Hacking!
                    </p>
                    <p>
                        <strong>- TS</strong>
                    </p>
                </Col>  
            </Row>
        </section>
    )
}

export default AboutView;
