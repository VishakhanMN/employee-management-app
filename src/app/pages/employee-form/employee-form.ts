import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm implements OnInit {

  empService = inject(EmployeeService);

  employeeForm = {
    employeeName: '',
    contactNo: '',
    emailId: '',
    department: '',
    gender: '',
    role: '',
    createdDate: '',
  };

  getDepartmentList = signal<any[]>([]);

  ngOnInit(): void {
    this.empService.getDepartmentList().subscribe({
      next: (dept: any) => {
        this.getDepartmentList.set(dept)
      },
      error: (err: Error) => {
        alert("Error!! fetch department API failed.")
      }
    })

  }

}
