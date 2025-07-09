import { INodeProperties } from "n8n-workflow";

export const VehicleFields: INodeProperties[] = [
	{
		displayName: "Plate",
		name: "plate",
		type: "string",
		required: true,
		default: "",
		displayOptions: {
			show: {
				operation: ["vehicleByPlate"],
			},
		},
		description: "The vehicle's plate number",
	},
];

export const VehicleOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		options: [
			{
				name: "Get Vehicle by Plate",
				value: "vehicleByPlate",
				action: "Get vehicle by license plate",
				description: "Retrieve vehicle description by plate number",
				routing: {
					request: {
						method: "GET",
						url: "/platesearch/vehicle-info/",
						qs: {
							plate: '={{$parameter["plate"]}}',
						},
					},
				},
			},
		],
		default: "vehicleByPlate",
		displayOptions: {
			show: {
				resource: ["vehicle"],
			},
		},
	},
];
