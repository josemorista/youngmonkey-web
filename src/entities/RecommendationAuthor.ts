import { Enterprise } from './Enterprise';

export class RecommendationAuthor {
	constructor(public name: string, public picture: string, public position: string, public enterprise: Enterprise) {}
}
