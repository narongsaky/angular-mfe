import {
    NgModule,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { Child2Component } from "./child2.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CHILD2_ROUTES } from "./child2-routing.module";

@NgModule({
    declarations: [
        Child2Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CHILD2_ROUTES)
    ],
    bootstrap: [Child2Component],
})
export class Child2Module {}
