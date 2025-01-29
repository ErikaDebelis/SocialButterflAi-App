import { NavigateFunction } from "react-router-dom";
import Constants from "../helpers/constants";

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
	)
    {
		this.Token = token;
		this.BaseUri = baseUri;
	}

    public async UploadVideo(
        from:string,
        subject:string,
        message:string
    ): Promise<boolean>
    {
        var response = await fetch(
            "http://localhost:5000//Analysis/Upload",
            {
                method: Constants.REST_METHOD_POST,
                headers: {
                    [Constants.CONTENT_TYPE_KEY]: "application/json"
                },
                body: `${new URLSearchParams(
                    {
                        from,
                        subject,
                        message
                    }
                    )}`,
            }
        );

        if (response.status !== 200)
            {
                console.error("");

                return response.status === 400;
            }

        return response.status === 200;
    }
}