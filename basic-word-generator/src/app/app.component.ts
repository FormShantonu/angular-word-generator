import { Component } from '@angular/core';
import arrayOfWord from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-word-generator';

  word:string =''; 
  limit = 10;
  handelSlidChange(newLimit:any){
    this.limit = newLimit;
  };
  gaterThen(){
    this.word = arrayOfWord.slice(0,this.limit).join(" ");    
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
