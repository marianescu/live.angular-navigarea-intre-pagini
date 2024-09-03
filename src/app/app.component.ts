import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProdusPage } from './pages/produs-page/produs.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, /*ProdusPage*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'navigarea-intre-pagini';

  constructor(private rutare:Router){}

  ceva(){
    if(confirm("Sigur vrei sa iesi de pe pagina?")){
      this.rutare.navigate(["/varza"])
    }
  }
}
