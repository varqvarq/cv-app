export interface IEducationData {
	date: number;
	title: string;
	description: string;
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
	range: number;
}

export interface INewSkillsData {
	id: number;
	name: string;
	range: number;
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
