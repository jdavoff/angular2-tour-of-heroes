// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../shared/hero.service';
import { Hero } from '../../shared/hero'


@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.template.jade'
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;


    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }
}