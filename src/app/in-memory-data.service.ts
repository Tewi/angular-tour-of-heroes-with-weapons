import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', weaponId: 1 },
      { id: 11, name: 'Mr. Nice'},
      { id: 12, name: 'Narco', weaponId: 0 },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas', weaponId: 0 },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan', weaponId: 4 },
      { id: 17, name: 'Dynama', weaponId: 3 },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma', weaponId: 2 },
      { id: 20, name: 'Tornado' }
    ];

    const weapons = [
      { id: 0,  name: 'Sword' },
      { id: 1, name: 'Bow' },
      { id: 2, name: 'Axe' },
      { id: 3, name: 'Spear' },
      { id: 4, name: 'Staff' }


    ];
    return {heroes: heroes, weapons: weapons};
  }
}
