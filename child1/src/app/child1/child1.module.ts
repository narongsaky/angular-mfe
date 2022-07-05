import {
    NgModule,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { Child1Component } from "./child1.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CHILD1_ROUTES } from "./child1-routing.module";

@NgModule({
    declarations: [
        Child1Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CHILD1_ROUTES)
    ],
    bootstrap: [Child1Component],
})
export class Child1Module {}
