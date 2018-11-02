import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GridListExampleSimple from '../image_grid/image_grid.jsx';
import ModalSessionContainer from '../modal_session/modal_session_container.js';
import HeaderHome from '../header/header.jsx';
import ContentHome from '../content/content.jsx';

import ModalUploadContainer from '../modal_upload/modal_upload_container.js';
import FooterHome from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import TabsExampleSimple from './greeting_tab.jsx';

import SettingsDropContainer from '../widgets/settings_drop_container.js';
injectTapEventPlugin();


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
  			<div id="wrapper">
  						<h1>Stellar</h1>
  						<p>Just another free, fully responsive site template<br />
  						built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>.</p>

  					<nav id="nav">
  						<ul>
  							<li><a href="#intro" className="active">Introduction</a></li>
  							<li><a href="#first">Gallery</a></li>
  							<li><a href="#second">Features</a></li>
  							<li><a href="#cta">About Me</a></li>
  						</ul>
  					</nav>

  					<div id="main">
  							<section id="intro" className="main">
  								<div className="spotlight">
  									<div className="content">
  										<header className="major">
  											<h2>What is Fishpx</h2>
  										</header>
  										<p>FishPx is a full-stack web application inspired by 500px and Stellar from HTML5UP.
                      FishPx is an online platform for oceanic photographers to share their work and gain global exposure.
                      The website utilizes Ruby on Rails on the backend, a PostgreSQL database,
                      and React.js with a Redux architectural framework on the Front-end.</p>
  										<ul className="actions">
  											<li><a href="#" className="button">Learn More</a></li>
  										</ul>
  									</div>
  								</div>
  							</section>

  							<section id="first" className="main special">
  								<header className="major">
  									<h2>Magna veroeros</h2>
  								</header>
  								<ul className="features">
  									<li>
  										<span className="icon major style1 fa-code"></span>
  										<h3>Ipsum consequat</h3>
  										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
  									</li>
  									<li>
  										<span className="icon major style3 fa-copy"></span>
  										<h3>Amed sed feugiat</h3>
  										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
  									</li>
  									<li>
  										<span className="icon major style5 fa-diamond"></span>
  										<h3>Dolor nullam</h3>
  										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
  									</li>
  								</ul>
  								<footer className="major">
  									<ul className="actions special">
  										<li><a href="generic.html" className="button">Learn More</a></li>
  									</ul>
  								</footer>
  							</section>

  							<section id="second" className="main special">
  								<header className="major">
  									<h2>Ipsum consequat</h2>
  									<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
  									posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
  								</header>
  								<ul className="statistics">
  									<li className="style1">
  										<span className="icon fa-code-fork"></span>
  										<strong>5,120</strong> Etiam
  									</li>
  									<li className="style2">
  										<span className="icon fa-folder-open-o"></span>
  										<strong>8,192</strong> Magna
  									</li>
  									<li className="style3">
  										<span className="icon fa-signal"></span>
  										<strong>2,048</strong> Tempus
  									</li>
  									<li className="style4">
  										<span className="icon fa-laptop"></span>
  										<strong>4,096</strong> Aliquam
  									</li>
  									<li className="style5">
  										<span className="icon fa-diamond"></span>
  										<strong>1,024</strong> Nullam
  									</li>
  								</ul>
  								<p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
  								<footer className="major">
  									<ul className="actions special">
  										<li><a href="generic.html" className="button">Learn More</a></li>
  									</ul>
  								</footer>
  							</section>

  							<section id="cta" className="main special">
  								<header className="major">
  									<h2>Congue imperdiet</h2>
  									<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
  									posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
  								</header>
  								<footer className="major">
  									<ul className="actions special">
  										<li><a href="generic.html" className="button primary">Get Started</a></li>
  										<li><a href="generic.html" className="button">Learn More</a></li>
  									</ul>
  								</footer>
  							</section>

  					</div>

  					<footer id="footer">
  						<section>
  							<h2>Aliquam sed mauris</h2>
  							<p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
  							<ul className="actions">
  								<li><a href="generic.html" className="button">Learn More</a></li>
  							</ul>
  						</section>
  						<section>
  							<h2>Etiam feugiat</h2>
  							<dl className="alt">
  								<dt>Address</dt>
  								<dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
  								<dt>Phone</dt>
  								<dd>(000) 000-0000 x 0000</dd>
  								<dt>Email</dt>
  								<dd><a href="#">information@untitled.tld</a></dd>
  							</dl>
  							<ul className="icons">
  								<li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
  								<li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
  								<li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
  								<li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
  								<li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
  							</ul>
  						</section>
  						<p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
  					</footer>

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
