import { Component } from '@angular/core';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent {
  nombre: string = 'Dr. Malévolo';
  poderes: string = 'Manipulación de la mente';
}
