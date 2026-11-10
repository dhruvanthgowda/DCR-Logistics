/**
 * DCR Logistics - Core Company Configuration
 * 
 * Update this file whenever contact details, email addresses, or operational parameters change.
 */

export const COMPANY_CONFIG = {
  name: 'DCR Logistics',
  legalName: 'DCR Logistics Private Limited',
  tagline: 'WE KEEP YOUR BUSINESS MOVING',
  shortTagline: 'Smart Logistics. Seamless Supply Chains.',
  
  // Official Phone & Mobile
  phone: '+91 8792886452',
  phoneDisplay: '+91 87928 86452',
  whatsappNumber: '918792886452',
  
  // Official Company Emails
  email: 'info@dcrlogistics.in',
  directEmail: 'dhruvanth@dcrlogistics.in',
  emails: [
    'info@dcrlogistics.in',
    'dhruvanth@dcrlogistics.in'
  ],
  emailIsPlaceholder: false,
  
  // Physical Warehouse & Head Office Location
  address: {
    street: 'Attibele Industrial Corridor',
    area: 'Attibele',
    city: 'Bangalore (Bengaluru)',
    state: 'Karnataka',
    pincode: '562107',
    country: 'India',
    fullFormatted: 'Attibele, Bangalore, Karnataka – 562107, India.',
  },

  // Geographic coordinates for Google Maps & Leaflet/Vector maps
  geo: {
    lat: 12.7844,
    lng: 77.7712,
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31122.957530666993!2d77.755452!3d12.784428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6e2824cf4ca3%3A0x633519c0b7db8a0a!2sAttibele%2C%20Karnataka%20562107!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Attibele,+Bangalore,+Karnataka+562107'
  },

  // Operational Specifications
  operations: {
    hubName: 'Bengaluru Logistics Hub (Attibele)',
    strategicAdvantage: 'Prime location at Karnataka-Tamil Nadu border, fast access to Electronic City, Hosur, Chennai corridor & South India expressways.',
    workingHours: '24/7 Warehouse & Dispatch Operations',
    customerSupportHours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
    regionalReach: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Telangana'],
  },

  // Social & Web Links
  social: {
    linkedin: 'https://linkedin.com/company/dcr-logistics',
    whatsapp: 'https://wa.me/918792886452?text=Hello%20DCR%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20warehousing%20and%20logistics%20services.',
  },

  // Enquiry / Lead Delivery Configuration
  enquiryConfig: {
    enableLocalStorageBackup: true,
    // Optional Webhook / Formspree URL (Set this to your Formspree ID or backend webhook endpoint)
    webhookEndpoint: '', 
  }
};

