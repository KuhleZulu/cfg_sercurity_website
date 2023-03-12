import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-uplaod',
  templateUrl: './uplaod.component.html',
  styleUrls: ['./uplaod.component.css'],
})
export class UplaodComponent {
  @Input() file: string = '';
  @Input() fileName: string = 'Ypur file';
  @Input() type: string = '';
  @Output() imageChangedEvent: EventEmitter<string> =
    new EventEmitter<string>();
  @Input() maxSize: number = 0;
  loading: boolean = false;
  showCanvas: boolean = false;
  constructor(private uploadService: UploadService) {}

  ngOnInit() {}

  uploadOriginal(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    this.loading = true;
    formData.append(
      'name',
      `tybo.${file.name.split('.')[file.name.split('.').length - 1]}`
    ); // file extention
    this.uploadService.uploadFile(formData).subscribe((response) => {
      this.loading = false;
      if (response && response.length > 15) {
        this.imageChangedEvent.emit(
          `https://cfgsecurity.co.za/api/api/upload/${response}`
        );
      }
    });
  }

  public uploadFile = (files?: FileList | null) => {
    if (!files) return;
    if (files.length === 0) {
      return;
    }
    this.loading = true;
    Array.from(files).forEach((file) => {
      if (file.size < 200000000) this.uploadOriginal(file);
      else alert('File too big');
    });
  };
}
