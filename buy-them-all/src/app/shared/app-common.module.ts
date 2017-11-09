import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { // only import the portions you will use to optimize build (MaterialModule to include all is deprecated)
    MatAutocompleteModule,
    MatCommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
      CommonModule,
      MatAutocompleteModule,
      MatCommonModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatDialogModule,
      MatTabsModule,
      FlexLayoutModule
  ],
  declarations: [],
  exports: [
      MatAutocompleteModule,
      MatCommonModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatDialogModule,
      MatTabsModule,
      FlexLayoutModule
  ]
})
export class AppCommonModule { }
