import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Je} from './managerJe.model';
import {ManagerJeService} from './managerJe.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'ngx-managerJe',
  templateUrl: './managerJe.component.html',
  styleUrls: ['./managerJe.component.scss'],
}) export  class ManagerJeComponent implements OnInit{
  jes: Je[];

  constructor(
    private managerJeService: ManagerJeService,
    private cdRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.getJe();
  }

  public getJe(): void {
    this.managerJeService.getJE().subscribe(
      (res: Je[]) => {
        console.log(res);
        this.jes= res;
        this.cdRef.markForCheck();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      },
    );
  }
}
