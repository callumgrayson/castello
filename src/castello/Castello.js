import React from 'react'
import styles from './Castello.module.scss'
import spritePath from './img/sprite.svg'
import logo_bbc from './img/logo-bbc.png'
import logo_bi from './img/logo-bi.png'
import logo_forbes from './img/logo-forbes.png'
import logo_tc from './img/logo-techcrunch.png'
import logo from './img/favicon.png'
import realtor_1 from './img/realtor-1.jpeg'
import realtor_2 from './img/realtor-2.jpeg'
import realtor_3 from './img/realtor-3.jpeg'
import gal_1 from './img/gal-1.jpeg'
import gal_2 from './img/gal-2.jpeg'
import gal_3 from './img/gal-3.jpeg'
import gal_4 from './img/gal-4.jpeg'
import gal_5 from './img/gal-5.jpeg'
import gal_6 from './img/gal-6.jpeg'
import gal_7 from './img/gal-7.jpeg'
import gal_8 from './img/gal-8.jpeg'
import gal_9 from './img/gal-9.jpeg'
import gal_10 from './img/gal-10.jpeg'
import gal_11 from './img/gal-11.jpeg'
import gal_12 from './img/gal-12.jpeg'
import gal_13 from './img/gal-13.jpeg'
import gal_14 from './img/gal-14.jpeg'
import house_1 from './img/house_1.jpeg'
import house_2 from './img/house_2.jpeg'
import house_3 from './img/house_3.jpeg'
import house_4 from './img/house_4.jpeg'
import house_5 from './img/house_5.jpeg'
import house_6 from './img/house_6.jpeg'
import story_1 from './img/story-1.jpeg'
import story_2 from './img/story-2.jpeg'

