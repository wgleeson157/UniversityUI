import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UniversityListComponent } from '@app/components/university-list/university-list.component';
import { UniversityApiService } from '@app/shared/services/universities.api.service';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxPaginationModule } from 'ngx-pagination'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InlineSVGModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [UniversityApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
