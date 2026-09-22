import { Product } from '../models/product';

// A tiny placeholder-image generator — an inline SVG data URI, so photos
// render with zero network dependency (no backend, no image CDN, nothing
// that can fail in a classroom with spotty wifi). Swap `photo` for a real
// image URL once this becomes a real API-backed catalog.
function placeholderImage(label: string, color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <rect width="400" height="300" fill="${color}" />
    <text x="200" y="150" font-family="sans-serif" font-size="24" fill="#fff"
          text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Hardcoded data for this step — no backend yet. This lives in its own file
// specifically so that a future step can delete just this file (and the one
// line in ProductService that imports it) to switch to a real API, without
// touching any component.
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    photo: placeholderImage('Headphones', '#2563eb'),
    description:
      'Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and a padded headband for all-day comfort.',
    stock: 24,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.0,
    photo: placeholderImage('Smart Watch', '#7c3aed'),
    description:
      'Fitness-tracking smart watch with heart-rate monitoring, sleep tracking, and a 5-day battery life. Compatible with iOS and Android.',
    stock: 12,
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 89.5,
    photo: placeholderImage('Keyboard', '#059669'),
    description:
      'Full-size mechanical keyboard with hot-swappable switches, per-key RGB lighting, and a durable aluminum frame.',
    stock: 8,
  },
  {
    id: 4,
    name: 'Portable Speaker',
    price: 39.99,
    photo: placeholderImage('Speaker', '#d97706'),
    description:
      'Compact Bluetooth speaker with 12 hours of playback, IPX7 waterproofing, and surprisingly deep bass for its size.',
    stock: 0,
  },
  {
    id: 5,
    name: 'Ergonomic Mouse',
    price: 49.99,
    photo: placeholderImage('Ergo Mouse', '#4f46e5'),
    description:
      'Vertical wireless mouse designed to reduce wrist strain, featuring adjustable DPI and silent click buttons.',
    stock: 18,
  },
  {
    id: 6,
    name: '4K Ultra HD Monitor',
    price: 349.99,
    photo: placeholderImage('4K Monitor', '#0284c7'),
    description:
      '27-inch IPS panel with 99% sRGB coverage, HDR support, and ultra-thin bezels for multitasking and design work.',
    stock: 6,
  },
  {
    id: 7,
    name: 'USB-C Multiport Hub',
    price: 34.5,
    photo: placeholderImage('USB-C Hub', '#64748b'),
    description:
      '7-in-1 adapter with 4K HDMI, 100W Power Delivery pass-through, SD card readers, and high-speed USB 3.0 ports.',
    stock: 35,
  },
  {
    id: 8,
    name: 'Noise-Cancelling Earbuds',
    price: 79.99,
    photo: placeholderImage('Earbuds', '#db2777'),
    description:
      'True wireless in-ear buds with custom ambient sound modes, wireless charging case, and IPX5 sweat resistance.',
    stock: 15,
  },
  {
    id: 9,
    name: 'Full HD Webcam',
    price: 45.0,
    photo: placeholderImage('Webcam', '#0891b2'),
    description:
      '1080p streaming webcam with auto-focus, dual omnidirectional stereo microphones, and an integrated privacy shutter.',
    stock: 22,
  },
  {
    id: 10,
    name: 'Desk Pad Mat',
    price: 19.99,
    photo: placeholderImage('Desk Mat', '#334155'),
    description:
      'Extended vegan leather desk mat measuring 90x40cm, water-resistant and non-slip for smooth mouse gliding.',
    stock: 40,
  },
  {
    id: 11,
    name: 'Aluminum Laptop Stand',
    price: 29.99,
    photo: placeholderImage('Laptop Stand', '#475569'),
    description:
      'Foldable aluminum elevator stand with heat-dissipation ventilation, compatible with laptops from 10 to 17 inches.',
    stock: 19,
  },
  {
    id: 12,
    name: 'MagSafe Wireless Charger',
    price: 24.99,
    photo: placeholderImage('Charger', '#16a34a'),
    description:
      'Fast 15W magnetic wireless charging pad with braided cable, auto-alignment, and advanced temperature regulation.',
    stock: 0,
  },
  {
    id: 13,
    name: 'External SSD 1TB',
    price: 109.99,
    photo: placeholderImage('SSD 1TB', '#ea580c'),
    description:
      'Rugged shock-resistant portable solid-state drive with read/write speeds up to 1050 MB/s over USB 3.2 Gen 2.',
    stock: 9,
  },
  {
    id: 14,
    name: 'Smart LED Desk Lamp',
    price: 38.0,
    photo: placeholderImage('Desk Lamp', '#ca8a04'),
    description:
      'Dimmable architect task light with 5 color temperatures, integrated timer, and touch-sensitive brightness slider.',
    stock: 14,
  },
  {
    id: 15,
    name: 'Condenser Podcast Microphone',
    price: 69.99,
    photo: placeholderImage('Microphone', '#9333ea'),
    description:
      'Cardioid condenser USB microphone with instant gain control, zero-latency headphone monitoring, and a pop filter.',
    stock: 11,
  },
  {
    id: 16,
    name: '20,000mAh Power Bank',
    price: 42.5,
    photo: placeholderImage('Power Bank', '#0d9488'),
    description:
      'High-capacity portable battery pack supporting 65W fast charging for phones, tablets, and ultrabooks.',
    stock: 27,
  },
  {
    id: 17,
    name: 'Wi-Fi 6 Dual-Band Router',
    price: 89.99,
    photo: placeholderImage('Router', '#2563eb'),
    description:
      'Next-gen gigabit wireless router delivering combined speeds up to 3000 Mbps with OFDMA and beamforming tech.',
    stock: 7,
  },
  {
    id: 18,
    name: 'Smart Air Quality Monitor',
    price: 54.0,
    photo: placeholderImage('Air Monitor', '#15803d'),
    description:
      'Compact sensor tracking PM2.5, VOC levels, humidity, and temperature with app notifications and historical charts.',
    stock: 16,
  },
  {
    id: 19,
    name: 'Backlit Wireless Trackball',
    price: 64.99,
    photo: placeholderImage('Trackball', '#b91c1c'),
    description:
      'Ergonomic thumb-controlled trackball with precision optical tracking and dual-channel Bluetooth connectivity.',
    stock: 5,
  },
  {
    id: 20,
    name: 'Smart Plug 4-Pack',
    price: 26.99,
    photo: placeholderImage('Smart Plugs', '#e11d48'),
    description:
      'Wi-Fi enabled mini smart outlets with energy monitoring, scheduling schedules, and voice assistant integration.',
    stock: 31,
  },
  {
    id: 21,
    name: 'Cable Management Box',
    price: 18.5,
    photo: placeholderImage('Cable Box', '#52525b'),
    description:
      'Fire-retardant organizer box with side cord cutouts to cleanly conceal power strips, surge protectors, and messy cords.',
    stock: 45,
  },
  {
    id: 22,
    name: 'Monitor Light Bar',
    price: 49.0,
    photo: placeholderImage('Light Bar', '#d97706'),
    description:
      'Screen-mounted asymmetrical task light that illuminates the workspace without creating screen glare or reflections.',
    stock: 13,
  },
  {
    id: 23,
    name: 'Bluetooth Game Controller',
    price: 55.0,
    photo: placeholderImage('Controller', '#4338ca'),
    description:
      'Wireless gamepad with hall-effect anti-drift joysticks, tactile mechanical face buttons, and dual rumble motors.',
    stock: 0,
  },
  {
    id: 24,
    name: 'Drawing Tablet with Stylus',
    price: 69.0,
    photo: placeholderImage('Drawing Tab', '#0f766e'),
    description:
      'Digital graphics tablet with 8192 levels of pressure sensitivity, battery-free pen, and 8 customizable shortcut keys.',
    stock: 10,
  },
];