function Castello() {
	function handleClick(e) {
		e.preventDefault()
	}

	const logos = [
		{ logo: logo_bbc, name: 'BBC' },
		{
			logo: logo_forbes,
			name: 'Forbes'
		},
		{ logo: logo_tc, name: 'TechCrunch' },
		{
			logo: logo_bi,
			name: 'Business Insider'
		}
	]

	const homesContent = [
		{ imgPath: house_1, name: 'Beautiful Family Home', location: 'USA', rooms: 5, area: 325, price: 1200000 },
		{ imgPath: house_2, name: 'Modern Glass Villa', location: 'Canada', rooms: 6, area: 450, price: 2750000 },
		{ imgPath: house_3, name: 'Cozy Country House', location: 'UK', rooms: 4, area: 250, price: 850000 },
		{ imgPath: house_4, name: 'Large Rustic Villa', location: 'Portugal', rooms: 6, area: 480, price: 1950000 },
		{ imgPath: house_5, name: 'Majestic Masion', location: 'Germany', rooms: 18, area: 4230, price: 9500000 },
		{ imgPath: house_6, name: 'Modern Family Apartment', location: 'Italy', rooms: 3, area: 180, price: 600000 }
	]

	const galleryContent = [
		{ img: gal_1, itemId: styles.gallery__item__1 },
		{ img: gal_2, itemId: styles.gallery__item__2 },
		{ img: gal_3, itemId: styles.gallery__item__3 },
		{ img: gal_4, itemId: styles.gallery__item__4 },
		{ img: gal_5, itemId: styles.gallery__item__5 },
		{ img: gal_6, itemId: styles.gallery__item__6 },
		{ img: gal_7, itemId: styles.gallery__item__7 },
		{ img: gal_8, itemId: styles.gallery__item__8 },
		{ img: gal_9, itemId: styles.gallery__item__9 },
		{ img: gal_10, itemId: styles.gallery__item__10 },
		{ img: gal_11, itemId: styles.gallery__item__11 },
		{ img: gal_12, itemId: styles.gallery__item__12 },
		{ img: gal_13, itemId: styles.gallery__item__13 },
		{ img: gal_14, itemId: styles.gallery__item__14 }
	]

	const footerContent = [
		'Find your dream home',
		'Request proposal',
		'Download home planner',
		'Contact us',
		'Submit your property',
		'Come work with us'
	]

	return (
		<div className={styles.travello}>
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<button className={styles.nav_btn} />
				</div>

				<header className={styles.header}>
					<div className={styles.header__company}>
						<img src={logo} alt="Company logo" className={styles.header__company_logo} />
						<h2 className={styles.heading_5}>castello</h2>
					</div>
					<h3 className={styles.heading_3}>Your own home:</h3>
					<h1 className={styles.heading_1}>The ultimate personal freedom</h1>
					<button className={`${styles.btn} ${styles.header__btn}`}>View our properties</button>
					<div className={styles.header__seenon_text}>As seen on</div>
					<div className={styles.header__seenon_logos}>
						{logos.map((el, i) => <img key={i} src={el.logo} alt={`Seen on ${el.name}`} />)}
					</div>
				</header>

				<div className={styles.realtors}>
					<h3 className={styles.heading_3}>Top 3 Realtors</h3>
					<div className={styles.realtors__list}>
						<img src={realtor_1} alt="Realtor 1" className={styles.realtors__img} />
						<div className={styles.realtors__details}>
							<h4 className={styles.heading_4}>Erik Feinman</h4>
							<p className={styles.realtors__sold}>245 houses sold</p>
						</div>
						<img src={realtor_2} alt="Realtor 2" className={styles.realtors__img} />
						<div className={styles.realtors__details}>
							<h4 className={styles.heading_4}>Kim Brown</h4>
							<p className={styles.realtors__sold}>212 houses sold</p>
						</div>
						<img src={realtor_3} alt="Realtor 3" className={styles.realtors__img} />
						<div className={styles.realtors__details}>
							<h4 className={styles.heading_4}>Toby Ramsey</h4>
							<p className={styles.realtors__sold}>198 houses sold</p>
						</div>
					</div>
				</div>

				<section className={styles.features}>
					<div className={styles.feature}>
						<svg className={styles.feature__icon}>
							<use xlinkHref={`${spritePath}#icon-global`}>a</use>
						</svg>
						<h4 className={`${styles.heading_4} ${styles.heading_4__dark}`}>World's best luxury homes</h4>
						<p className={styles.feature__text}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
							pariatur voluptatibus.
						</p>
					</div>
					<div className={styles.feature}>
						<svg className={styles.feature__icon}>
							<use xlinkHref={`${spritePath}#icon-trophy`}>a</use>
						</svg>
						<h4 className={`${styles.heading_4} ${styles.heading_4__dark}`}>Only the best properties</h4>
						<p className={styles.feature__text}>
							Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut
							quia.
						</p>
					</div>
					<div className={styles.feature}>
						<svg className={styles.feature__icon}>
							<use xlinkHref={`${spritePath}#icon-map-pin`}>a</use>
						</svg>
						<h4 className={`${styles.heading_4} ${styles.heading_4__dark}`}>World's best luxury homes</h4>
						<p className={styles.feature__text}>
							Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
						</p>
					</div>
					<div className={styles.feature}>
						<svg className={styles.feature__icon}>
							<use xlinkHref={`${spritePath}#icon-key`}>a</use>
						</svg>
						<h4 className={`${styles.heading_4} ${styles.heading_4__dark}`}>New home in one week</h4>
						<p className={styles.feature__text}>
							Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur
							adipisicing elit.
						</p>
					</div>
					<div className={styles.feature}>
						<svg className={styles.feature__icon}>
							<use xlinkHref={`${spritePath}#icon-presentation`}>a</use>
						</svg>
						<h4 className={`${styles.heading_4} ${styles.heading_4__dark}`}>Top 1% realtors</h4>
						<p className={styles.feature__text}>
							Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus
							pariatur voluptatibus.
						</p>
					</div>
					<div className={styles.feature}>
						<svg className={styles.feature__icon}>
							<use xlinkHref={`${spritePath}#icon-lock`}>a</use>
						</svg>
						<h4 className={`${styles.heading_4} ${styles.heading_4__dark}`}>Secure payments</h4>
						<p className={styles.feature__text}>
							Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
						</p>
					</div>
				</section>

				<div className={styles.story__pictures}>
					<img src={story_1} alt="Couple with new house" className={styles.story__img__1} />
					<img src={story_2} alt="Couple with new house" className={styles.story__img__2} />
				</div>

				<div className={styles.story__content}>
					<h3 className={`${styles.heading_3} ${styles.mb_sm}`}>Happy customers</h3>
					<h2 className={`${styles.heading_2} ${styles.heading_2__dark} ${styles.mb_md}`}>
						&ldquo;The best decision of our lives&rdquo;
					</h2>
					<p className={styles.story__text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
						pariatur voluptatibus. Quidem consequatur harum volupta!
					</p>
					<button className={styles.btn}>Find your own home</button>
				</div>

				<section className={styles.homes}>
					{homesContent.map((el, i) => (
						<div key={i} className={styles.home}>
							<img src={el.imgPath} alt={`House ${i}`} className={styles.home__img} />
							<svg className={styles.home__like}>
								<use xlinkHref={`${spritePath}#icon-heart-full`} />
							</svg>
							<h5 className={styles.home__name}>{el.name}</h5>
							<div className={styles.home__location}>
								<svg>
									<use xlinkHref={`${spritePath}#icon-map-pin`} />
								</svg>
								<p>{el.location}</p>
							</div>
							<div className={styles.home__rooms}>
								<svg>
									<use xlinkHref={`${spritePath}#icon-profile-male`} />
								</svg>
								<p>{el.rooms} rooms</p>
							</div>
							<div className={styles.home__area}>
								<svg>
									<use xlinkHref={`${spritePath}#icon-expand`} />
								</svg>
								<p>
									{el.area} m<sup>2</sup>
								</p>
							</div>
							<div className={styles.home__price}>
								<svg>
									<use xlinkHref={`${spritePath}#icon-key`} />
								</svg>
								<p>${el.price.toLocaleString()}</p>
							</div>
							<button className={`${styles.btn} ${styles.home__btn}`} onClick={handleClick}>
								Contact realtor
							</button>
						</div>
					))}
				</section>

				<section className={styles.gallery}>
					{galleryContent.map((el, i) => (
						<figure key={i} className={`${styles.gallery__item} ${el.itemId}`}>
							<img src={el.img} alt={`Gallery ${i + 1}`} className={styles.gallery__img} />
						</figure>
					))}
				</section>

				<footer className={styles.footer}>
					<nav className={styles.nav}>
						{footerContent.map((el, i) => (
							<li key={i} className={styles.nav__item}>
								<a href="./" className={styles.nav__link} onClick={handleClick}>
									{el}
								</a>
							</li>
						))}
					</nav>
					<p className={styles.copyright}>
						&copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes.
						This does NOT apply if you plan to produce your own course or tutorials based on this project.
					</p>
				</footer>
			</div>
		</div>
	)
}

export default Castello
