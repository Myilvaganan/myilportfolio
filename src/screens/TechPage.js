import React from 'react';
import Technologies from '../components/Technology';
import Title from '../components/Title';
import SkillsSection from '../components/SkillsSection';

const TechPage = () => {
	return (
		<div>
			<div className='b-title'>
				<Title title={'Developer Skills'} span={'Developer Skills'} />
			</div>
			<div className='BlogsPage'>
				{Technologies.map((blog) => {
					return (
						<div className='blog' key={blog.id}>
							<div className='blog-content'>
								<img src={blog.image} alt='' />
								<a href={blog.link} className='blog-link'>
									{blog.title}
								</a>
								<p className='blog-time'>
									{' '}
									Experiencing from : {blog.month} {blog.year}
								</p>
							</div>
							<div className='skillsContainer-tech'>
								<SkillsSection progress={blog.progress} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TechPage;
