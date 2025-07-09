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
		{
			displayName: "Hubbi API URL",
			name: "apiUrl",
			type: "string",
			default: "http://hubbi.app",
			required: true,
			description: "The base URL for the Hubbi API. Default is http://hubbi.app",
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
			baseURL: "={{$credentials.apiUrl}}",
			url: "/authentication/api-keys/",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		},
	};
}
