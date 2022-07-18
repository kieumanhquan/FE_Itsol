import { Component, OnInit } from '@angular/core';
import {Job} from '../../../../@core/models/job';
import {JobPosition} from '../../../../@core/models/job-position';
import {WorkingForm} from '../../../../@core/models/working-form';
import {AcademicLevel} from '../../../../@core/models/academic-level';
import {Rank} from '../../../../@core/models/rank';
import {StatusJob} from '../../../../@core/models/status-job';
import {JobService} from '../../../../@core/services/job.service';
import {JobPositionService} from '../../../../@core/services/job-position.service';
import {WorkingFormService} from '../../../../@core/services/working-form.service';
import {AcademicLevelService} from '../../../../@core/services/academic-level.service';
import {RankService} from '../../../../@core/services/rank.service';
import {StatusJobService} from '../../../../@core/services/status-job.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {

  job: Job = new Job();
  jobPositions: JobPosition[];
  workingForms: WorkingForm[];
  academicLevels: AcademicLevel[];
  ranks: Rank[];
  statusJobs: StatusJob[];

  constructor(private jobService: JobService,
              private jobPositionService: JobPositionService,
              private workingFormService: WorkingFormService,
              private academicLevelService: AcademicLevelService,
              private rankService: RankService,
              private statusJobService: StatusJobService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobService.getJobById(this.router.snapshot.params['id']).
      subscribe(data => {
        this.job = data;
        console.log(this.job);
      });
    this.getJobPosition();
    this.getWorkingForm();
    this.getAcademicLevel();
    this.getRank();
    this.getStatusJob();
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

  getStatusJob() {
    this.statusJobService.getStatusJobList().subscribe(data => {
      this.statusJobs = data;
    });
  }
  selectStatusJobOption(id: number) {
    this.job.statusId = id;
  }

  onSubmit() {
    console.log(this.job);
  }

}
