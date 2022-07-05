import {
    NgModule,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MainComponent } from "./main.component";
import { MatCardModule } from "@angular/material/card";
import { CommonModule, JsonPipe } from "@angular/common";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache, ApolloLink } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { USER_ID } from "../global/app-global";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatTooltipModule,
        MatRippleModule,
        ApolloModule,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    bootstrap: [MainComponent],
})
export class MainModule {}
