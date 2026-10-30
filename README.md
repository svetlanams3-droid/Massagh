# Serenity Touch - Premium Mobile Massage Landing Page

## 🎯 Обзор проекта

Премиальный адаптивный лендинг для мобильного массажного салона в Сиэтле с полноценной админ-панелью для управления контентом.

## ✨ Основные возможности

### Для пользователей:
- **Двуязычность** (EN/RU) - мгновенное переключение без перезагрузки
- **Адаптивный дизайн** - идеально выглядит на всех устройствах
- **Интеграция Calendly** - онлайн-запись на сеансы
- **Секция отзывов** - с анимацией появления
- **Премиальный дизайн** - с использованием Unsplash изображений

### Для администраторов:
- **Полная админ-панель** для редактирования всего контента
- **Редактирование изображений** - замена URL картинок для всех секций
- **Редактирование текста** - изменение всех текстов на сайте
- **Сохранение в LocalStorage** - изменения не теряются при перезагрузке
- **Готово к миграции** - структура данных совместима с PocketBase/Firebase

## 🔐 Доступ к админ-панели

### Вход в админку:
1. Прокрутите страницу вниз до футера
2. Нажмите на иконку шестеренки ⚙️ (справа от копирайта)
3. Введите пароль: `admin123`
4. Нажмите "Login"

### Что можно редактировать:

#### 📸 Hero секция
- Заголовок и подзаголовок
- Текст кнопок
- Фоновое изображение (URL)

#### 💆 Services секция
- Заголовки и описания всех 4 услуг
- Цены и продолжительность
- Изображения для каждой услуги

#### ❤️ About секция
- Основной текст
- Изображение
- Описание преимуществ

#### ⭐ Reviews секция
- Имена клиентов
- Тексты отзывов
- Аватары (URL изображений)

#### 📅 Booking секция
- URL Calendly для интеграции виджета
- Контактный телефон

#### 📋 Footer
- Контактная информация
- Часы работы
- Адрес

## 🛠️ Технологии

- **React 18** с TypeScript
- **Tailwind CSS** для стилизации
- **Vite** для сборки
- **FontAwesome** для иконок
- **Calendly** для онлайн-записи
- **LocalStorage** для хранения данных

## 📁 Структура проекта

```
src/
├── App.tsx              # Главный компонент с всеми секциями
├── i18n.ts              # Переводы EN/RU
├── data/
│   └── content.ts       # Структура данных и функции LocalStorage
├── main.tsx             # Точка входа
└── index.css            # Глобальные стили
```

## 🚀 Запуск проекта

### Разработка:
```bash
npm run dev
```

### Сборка для продакшена:
```bash
npm run build
```

### Предпросмотр сборки:
```bash
npm run preview
```

## 🔧 Настройка Calendly

1. Зарегистрируйтесь на [Calendly](https://calendly.com)
2. Создайте событие для массажа
3. Скопируйте URL вашего события
4. Войдите в админ-панель → Booking секция
5. Вставьте URL в поле "Calendly URL"
6. Нажмите "Save"

## 💾 Структура данных для миграции

Данные хранятся в LocalStorage в формате JSON:

```typescript
interface SiteContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    backgroundImage: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
      price: string;
      duration: string;
      image: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    image: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      name: string;
      text: string;
      avatar: string;
      rating: number;
    }>;
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    calendlyUrl: string;
    phone: string;
  };
  footer: {
    tagline: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
}
```

### Миграция на PocketBase/Firebase:

Замените функции в `src/data/content.ts`:

```typescript
// Вместо localStorage используйте API вызовы
export async function loadContent(): Promise<SiteContent> {
  // PocketBase пример:
  // const record = await pb.collection('content').getFirstListItem('');
  // return record.content;
  
  // Firebase пример:
  // const doc = await getDoc(doc(db, 'content', 'main'));
  // return doc.data();
}

export async function saveContent(content: SiteContent): Promise<void> {
  // PocketBase пример:
  // await pb.collection('content').update(recordId, { content });
  
  // Firebase пример:
  // await setDoc(doc(db, 'content', 'main'), content);
}
```

## 🎨 Изменение пароля админа

В файле `src/App.tsx` найдите строку:

```typescript
const ADMIN_PASSWORD = 'admin123';
```

Замените на свой пароль.

## 📱 Особенности дизайна

- **Hero секция**: Полноэкранное изображение с градиентом
- **Статистика**: "Дипломированный специалист" и "Благодарные клиенты"
- **Карточки услуг**: С hover-эффектами и анимацией появления
- **Отзывы**: Темная секция с карточками и звездами
- **Calendly**: Интегрированный виджет для онлайн-записи
- **Footer**: С социальными сетями и контактной информацией

## 🌐 Языки

Все тексты доступны на двух языках:
- Английский (EN)
- Русский (RU)

Переключение происходит мгновенно без перезагрузки страницы.

## 📞 Контакты

Для вопросов и поддержки:
- Email: hello@serenitytouch.com
- Phone: (206) 555-0123
- Location: Seattle, WA

## 📄 Лицензия

© 2025 Serenity Touch Mobile Massage. All rights reserved.
