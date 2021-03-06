import React from 'react';
import { Row, Col } from 'react-bootstrap';
import openSecurity from '../../assets/images/openSecurity.jpg';
import './index.css';

// TODO: Add link to 'official website' tag

const ProjectView = () => {
    return (
        <section id='project-view'>
            <Row>
                <Col className='text-center'>
                    <img
                        src={openSecurity}
                        alt='digital lock'
                        className='p-3'
                    />
                </Col>
            </Row>
            <Row>
                <Col className='p-3'>
                    <p>
                        The Open Door Security Project (ODSP) is an open source project started by Tom Sanderson in 2019. As a junior web developer,
                        Tom began to realize how vulnerable websites were to security breaches and data theft. Hacking a website, stealing 
                        personal data from a moblie hotspot and even breaking into government databases was easier than he ever thought possible. 
                        Building a simple a server to authenticate new customers was easily misconfigured and often filled with innocuous mistakes 
                        that hackers can exploit. 
                    </p>
                    <p>
                        Tom recognized how even well secured networks owned by governments and multinational corporations
                        weren't immune to malicious hackers. He also realized that most people had no clue how vulnerable they really were. The same was 
                        true for small businesses looking to expand their customer base through an online presence. If entities like 
                        the United States government can't prevent data leaks what chance did non-technical citizens have to protect their private information? 
                        People from every walk of life deserved to understand the risks they were taking by simply using the internet in their daily lives. 
                    </p>
                    <p>
                        ODSP was born as a free, open source learning platform to help educate individuals and businesses about digital security. 
                        With a specific focus on those who lack the resources and time to hire professional cyber security experts or take courses, ODSP seeks
                        to give people more power over their private data through education. If you want to contribute or learn more about ODSP check out our 
                        <strong> official website</strong>. 
                    </p>
                </Col>
            </Row>

             {/* <p>
                My introduction into the world of web development and hacking began in the mid 90's, when dial up modems were all the rage.
                Back then Yahoo! had the 'choicest' search engine on the net and the best way to build a simple website was on GeoCities.com. 
                In my teens, I became enthralled by the art of hacking, portrayed by Holloywood and the mainstream media as something akin to  
                forbidden magic (perfect for a rebellious teenager from the suburbs). Alas, the mythos alone wasn't 
                enough to keep me focused on learning the technical skills I needed to become a hacker, let alone build a simple computer program. 
                I quickly realized that working with the technical side of computers required a specific mind-set and proficiency that could only be acquired through hard 
                work and a lot of trial and error. It wasn't until 2019 that I would fully commit myself to learning how 
                computers and the internet really worked.
            </p>
            <p>
                Following my gradution from the Web Development bootcamp at Lighthouse Labs in 2019, I took a free course on cyber
                security with a particular focus on something called Penetration Testing (it's not what you think...). Cyber Security experts
                who practice this disicpline (often referred to as Pen Testers) are employed by companies who take digital security seriously. 
                Pen testers are paid to break into their client's computer systems, teach them how they got in and how to 
                prevent other people from doing it in the future. This industry is only growing and becoming more vital as people from around 
                the world continue to transfer their businesses and personal data to online platforms. 
            </p>
            <p>
                After my brief foray into the world of Pen Testing I watched a particularly scary documentary called 'The Great Hack', which 
                highlighted the incredible amount of influence government parties and companies, like the now defunct Cambridge Analytica, can 
                exercise over the general public. They have the ability to collect and analzye huge amounts of data about the personal habits, 
                beliefs and behaviours of people from every walk of life for whatever purpose they deem appropriate. To top it off, they can build
                remarkably accurate psychological profiles based on this data and use them to influence people and ultimately direct their behaviour.  
            </p>
            <p>
                Vision's of Orwell's 1984 quickly swirled through my head after watching this film and I decided to dig into the technical capabilities 
                behind some of these companies. It didn't take long for me to realize that collecting data about users is absurdly 
                easy and making simple connections about their personal preferences, likes, dislikes, beliefs and even their secrect desires is not 
                a monumental task. On the contrary it is the future for every company who wants to acquire more cusomters and any politician who wants to win
                more votes. The truth is that advertising and influence is becoming more targeted and more effective on a larger scale than ever before.
            </p>
            <p>
                In 2020, most people who use the internet in their daily lives understand that their personal data is always being collected and
                analyzed for one reason or another. But do they know <storng>how</storng> that data is captured? Do they understand what this data 
                <strong>can</strong> be used for? Perhaps most importantly, do they know how to protect themselves against entities who do not have
                their best interests at heart? I asked a few friends and family members these questions and found that most people didn't really 
                understand the extent to which their data is collected, analyzed and often sold. They also had very little idea about how to protect 
                themselves against this kind of data collection.
            </p>
            <p>
                After enough of these conversations I decided to put my new development skills to good use. Browser Power was born from the basic desire to educate
                people about one of the many ways applications collect personal data from their users.
                If people don't understand how their data is collected, they have little chance of making informed decisions about how 
                to protect themselves. Hopefully, this project will enhance someone's ability to have a more informed discussion about data 
                privacy with a colleague at work, a family member or even with a politician voting on a digital security bill. 
                
                When you open an app or navigate 
                to a website ask yourself: 'What kind of data is being collected, how might it be used and am I comfortable with this entity getting access to my information?'. 
            </p> */}
        </section>
    )
};

export default ProjectView;
