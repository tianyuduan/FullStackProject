import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ModalSessionContainer from '../modal_session/modal_session_container.js';
import HeaderHome from '../header/header.jsx';
import ContentHome from '../content/content.jsx';
import Scroll from 'react-scroll';

import MasonaryHome from '../image_grid/masonary_grid_home.jsx';
import ModalUploadContainer from '../modal_upload/modal_upload_container.js';
import FooterHome from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import TabsExampleSimple from './greeting_tab.jsx';

import SettingsDropContainer from '../widgets/settings_drop_container.js';


injectTapEventPlugin();

function handleScroll(input) {
    // return {
    //     if (input === 'features') {
    //       let scroll = Scroll.animateScroll;
    //       scroll.scrollTo(window.innerHeight, {
    //         duration: 2000,
    //         delay: 100,
    //         smooth: true,
    //       }
    //     }
    //   )};
};

const Main = () => (
    <h1>
      <Logo></Logo>
      <SettingsDropContainer/>
      <ModalUploadContainer/>
      <HeaderHome></HeaderHome>
      <div className="tabsCss">
        <TabsExampleSimple className= "tabsCsss"></TabsExampleSimple>
      </div>

    </h1>
);

const splashPage = () => (
  <div>
  <div className="is-preload body-replace">
      <Logo></Logo>
      <ModalSessionContainer/>
      <ContentHome></ContentHome>

			<div id="wrapper">
            <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
              />
					<nav id="nav">
						<ul>
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
						</ul>
					</nav>

					<div id="main">
							<section id="intro" className="main main-padding">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<h2>What is Fishpx</h2>
										</header>
										<p>FishPx is a full-stack web application inspired by 500px and Stellar from HTML5UP.
                      FishPx is an online platform for oceanic photographers to share their work and gain global exposure.
                      The website utilizes Ruby on Rails on the backend, a PostgreSQL database,
                      and React.js with a Redux architectural framework on the Front-end.</p>
									</div>
								</div>
							</section>

							<section id="gallery" className="main special">
								<header className="major main-padding">
									<h2>Get motivated to share your best work</h2>
								</header>
                  <MasonaryHome/>
                  <ul className='features padding-top padding-bottom'>
                    <li>
  										<span className="icon major style5"><i className="fas fa-fish fa-2x"></i></span>
  										<p>FishPx is a great place to connect, to discover and to improve as a photographer.
                      Both photographers and lovers of photographers can enjoy the work the community has provided. </p>
  									</li>
                  </ul>
							</section>

							<section id="features" className="main special main-padding">
								<header className="major">
									<h2>The Top Photos Chosen By You</h2>
									<p>Become part of a community that celebrates incredible photography</p>
								</header>
                <img src="https://camo.githubusercontent.com/7bf16fb2c236aeb7099732fd19bc1f8d878c1455/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f646a756263656778682f696d6167652f75706c6f61642f76313530313238323036342f53637265656e5f53686f745f323031372d30372d32385f61745f332e34372e31315f504d5f6d336a6d71352e706e67"
                alt="upload-feature"></img>
								<p className="content margin-for-text"> Users can enjoy images uploaded from others!
                The website contains an image upload mechanic is implemented with a combination of Cloudinary API, react Dropzone, superAgent and Material-UI.
                At upload, a dropdown menu of the categories will be listed where the user can choose which tag to upload the images under.
                After upload, that image will be rendered under that specific category.</p>
							</section>
					</div>

					<footer id="footer" className='last-footer'>
						<section id="contact">
							<h2>Contact me</h2>
							<p>Hello! I am a software developer in the Bay Area.
              I am looking for new opportunities and would love to chat.
              </p>
							<ul className="actions">
								<li><a href="https://tianyuduan.github.io/portfolio/" className="button-learn-more">Learn More</a></li>
							</ul>
						</section>
            <section>
  							<h2>Tianyu Duan</h2>
                <span>Phone</span><span className='contact-spacing'>(530) 312-1541</span>
                <br></br>
                <span>Email</span><span className='contact-spacing'>Tianyuduan1991@gmail.com</span>
                <br></br>
                <div className="padding-top">
                  <a href="https://www.linkedin.com/in/tianyu-duan/"><span className="label"><i className="fab fa-linkedin-in fa-2x"></i></span></a>
                  <a className='contact-spacing' href="https://github.com/tianyuduan"><span className="label"><i className="fab fa-github fa-2x"></i></span></a>
                </div>
  						</section>
					</footer>
			  </div>
      </div>
  </div>
);

export const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name"></h2>
    <Main />
	</hgroup>
);


export const logOut = (logout) => (
  <RaisedButton className="header-button" onClick={logout}>Log Out</RaisedButton>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : splashPage()
);

export default Greeting;
