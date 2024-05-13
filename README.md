# Smartphone Management Client

This is `Smartphone Management System` for a warehouse. The main purpose of the application is to maintain `C-CREATE R-READ U-UPDATE D-DELETE` for products. User can sell a product, and track sales history based on `daily`, `weekly`, `monthly` and `yearly`. Implement `authentication` and `authorization` using jwt token. The application is authorized using role based routing. There are 3 types of user roles such as `Super admin`, `Branch manager`, and `Seller`. The entire application's state managed by `redux-toolkit` and data fetching with caching using `redux-toolkit-query`.

### Live Link

```bash
https://
```

## Key Features

Role Based Routing:

1. **Super Admin**

   Super Admin will have all access.

2. **Branch Manager**

Managers can add and modify products.

3. **Seller**

Sellers can only sell.

Functionality:

1. **Smartphones:**

   - Create new Smartphones.
   - Generate and provide a downloadable PDF invoice automatically upon the successful sale of a Smartphones.
   - Update existing product details.
   - Delete single/multiple Smartphones at a time.
   - Duplicate any Smartphones and edit to create a new Smartphones.

2. **Sales:**
   - View daily sales history.
   - View weekly sales history.
   - View monthly sales history.
   - View yearly sales history.

## Technology Used

- **React Router**
- **Redux Toolkit**
- **Redux Persist**
- **Ant Design**
- **Tailwind CSS**
- **React Hook Form**
- **Day.js**
- **JWT Decode**
- **jspdf**

## Getting Started

These instructions will help you set up and run the application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation locally

1. Clone the repository:

```bash
https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-client-side-NaimurAlltime.git
```

2. Navigate to the project directory:

```bash
cd smartphone-management-client
```

3. Install dependencies:

```bash
npm install
```

### Running the Application

```bash
npm run dev
```
