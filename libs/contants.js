export const ROUTE_NAMES = {
  HOME: 'Home',
  ABOUT_US: 'AboutUs',
  CHAT_SESSION: 'ChatSession',
  CHAT_SESSION_HISTORIES: 'ChatSessionHistories',
  COLOR_DETAILS: 'ColorDetails',
  PALETTES: 'Palettes',
  SAVE_PALETTE: 'SavePalette',
  PRO_VERSION: 'ProVersion',
  SYNC_PALETTES: 'SyncPalettes',
  PALETTE_LIBRARY: 'PaletteLibrary',
  COLOR_LIST: 'ColorList',
  USER_PROFILE: 'UserProfile',
  EXPLORE_PALETTE: 'ExplorePalette'
};

export const PRIVATE_ROUTES = new Set([
  ROUTE_NAMES.CHAT_SESSION,
  ROUTE_NAMES.CHAT_SESSION_HISTORIES
]);
