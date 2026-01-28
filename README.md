# 🎓 AI School Platform - פלטפורמת לימוד AI

פלטפורמת לימוד מתקדמת המתמחה בהוראת כלי הבינה המלאכותית של Google, כולל Gemini, Project IDX ו-Vertex AI.

## 🌟 תכונות עיקריות

- 🎯 **מערכת קורסים מתקדמת** - 4 קורסים מקיפים בנושאי AI
- 🔒 **מערכת הרשאות** - מצב אורח ומצב תלמיד עם גישה מותאמת
- 📚 **חומרי עזר להורדה** - PDF, PPTX, קבצי ZIP ועוד
- 🎥 **נגן וידאו משולב** - צפייה בשיעורים בתוך הפלטפורמה
- 📱 **עיצוב רספונסיבי** - מותאם לכל המכשירים
- 🌐 **תמיכה בעברית מלאה** - כיוון RTL ותוכן בעברית

## 🛠️ טכנולוגיות

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Firebase Hosting
- **Storage**: Firebase Storage

## 🚀 התקנה והרצה

### דרישות מקדימות

- Node.js (גרסה 18 ומעלה)
- npm או yarn
- Firebase CLI

### התקנת התלויות

```bash
npm install
```

### הרצה בסביבת פיתוח

```bash
npm run dev
```

הפרויקט יעלה על: `http://localhost:5173`

### בניית הפרויקט

```bash
npm run build
```

### העלאה ל-Firebase

```bash
firebase deploy
```

## 📁 מבנה הפרויקט

```
ai-school-platform/
├── src/
│   ├── App.tsx              # קומפוננטה ראשית
│   ├── main.tsx             # נקודת כניסה
│   └── index.css            # סגנונות גלובליים
├── public/                  # קבצים סטטיים
├── .github/
│   └── workflows/
│       └── firebase-deploy.yml  # GitHub Actions
├── firebase.json            # הגדרות Firebase
├── .firebaserc             # פרויקט Firebase
└── package.json            # תלויות

```

## 🔐 הגדרת GitHub Actions (Deploy אוטומטי)

### שלב 1: קבלת Firebase Service Account

1. כנס ל-[Firebase Console](https://console.firebase.google.com/project/aischool-39b18/settings/serviceaccounts/adminsdk)
2. לחץ על **"Generate new private key"**
3. שמור את קובץ ה-JSON שהתקבל

### שלב 2: הוספת Secret ל-GitHub

1. כנס לעמוד ה-Repository שלך ב-GitHub
2. Settings → Secrets and variables → Actions
3. לחץ על **"New repository secret"**
4. שם: `FIREBASE_SERVICE_ACCOUNT`
5. ערך: הדבק את כל תוכן קובץ ה-JSON
6. לחץ **"Add secret"**

עכשיו כל Push ל-branch `main` יעלה אוטומטית ל-Firebase! 🎉

## 📋 רשימת משימות

- [x] בניית האתר הבסיסי
- [x] התקנת Firebase CLI
- [x] חיבור לפרויקט Firebase
- [x] הגדרת GitHub Actions
- [ ] העלאת נכסים (PDF, קבצים) ל-Firebase Storage
- [ ] עדכון URL-ים ב-App.tsx

## 🔗 קישורים חשובים

- **Firebase Console**: [https://console.firebase.google.com/project/aischool-39b18](https://console.firebase.google.com/project/aischool-39b18)
- **Firebase Hosting**: [הקישור יתעדכן לאחר ה-Deploy הראשון]

## 📝 הערות פיתוח

### עדכון קישורי חומרי העזר

לאחר העלאת הקבצים ל-Firebase Storage, עדכן את ה-URL-ים בקובץ `src/App.tsx` במערך `COURSES`:

```typescript
materials: [
  { title: 'שם הקובץ', type: 'pdf', url: 'https://firebasestorage.googleapis.com/...' }
]
```

### הוספת קורס חדש

ערוך את המערך `COURSES` ב-`App.tsx` והוסף אובייקט חדש:

```typescript
{
  id: 'c5',
  title: 'שם הקורס',
  description: 'תיאור הקורס',
  level: 'מתחילים',
  // ... שאר השדות
}
```

## 🤝 תרומה לפרויקט

מעוניין לתרום? פתח Pull Request או צור Issue!

## 📄 רישיון

כל הזכויות שמורות © 2025 AI School Platform

---

נבנה עם ❤️ באמצעות React, TypeScript ו-Firebase
