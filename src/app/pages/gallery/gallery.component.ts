import {Component, OnInit} from '@angular/core';
import {Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {NgxSpinnerService} from 'ngx-spinner';
import {YoutubeService} from '../../services/youtube/youtube.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

const data = [
  {
    srcUrl: '../../../assets/images/gallery/image1.jpg',
    previewUrl: '../../../assets/images/gallery/image1.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image2.jpg',
    previewUrl: '../../../assets/images/gallery/image2.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image3.jpg',
    previewUrl: '../../../assets/images/gallery/image3.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image4.jpg',
    previewUrl: '../../../assets/images/gallery/image4.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image5.jpg',
    previewUrl: '../../../assets/images/gallery/image5.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image6.jpg',
    previewUrl: '../../../assets/images/gallery/image6.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image7.jpg',
    previewUrl: '../../../assets/images/gallery/image7.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image8.jpg',
    previewUrl: '../../../assets/images/gallery/image8.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image9.jpg',
    previewUrl: '../../../assets/images/gallery/image9.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image10.jpg',
    previewUrl: '../../../assets/images/gallery/image10.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image11.jpg',
    previewUrl: '../../../assets/images/gallery/image11.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image12.jpg',
    previewUrl: '../../../assets/images/gallery/image12.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image13.jpg',
    previewUrl: '../../../assets/images/gallery/image13.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image14.jpg',
    previewUrl: '../../../assets/images/gallery/image14.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image15.jpg',
    previewUrl: '../../../assets/images/gallery/image15.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image16.jpg',
    previewUrl: '../../../assets/images/gallery/image16.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image17.jpg',
    previewUrl: '../../../assets/images/gallery/image17.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image18.jpg',
    previewUrl: '../../../assets/images/gallery/image18.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image19.jpg',
    previewUrl: '../../../assets/images/gallery/image19.jpg'
  },
  {
    srcUrl: '../../../assets/images/gallery/image20.jpg',
    previewUrl: '../../../assets/images/gallery/image20.jpg'
  }
];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryId = 'myLightbox';
  items: GalleryItem[];
  //  videos
  videos: any[];
  imageCaptions = [
    'Clean water for everyone',
    'Assembly at Campus 1',
    'Kindergarten',
    'Splash 2.0',
    'Grand Iftar 2017',
    'Grand Iftar 2017',
    'New classrooms at Campus 6',
    'Different Learning Perspectives',
    'Exam Time',
    'Technology Era',
    'Al-Khair College',
    '',
    'A cheering crowd',
    'Tharparkar Well',
    'Volunteers in action',
    'Let them fly',
    'Long Live Pakistan',
    'Lunchtime',
    'Picture time',
    'Spreading smiles',
  ]
  private unsubscribe$: Subject<any> = new Subject();

  constructor(public gallery: Gallery, private lightbox: Lightbox,private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }

  ngOnInit() {
    // 1. Create gallery items
    this.items = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );


    // Load item into different lightbox instance
    // With custom gallery config
    this.withCustomGalleryConfig();
    //  videos
    this.spinner.show();
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCnWhgHTM3g4JaHN3mN_SzbA', 8)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        console.log(lista)
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      });
  }
  // openInFullScreen(index: number) {
  //   this.lightbox.open(index, this.galleryId, {
  //     panelClass: 'fullscreen'
  //   });
  // }
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);
  }


}
