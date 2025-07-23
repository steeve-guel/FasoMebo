import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reaction-benefiiciaire',
  imports: [],
  templateUrl: './reaction-benefiiciaire.component.html',
  styleUrl: './reaction-benefiiciaire.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionBenefiiciaireComponent {

  videos = [
    {
      url: 'https://www.youtube.com/watch?v=YFM2v2wVEj0',
      title: 'Reportage RTB'
    },
    {
      url: 'https://www.youtube.com/watch?v=Ls1pEtAXDJc&ab_channel=RTB-RadiodiffusionT%C3%A9l%C3%A9visionduBurkina',
      title: 'Mariam Zombra'
    },
    {
      url: 'https://www.youtube.com/watch?v=q72J9gTAlHQ&ab_channel=RTB-RadiodiffusionT%C3%A9l%C3%A9visionduBurkina',
      title: 'Cheick Ouédraogo'
    },
    {
      url: 'https://www.youtube.com/watch?v=pBvyQ7gzyLs&ab_channel=RTB-RadiodiffusionT%C3%A9l%C3%A9visionduBurkina',
      title: 'Soldat de 2e classe Adoulaye Kaboré'
    },
    {
      url: 'https://www.youtube.com/watch?v=HWJVewbvQuU&ab_channel=RTB-RadiodiffusionT%C3%A9l%C3%A9visionduBurkina',
      title: 'Hamed dit Patindeda Patric DG BBDA'
    },
    {
      url: 'https://www.youtube.com/watch?v=LjsSNZtlN3E&ab_channel=RTB-RadiodiffusionT%C3%A9l%C3%A9visionduBurkina',
      title: 'Commandant Zoodnoma Ahmed'
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  getSafeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private extractVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|watch\?v=|embed\/|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }
}
