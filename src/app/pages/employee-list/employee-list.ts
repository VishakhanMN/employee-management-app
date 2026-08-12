import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeData } from '../../core/interfaces/interfaces';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList implements OnInit {

  employeeService = inject(EmployeeService);

  getEmployeeList = signal<EmployeeData[]>([]);

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe({
      next: (res: any) => {
        this.getEmployeeList.set(res.slice(0, 10));
      }
    })

  }


}
