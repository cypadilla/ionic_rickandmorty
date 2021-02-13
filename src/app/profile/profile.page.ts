import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId:string;
  character;

  constructor(
    private activatedRoute:ActivatedRoute,
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.httpClient.get('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe(response => {
      console.log(response)
      this.character = response
    })
    
  }

}
