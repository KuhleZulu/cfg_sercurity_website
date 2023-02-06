import { Component, OnInIt } from '@angular/core';


@Component({
  selector: 'app-add-careers',
  templateUrl: './add-careers.component.html',
  styleUrls: ['./add-careers.component.css']
})
export class AddCareersComponent implements OnInIt {

  careersItem : NewsModel = {
    NewsId: 0,
    Title: '',
    Body: '',
    CreateById: 'admin',
    Status: 'Active',
    ImageUrl: 'https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  }

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    
  }
  onImageUploaded(e:string){
    this.careersItem.ImageUrl = e;
  }
  save(){
    this.newsService.addNews(this.careersItem).subscribe((data) =>{
      if (data){
        alert('News Saved')
      }
    });
  }

}
