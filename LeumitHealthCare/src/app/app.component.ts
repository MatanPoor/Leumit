import { Component, OnInit } from '@angular/core';
import { NumberService } from './core/models/number.service';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  
 
   constructor(private dataService : DataService) {}
 
   async ngOnInit(): Promise<void> {

    this.stringNumbers$ = this.dataService.getNumbersByString()
    let v = await this.stringNumbers$;
    this.wordsArr = v.split(" ");
    this.reveresWords()
  }

  colors : string [] = ['red','pink','yellow','blue','orange'];
  stringNumbers$!: Promise<string>;
  wordsArr: string[] = [];
  reveresArr :string[]= [];
  searchWord : string = '';
  showWord:string = '';
  wordClicked : boolean = false;

  wordToShow(index : number)
  {
    this.wordClicked = true
    return this.showWord = this.wordsArr[index]

  }
  
  reveresWords(){
    for (let index = 0; index < this.wordsArr.length; index++) {
       this.reveresArr[index] = this.wordsArr[index].split("").reverse().join(""); 
    }
  }
  async getWord(word : string){
    this.wordClicked = false
     this.searchWord = await word;
   
  }

}

