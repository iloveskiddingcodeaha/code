-- Insert categories
INSERT INTO categories (name, slug, description, icon, color) VALUES
('Roblox', 'roblox', 'Scripts and executors for Roblox games', '🎮', '#8B5CF6'),
('CS2', 'cs2', 'Counter-Strike 2 cheats and tools', '🔫', '#FF6B6B'),
('Valorant', 'valorant', 'Valorant cheats and utilities', '🎯', '#FF8E53'),
('Fortnite', 'fortnite', 'Fortnite cheats and mods', '🏗️', '#4ECDC4'),
('General', 'general', 'General gaming tools and utilities', '⚙️', '#45B7D1');

-- Insert sample forums
INSERT INTO forums (title, slug, description, category_id) VALUES
('General Discussion', 'general-discussion', 'General chat about gaming and cheats', (SELECT id FROM categories WHERE slug = 'general')),
('Roblox Scripts', 'roblox-scripts', 'Share and discuss Roblox scripts', (SELECT id FROM categories WHERE slug = 'roblox')),
('CS2 Cheats', 'cs2-cheats', 'Counter-Strike 2 cheat discussion', (SELECT id FROM categories WHERE slug = 'cs2')),
('Valorant Hacks', 'valorant-hacks', 'Valorant cheat community', (SELECT id FROM categories WHERE slug = 'valorant')),
('Support & Help', 'support-help', 'Get help with downloads and installation', (SELECT id FROM categories WHERE slug = 'general'));

-- Insert sample Roblox scripts
INSERT INTO scripts (title, slug, description, long_description, thumbnail_url, download_url, category_id, version, file_size, requirements, features, tags, is_featured) VALUES
(
  'Fisch Auto Farm Script',
  'fisch-auto-farm',
  'Advanced auto farming script for Fisch with multiple features',
  'This comprehensive Fisch auto farm script includes automatic fishing, selling, and inventory management. Features include auto-cast, auto-reel, auto-sell fish, and much more. Perfect for grinding levels and currency in Fisch.',
  '/placeholder.svg?height=200&width=300&text=Fisch+Script',
  'https://example.com/download/fisch-script',
  (SELECT id FROM categories WHERE slug = 'roblox'),
  '2.1',
  '45 KB',
  ARRAY['Fisch Game', 'Roblox Executor'],
  ARRAY['Auto Fishing', 'Auto Selling', 'Inventory Management', 'Anti-AFK', 'Teleportation'],
  ARRAY['fisch', 'auto-farm', 'fishing', 'roblox'],
  true
),
(
  'Blox Fruits Script Hub',
  'blox-fruits-hub',
  'Complete Blox Fruits script with all features unlocked',
  'The ultimate Blox Fruits script featuring auto farm, devil fruit finder, raid helper, and PvP assistance. Includes teleportation, stat allocation, and quest automation. Regular updates ensure compatibility.',
  '/images/blox-fruits-game-logo-npygzghjgcfk6h0d.webp',
  'https://example.com/download/blox-fruits-hub',
  (SELECT id FROM categories WHERE slug = 'roblox'),
  '3.5',
  '78 KB',
  ARRAY['Blox Fruits Game', 'Roblox Executor'],
  ARRAY['Auto Farm', 'Devil Fruit Finder', 'Raid Helper', 'Auto Quest', 'Teleportation', 'PvP Tools'],
  ARRAY['blox-fruits', 'auto-farm', 'devil-fruit', 'roblox'],
  true
),
(
  'Pet Simulator X Script',
  'pet-sim-x-script',
  'Advanced Pet Simulator X automation script',
  'Comprehensive Pet Simulator X script with auto-hatch, auto-farm coins, auto-upgrade pets, and trading features. Includes teleportation to all areas and automatic quest completion.',
  '/placeholder.svg?height=200&width=300&text=Pet+Sim+X',
  'https://example.com/download/pet-sim-x',
  (SELECT id FROM categories WHERE slug = 'roblox'),
  '1.8',
  '52 KB',
  ARRAY['Pet Simulator X Game', 'Roblox Executor'],
  ARRAY['Auto Hatch', 'Auto Farm', 'Pet Upgrading', 'Trading Tools', 'Teleportation'],
  ARRAY['pet-simulator', 'auto-hatch', 'farming', 'roblox'],
  false
),
(
  'Solara Executor',
  'solara-executor',
  'Premium Roblox script executor with advanced features',
  'Solara is a powerful and reliable Roblox executor that supports most scripts. Features include advanced script injection, anti-detection, and regular updates. Perfect for running complex scripts safely.',
  '/images/solara-logo.png',
  'https://example.com/download/solara',
  (SELECT id FROM categories WHERE slug = 'roblox'),
  '4.2',
  '15 MB',
  ARRAY['Windows 10/11', 'Roblox Installed'],
  ARRAY['Script Injection', 'Anti-Detection', 'Regular Updates', 'User-Friendly Interface'],
  ARRAY['executor', 'solara', 'roblox', 'premium'],
  true
),
(
  'KRNL Executor',
  'krnl-executor',
  'Free and reliable Roblox script executor',
  'KRNL is one of the most trusted free Roblox executors available. It offers excellent script compatibility and stability. Regular updates ensure it works with the latest Roblox version.',
  '/placeholder.svg?height=200&width=300&text=KRNL+Executor',
  'https://example.com/download/krnl',
  (SELECT id FROM categories WHERE slug = 'roblox'),
  '3.1',
  '12 MB',
  ARRAY['Windows 10/11', 'Roblox Installed'],
  ARRAY['Free to Use', 'High Compatibility', 'Regular Updates', 'Stable Performance'],
  ARRAY['executor', 'krnl', 'roblox', 'free'],
  false
);

-- Insert sample CS2 scripts
INSERT INTO scripts (title, slug, description, long_description, thumbnail_url, download_url, category_id, version, file_size, requirements, features, tags, is_featured) VALUES
(
  'CS2 Aimbot Pro',
  'cs2-aimbot-pro',
  'Advanced aimbot for Counter-Strike 2',
  'Professional-grade aimbot for CS2 with customizable settings, smooth aiming, and anti-detection features. Includes bone selection, FOV adjustment, and reaction time simulation.',
  '/placeholder.svg?height=200&width=300&text=CS2+Aimbot',
  'https://example.com/download/cs2-aimbot',
  (SELECT id FROM categories WHERE slug = 'cs2'),
  '1.5',
  '8 MB',
  ARRAY['Counter-Strike 2', 'Windows 10/11'],
  ARRAY['Smooth Aimbot', 'Bone Selection', 'FOV Adjustment', 'Anti-Detection'],
  ARRAY['cs2', 'aimbot', 'fps', 'cheat'],
  true
),
(
  'CS2 ESP Wallhack',
  'cs2-esp-wallhack',
  'ESP and wallhack for Counter-Strike 2',
  'See enemies through walls with this advanced ESP system. Features player boxes, health bars, weapon display, and distance indicators. Fully customizable colors and settings.',
  '/placeholder.svg?height=200&width=300&text=CS2+ESP',
  'https://example.com/download/cs2-esp',
  (SELECT id FROM categories WHERE slug = 'cs2'),
  '2.0',
  '6 MB',
  ARRAY['Counter-Strike 2', 'Windows 10/11'],
  ARRAY['Player ESP', 'Health Bars', 'Weapon Display', 'Distance Indicators'],
  ARRAY['cs2', 'esp', 'wallhack', 'cheat'],
  false
);
