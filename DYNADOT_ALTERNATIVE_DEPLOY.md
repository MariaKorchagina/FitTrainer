# Альтернативные способы деплоя на Dynadot

## Если нет опции "Upload Static Files"

### Вариант 1: Использование Website Builder (Drag & Drop)

1. **Войдите в панель управления** Dynadot
2. **Найдите раздел "Website Builder"** или "Build Website"
3. **Выберите "Start Building"** или "Create New Site"
4. **Выберите "Upload Files"** или "Import Files"
5. **Перетащите папку `dist/`** или выберите файлы

### Вариант 2: Использование FTP (если доступно)

1. **Найдите раздел "FTP Access"** или "File Manager"
2. **Получите FTP данные** (хост, логин, пароль)
3. **Подключитесь через FTP клиент** (FileZilla, WinSCP)
4. **Загрузите все файлы** из папки `dist/` в корневую директорию

### Вариант 3: Использование внешнего хостинга + DNS

Это самый надежный способ:

#### Шаг 1: Деплой на Vercel (рекомендуется)

1. **Перейдите на** https://vercel.com/
2. **Зарегистрируйтесь** через GitHub
3. **Подключите ваш репозиторий** https://github.com/MariaKorchagina/FitTrainer
4. **Vercel автоматически задеплоит** сайт
5. **Получите URL** (например: `https://fittrainer.vercel.app`)

#### Шаг 2: Настройка DNS в Dynadot

1. **Войдите в панель управления** Dynadot
2. **Перейдите в "DNS Management"** для вашего домена
3. **Добавьте CNAME запись**:
   - **Name**: `@` (или `www`)
   - **Value**: `fittrainer.vercel.app`
   - **TTL**: `3600`

### Вариант 4: GitHub Pages + Dynadot DNS

1. **Перейдите в настройки репозитория** GitHub
2. **Найдите "Pages"** в левом меню
3. **Выберите "Deploy from a branch"**
4. **Выберите ветку `main`** и папку `/dist`
5. **Получите URL** (например: `https://mariakorchagina.github.io/FitTrainer`)
6. **Настройте DNS** в Dynadot на этот URL

## Пошаговая инструкция для Vercel (Самый простой способ)

### Шаг 1: Подготовка

1. **Убедитесь, что все изменения запушены** в GitHub:
   ```bash
   git status
   git push
   ```

### Шаг 2: Деплой на Vercel

1. **Перейдите на** https://vercel.com/
2. **Нажмите "Sign Up"** и выберите "Continue with GitHub"
3. **Авторизуйтесь** через ваш GitHub аккаунт
4. **Нажмите "New Project"**
5. **Выберите репозиторий** `MariaKorchagina/FitTrainer`
6. **Настройки проекта**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (корень проекта)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. **Нажмите "Deploy"**

### Шаг 3: Получение URL

После деплоя вы получите URL вида:
- `https://fittrainer-xxx.vercel.app` (автоматический)
- Или можете настроить кастомный домен

### Шаг 4: Настройка DNS в Dynadot

1. **Войдите в панель управления** Dynadot
2. **Перейдите в "DNS Management"** для вашего домена
3. **Добавьте CNAME запись**:
   - **Name**: `@` (для корневого домена)
   - **Value**: `fittrainer-xxx.vercel.app`
   - **TTL**: `3600`
4. **Добавьте еще одну CNAME запись**:
   - **Name**: `www` (для www поддомена)
   - **Value**: `fittrainer-xxx.vercel.app`
   - **TTL**: `3600`

## Проверка деплоя

После настройки DNS (может занять до 24 часов):

1. **Откройте ваш домен** в браузере
2. **Проверьте все страницы**:
   - Главная страница
   - Программы
   - Обо мне
   - Контакты
3. **Проверьте функциональность**:
   - Переводы
   - Marquiz виджет
   - Мобильная версия

## Если ничего не работает

### Альтернативные хостинги:

1. **Netlify**: https://netlify.com/
2. **Firebase Hosting**: https://firebase.google.com/
3. **GitHub Pages**: https://pages.github.com/
4. **Surge.sh**: https://surge.sh/

### Ручная загрузка файлов:

Если Dynadot поддерживает загрузку файлов:
1. **Скачайте архив** `dynadot-deploy-package.zip`
2. **Распакуйте папку `dist/`**
3. **Загрузите все файлы** в корневую директорию сайта
4. **Убедитесь, что `index.html`** находится в корне

## Поддержка

Если возникнут проблемы:
- **Vercel Support**: https://vercel.com/support
- **Dynadot Support**: https://www.dynadot.com/support
- **GitHub Support**: https://support.github.com/
