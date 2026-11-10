/**
 * DCR Logistics - Network and Strategic Location Data
 * 
 * Bengaluru (Attibele) serves as the primary centralized warehouse hub.
 * All transit connections radiate from this strategic location to serve South India.
 */

export const NETWORK_DATA = {
  hub: {
    city: 'Bengaluru (Attibele)',
    state: 'Karnataka',
    pincode: '562107',
    role: 'Central Warehouse & Distribution Hub',
    arterialAccess: 'Strategic Border Gateway',
    coordinates: { x: 52, y: 56 }, // coordinates percentage on South India visual map
    lat: 12.7844,
    lng: 77.7712,
    highlights: [
      'Strategic South-East gateway to Bengaluru metropolitan region',
      'Direct border node linking Karnataka and Tamil Nadu (Hosur corridor)',
      'High-speed connection via NICE Road, Outer Ring Road, and STRR corridors',
      'Unrestricted heavy commercial vehicle movement avoiding central city no-entry hours'
    ]
  },
  
  // Transit corridors radiating from Attibele hub
  corridors: [
    {
      name: 'Bengaluru - Chennai Express Corridor',
      highway: 'Chennai Express Corridor',
      distance: '310 km',
      transitTime: 'Overnight (6-8 hrs)',
      coverage: 'Attibele -> Hosur -> Krishnagiri -> Vellore -> Sriperumbudur -> Chennai'
    },
    {
      name: 'Bengaluru - Coimbatore / Western TN Corridor',
      highway: 'Western TN Corridor',
      distance: '340 km',
      transitTime: 'Overnight (7-9 hrs)',
      coverage: 'Attibele -> Dharmapuri -> Salem -> Erode -> Tirupur -> Coimbatore'
    },
    {
      name: 'Bengaluru - Kerala Gateway Corridor',
      highway: 'Kerala Transit Corridor',
      distance: '480 km',
      transitTime: '12-16 hrs',
      coverage: 'Attibele -> Salem -> Coimbatore -> Palakkad -> Thrissur -> Kochi'
    },
    {
      name: 'Bengaluru - Hyderabad / AP Corridor',
      highway: 'Telangana & AP Freight Line',
      distance: '570 km',
      transitTime: '12-15 hrs',
      coverage: 'Attibele -> Bengaluru Outer -> Chikkaballapur -> Anantapur -> Kurnool -> Hyderabad'
    },
    {
      name: 'Karnataka Intra-State Distribution',
      highway: 'Karnataka State Freight Network',
      distance: 'Regional',
      transitTime: 'Same Day / Next Day',
      coverage: 'Mysuru, Mandya, Hassan, Tumakuru, Shivamogga, Hubballi'
    }
  ],

  // Key South Indian connected distribution points
  destinations: [
    { id: 'blr', name: 'Bengaluru Urban & Rural', state: 'Karnataka', type: 'Primary Hub (Attibele)', transit: 'Immediate / Local', distance: '0 km' },
    { id: 'hsr', name: 'Hosur Industrial Belt', state: 'Tamil Nadu', type: 'Direct Border Hub', transit: 'Same Day (<1 hr)', distance: '8 km' },
    { id: 'chn', name: 'Chennai & Ennore Port', state: 'Tamil Nadu', type: 'Connected Market', transit: 'Next Day Morning', distance: '310 km' },
    { id: 'slm', name: 'Salem & Central TN', state: 'Tamil Nadu', type: 'Connected Market', transit: 'Next Day Morning', distance: '185 km' },
    { id: 'cbe', name: 'Coimbatore & Tirupur', state: 'Tamil Nadu', type: 'Connected Market', transit: 'Next Day Morning', distance: '340 km' },
    { id: 'kch', name: 'Kochi & Central Kerala', state: 'Kerala', type: 'Connected Market', transit: 'Next Day Evening', distance: '480 km' },
    { id: 'hyd', name: 'Hyderabad & Secunderabad', state: 'Telangana', type: 'Connected Market', transit: '24-36 Hours', distance: '575 km' },
    { id: 'vjw', name: 'Vijayawada & Coastal AP', state: 'Andhra Pradesh', type: 'Connected Market', transit: '24-36 Hours', distance: '620 km' },
    { id: 'mys', name: 'Mysuru & Industrial Belt', state: 'Karnataka', type: 'Connected Market', transit: 'Same Day / Next Day', distance: '160 km' }
  ],

  warehouseSpecs: [
    { label: 'Facility Location', value: 'Attibele, Bangalore' },
    { label: 'Corridor Access', value: 'Direct Arterial Highway Entrance' },
    { label: 'Security & Monitoring', value: '24x7 CCTV & Manned Guards' },
    { label: 'Dock Bays', value: 'Dedicated Multi-Truck Loading Docks' },
    { label: 'Power & Safety', value: '100% Power Backup & Fire Hydrants' },
    { label: 'Vehicle Ingress', value: 'High clearance for 32ft Containers' }
  ]
};
