import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Etudiant} from "../../../shared/models/etudiant";
import {HttpClient} from "@angular/common/http";
import {Equipe} from "../../../shared/models/equipe";
import {TeamService} from "../../../shared/services/team/team.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  student!:Etudiant;
  @Input() studentFromParent? :Etudiant ;
  url: any;
  equipes!:Equipe[];
  @Output() notification = new EventEmitter<Etudiant>();
  constructor(private http:HttpClient, private equipeservice :TeamService) {

  }
  ngOnInit(){
    console.log(this.studentFromParent?.nomE)
    if(this.studentFromParent != null){
      this.student=this.studentFromParent;

    }else{
      this.student= {
        id:0,
        nomE:"",
        prenomE:"",
        option:"",
        id_univ:0,
        id_team:0,
        equipe:{
          id: 0,
          niveau: "",
          nomEquipe: "",
        },
      };

    }
this.getAllTEam();
    // this.equipes=[
    //   { id: 1,
    //     niveau: "nivv1",
    //     nomEquipe: "sirien",},
    //   { id: 2,
    //     niveau: "niv2",
    //     nomEquipe: "sisi",}
    // ]
    console.log(this.student)
  }
  getAllTEam(){
    this.equipeservice.getAllTeams().subscribe(
      data=>this.equipes=data
    );
  }
  getTEAMbyid(id:any){
    this.equipeservice.getTeamById(id).subscribe(
      data=>{return data}
    );
  }
  notifparent(student:Etudiant){
   console.log(student.equipe)

    this.notification.emit(student);
    console.log(student);
  }


}
