import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Department, EmployeeData } from '../core/interfaces/interfaces';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  http = inject(HttpClient);

  getEmployeeList(): Observable<EmployeeData> {
    return this.http.get<EmployeeData>(environment.API_URL + 'GetAllEmployees');
  }

  createEmployee(employeeData: EmployeeData): Observable<EmployeeData> {
    return this.http.post<EmployeeData>(environment.API_URL + 'CreateEmployee', employeeData)
  }

  getDepartmentList(): Observable<Department>{
    return this.http.get<Department>(environment.API_URL+'GetParentDepartment')
  }

}
