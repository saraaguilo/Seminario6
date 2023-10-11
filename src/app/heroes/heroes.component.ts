import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; 


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  
  //Ordena obtener los 'heroes' cuando se inicializa la pagina
  ngOnInit(): void {
    this.getHeroes();
  }
  // Obtiene los 'heroes' proporcionados por el HeroService que a la vez le llegan del fichero de mock heroes
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string, poderes: string): void {
    name = name.trim();
    poderes = poderes.trim();
    if (!name) { return; }
  
    const newHero: Hero = { name, poderes } as Hero; // Crea un nuevo objeto Hero con nombre y poderes
    this.heroes.push(newHero); // Agrega el nuevo héroe a la lista local
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  
}