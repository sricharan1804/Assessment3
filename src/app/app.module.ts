import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Forms Module
import { FormsModule } from '@angular/forms';

// Application Component
import { EmployeedetailsComponent } from './component/employeedetails/employeedetails.component';

// Custom pipe
import { SearchPipe } from './pipes/search.pipe';

// Tootip Module
import { TooltipModule } from 'ng2-tooltip-directive';


//Material Table Modules
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


//Material Select Input and Realted Important Modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    SearchPipe,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
