import { NavigateFunction } from "react-router-dom";

export interface Token {
	Bearer: string,
	BearerExpiresAt?: number
	Refresh?: string,
	RefreshExpiresAt?: number,
}

export default class Client {
    private Token: () => Token;
	private BaseUri: string;

	constructor(
        token: () => Token,
		baseUri: string
	) {
		this.Token = token;
		this.BaseUri = baseUri;
	}
}