import {
	ICredentialType,
	INodeProperties,
	IAuthenticateGeneric,
	ICredentialTestRequest,
} from "n8n-workflow";

export class HubbiApi implements ICredentialType {
	displayName = "Hubbi Token API";
	name = "hubbiApi";
	documentationUrl = "https://gitlab.com/hubbin8n/n8n-nodes-hubbi/-/wikis/credential-docs";
	properties: INodeProperties[] = [
		{
			displayName: "Hubbi API Key",
			name: "apiKey",
			type: "string",
			typeOptions: { password: true },
			default: "",
			required: true,
			description: "Your Hubbi API Key",
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: "generic",
		properties: {
			headers: {
				"X-Api-Key": "={{$credentials.apiKey}}",
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: "http://127.0.0.1:8000/",
			url: "/authentication/api-keys/",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		},
	};
}
