import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxFileDropModule } from 'ngx-file-drop';
import 'hammerjs';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {
  AssigneeAutocompleteComponent,
  ActionRequestService,
  CloseConfirmationComponent,
  RequestDataTableComponent,
  RequestDetailComponent,
  RequestEditComponent,
  RequestFormComponent,
} from './requests';
import {
  AngularFirestoreService,
  AuthService,
  PermissionService,
} from './shared';
import { UploadService } from './uploads';
import { WatchersChipListComponent } from './requests/watchers-chip-list-input/watchers-chip-list-input.component';
import { XlsxService } from './shared/xlsx.service';

@NgModule({
  declarations: [
    AppComponent,
    AssigneeAutocompleteComponent,
    CloseConfirmationComponent,
    LandingPageComponent,
    RequestDataTableComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestFormComponent,
    WatchersChipListComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    NgxFileDropModule,
    AppMaterialModule,
  ],
  providers: [
    ActionRequestService,
    AngularFirestoreService,
    AuthService,
    PermissionService,
    UploadService,
    XlsxService,
  ],
  entryComponents: [CloseConfirmationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
