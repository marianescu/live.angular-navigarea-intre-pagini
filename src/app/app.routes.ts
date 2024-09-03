import { Routes } from '@angular/router';
import { CartofiPage } from './pages/cartofi-page/cartofi.page';
import { CeapaPage } from './pages/ceapa-page/ceapa.page';
import { ProdusPage } from './pages/produs-page/produs.page';

export const routes: Routes = [
    {
        path:"cartofi",
        component: CartofiPage
    },
    {
        path:"ceapa",
        component: CeapaPage
    },
    {
        path:"produse",
        component: CeapaPage
    },
    {
        path:"produse/:cod",
        component: ProdusPage
    },

    {
        path:"**",
        component:CeapaPage
    },
];
