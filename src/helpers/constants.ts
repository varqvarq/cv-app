import {
	IContactsData,
	IEducationData,
	IExpertiseData,
	IFeedbackData,
	INavigationData,
	IPortfolioData,
	ISkillsData,
} from './types';

export const aboutMe =
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque';

export const educationData: IEducationData[] = [
	{
		date: 2010,
		title: 'Title 1',
		description:
			'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
	{
		date: 2015,
		title: 'Title 2',
		description:
			'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
	{
		date: 2020,
		title: 'Title 3',
		description:
			'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
	{
		date: 2021,
		title: 'Title 4',
		description:
			'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
	{
		date: 2022,
		title: 'Title 5',
		description:
			'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
	{
		date: 2023,
		title: 'Title 6',
		description:
			'Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n',
	},
];

export const expertiseData: IExpertiseData[] = [
	{
		date: '2013-2014',
		info: {
			company: 'Google',
			job: 'Front-end developer / php programmer',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil',
		},
	},
	{
		date: '2012',
		info: {
			company: 'Twitter',
			job: 'Web developer',
			description:
				'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim',
		},
	},
];

//Skills
export const skillsData: ISkillsData[] = [
	// {
	// 	name: 'HMTL',
	// 	range: 100,
	// },
	// {
	// 	name: 'CSS',
	// 	range: 80,
	// },
	// {
	// 	name: 'TypeScript',
	// 	range: 70,
	// },
	// {
	// 	name: 'JavaScript',
	// 	range: 75,
	// },
	// {
	// 	name: 'React',
	// 	range: 40,
	// },
];

//Portfolio
export const portfolioData: IPortfolioData[] = [
	{
		id: 0,
		title: 'Code Title',
		type: 'code',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		site: 'https://somesite.com',
	},
	{
		id: 1,
		title: 'UI Title',
		type: 'ui',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		site: 'https://somesite.com',
	},
	{
		id: 2,
		title: 'Code Title',
		type: 'code',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		site: 'https://somesite.com',
	},
	{
		id: 3,
		title: 'UI Title',
		type: 'ui',
		description:
			'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		site: 'https://somesite.com',
	},
];

export const contactData: IContactsData[] = [
	{
		icon: 'faPhone',
		title: '',
		text: '500 342 242',
		link: 'tel:500 342 242',
	},
	{
		icon: 'faEnvelope',
		title: '',
		text: 'office@kamsolutions.pl',
		link: 'mailto:office@kamsolutions.pl',
	},
	{
		icon: 'faTwitter',
		title: 'Twitter',
		text: 'https://twitter.com',
		link: 'https://twitter.com',
	},
	{
		icon: 'faFacebookF',
		title: 'Facebook',
		text: 'https://www.facebook.com',
		link: 'https://www.facebook.com',
	},
	{
		icon: 'faSkype',
		title: 'Skype',
		text: 'kamsolutions.pl',
		link: 'skype:amsolutions.pl',
	},
];

export const feedbackData: IFeedbackData[] = [
	{
		id: 0,
		feedback:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ',
		reporter: {
			photoUrl: 'feedback_user.jpg',
			name: 'Gordon Freeman Engineer',
			citeUrl: 'https://www.citeexample.com',
		},
	},
	{
		id: 1,
		feedback:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam et, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempor',
		reporter: {
			photoUrl: 'feedback_user.jpg',
			name: 'Martin Friman Programmer',
			citeUrl: 'https://www.citeexample.com',
		},
	},
	{
		id: 2,
		feedback:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam et, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempor',
		reporter: {
			photoUrl: 'feedback_user.jpg',
			name: 'Martin Friman Programmer',
			citeUrl: 'https://www.citeexample.com',
		},
	},
];

export const navItems: INavigationData[] = [
	{ name: 'about', icon: 'faUser' },
	{ name: 'education', icon: 'faGraduationCap' },
	{ name: 'experience', icon: 'faPen' },
	{ name: 'skills', icon: 'faGem' },
	{ name: 'portfolio', icon: 'faSuitcase' },
	{ name: 'contacts', icon: 'faLocationArrow' },
	{ name: 'feedbacks', icon: 'faComment' },
];
