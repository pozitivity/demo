/**
 * Created by tatiana.gorbunova on 01.05.2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class Utils {

    public static mapData(data: Array<any>, filter: string) : Array<any> {
        let mappingData = [];
        let result = data.reduce((previous, current, index, array) => {
            previous[current[filter]] = previous[current[filter]] || [];
            previous[current[filter]].push(current);
            return previous;
        }, Object.create(null));
        for (let name in result) {
            mappingData.push({ name: name, size: result[name].length});
        }
        return mappingData;
    }

    public static getNamesProperty(obj: Object) : Array<string> {
        let namesProperty: Array<string> = [];
        for (let name in obj) {
            namesProperty.push(name);
        }
        return namesProperty;
    }
}