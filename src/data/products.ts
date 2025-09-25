import { Product } from '../types';

export const products: Product[] = [
  // Smart Switches
  {
    id: 'L8-HD',
    name: 'L8 Dimmer Switch',
    model: 'L8-HD',
    price: 39,
    category: 'Smart Switches',
    description: 'Premium WiFi-enabled dimmer switch with touch control and voice assistant compatibility.',
    features: [
      'WiFi & Voice Control',
      'Touch Panel Interface',
      'LED Indicator',
      'Scheduling Functions',
      'Energy Monitoring'
    ],
    specifications: {
      'Voltage': '220-240V AC',
      'Load': 'Up to 400W',
      'Wireless': 'WiFi 802.11 b/g/n',
      'Dimensions': '86×86×37mm',
      'Material': 'Tempered Glass'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=L8+Dimmer'
  },
  {
    id: 'L8-3G',
    name: 'L8 3-Gang Switch',
    model: 'L8-3G',
    price: 45,
    category: 'Smart Switches',
    description: 'Triple gang smart switch with individual control and scene management.',
    features: [
      '3 Independent Controls',
      'Scene Programming',
      'Timer Functions',
      'Remote Access',
      'Status Feedback'
    ],
    specifications: {
      'Voltage': '220-240V AC',
      'Load': '10A per gang',
      'Wireless': 'WiFi 802.11 b/g/n',
      'Dimensions': '118×72×37mm',
      'Certification': 'CE, RoHS'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=L8+3Gang'
  },
  // Smart Sockets
  {
    id: 'L8-PS',
    name: 'L8 Power Socket',
    model: 'L8-PS',
    price: 32,
    category: 'Smart Sockets',
    description: 'Intelligent power socket with energy monitoring and surge protection.',
    features: [
      'Energy Monitoring',
      'Surge Protection',
      'USB-C Fast Charging',
      'Child Safety Lock',
      'Overload Protection'
    ],
    specifications: {
      'Voltage': '220-240V AC',
      'Current': '16A max',
      'USB Output': '5V/3A',
      'Protection': 'IP20',
      'Material': 'Fire-resistant PC'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=L8+Socket'
  },
  {
    id: 'L8-USB',
    name: 'L8 USB Wall Outlet',
    model: 'L8-USB',
    price: 28,
    category: 'Smart Sockets',
    description: 'Dual USB-C wall outlet with fast charging and smart power management.',
    features: [
      'Dual USB-C Ports',
      'Fast Charging 65W',
      'Smart Power Distribution',
      'LED Status Indicator',
      'Compact Design'
    ],
    specifications: {
      'USB Output': '65W PD',
      'Ports': '2x USB-C',
      'Input': '220-240V AC',
      'Dimensions': '86×86×42mm',
      'Efficiency': '>90%'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=L8+USB'
  },
  // Control Center
  {
    id: 'L8-HUB',
    name: 'LANBON Control Hub',
    model: 'L8-HUB',
    price: 89,
    category: 'Control Center',
    description: 'Central control hub for managing all LANBON smart home devices.',
    features: [
      'Centralized Control',
      '7" Touch Display',
      'Voice Assistant',
      'Scene Management',
      'Local Storage'
    ],
    specifications: {
      'Display': '7" IPS Touchscreen',
      'Processor': 'ARM Cortex-A7',
      'Storage': '16GB eMMC',
      'Connectivity': 'WiFi, Zigbee, BLE',
      'Power': '12V/2A adapter'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Control+Hub'
  },
  {
    id: 'L8-PANEL',
    name: 'L8 Smart Panel',
    model: 'L8-PANEL',
    price: 125,
    category: 'Control Center',
    description: 'Wall-mounted smart control panel with multi-zone management.',
    features: [
      '10" HD Display',
      'Multi-zone Control',
      'Weather Station',
      'Intercom Function',
      'Music Streaming'
    ],
    specifications: {
      'Display': '10.1" capacitive touch',
      'Resolution': '1920×1200',
      'OS': 'Android 11',
      'RAM': '4GB',
      'Storage': '32GB'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Smart+Panel'
  },
  // Security & Sensors
  {
    id: 'L8-HK1',
    name: 'WiFi Fingerprint Lock',
    model: 'L8-HK1',
    price: 159,
    category: 'Security & Sensors',
    description: 'Advanced fingerprint door lock with WiFi connectivity and mobile app control.',
    features: [
      'Fingerprint Recognition',
      'WiFi Remote Access',
      'Mobile App Control',
      'Guest Access Codes',
      'Activity Log'
    ],
    specifications: {
      'Recognition': '<0.5 seconds',
      'Capacity': '100 fingerprints',
      'Battery': '8×AA batteries',
      'Backup': 'Physical key',
      'Material': 'Zinc alloy'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Fingerprint+Lock'
  },
  {
    id: 'L8-CAM',
    name: 'L8 Security Camera',
    model: 'L8-CAM',
    price: 79,
    category: 'Security & Sensors',
    description: '4K WiFi security camera with AI motion detection and cloud storage.',
    features: [
      '4K Ultra HD Recording',
      'AI Motion Detection',
      'Night Vision',
      'Two-way Audio',
      'Cloud Storage'
    ],
    specifications: {
      'Resolution': '4K (3840×2160)',
      'Field of View': '110° diagonal',
      'Night Vision': 'Up to 30ft',
      'Storage': 'microSD + Cloud',
      'Power': 'PoE or 12V adapter'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Security+Cam'
  },
  // Smart Lighting
  {
    id: 'L8-LED',
    name: 'L8 Smart LED Strip',
    model: 'L8-LED',
    price: 35,
    category: 'Smart Lighting',
    description: 'RGB+W LED strip with music sync and millions of color combinations.',
    features: [
      'RGB+W Colors',
      'Music Sync',
      'DIY Cuttable',
      'App Control',
      'Voice Compatible'
    ],
    specifications: {
      'Length': '5 meters',
      'LEDs': '300 SMD5050',
      'Power': '72W max',
      'Voltage': '12V DC',
      'Colors': '16 million+'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=LED+Strip'
  },
  {
    id: 'L8-BULB',
    name: 'L8 Smart Bulb E27',
    model: 'L8-BULB',
    price: 18,
    category: 'Smart Lighting',
    description: 'WiFi smart bulb with tunable white and color changing capabilities.',
    features: [
      'Tunable White 2700-6500K',
      'RGB Color Changing',
      'Dimming 1-100%',
      'Schedule Timer',
      'Energy Efficient'
    ],
    specifications: {
      'Power': '9W (60W equivalent)',
      'Brightness': '810 lumens',
      'Base': 'E27 screw',
      'Lifespan': '25,000 hours',
      'Efficiency': '90 lm/W'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Smart+Bulb'
  },
  // Automation
  {
    id: 'L8-SENSOR',
    name: 'L8 Motion Sensor',
    model: 'L8-SENSOR',
    price: 24,
    category: 'Automation',
    description: 'PIR motion sensor with ambient light detection and smart automation.',
    features: [
      'PIR Motion Detection',
      'Light Sensor',
      'Battery Powered',
      'Smart Automation',
      '120° Detection Angle'
    ],
    specifications: {
      'Detection Range': '8 meters',
      'Angle': '120° horizontal',
      'Battery': 'CR123A×2',
      'Battery Life': '2 years',
      'Wireless': 'Zigbee 3.0'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Motion+Sensor'
  },
  {
    id: 'L8-TEMP',
    name: 'L8 Temperature Sensor',
    model: 'L8-TEMP',
    price: 22,
    category: 'Automation',
    description: 'Precision temperature and humidity sensor for climate automation.',
    features: [
      'Temperature & Humidity',
      'Historical Data',
      'Smart Alerts',
      'Automation Triggers',
      'Long Battery Life'
    ],
    specifications: {
      'Temperature Range': '-20°C to 60°C',
      'Humidity Range': '0-100% RH',
      'Accuracy': '±0.3°C, ±3% RH',
      'Battery': 'CR2450',
      'Update Interval': '1 minute'
    },
    image: 'https://placehold.co/400x300/112240/64FFDA?text=Temp+Sensor'
  }
];

export const categories = [
  'Smart Switches',
  'Smart Sockets', 
  'Control Center',
  'Security & Sensors',
  'Smart Lighting',
  'Automation'
];