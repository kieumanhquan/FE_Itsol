import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Job} from '../../../../../@core/models/job';
import {JobPosition} from '../../../../../@core/models/job-position';
import {WorkingForm} from '../../../../../@core/models/working-form';
import {AcademicLevel} from '../../../../../@core/models/academic-level';
import {Rank} from '../../../../../@core/models/rank';
import {StatusJob} from '../../../../../@core/models/status-job';
import {JobService} from '../../../../../@core/services/job.service';
import {JobPositionService} from '../../../../../@core/services/job-position.service';
import {WorkingFormService} from '../../../../../@core/services/working-form.service';
import {AcademicLevelService} from '../../../../../@core/services/academic-level.service';
import { RankService } from '../../../../../@core/services/rank.service';
import { ActivatedRoute } from '@angular/router';
import {ManagerJeService} from '../../../managerJe/managerJe.service';
import {Je} from '../../../managerJe/managerJe.model';

@Component({
  selector: 'ngx-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.scss']
})
export class JobUpdateComponent implements OnInit {

  job: any;
  jobPositions: JobPosition[];
  workingForms: WorkingForm[];
  academicLevels: AcademicLevel[];
  ranks: Rank[];
  contactJE: Je[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private jobService: JobService,
              private jobPositionService: JobPositionService,
              private workingFormService: WorkingFormService,
              private academicLevelService: AcademicLevelService,
              private rankService: RankService,
              private managerJeService: ManagerJeService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.data.idJob);
    this.jobService.getJobById(this.router.snapshot.params['id']).
    subscribe(data => {
      this.job = data;
      console.log(this.job);
    });
    this.getJobPosition();
    this.getWorkingForm();
    this.getAcademicLevel();
    this.getRank();
    // this.getContactJE();
  }

  getJobPosition() {
    this.jobPositionService.getJobPositionList().subscribe(data => {
      this.jobPositions = data;
      console.log(this.jobPositions);
    });
  }
  selectJobPositionOption(id: number) {
    console.log(id);
    this.job.jobPositionId = id;
    console.log(this.job.jobPositionId);
  }

  getWorkingForm() {
    this.workingFormService.getWorkingFormList().subscribe(data => {
      this.workingForms = data;
    });
  }
  selectWorkingFormOption(id: number) {
    this.job.workingFormId = id;
  }

  getAcademicLevel() {
    this.academicLevelService.getAcademicLevelList().subscribe(data => {
      this.academicLevels = data;
    });
  }
  selectAcademicLevelOption(id: number) {
    this.job.academicLevelId = id;
  }

  getRank() {
    this.rankService.getRankList().subscribe(data => {
      this.ranks = data;
    });
  }
  selectRankOption(id: number) {
    this.job.rankId = id;
  }

  // getContactJE() {
  //   this.managerJeService.getJE().subscribe(data => {
  //     this.contactJE = data;
  //   });
  // }
  selectContactJE(id: number) {
    this.job.contactId = id;
  }
}
