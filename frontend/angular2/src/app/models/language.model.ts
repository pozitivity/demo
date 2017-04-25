/**
 * Created by tatiana.gorbunova on 25.04.2017.
 */
export class Language {

    constructor(key?: string, description?: string) {
        this.key = key;
        this.description = description;
    }

    key: string;
    description: string;
}