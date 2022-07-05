
import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
    selector: "app-main",
    templateUrl: "./main.component.html"
})
export class MainComponent implements OnInit {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit() {

    }


}
