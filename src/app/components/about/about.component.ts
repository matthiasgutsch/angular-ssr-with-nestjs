import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  lang = 'it';

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta,
    ) {



    this.titleService.setTitle('Chi siamo');
    this.metaService.addTag({ name: 'description', content: '' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.addTag({ property: 'og:title', content: '' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });

  }


}
