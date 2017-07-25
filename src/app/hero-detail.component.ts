import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }          from './hero';
import { HeroService }   from './hero.service';
import { Weapon }        from './weapon';
import { WeaponService } from './weapon.service';



@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  weapons: Weapon[];

  constructor(
    private heroService: HeroService,
    private weaponService: WeaponService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.weaponService
      .getWeapons()
      .then(weapons => this.weapons = weapons);

    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => {
        this.hero = hero;
        // if (hero.weaponId){
        //   this.weaponService.getWeapon(hero.weaponId)
        //                     .then(weapon => this.weapon = weapon);
        // }
      });
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.hero); }
}
