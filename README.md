# DCR Logistics - Premium Corporate Website

> **Tagline:** WE KEEP YOUR BUSINESS MOVING  
> **Location:** Attibele, Bangalore, Karnataka – 562107, India  
> **Phone:** +91 8792886452  

A modern, enterprise-grade corporate website for **DCR Logistics**, specializing in Third-Party Logistics (3PL), Warehousing, C&F Services, Inventory Management, Reverse Logistics, B2B & B2C Transportation, and Value-Added Services across South India.

Inspired by industry benchmarks such as Stockarea and Rapiditors, this website features a clean corporate white aesthetic with deep navy blue (`#07101E`) and vibrant logistics orange (`#FF6500`) accents, responsive layouts, smooth navigation, interactive South India transit visualizer, and functional quotation & enquiry systems.

---

## 🚀 Quick Start (Run Locally)

1. **Install Dependencies** (already installed in this workspace):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `dist/` directory, ready to deploy to Netlify, Vercel, AWS S3/CloudFront, or any web hosting provider.

---

## 🏢 How to Add Your Official Assets & Details

### 1. Upload Your Company Logo
- Place your official logo file as **`public/images/logo.png`** (or `.svg`).
- The website's `BrandLogo` component will automatically detect it and display your official logo across the header, footer, and brand touchpoints.
- If no file is uploaded yet, an enterprise vector geometric emblem is rendered seamlessly.

### 2. Upload Your Actual Warehouse Photographs
- Store your warehouse and team photos in:
  - `public/images/warehouse/` (e.g. `warehouse-hub.jpg`, `racking.jpg`, `docks.jpg`)
  - `public/images/services/`
  - `public/images/industries/`
- You can easily link them in `src/data/servicesData.js` and `src/data/industriesData.js`.

### 3. Official Company Emails
- Configured in **`src/config/company.js`**:
  ```js
  email: 'info@dcrlogistics.in',
  directEmail: 'dhruvanth@dcrlogistics.in',
  ```

### 4. Connect Form Submissions to Your Email Inbox
All "Get a Quote" and "Contact Us" submissions are **100% functional**:
- Submissions are persistently stored locally in real-time with unique tracking IDs (`DCR-QUO-XXXXX` / `DCR-CNT-XXXXX`).
- You can view and export all received enquiries as a CSV spreadsheet at any time by clicking **"Enquiries Database"** in the footer!
- To forward leads directly to your email inbox, add a free [Formspree](https://formspree.io/) or webhook endpoint in `src/config/company.js`:
  ```js
  enquiryConfig: {
    enableLocalStorageBackup: true,
    webhookEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  }
  ```

---

## 🗺️ Website Architecture & Navigation

- **Home (`/`)**:
  - Hero Section with tagline "WE KEEP YOUR BUSINESS MOVING"
  - Company Introduction with Attibele strategic highlights
  - 7 Core Logistics Services Showcase with direct detail links
  - Why Choose DCR Logistics (7 verified operational strengths)
  - Industries We Serve (7 sector cards)
  - Our Network with interactive South India Transit Grid
  - Call-to-Action (Request a Quote & Contact Our Team)
- **About Us (`/about`)**: Company vision, mission, 4-pillar methodology, warehousing & distribution capabilities, and customer commitment.
- **Services (`/services`)**: Comprehensive overview of all 7 verticals with key activities, business benefits, facility specs, and direct enquiry modal.
- **Service Detail (`/services/:id`)**: Dedicated deep-dive for each service (3PL, Warehousing, C&F, Inventory Management, Reverse Logistics, Transportation, Value-Added Services).
- **Industries (`/industries`)**: In-depth coverage for Manufacturing, E-commerce, FMCG, Automotive, Retail, Electronics, and Food & Beverage.
- **Our Network (`/network`)**: Strategic Attibele hub advantages, arterial regional corridors (Hosur, Chennai, Coimbatore, Kerala, Hyderabad), and interactive vector map.
- **Contact Us (`/contact`)**: Attibele Bangalore address, phone `+91 8792886452`, emails `info@dcrlogistics.in` & `dhruvanth@dcrlogistics.in`, functional contact form, Google Maps integration, and direct WhatsApp connect.
- **Get a Quote (`/quote` & Global Modal)**: Commercial quote request form capturing name, company, phone, email, service, warehouse space, location, start date, and specifics.
- **Footer**: Tagline, quick links, service catalog, phone, emails, WhatsApp, and internal enquiry viewer.

---

## 🛡️ Key Contacts & Verification
- **Company:** DCR Logistics
- **Phone:** +91 8792886452
- **Emails:** info@dcrlogistics.in | dhruvanth@dcrlogistics.in
- **Facility:** Attibele, Bangalore, Karnataka – 562107, India
