import React from 'react';


const AboutSection = () => {
	return (
		<div className='ImageSection'>
			<div className='about-info'>
				<h3>
					I am <span className="kaushan-font">  Myilvaganan Sakthivel</span>
				</h3>
				<p className='about-text'>
					I don’t like to define myself by the work I’ve done. I define myself by the work I want to do.
					Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging
					myself, and do interesting things that matter.
				</p>
				<div className='about-details'>
					<div className='left-section'>
						<p>Full Name</p>
						<p>Age & D.O.B</p>
						<p>Nationality</p>
						<p>Languages</p>
						<p>Address</p>
						<p>Travelled for work</p>
					</div>
					<div className='right-section'>
						<p>: &nbsp; Myilvaganan Sakthivel</p>
						<p>: &nbsp; 24, Nov 4 1996</p>
						<p>: &nbsp; Indian</p>
						<p>: &nbsp; Tamil, English, Hindi, Telugu, Malayalam</p>
						<p>: &nbsp; Karuppur, Salem, Tamil Nadu</p>
						<p>: &nbsp; Chennai, Sanand, Pune, Noida, Hungary</p>
					</div>
				</div>
			</div>

		</div>
	);
};

export default AboutSection;
