import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Iroman", "Hulk", "Thor"];
  heroesBorrado: string | undefined = ""
  borrarHeroe() {
    let heroeBorrado = this.heroes.shift()
    this.heroesBorrado = heroeBorrado
    return heroeBorrado
  }
}
