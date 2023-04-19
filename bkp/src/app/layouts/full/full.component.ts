import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy,AfterViewInit} from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-filter-items';
import { Observable } from 'rxjs';
import { ProgressSpinnerDialogComponent } from 'src/app/dashboard/dashboard-components/spinner-dialog-component/progress-spinner-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  value='São Paulo';
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}


  onEnter(city:string){
		console.log('busca de cidade:', city)
		this.showProgressSpinnerUntilExecuted( new Observable(this.myObservable));
	}


  myObservable(observer:any) {
		setTimeout(() => {

			



		observer.next("done waiting for 5 sec");
		observer.complete();
		}, 1000);
	}

	showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
		let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
		  panelClass: 'transparent',
		  disableClose: true
		});
		let subscription = observable.subscribe(
		  (response: any) => {
			subscription.unsubscribe();
			//handle response
			console.log(response);
			dialogRef.close();
			
		  },
		  (error) => {
			subscription.unsubscribe();
			//handle error
			dialogRef.close();
			
		  }
		);
	}
	

}
