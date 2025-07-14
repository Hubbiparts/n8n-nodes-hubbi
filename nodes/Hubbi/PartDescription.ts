import { INodeProperties } from "n8n-workflow";

export const partFields: INodeProperties[] = [
	{
		displayName: "Part Name",
		name: "partName",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["searchPart"],
			},
		},
	},
	{
		displayName: "Part Number",
		name: "partNumber",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["searchPart", "partSpecs", "partQuotation"],
			},
		},
	},
	{
		displayName: "Brand Name",
		name: "brandName",
		type: "string",
		required: true,
		default: "",
		displayOptions: {
			show: {
				operation: ["partSpecs", "partQuotation"],
			},
		},
	},
	{
		displayName: "Advanced Search",
		name: "advancedSearch",
		type: "boolean",
		default: false,
		description: "Whether to enable advanced search options",
		displayOptions: {
			show: {
				operation: ["searchPart"],
			},
		},
	},
	{
		displayName: "Barcode",
		name: "barcode",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["searchPart"],
				advancedSearch: [true],
			},
		},
	},
	{
		displayName: "Vehicle",
		name: "vehicle",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ["searchPart"],
				advancedSearch: [true],
			},
		},
	},
	{
		displayName: "Position",
		name: "position",
		type: "multiOptions",
		default: [],
		options: [
			{ name: "Front", value: "DIANTEIRO" },
			{ name: "Left", value: "LADO ESQUERDO" },
			{ name: "Lower", value: "INFERIOR" },
			{ name: "Rear", value: "TRASEIRO" },
			{ name: "Right", value: "LADO DIREITO" },
			{ name: "Upper", value: "SUPERIOR" },
		],
		displayOptions: {
			show: {
				operation: ["searchPart"],
				advancedSearch: [true],
			},
		},
	},
	{
		displayName: "Only in Stock",
		name: "inStock",
		type: "boolean",
		default: false,
		displayOptions: {
			show: {
				operation: ["searchPart"],
				advancedSearch: [true],
			},
		},
	},
	{
		displayName: "UF",
		name: "uf",
		type: "multiOptions",
		default: [],
		options: [
			{ name: "AC", value: "AC" },
			{ name: "AL", value: "AL" },
			{ name: "AM", value: "AM" },
			{ name: "AP", value: "AP" },
			{ name: "BA", value: "BA" },
			{ name: "CE", value: "CE" },
			{ name: "DF", value: "DF" },
			{ name: "ES", value: "ES" },
			{ name: "GO", value: "GO" },
			{ name: "MA", value: "MA" },
			{ name: "MG", value: "MG" },
			{ name: "MS", value: "MS" },
			{ name: "MT", value: "MT" },
			{ name: "PA", value: "PA" },
			{ name: "PB", value: "PB" },
			{ name: "PE", value: "PE" },
			{ name: "PI", value: "PI" },
			{ name: "PR", value: "PR" },
			{ name: "RJ", value: "RJ" },
			{ name: "RN", value: "RN" },
			{ name: "RO", value: "RO" },
			{ name: "RR", value: "RR" },
			{ name: "RS", value: "RS" },
			{ name: "SC", value: "SC" },
			{ name: "SE", value: "SE" },
			{ name: "SP", value: "SP" },
			{ name: "TO", value: "TO" },
		],
		displayOptions: {
			show: {
				operation: ["searchPart"],
				advancedSearch: [true],
				inStock: [true],
			},
		},
	},
];

export const buyerPartOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		options: [
			{
				name: "Search Autopart",
				value: "searchPart",
				action: "Search for autoparts",
				description: "Retrieve details of a part",
				routing: {
					request: {
						method: "GET",
						url: "/catalog/filter/",
						qs: {
							limit: 96,
							offset: 0,
							sku: '={{$parameter["partNumber"]}}',
							search: '={{$parameter["partName"]}}',
							barcode: '={{$parameter["barcode"]}}',
							application: '={{$parameter["vehicle"]}}',
							state_uf:
								'={{Array.isArray($parameter["uf"]) ? $parameter["uf"].join(",") : $parameter["uf"]}}',
							positions:
								'={{Array.isArray($parameter["position"]) ? $parameter["position"].join(",") : $parameter["position"]}}',
							stock: '={{$parameter["inStock"] ? "true" : "false"}}',
						},
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
			},
			{
				name: "Part Specifications",
				value: "partSpecs",
				action: "Get part specifications",
				description: "Retrieve specifications of a part",
				routing: {
					request: {
						method: "GET",
						url: "/public/api/v1/catalog/part/technical-specs",
						qs: {
							codigo_fabricante: '={{$parameter["partNumber"]}}',
							nome_fabricante: '={{$parameter["brandName"]}}',
						},
					},
				},
			},
		],
		default: "searchPart",
		displayOptions: {
			show: {
				resource: ["part"],
				userType: ["buyer"],
			},
		},
	},
];

export const dealerPartOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		options: [
			{
				name: "Search Autopart",
				value: "searchPart",
				action: "Search for autoparts",
				description: "Retrieve details of a part",
				routing: {
					request: {
						method: "GET",
						url: "/catalog/filter/",
						qs: {
							limit: 96,
							offset: 0,
							sku: '={{$parameter["partNumber"]}}',
							search: '={{$parameter["partName"]}}',
							barcode: '={{$parameter["barcode"]}}',
							application: '={{$parameter["vehicle"]}}',
							state_uf:
								'={{Array.isArray($parameter["uf"]) ? $parameter["uf"].join(",") : $parameter["uf"]}}',
							positions:
								'={{Array.isArray($parameter["position"]) ? $parameter["position"].join(",") : $parameter["position"]}}',
							stock: '={{$parameter["inStock"] ? "true" : "false"}}',
						},
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
			},
			{
				name: "Part Specifications",
				value: "partSpecs",
				action: "Get part specifications",
				description: "Retrieve specifications of a part",
				routing: {
					request: {
						method: "GET",
						url: "/public/api/v1/catalog/part/technical-specs",
						qs: {
							codigo_fabricante: '={{$parameter["partNumber"]}}',
							nome_fabricante: '={{$parameter["brandName"]}}',
						},
					},
				},
			},
			{
				name: "Part Quotation",
				value: "partQuotation",
				action: "Get part quotation",
				description: "Retrieve quotation details for a part",
				routing: {
					request: {
						method: "GET",
						url: "/public/api/v1/catalog/part/quotation",
						qs: {
							codigo_fabricante: '={{$parameter["partNumber"]}}',
							nome_fabricante: '={{$parameter["brandName"]}}',
						},
					},
				},
			},
		],
		default: "searchPart",
		displayOptions: {
			show: {
				resource: ["part"],
				userType: ["dealer"],
			},
		},
	},
];
