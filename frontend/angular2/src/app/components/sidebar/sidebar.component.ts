import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router, ActivatedRoute} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Language} from "../../models/language.model";
import {DataService} from "../../shared/services/data.service";
import {DataFile} from "../../models/data-file.model";
import {NamedEntity} from "../../models/named-entity.model";

@Component({
    selector: 'sidebar-comp',
    template: require("./sidebar.component.html"),
    styles: [require('!style!css!sass!../../../assets/css/partial/sidebar.scss').toString()]
})

export class SidebarComponent {
    constructor(private http: Http,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private translate: TranslateService,
                private dataService: DataService) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
    }

    headers: Headers;
    public langkey = "";
    public file: NamedEntity;

    public langs: Language[] = [];
    public showLanguage: boolean = false;

    ngOnInit() {

        this.dataService.getSelectedFile().subscribe(f => {
            this.file = f;
        });

        this.langkey = this.translate.getBrowserLang().toUpperCase();
        this.langs = [
            new Language("ru", "Русский"),
            new Language("en", "English"),
            new Language("cz", "Čeština")
        ];
    }

    public toFiles() {
        this.router.navigateByUrl("/dataFile");
    }

    public changeLang(key: string) {
        this.langkey = key;
        this.translate.use(key);
    }

    public getHeight() {
        if (this.showLanguage) return "210";
        else return "60";
    }
}