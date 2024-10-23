import { Model, Response, createServer } from 'miragejs';
import { educationData, skillsData } from './../helpers/constants';
import { ISkillsData } from '../helpers/types';

const skills = [] as ISkillsData[];

export default function mirageServer() {
	createServer({
		models: {
			skill: Model,
		},

		routes() {
			this.namespace = 'api';
			this.timing = 3000;

			this.get('/education', () => {
				return educationData;
				// return new Response(404, {}, 'error');
			});

			this.get('/skills', (schema) => {
				return skills;
			});

			this.post('/skills', (schema, request) => {
				const newSkill = JSON.parse(request.requestBody);
				skills.push(newSkill);
				return newSkill;
			});
		},
	});
}
