export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    

   constructor(name: string, orbitType: string, type: string, launchDate: string, operational: boolean) {
    name = name;
    orbitType = orbitType;
    type = type;
    launchDate = launchDate;
    operational = true;         
    }

}



