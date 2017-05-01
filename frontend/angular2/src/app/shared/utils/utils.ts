/**
 * Created by tatiana.gorbunova on 01.05.2017.
 */
import {Injectable} from "@angular/core";
import {isNumeric} from "rxjs/util/isNumeric";

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

    public static getNamesProperty(obj: Object) : Array<any> {
        let namesProperty: Array<any> = [];
        for (let name in obj) {
            let property = { name: "", type: "" };
            if (new Date(obj[name]).toDateString() != "Invalid Date") {
                property.type = "Date";
            } else if (isNumeric(obj[name])) {
                property.type = "number";
            } else {
                property.type = "string";
            }
            property.name = name;
            namesProperty.push(property);
        }
        return namesProperty;
    }
}