import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule} from "@angular/forms";
import {StudentPipePipe} from "../../shared/pipes/student-pipe.pipe";


@NgModule({
  declarations: [
    ListStudentsComponent,
    ProfileComponent,
    AddComponent,
    StudentPipePipe

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ConfirmDialogModule,
    FormsModule,
  ],
  providers: [ MessageService, ConfirmationService]
})
export class StudentModule { }
