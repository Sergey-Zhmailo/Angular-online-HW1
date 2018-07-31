// 1. Импортируются дополнительные модули, сервисы, компоненты
import { Component } from '@angular/core';

// 2. Декоратор - описывает метаданные о компоненте
@Component({
  selector: 'app-root', // Селектор под которым можно использовать компоненту
  templateUrl: './app.component.html', // Адрес шаблона для компоненты
  styleUrls: ['./app.component.css'] // Адрес стилей для компоненты
})

// 3. Тело компоненты
export class AppComponent {
  title: string = 'My first angular app';
}
