import { Component, input } from '@angular/core';

@Component({
  selector: 'android',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="150"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 150"
      [class]="customClass()"
    >
      <path
        fill="#34A853"
        d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.119 128.119 0 0 0-12.794-38.288 128.778 128.778 0 0 0-23.45-31.86 129.166 129.166 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25 2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386a11.776 11.776 0 0 0 .662-10.484 11.668 11.668 0 0 0-4.823-5.536 11.85 11.85 0 0 0-5.004-1.61 11.963 11.963 0 0 0-2.218.018 11.738 11.738 0 0 0-8.968 5.798c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38-.282.487-.567.973-.848 1.467-.392-.157-.78-.313-1.172-.462-14.24-5.43-29.688-8.4-45.836-8.4-.442 0-.879 0-1.324.006-14.357.143-28.152 2.64-41.022 7.12a119.434 119.434 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367-2.583-4.462-5.173-8.918-7.755-13.38L65.123 15.25c-1.818-3.126-3.632-6.259-5.439-9.386A11.736 11.736 0 0 0 48.5.048 11.71 11.71 0 0 0 43.49 1.66a11.716 11.716 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.808 11.808 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973.32 3973.32 0 0 1 5.439 9.386c2.53 4.357 5.054 8.713 7.58 13.069 2.582 4.462 5.168 8.918 7.75 13.38.02.038.046.075.065.112A129.184 129.184 0 0 0 45.32 64.38a129.693 129.693 0 0 0-22.2 24.015 127.737 127.737 0 0 0-9.34 15.24 128.238 128.238 0 0 0-10.843 28.764 130.743 130.743 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A124.978 124.978 0 0 0 0 149.118h256c-.205-1.891-.449-3.77-.734-5.636l.019-.012Z"
      />
      <path
        fill="#202124"
        d="M194.59 113.712c5.122-3.41 5.867-11.3 1.661-17.62-4.203-6.323-11.763-8.682-16.883-5.273-5.122 3.41-5.868 11.3-1.662 17.621 4.203 6.322 11.764 8.682 16.883 5.272ZM78.518 108.462c4.206-6.321 3.46-14.21-1.662-17.62-5.123-3.41-12.68-1.05-16.886 5.27-4.203 6.323-3.458 14.212 1.662 17.622 5.122 3.41 12.683 1.05 16.886-5.272Z"
      />
    </svg>
  `,
})
export class AndroidComponent {
  public customClass = input<string>('');
}
