import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { Planning } from '../../interfaces/planning';

@Component({
  selector: 'app-get-planning',
  templateUrl: './get-planning.component.html',
  styleUrls: ['./get-planning.component.scss']
})
export class GetPlanningComponent implements OnInit {

  calendar = CalendarComponent
  month : any  
  selected: Date | undefined | null;
  day: number | undefined
  value: string = ''
  result:any
  items = [
    {title:'08h:00 - 10h:00', select: false},
    {title:'10h:00 - 12h:00', select: false},
    {title:'12h:00 - 14h:00', select: false},
    {title:'14h:00 - 16h:00', select: false},
  ]
  constructor(
    private modalCtrl : MatDialog
  ) { 
    this.planning = this.month
  }

  change(items : any, index:number){
    items.forEach((item : any, i : number) => {
      item.select = false
      if(i == index){
        item.select = true
        this.value = item.title
      }
    });
  }

  planning(date: any, horaire:string):any{
    return this.result = {
      "jour":date?.getDay(),
      "mois":date?.getMonth(),
      "annee":date?.getFullYear(),
      "heure":horaire
    }
  }


  ngOnInit(): void {
  }

}
