import { Component, OnInit, OnDestroy} from '@angular/core';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { DevKidsService } from '../services/dev-kids.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { takeUntil, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dev-kids',
  templateUrl: './dev-kids.component.html',
})
export class DevKidsComponent implements OnInit, OnDestroy {
  faRobot = faRobot;
  faGamepad = faGamepad;
  faLaptopCode = faLaptopCode;
  faPalette = faPalette;

  schoolMetadata$: Observable<any[]>;
  courseHTML$: Observable<SafeHtml>;

  private destroy$ = new Subject<void>();

  constructor(
    private devKidsService: DevKidsService,
    private sanitizar: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.schoolMetadata$ = this.devKidsService.getSchool();
    this._loadCourse();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onCourseClick(schoolId: string, courseId: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {schoolId, courseId}
    });
  }

  private _loadCourse() {
    this.courseHTML$ = this.activatedRoute.queryParams.pipe(
      switchMap((p) => this.devKidsService.getCourse(p.schoolId, p.courseId)),
      takeUntil(this.destroy$),
      map((lt) => (lt ? this.sanitizar.bypassSecurityTrustHtml(lt) : null))
    );
  }
}
