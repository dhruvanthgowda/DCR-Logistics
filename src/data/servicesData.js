/**
 * DCR Logistics - Core Services Data
 * 
 * Contains detailed descriptions, operational scope, key activities, and business benefits
 * for all 7 primary logistics verticals offered by DCR Logistics.
 */

export const SERVICES_DATA = [
  {
    id: '3pl-logistics',
    title: 'Third-Party Logistics (3PL)',
    shortTitle: '3PL Solutions',
    tag: 'Turnkey Supply Chain',
    icon: 'Boxes',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    fallbackImage: '/images/services/3pl.jpg',
    summary: 'End-to-end logistics management covering strategic storage, seamless handling, distribution, and agile order fulfilment.',
    description: 'DCR Logistics provides complete Third-Party Logistics (3PL) solutions engineered to optimize and streamline your entire supply chain. Acting as an operational extension of your enterprise, we integrate storage, inventory handling, multi-channel distribution, and client-tailored fulfilment into a synchronized, scalable ecosystem. Whether scaling seasonal peaks or establishing permanent regional distribution in South India, our 3PL solutions eliminate operational bottlenecks.',
    keyActivities: [
      'Comprehensive end-to-end supply chain orchestration',
      'Strategic multi-client and dedicated storage architectures',
      'Systematic dock receiving, verification, and dock-to-stock workflows',
      'Dynamic order picking, packing, consolidation, and staging',
      'Omnichannel distribution across B2B retail networks and B2C direct channels',
      'Customized SLA and KPI monitoring for continuous performance optimization'
    ],
    businessBenefits: [
      'Reduced Capital Expenditure: Convert fixed warehouse overheads into flexible operational costs.',
      'Elastic Scalability: Expand or contract storage and handling footprint based on market demand.',
      'Focus on Core Growth: Free your executive bandwidth to prioritize sales, marketing, and product innovation.',
      'Enhanced Delivery Reliability: Maintain tight order accuracy and predictable transit timelines.'
    ],
    specs: [
      { label: 'Facility Type', value: 'Grade-A Strategic Hub' },
      { label: 'Coverage', value: 'Bangalore & South India' },
      { label: 'Integration', value: 'WMS & ERP Compatible' },
      { label: 'Security', value: '24/7 CCTV & Controlled Access' }
    ]
  },
  {
    id: 'warehousing-services',
    title: 'Warehousing Services',
    shortTitle: 'Warehousing',
    tag: 'Storage & Operations',
    icon: 'Warehouse',
    heroImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80',
    fallbackImage: '/images/services/warehousing.jpg',
    summary: 'Dedicated and shared warehousing with short-term and long-term storage, goods receiving, and space management.',
    description: 'Our warehouse facility in Attibele, Bangalore, offers premier infrastructure for modern enterprise storage. We deliver both dedicated warehouse models for large-volume corporate clients and flexible shared warehousing for businesses needing variable square footage. With modern racking configurations, high-ceiling clearances, and rigorous goods receiving and dispatch standards, we protect inventory integrity at every stage.',
    keyActivities: [
      'Dedicated facility management and multi-tenant shared warehousing',
      'Flexible short-term buffer storage and long-term contracted storage',
      'Rigorous goods receiving, barcode scanning, and verification protocols',
      'High-bay selective pallet racking, floor stacking, and mezzanine space',
      'Systematic dock scheduling and cross-docking dispatch management',
      'Facility upkeep, strict housekeeping, pest control, and fire protection'
    ],
    businessBenefits: [
      'Prime Attibele Location: Immediate access to regional interstate freight corridors.',
      'Flexible Capacity: Adapt storage volume during peak business cycles without long lock-ins.',
      'Complete Stock Safety: Round-the-clock physical security, surveillance, and insurance compliance.',
      'Operational Precision: Minimized stock turnaround times and error-free dock operations.'
    ],
    specs: [
      { label: 'Location', value: 'Attibele, Bangalore' },
      { label: 'Storage Models', value: 'Dedicated & Shared' },
      { label: 'Loading Docks', value: 'Multi-bay Heavy Vehicle Docks' },
      { label: 'Protection', value: 'NFPA Fire Hydrants & CCTV' }
    ]
  },
  {
    id: 'cf-services',
    title: 'C&F Services (Clearing & Forwarding)',
    shortTitle: 'C&F Services',
    tag: 'Agent & Distribution',
    icon: 'FileCheck',
    heroImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=80',
    fallbackImage: '/images/services/cf.jpg',
    summary: 'Reliable clearing and forwarding coordination, goods handling, dispatch management, and regional distribution.',
    description: 'DCR Logistics acts as a trusted Clearing & Forwarding (C&F) agent for manufacturers and national brands looking to establish or reinforce their presence across Karnataka and neighbouring southern markets. We handle consignment clearances, warehouse receipt verification, order processing against distributor indents, tax invoice generation coordination, and planned dispatches.',
    keyActivities: [
      'Clearing and forwarding coordination from primary production plants',
      'Comprehensive inbound consignment verification and discrepancy reporting',
      'Depot inventory handling and distributor indent processing',
      'Dispatch scheduling, documentation, and e-way bill verification',
      'Secondary distribution coordination to dealers, stockists, and wholesalers',
      'Periodic stock reconciliation and statutory compliance support'
    ],
    businessBenefits: [
      'Regional Market Penetration: Seamless regional depot operations without setting up dedicated local subsidiaries.',
      'Accurate Billing & Documentation: Adherence to commercial compliance and supply chain paperwork.',
      'Rapid Order Cycle: Fast dispatch response upon receiving distributor purchase orders.',
      'Transparent Accounting: Complete visibility into inbound dispatches and outbound dispatches.'
    ],
    specs: [
      { label: 'Role', value: 'Regional C&F / Consignment Depot' },
      { label: 'Market Reach', value: 'Karnataka, Tamil Nadu & Inter-State' },
      { label: 'Order Processing', value: 'Same-Day / Next-Day Dispatch' },
      { label: 'Reporting', value: 'Daily Inward/Outward Log' }
    ]
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    shortTitle: 'Inventory Control',
    tag: 'Precision & Accuracy',
    icon: 'ClipboardList',
    heroImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=80',
    fallbackImage: '/images/services/inventory.jpg',
    summary: 'Systematic inventory tracking, stock monitoring, inward/outward management, and reconciliations.',
    description: 'Inventory is working capital. At DCR Logistics, we enforce disciplined, technology-backed inventory governance to ensure 99.8%+ stock accuracy. From the moment materials arrive at our docks to their final dispatch, every movement is logged, tracked, and reconciled. We manage SKU-level traceability, batch control, FIFO/FEFO rules, and proactive stock auditing.',
    keyActivities: [
      'Real-time inventory tracking and physical stock monitoring',
      'Systematic inward quality inspection, count verification, and binning',
      'Enforcement of FIFO (First-In, First-Out) and FEFO rotation policies',
      'Cycle counting, perpetual inventory checks, and annual audits',
      'Detailed stock reconciliation, discrepancy analysis, and reporting',
      'Batch, serial number, and expiry date management'
    ],
    businessBenefits: [
      'Eliminated Stock Losses: Eliminate phantom inventory, pilferage, and unaccounted variances.',
      'Optimized Working Capital: Avoid costly overstocking while safeguarding against stock-outs.',
      'Batch Integrity: Perfect rotation prevents product obsolescence or expiration losses.',
      'Auditable Records: Clean, auditable reporting ready for your internal and external accountants.'
    ],
    specs: [
      { label: 'Methodology', value: 'FIFO / FEFO / Batch Specific' },
      { label: 'Auditing', value: 'Perpetual Cycle Counts' },
      { label: 'Accuracy', value: 'High Precision Tolerance' },
      { label: 'Reporting', value: 'Real-time & Periodic Summaries' }
    ]
  },
  {
    id: 'reverse-logistics',
    title: 'Reverse Logistics',
    shortTitle: 'Reverse Logistics',
    tag: 'Returns & Recovery',
    icon: 'RotateCcw',
    heroImage: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=85',
    fallbackImage: '/images/services/reverse.jpg',
    summary: 'Structured returns management, product inspection, sorting, segregation, and return-to-stock coordination.',
    description: 'Reverse supply chains can quickly erode profitability if not executed with precision. DCR Logistics offers structured reverse logistics frameworks for retail returns, e-commerce rejections, warranty exchanges, and recalled batches. We inspect, categorize, re-package, or route returned stock efficiently, preserving maximum asset value.',
    keyActivities: [
      'Multi-channel returns receipt and initial verification',
      'Technical and aesthetic product inspection against client criteria',
      'Sorting and segregation (Grade A restock, rework, refurbished, damaged)',
      'Return-to-stock (RTS) repackaging, relabelling, and binning',
      'Disposal, salvage, and vendor-return consolidation',
      'Return reason analysis and root-cause data feedback'
    ],
    businessBenefits: [
      'Faster Capital Recovery: Accelerate the return-to-inventory cycle for sellable returns.',
      'Protected Brand Integrity: Prevent defective or damaged products from re-entering sales channels.',
      'Reduced Clutter: Systematic segregation stops returned goods from congesting primary storage.',
      'Actionable Insights: Identify product flaws or transit packaging vulnerabilities through return logs.'
    ],
    specs: [
      { label: 'Return Types', value: 'Customer, Dealer, Warranty & Recalls' },
      { label: 'Grading', value: 'Custom A/B/C/Defective Criteria' },
      { label: 'Turnaround', value: 'Fast Restock Cycle' },
      { label: 'Documentation', value: 'Detailed RMA Reconciliation' }
    ]
  },
  {
    id: 'transportation',
    title: 'B2B and B2C Transportation',
    shortTitle: 'Transportation',
    tag: 'Distribution & Transit',
    icon: 'Truck',
    heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80',
    fallbackImage: '/images/services/transport.jpg',
    summary: 'Business-to-business freight, business-to-consumer delivery, regional distribution, and last-mile coordination.',
    description: 'Operating from our strategic base in Attibele, Bangalore, DCR Logistics delivers dependable transportation solutions across South India. We coordinate Full Truckload (FTL), Part Truckload (PTL), regional inter-city distribution, and last-mile delivery. Our transport network bridges primary manufacturing hubs with secondary stockists, retail outlets, and end consumers.',
    keyActivities: [
      'B2B freight distribution for commercial, industrial, and retail cargo',
      'Regional distribution across Karnataka, Tamil Nadu, Andhra Pradesh, and Kerala',
      'Dedicated vehicle placement and scheduled milk-run routes',
      'B2C parcel staging, courier dispatch, and last-mile coordination',
      'En-route consignment tracking, driver verification, and POD (Proof of Delivery) capture',
      'Safe material handling, transit insurance support, and load optimization'
    ],
    businessBenefits: [
      'Direct Highway Connectivity: Instant access to arterial expressways eliminates urban Bangalore transit delays.',
      'Flexible Fleet Sourcing: Access small commercial vehicles (SCVs) to heavy multi-axle trucks as needed.',
      'Digitized POD Management: Fast turn-around of signed Proof of Delivery receipts for faster cash collection.',
      'Competitive Freight Costs: Optimized load consolidation and route planning reduce cost-per-ton-km.'
    ],
    specs: [
      { label: 'Fleet Types', value: 'SCVs, LCVs, 14ft to 32ft Containers' },
      { label: 'Transit Zones', value: 'Bangalore Metro & South India' },
      { label: 'Tracking', value: 'Active Dispatch & POD Tracking' },
      { label: 'Service Levels', value: 'FTL, PTL, Express & Scheduled' }
    ]
  },
  {
    id: 'value-added-services',
    title: 'Value-Added Warehouse Services',
    shortTitle: 'Value-Added Services',
    tag: 'Customization & Kitting',
    icon: 'PackageCheck',
    heroImage: 'https://mecaluxcom.cdnwm.com/img/software/modules/vas-value-added-services.1.14.jpg',
    fallbackImage: '/images/services/vas.jpg',
    summary: 'Kitting, labelling, product assembly, rework, packaging, and repackaging tailored to market specifications.',
    description: 'Modern supply chains require agility closer to the point of consumption. DCR Logistics provides comprehensive on-site value-added warehouse services (VAS) that transform bulk inventory into consumer-ready, retail-compliant packages without incurring additional factory lead times.',
    keyActivities: [
      'Promotional kitting, combo bundling, and multi-pack creation',
      'MRP labelling, barcode generation, barcode application, and compliance tags',
      'Light product assembly, component insertion, and user-manual packing',
      'Product rework, quality sorting, and packaging remediation',
      'Repackaging from bulk shippers into customized regional sales units',
      'Protective shrink-wrapping, strapping, and specialized palletization'
    ],
    businessBenefits: [
      'Marketing Agility: Launch festive combos, promotional packs, and customized SKUs within days.',
      'Reduced Factory Burden: Keep core manufacturing runs standardized while handling localized packaging at our warehouse.',
      'Retail Compliance: Guarantee adherence to strict modern trade labeling and barcoding requirements.',
      'Waste Reduction: Recover distressed packaging before it reaches the distributor or consumer.'
    ],
    specs: [
      { label: 'Assembly', value: 'Manual & Tool-Assisted Kitting' },
      { label: 'Labelling', value: 'High-Density Barcodes & MRP Stickers' },
      { label: 'Packaging', value: 'Shrink-wrap, Strapping & Palletizing' },
      { label: 'Quality Check', value: '100% Visual & Weight Audits' }
    ]
  }
];

