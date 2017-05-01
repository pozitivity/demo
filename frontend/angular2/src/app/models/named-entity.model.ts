/**
 * Created by tatiana.gorbunova on 01.05.2017.
 */
export class NamedEntity {

    constructor(id?: number, name?: string) {
        this.id = id;
        this.name = name;
    }

    id: number;
    name: string;
}