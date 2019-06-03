import React, { Component } from 'react';
import Upload from './Books/Upload';

const Links = [
	{
		innerText: 'All books',
		href: '/all-books',
		icon: 'fas fa-book-open w-fixed'
	},
	{
		innerText: 'Categories',
		href: '/categories',
		icon: 'fas fa-archive w-fixed'
	},
	{
		innerText: 'Shelves',
		href: '/shelves',
		icon: 'fas fa-stream w-fixed'
	},
	{
		innerText: 'Favorite reads',
		href: '/favorites',
		icon: 'fas fa-bookmark w-fixed'
	}
];

class Sidebar extends Component {
	render() {
		return (
			<aside className='sidebar bg-white'>
				<section id='sidebar-items'>
					<p className='text-grey'> Browse </p>
					{Links.map((link, index) => {
						return (<a href={link.href} className='w-100 center btn btn-link round' key={index}>
							<i className={link.icon}></i> {link.innerText}
						</a>)
					})}
				</section>
				<hr className='divider'></hr>
				<Upload/>
				<script src='/static/active-button.js'></script>
			</aside>
		);
	}
}

export default Sidebar;