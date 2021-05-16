import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  adminDataObserver: any;

  constructor(
    private adminService: AdminService
  ) { 
    
    this.adminDataObserver = this.adminService.getDataObservable();
    this.adminDataObserver.subscribe((data: any) => {
        console.log('observarable', data);
      }
    );
    this.adminService.setPage('dashboard')
  }

  ngOnInit(): void {
  }

}
