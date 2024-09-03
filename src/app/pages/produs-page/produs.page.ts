import { Component, Input } from "@angular/core";

@Component({
    // selector:"app-produs-page",
    standalone: true,
    templateUrl:"./produs.page.html",
    styleUrl:"./produs.page.css"
})
export class ProdusPage{
    @Input() cod:string=""
}