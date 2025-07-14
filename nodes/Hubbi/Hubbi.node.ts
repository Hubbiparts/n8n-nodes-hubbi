import { INodeType, INodeTypeDescription, NodeConnectionType } from "n8n-workflow";
import { stockOperations, stockFields } from "./StockDescription";
import { partFields, buyerPartOperations, dealerPartOperations } from "./PartDescription";
import { VehicleFields, VehicleOperations } from "./vehicleDescription";

export class Hubbi implements INodeType {
	description: INodeTypeDescription = {
		displayName: "Hubbi",
		name: "hubbi",
		icon: "file:hubbi.svg",
		documentationUrl: "https://gitlab.com/hubbin8n/n8n-nodes-hubbi/-/wikis/nodes-docs",
		group: ["transform"],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: "Get data from the Hubbi services",
		defaults: {
			name: "hubbi",
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: "hubbiApi",
				required: true,
			},
		],
		requestDefaults: {
			baseURL: "={{$credentials.apiUrl}}",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		},
		properties: [
			{
				displayName: "User Type",
				name: "userType",
				type: "options",
				options: [
					{
						name: "Dealer",
						value: "dealer",
					},
					{
						name: "Buyer",
						value: "buyer",
					},
				],
				default: "dealer",
				description:
					"Select the type of user for the Hubbi services. This will determine the available operations and data access.",
			},
			{
				displayName: "Resource",
				name: "resource",
				type: "options",
				noDataExpression: true,
				options: [
					{
						name: "Stock",
						value: "stock",
						description: "Operations related to your stock",
					},
					{
						name: "Autopart",
						value: "part",
						description: "Operations related to autoparts",
					},
					{
						name: "Vehicle",
						value: "vehicle",
						description: "Operations related to vehicles",
					},
				],
				default: "part",
				displayOptions: {
					show: {
						userType: ["dealer"],
					},
				},
			},
			{
				displayName: "Resource",
				name: "resource",
				type: "options",
				noDataExpression: true,
				options: [
					{
						name: "Autopart",
						value: "part",
						description: "Operations related to autoparts",
					},
					{
						name: "Vehicle",
						value: "vehicle",
						description: "Operations related to vehicles",
					},
				],
				default: "part",
				displayOptions: {
					show: {
						userType: ["buyer"],
					},
				},
			},
			...stockOperations,
			...stockFields,
			...buyerPartOperations,
			...dealerPartOperations,
			...partFields,
			...VehicleOperations,
			...VehicleFields,
		],
	};
}
