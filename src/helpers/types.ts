export interface IEducationData {
	year: number;
	title: string;
	text: string;
}

export interface IExpertiseData {
	date: string;
	info: {
		company: string;
		job: string;
		description: string;
	};
}

export interface ISkillsData {
	name: string;
	level: string;
}

export interface IPortfolioData {
	id: number;
	title: string;
	type: string;
	description: string;
	site: string;
}

export interface IContactsData {
	icon: string;
	title?: string;
	text: string;
	link?: string;
}

export interface IFeedbackData {
	id: number;
	feedback: string;
	reporter: {
		photoUrl: string;
		name: string;
		citeUrl: string;
	};
}

export interface INavigationData {
	name: string;
	icon: string;
}
