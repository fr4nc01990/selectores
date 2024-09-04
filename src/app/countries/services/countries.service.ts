import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../interfaces/country.interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania]

    constructor() { }

    //habrá componente que no podrán acceder a _region porque esta pivado, para ello deberemos hacer un get

    get regions(): Region[] {
        return [...this._regions] //con el spread se rompe la relación con _regions y x ende manendrá a salvo el original
    }

}