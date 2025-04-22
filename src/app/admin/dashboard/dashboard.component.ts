
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [ ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent implements OnInit{
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  // configService = inject(AppConfigService);

  // designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) {}

  // themeEffect = effect(() => {
  //     if (this.configService.transitionComplete()) {
  //         if (this.designerService.preset()) {
  //             this.initChart();
  //         }
  //     }
  // });

  ngOnInit() {
      this.initChart();
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.data = {
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
              datasets: [
                  {
                      label: 'First Dataset',
                      data: [65, 59, 80, 81, 56, 55, 40, 100, 120, 10, 140, 150],
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                      tension: 0.4
                  },
                  {
                      label: 'Second Dataset',
                      data: [28, 48, 40, 19, 86, 27, 90, 100, 110, 120, 130, 140],
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                      tension: 0.4
                  }
              ]
          };

          this.options = {
              maintainAspectRatio: false,
              aspectRatio: 0.6,
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  },
                  y: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  }
              }
          };
          this.cd.markForCheck()
      }
  }
}

