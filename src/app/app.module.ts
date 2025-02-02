import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForestryWindowComponent } from './windows/forestry-window/forestry-window.component';
import { AddForestryDialogComponent } from './views/forestry-view/add-forestry-dialog/add-forestry-dialog.component';
import { ForestryListComponent } from './views/forestry-view/forestry-list/forestry-list.component';
import { SensorWindowComponent } from './windows/sensor-window/sensor-window.component';
import { AddSensorDialogComponent } from './views/sensor-view/add-sensor-dialog/add-sensor-dialog.component';
import { SensorListComponent } from './views/sensor-view/sensor-list/sensor-list.component';
import { ForestActionWindow } from './windows/forest-action-window/forest-action-window.component';
import { ForestActionListComponent } from './views/forestry-view/forest-action-list/forest-action-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from "@angular/material/input";
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AddForestryDialogFormComponent } from './views/forestry-view/add-forestry-dialog/add-forestry-dialog-form/add-forestry-dialog-form.component';
import { AddSensorDialogFormComponent } from './views/sensor-view/add-sensor-dialog/add-sensor-dialog-form/add-sensor-dialog-form.component';
import { PositiveDialogComponent } from './views/dialogs/positive-dialog/positive-dialog.component';
import { NegativeDialogComponent } from './views/dialogs/negative-dialog/negative-dialog.component';
import { TokenGeneratorShowerComponent } from './views/token-view/token-generator-shower/token-generator-shower.component';
import { TokenWindowComponent } from './windows/token-window/token-window.component';
import { TokenModalComponent } from './views/token-view/token-modal/token-modal.component';
import { GenerateButtonContainerComponent } from './views/token-view/generate-button-container/generate-button-container.component';
import { AssignForestryShowerComponent } from './views/sensor-view/assign-forestry-shower/assign-forestry-shower.component';
import { NoForestriesModalComponent } from './views/sensor-view/no-forestries-modal/no-forestries-modal.component';
import { SuccessModalComponent } from './views/sensor-view/success-modal/success-modal.component';
import { ErrorModalComponent } from './views/sensor-view/error-modal/error-modal.component';
import { AssignForestryDialogComponent } from './views/sensor-view/assign-forestry-dialog/assign-forestry-dialog.component';
import { HomeComponent } from './views/home-view/home.component';
import { AddForestActionDispatcher } from './views/forest-action-view/add-forest-action-dispatcher/add-forest-action-dispatcher.component';
import { Spinner } from './views/forest-action-view/spinner/spinner.component';
import { NoForestriesMessage } from './views/forest-action-view/no-forestries-message/no-forestries-message.component';
import { ForestActionCreationSuccessMessage } from './views/forest-action-view/forest-action-creation-success-message/forest-action-creation-success-message.component';
import { CreateForestActionForm } from './views/forest-action-view/create-forest-action-form/create-forest-action-form.component';
import { ForestActionCreationFailureMessage } from './views/forest-action-view/forest-action-creation-failure-message/forest-action-creation-failure-message.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips'; 
@NgModule({
  declarations: [
    AppComponent,
    ForestryWindowComponent,
    ForestActionWindow,
    AddForestryDialogComponent,
    ForestryListComponent,
    ForestActionListComponent,
    AddForestryDialogFormComponent,
    SensorWindowComponent,
    AddSensorDialogComponent,
    SensorListComponent,
    AddSensorDialogFormComponent,
    PositiveDialogComponent,
    NegativeDialogComponent,
    TokenGeneratorShowerComponent,
    TokenWindowComponent,
    TokenModalComponent,
    GenerateButtonContainerComponent,
    AssignForestryShowerComponent,
    NoForestriesModalComponent,
    SuccessModalComponent,
    ErrorModalComponent,
    AssignForestryDialogComponent,
    HomeComponent,
    AddForestActionDispatcher,
    Spinner,
    NoForestriesMessage,
    ForestActionCreationSuccessMessage,
    CreateForestActionForm,
    ForestActionCreationFailureMessage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    NgbModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
