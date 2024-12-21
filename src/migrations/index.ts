import * as migration_20241221_041647_inits from './20241221_041647_inits';

export const migrations = [
  {
    up: migration_20241221_041647_inits.up,
    down: migration_20241221_041647_inits.down,
    name: '20241221_041647_inits'
  },
];
