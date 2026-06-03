# UML Use Case Diagram - KhaadSeva

This document provides an extensive elaboration of the **Use Case Diagram** for the **KhaadSeva** platform. It defines the system boundaries, the primary and secondary actors, their goals, and how they interact with the system.

---

## 1. System Boundary and Objectives
**KhaadSeva** is a digital platform designed to facilitate circular economy principles in agriculture. The primary objective is to connect:
- **Farmers** (Sellers who generate bio-waste/agro-waste)
- **Buyers** (Fertilizer manufacturers or organic processing companies)
- **Logistics Providers** (Truck drivers/delivery agents transporting the waste)

The system boundary encompasses the frontend web application (React/TypeScript dashboards), the backend services (handling waste listings, order match-making, analytics processing), and external integrations (mapping services for live logistics tracking).

---

## 2. Actors Definition

An actor represents a role played by a user or an external system interacting with the KhaadSeva platform.

| Actor Name | Type | Description |
| :--- | :--- | :--- |
| **Farmer** | Primary / Human | Agricultural waste producer who lists materials like rice husk, sugarcane bagasse, wheat straw, etc., to earn revenue and prevent crop residue burning. |
| **Buyer** | Primary / Human | Commercial fertilizer producers, compost manufacturers, or bio-energy companies looking to acquire agro-waste raw materials. |
| **Logistics Driver** | Secondary / Human | Delivery agents responsible for picking up waste from the farmer's location and delivering it to the buyer's factory. |
| **KhaadSeva Admin** | Secondary / Human | System administrator responsible for managing dispute resolutions, approving/moderating listings, and monitoring platform metrics. |
| **Mapping Service** | External System | Third-party API (e.g., Google Maps, Mapbox) that provides geolocation and routing for the logistics tracking module. |

---

## 3. Use Cases Description

Use cases represent the core functionalities provided by the platform to help actors achieve their goals.

### A. Authentication & Profile Management
1. **Register/Login**: Enable Farmers and Buyers to create profiles, enter address details (for logistics calculations), and securely authenticate.
2. **Manage Profile**: Update contact information, address, and bank/payment details.

### B. Farmer-Specific Use Cases
3. **List Agro-Waste**: Form submission including waste type, quantity (in tons), asking price, location, and photos.
   - *Extension*: **Upload Waste Photo** (adds visual verification).
4. **View Price Recommendations**: The system calculates a suggested price based on regional market averages and historical transactions.
5. **Manage Listings**: View active listings, edit price/quantity, or delete expired listings.
6. **Accept/Reject Bids**: Review and respond to buying requests or price negotiations submitted by Buyers.

### C. Buyer-Specific Use Cases
7. **Browse/Search Listings**: Search listings by waste type and filter by location and price range.
8. **Place Order (Buy Waste)**: Instantly purchase a listing at the listed price.
   - *Include*: **Process Payment** (calculates listing price + logistics fee).
9. **Submit Enquiry**: Send a message or alternative price bid to the Farmer for negotiation.
10. **View Environmental Impact Insights**: Access personal dashboard displaying CO₂ emissions prevented, tons recycled, and green metrics.

### D. Logistics & Tracking Use Cases
11. **Assign Delivery Route**: Automatically match an order with a logistics driver based on proximity.
12. **Update Shipment Status**: Driver updates status (e.g., *Pending* $\rightarrow$ *Sold* $\rightarrow$ *In Transit* $\rightarrow$ *Delivered*).
13. **Track Live Shipment**: Farmer and Buyer view real-time location and timeline events.
    - *Include*: **Fetch Map Coordinates** (calls mapping service).

### E. Administrative Use Cases
14. **Monitor Analytics & Impact**: Review global metrics (total waste recycled, total CO₂ reduction, total revenue generated).
15. **Moderate Listings**: Remove fraudulent or inappropriate listings.

---

## 4. Use Case Diagram (Mermaid)

