/**
 * DCR Logistics - Industries Served Data
 * 
 * Detailed operational requirements, supply chain dynamics, and tailored DCR capabilities
 * for the 7 key commercial sectors.
 */

export const INDUSTRIES_DATA = [
  {
    id: 'manufacturing-engineering',
    title: 'Manufacturing & Engineering',
    shortTitle: 'Manufacturing',
    badge: 'Industrial Logistics',
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    summary: 'Reliable warehouse solutions for manufacturers and industrial operations—handling raw materials, precision components, and heavy finished goods.',
    challenges: [
      'Irregular supplier lead times demanding high-capacity buffer stock storage',
      'Heavy-duty weight requirements and specialized material handling protocols',
      'Strict line-side feeding schedules to prevent factory downtime'
    ],
    solutions: [
      'Heavy-duty floor load capacity and high-bay industrial racking at Attibele hub',
      'Material handling equipment capable of handling crated machinery, sheet metal, and components',
      'Systematic JIT (Just-In-Time) dispatch coordination to manufacturing units across Hosur and Bangalore industrial clusters'
    ],
    suitableServices: ['Warehousing Services', 'B2B Transportation', 'Inventory Management', '3PL Logistics']
  },
  {
    id: 'ecommerce-quick-commerce',
    title: 'E-commerce & Quick Commerce',
    shortTitle: 'E-commerce',
    badge: 'Omnichannel & Fulfilment',
    icon: 'ShoppingCart',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-speed fulfilment, multi-tier inventory storage, rapid pick-and-pack, and flexible distribution to meet tight consumer delivery windows.',
    challenges: [
      'Extreme spikes in volume during festival seasons and promotional campaigns',
      'Demanding same-day / next-day order cutoffs',
      'High rate of customer returns requiring structured reverse logistics'
    ],
    solutions: [
      'Elastic shared storage that expands dynamically during peak sale periods',
      'Fast-paced pick-pack-ship staging stations optimized for high-SKU throughput',
      'Integrated reverse logistics workflow for return sorting, restock, and inspection'
    ],
    suitableServices: ['3PL Logistics', 'Value-Added Services', 'Reverse Logistics', 'Transportation']
  },
  {
    id: 'fmcg-consumer-goods',
    title: 'FMCG & Consumer Goods',
    shortTitle: 'FMCG Goods',
    badge: 'High Turnaround',
    icon: 'Store',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Fast-moving inventory management, high-frequency replenishment, batch monitoring, and regional distributor network supply.',
    challenges: [
      'High velocity stock movement requiring rapid pallet turnover',
      'Strict batch tracing and FEFO (First-Expired, First-Out) compliance',
      'Regional dealer network coordination across state boundaries'
    ],
    solutions: [
      'High-throughput docking bays designed for quick truck turnaround times',
      'Batch and expiry date tracking system preventing product obsolescence',
      'C&F and secondary distribution network reaching major stockists across South India'
    ],
    suitableServices: ['C&F Services', 'Warehousing Services', 'Inventory Management', 'Transportation']
  },
  {
    id: 'automotive-auto-components',
    title: 'Automotive & Auto Components',
    shortTitle: 'Automotive',
    badge: 'Spare Parts & OEM',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Dedicated storage, part-number tracking, and swift dispatch of automotive components, spare parts, and aftermarket supplies.',
    challenges: [
      'Vast catalog of diverse SKUs ranging from miniature fasteners to bulky panels',
      'Proximity requirement to major automotive corridors (Hosur, Bommasandra, Bidadi)',
      'Zero-tolerance for part mix-ups in dealer supply networks'
    ],
    solutions: [
      'Strategic Attibele location directly adjacent to the Hosur automotive and manufacturing corridor',
      'Structured binning and shelving for high-density auto spare parts',
      'Strict barcode scanning at inwarding and dispatch to eliminate part mismatches'
    ],
    suitableServices: ['Warehousing Services', 'B2B Transportation', 'Value-Added Services', '3PL Logistics']
  },
  {
    id: 'retail-wholesale-distribution',
    title: 'Retail & Wholesale Distribution',
    shortTitle: 'Retail & Wholesale',
    badge: 'Store Replenishment',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80',
    summary: 'Centralized inventory consolidation and planned store replenishment for multi-outlet retail chains, supermarkets, and wholesale traders.',
    challenges: [
      'Consolidating stock from numerous vendors into cohesive store-level shipments',
      'Adherence to strict retail delivery time slots at shopping malls and city centres',
      'Damage-free transit of packaged merchandise'
    ],
    solutions: [
      'Regional consolidation hub at Attibele feeding Bangalore and tier-2 southern cities',
      'Custom palletizing, shrink-wrapping, and store-specific staging',
      'Scheduled milk-run vehicle dispatches aligned with store receiving hours'
    ],
    suitableServices: ['Warehousing Services', 'Value-Added Services', 'Transportation', 'C&F Services']
  },
  {
    id: 'electronics-consumer-durables',
    title: 'Electronics & Consumer Durables',
    shortTitle: 'Electronics',
    badge: 'High Value & Secure',
    icon: 'Tv',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
    summary: 'Organized, high-security storage, serial number tracking, and white-glove distribution for appliances, electronics, and tech hardware.',
    challenges: [
      'High-value goods susceptible to transit damage and security risks',
      'Unit-level serial number logging for warranty and insurance validity',
      'Need for clean, dust-controlled, weather-sealed warehousing'
    ],
    solutions: [
      '24/7 CCTV surveillance, secured storage zones, and controlled gate access',
      'Comprehensive serial number scanning during both inwarding and customer dispatch',
      'Pest-controlled, dry, well-ventilated warehouse premises protecting sensitive electronics'
    ],
    suitableServices: ['Warehousing Services', 'Inventory Management', 'Reverse Logistics', 'Transportation']
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage (Ambient)',
    shortTitle: 'Food & Beverage',
    badge: 'Ambient Packaged Goods',
    icon: 'Coffee',
    image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80',
    summary: 'Hygienic ambient storage, compliance handling, and distribution for suitable packaged food items, dry groceries, and non-perishable beverages.',
    challenges: [
      'Rigorous cleanliness, pest control, and hygiene audit requirements',
      'Strict compliance with shelf-life and expiration thresholds',
      'Moisture and temperature fluctuation management'
    ],
    solutions: [
      'Strict warehouse hygiene standards with proactive commercial pest control routines',
      'Rigid FIFO/FEFO rules ensuring older stock reaches retail shelves first',
      'Clean elevated pallet racking isolating goods completely from floor dampness'
    ],
    suitableServices: ['Warehousing Services', 'Inventory Management', 'C&F Services', 'Transportation']
  }
];

