import * as migration_20241221_041647_inits from './20241221_041647_inits';
import * as migration_20241221_101137_add_column_full_name_to_users_table from './20241221_101137_add_column_full_name_to_users_table';

export const migrations = [
  {
    up: migration_20241221_041647_inits.up,
    down: migration_20241221_041647_inits.down,
    name: '20241221_041647_inits',
  },
  {
    up: migration_20241221_101137_add_column_full_name_to_users_table.up,
    down: migration_20241221_101137_add_column_full_name_to_users_table.down,
    name: '20241221_101137_add_column_full_name_to_users_table'
  },
];
