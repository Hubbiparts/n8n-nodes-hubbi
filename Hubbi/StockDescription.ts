import { INodeProperties } from "n8n-workflow";

export const stockFields: INodeProperties[] = [
	{
		displayName: "Part ID",
		name: "id",
		type: "string",
		required: true,
		default: "",
		displayOptions: {
			show: {
				operation: ["getPart", "updatePart", "deletePart"],
			},
		},
	},
	{
		displayName: "Part Name",
		name: "name",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["createPart", "updatePart"],
			},
		},
	},
	{
		displayName: "Part Code",
		name: "code",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["createPart", "updatePart"],
			},
		},
	},
	{
		displayName: "Price",
		name: "price",
		type: "number",
		default: "",
		displayOptions: {
			show: {
				operation: ["createPart", "updatePart"],
			},
		},
	},
	{
		displayName: "Stock",
		name: "stock",
		type: "number",
		default: "",
		displayOptions: {
			show: {
				operation: ["createPart", "updatePart"],
			},
		},
	},
	{
		displayName: "ERP ID",
		name: "erpId",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["createPart", "updatePart"],
			},
		},
	},
];

export const stockOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		options: [
			{
				name: "Create Autopart in Stock",
				value: "createPart",
				action: "Create autopart in stock",
				description: "Create a new autopart",
				routing: {
					request: {
						method: "POST",
						url: "=erps/parts/",
						body: [
							{
								name: "={{$parameter.name}}",
								code: "={{$parameter.code}}",
								price: "={{$parameter.price}}",
								stock: "={{$parameter.stock}}",
								erp_id: "={{$parameter.erpId}}",
							},
						],
					},
				},
				displayOptions: {
					show: {
						userType: ["dealer"],
					},
				},
			},
			{
				name: "Delete Stock",
				value: "deletePart",
				action: "Delete autopart",
				description: "Delete an autopart by ID",
				routing: {
					request: {
						method: "DELETE",
						url: "=erps/parts/{{$parameter.id}}/",
					},
				},
				displayOptions: {
					show: {
						userType: ["dealer"],
					},
				},
			},
			{
				name: "Get Autopart in Stock",
				value: "getPart",
				action: "Get autopart",
				description: "Get a specific autopart by ID",
				routing: {
					request: {
						method: "GET",
						url: "=erps/parts/{{$parameter.id}}/",
					},
				},
				displayOptions: {
					show: {
						userType: ["dealer"],
					},
				},
			},
			{
				name: "List Stock",
				value: "listParts",
				action: "List autoparts",
				description: "List all available autoparts",
				routing: {
					request: {
						method: "GET",
						url: "=erps/parts/",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "results",
								},
							},
						],
					},
				},
				displayOptions: {
					show: {
						userType: ["dealer"],
					},
				},
			},
			{
				name: "Update Stock",
				value: "updatePart",
				action: "Update autopart",
				description: "Update an existing autopart by ID",
				routing: {
					request: {
						method: "PATCH",
						url: "=erps/parts/{{$parameter.id}}/",
						body: {
							name: "={{$parameter.name}}",
							code: "={{$parameter.code}}",
							price: "={{$parameter.price}}",
							stock: "={{$parameter.stock}}",
							erp_id: "={{$parameter.erpId}}",
						},
					},
				},
				displayOptions: {
					show: {
						userType: ["dealer"],
					},
				},
			},
		],
		default: "listParts",
		displayOptions: {
			show: {
				resource: ["stock"],
			},
		},
	},
];
