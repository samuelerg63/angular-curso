import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[]=['spiderman','iroman',"thor",'goku'];
  public borrado1 ="";
  borrarHeroe(){
    this.borrado1 = this.heroes.shift() || '';
  };

}