Below is the Mermaid.js representation of the Use Case Diagram. Paste this block into any Markdown viewer that supports Mermaid (like GitHub, VS Code with Mermaid Preview, or the [Mermaid Live Editor](https://mermaid.live)).

```mermaid
usecaseDiagram
    %% Actors
    rect rgb(240, 248, 240)
        actor Farmer as "Farmer\n(Seller)"
        actor Buyer as "Buyer\n(Company)"
        actor Driver as "Logistics Driver"
        actor Admin as "KhaadSeva Admin"
        actor MapAPI as "«system»\nMapping Service"
    end

    %% System Boundary
    subgraph KhaadSeva Platform
        %% Auth
        usecase UC_Auth as "UC1: Authenticate\n(Register/Login)"
        
        %% Farmer
        usecase UC_List as "UC2: List Agro-Waste"
        usecase UC_Upload as "UC2a: Upload Waste Photo"
        usecase UC_Price as "UC3: View Price Recommendations"
        usecase UC_ManageListings as "UC4: Manage Active Listings"
        usecase UC_Bids as "UC5: Accept/Reject Bids"
        
        %% Buyer
        usecase UC_Browse as "UC6: Search & Filter Waste Listings"
        usecase UC_Buy as "UC7: Place Order (Buy)"
        usecase UC_Enquiry as "UC8: Submit Bid/Enquiry"
        usecase UC_Pay as "UC9: Process Payment"
        usecase UC_BuyerImpact as "UC10: View Environmental Analytics"
        
        %% Logistics
        usecase UC_Track as "UC11: Track Live Shipment"
        usecase UC_Assign as "UC12: Assign Delivery Route"
        usecase UC_UpdateStatus as "UC13: Update Shipment Status"
        
        %% Admin
        usecase UC_Moderate as "UC14: Moderate Listings"
        usecase UC_GlobalImpact as "UC15: Monitor Global Platform Analytics"
    end

    %% Actor Relationships
    Farmer --> UC_Auth
    Farmer --> UC_List
    Farmer --> UC_Price
    Farmer --> UC_ManageListings
    Farmer --> UC_Bids
    Farmer --> UC_Track

    Buyer --> UC_Auth
    Buyer --> UC_Browse
    Buyer --> UC_Buy
    Buyer --> UC_Enquiry
    Buyer --> UC_BuyerImpact
    Buyer --> UC_Track

    Driver --> UC_UpdateStatus
    
    Admin --> UC_Moderate
    Admin --> UC_GlobalImpact
    Admin --> UC_Assign

    %% Use Case Relationships (Includes & Extends)
    UC_List <.. UC_Upload : <<extend>>
    UC_Buy ..> UC_Pay : <<include>>
    UC_Track ..> UC_UpdateStatus : <<include>>
    UC_Track --> MapAPI : <<system link>>
```

---

## 5. Relationships & Extension Points Explanation

- **Extend Relationship (`<<extend>>`)**:
  - `UC2a: Upload Waste Photo` extends `UC2: List Agro-Waste`. Listing waste can succeed with text-only data, but uploading a photo is an optional extension that adds value.
- **Include Relationship (`<<include>>`)**:
  - `UC7: Place Order` includes `UC9: Process Payment`. An order cannot be placed without invoking the payment processing system.
  - `UC11: Track Live Shipment` includes `UC13: Update Shipment Status` because tracking requires the driver's current coordinates and milestone completions.
- **System Associations**:
  - The `Mapping Service` API is accessed during live tracking to overlay coordinates onto a map visual.

---

## 6. Implementation Guidelines for Students
To implement this system based on the Use Case Diagram:
1. **Frontend Routing**: Configure role-based views. If user role is `Farmer`, render `FarmerDashboard.tsx` (exposing UC2, UC3, UC4, UC5). If `Buyer`, render `BuyerDashboard.tsx` (exposing UC6, UC7, UC8, UC10).
2. **Database Security**: Establish access control lists (ACLs) so only the listing owner (Farmer) can edit/delete a listing, and only authenticated Buyers can purchase.
3. **Third-Party APIs**: Integrate a service like Leaflet or Mapbox on the frontend to support the driver tracking map interface (`LogisticsTracking.tsx`).
