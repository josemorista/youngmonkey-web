import { RecommendationAuthor } from './RecommendationAuthor';

let counter = 0;
export class Recommendation {
	id: string;
	constructor(public citation: string, public author: RecommendationAuthor) {
		this.id = `recom-${counter}`;
		counter++;
	}
}
