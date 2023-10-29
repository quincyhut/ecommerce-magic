# ECOMMERCE CLOTHING BRAND SITE
Welcome to the documentation for our eCommerce clothing website built with Next.js 14, Sanity.io, Tailwind CSS, and Stripe integration. This document will provide an overview of the project structure, setup instructions, and key features.


## Project Overview

Our eCommerce clothing website is a modern and user-friendly platform for selling clothing items online. It incorporates the following technologies:

- **Next.js 14**: A popular React framework that enables server-side rendering and efficient routing.
- **Sanity.io**: A headless CMS for managing content.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Stripe**: A secure payment processing system for handling transactions.

## Prerequisites

Before you start, make sure you have the following installed on your system:

- Node.js [Node -v 18]
- npm or yarn
- Sanity.io account
- Stripe account [NOTE: Public key & Secret Key]
## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Key Features

- **Product Catalog**: Display a wide range of clothing items with images, descriptions, and prices.
- **User Authentication**: Allow users to create accounts, log in, and manage their profiles.
- **Shopping Cart**: Enable users to add products to their cart and proceed to checkout.
- **Payment Processing**: Securely process payments using Stripe.
- **Content Management**: Easily update and manage website content with Sanity.io.
- **Responsive Design**: Ensure a seamless experience on various devices.
- **SEO Optimization**: Improve search engine visibility with server-side rendering.
## Installation

**Step 1**: Setup Next JS 14

```bash
   npx create-next-app@latest next-ecommerce-cms --typescript --eslint
   
   cd next-ecommerce-cms
```

**Step 2**: Setup TailwindCSS

```bash
   npm install -D tailwindcss postcss autoprefixer

   npx tailwindcss init -p
```

**Step 2**: Setup Sanity.io for CMS

```bash
   npm create sanity@latest
```

**Step 2**: Setup Stripe payment gateway

```bash
   npm i stripe @stripe/stripe-js
```
## Authors

- [Parbat Lama](https://lamaparbat.com.np/)

