# Hubbi n8n Node Documentation

This document describes the available nodes and their functionalities for the Hubbi integration in n8n.

## User Types

- **Dealer**: Has access to stock management and advanced part operations.
- **Buyer**: Has access to part and vehicle search functionalities.

---

## Resources and Operations

### 1. Stock (Dealer only)

- **Create Autopart in Stock**: Add a new autopart to your stock.
- **Delete Stock**: Remove an autopart from your stock by ID.
- **Get Autopart in Stock**: Retrieve details of a specific autopart by ID.
- **List Stock**: List all available autoparts in your stock.
- **Update Stock**: Update details of an existing autopart by ID.

### 2. Autopart

#### Buyer

- **Search Autopart**: Search for autoparts using filters like name, number, barcode, vehicle, state, stock, image, and position.
- **Part Specifications**: Retrieve technical specifications for a part.

#### Dealer

- **Search Autopart**: Same as buyer.
- **Part Specifications**: Same as buyer.
- **Part Quotation**: Retrieve quotation details for a part.

### 3. Vehicle

- **Get Vehicle by Plate**: Retrieve vehicle description by license plate (available for both Dealer and Buyer).

---

For more details on each operation and required fields, refer to the node properties in n8n or the Hubbi API documentation.
