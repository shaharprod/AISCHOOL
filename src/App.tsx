// AI School Platform - Gemini 3.0 (Updated January 2026)
import React, { useState } from 'react';
import {
  Play, Lock, Download, FileText, BookOpen, Menu, X,
  ChevronRight, MonitorPlay, BrainCircuit, Presentation, Code, MessageSquare,
  Video, Eye, ExternalLink
} from 'lucide-react';

// --- Types ---
type UserRole = 'guest' | 'student';

interface LessonMaterial {
  title: string;
  type: 'pdf' | 'pptx' | 'docx' | 'xlsx' | 'txt' | 'link';
  url: string;
  description?: string;
  size?: string;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isFree?: boolean;
  materials?: LessonMaterial[];
  description?: string;
}

interface CourseMaterial {
  title: string;
  type: 'pdf' | 'pptx' | 'zip' | 'link' | 'xlsx' | 'txt';
  url: string;
  size?: string;
  description?: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  duration: string;
  lessonsCount: number;
  icon: React.ReactNode;
  price: number;
  lessons: Lesson[];
  materials: CourseMaterial[];
}

interface WorkshopMaterial {
  id: string;
  title: string;
  date: string;
  type: string;
  materials: { name: string; type: string; url: string }[];
}

// --- Data ---
const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'שליטה ב-Google Gemini 3.0 ובינה מלאכותית אישית',
    description: 'המדריך המלא לשימוש במודל Gemini 3.0 Flash החדש, Gemini Advanced, Canvas (כלי עריכה אינטראקטיבי) ושילוב עם Google Workspace לייעול העבודה היומיומית.',
    level: 'מתחילים',
    category: 'מבוא ופרודוקטיביות',
    duration: '5.5 שעות',
    lessonsCount: 11,
    icon: <BrainCircuit className="w-6 h-6" />,
    price: 280,
    materials: [
      { title: 'מדריך מקוצר: Gemini vs ChatGPT', type: 'txt', url: '/materials/c1/course-guide.txt', size: '1.2 MB', description: 'השוואה מקיפה' },
      { title: 'רשימת פרומפטים מוכנים ל-Gmail', type: 'txt', url: '/materials/c1/course-prompts.txt', size: '0.8 MB', description: '50+ פרומפטים מוכנים' },
      { title: 'צ\'ק ליסט: הגדרות פרטיות', type: 'txt', url: '/materials/c1/course-privacy.txt', size: '0.5 MB', description: 'מדריך אבטחה ופרטיות' }
    ],
    lessons: [
      { 
        id: 'l1-1', 
        title: 'מהפכת ה-Gemini 3.0: המודל החדש והמהיר', 
        duration: '20:00', 
        isFree: true,
        description: 'היכרות עם Gemini 3.0 Flash - המודל החדש והמהיר ביותר של Google, יכולות מולטי-מודאליות משופרות',
        materials: [
          { title: 'מצגת שיעור 1 - מבוא ל-Gemini', type: 'txt', url: '/materials/c1/lesson1-intro.txt', size: '2.3 MB', description: 'מדריך מלא על Gemini' },
          { title: 'השוואת מודלים: Gemini vs GPT', type: 'txt', url: '/materials/c1/lesson1-comparison.txt', size: '1.8 MB', description: 'השוואה מפורטת בין מודלי AI' },
          { title: 'דף עבודה: תרגול ראשון', type: 'txt', url: '/materials/c1/lesson1-worksheet.txt', size: '0.5 MB', description: '12 תרגילים מעשיים' },
        ]
      },
      { 
        id: 'l1-2', 
        title: 'התמצאות בממשק Gemini (Web & Mobile)', 
        duration: '20:00',
        description: 'סיור מודרך בממשק Gemini בווב ובמובייל',
        materials: [
          { title: 'מדריך ממשק Gemini Web', type: 'txt', url: '/materials/c1/lesson2-web-interface.txt', size: '3.1 MB', description: 'סקירה מלאה של כל התכונות' },
          { title: 'מדריך אפליקציית מובייל', type: 'txt', url: '/materials/c1/lesson2-mobile-guide.txt', size: '2.7 MB', description: 'שימוש ב-Gemini במובייל' },
          { title: 'קיצורי מקלדת נפוצים', type: 'txt', url: '/materials/c1/lesson2-shortcuts.txt', size: '0.3 MB', description: 'רשימת קיצורים שימושיים' },
          { title: 'וידאו הדרכה נוסף', type: 'link', url: 'https://youtube.com/watch?v=demo', size: '-' },
        ]
      },
      { 
        id: 'l1-3', 
        title: 'אינטגרציה עם Google Workspace', 
        duration: '30:00',
        description: 'שילוב Gemini עם Gmail, Docs, Sheets ועוד',
        materials: [
          { title: 'מדריך אינטגרציה מלא', type: 'txt', url: '/materials/c1/lesson3-workspace.txt', size: '4.2 MB', description: 'אינטגרציה מלאה עם Workspace' },
          { title: '50 דוגמאות שימוש ב-Gmail', type: 'txt', url: '/materials/c1/lesson3-gmail.txt', size: '2.1 MB', description: 'דוגמאות מעשיות' },
        ]
      },
      { 
        id: 'l1-4', 
        title: 'שימוש ב-Gemini בתוך Google Maps ו-Flights', 
        duration: '25:00',
        description: 'תכנון נסיעות חכם עם Gemini',
        materials: [
          { title: 'מדריך Gemini במפות', type: 'txt', url: '/materials/c1/lesson4-maps.txt', size: '2.9 MB', description: 'שימוש ב-Maps עם Gemini' },
          { title: 'דוגמאות פרומפטים לנסיעות', type: 'txt', url: '/materials/c1/lesson4-prompts.txt', size: '1.5 MB', description: '30+ פרומפטים לתכנון' },
        ]
      },
      { 
        id: 'l1-5', 
        title: 'ניתוח מסמכים וקבצי PDF ארוכים', 
        duration: '35:00',
        description: 'עבודה עם מסמכים ארוכים ומורכבים',
        materials: [
          { title: 'טכניקות ניתוח מסמכים', type: 'txt', url: '/materials/c1/lesson5-analysis.txt', size: '3.7 MB', description: 'מדריך ניתוח מסמכים' },
          { title: 'רשימת פרומפטים לניתוח', type: 'txt', url: '/materials/c1/lesson5-prompts.txt', size: '1.2 MB', description: '25 פרומפטים מוכנים' },
        ]
      },
      { 
        id: 'l1-6', 
        title: 'אימות עובדות (Double-check feature)', 
        duration: '15:00',
        description: 'שימוש בכלי אימות העובדות של Gemini',
        materials: [
          { title: 'מדריך Double-Check', type: 'txt', url: '/materials/c1/lesson6-factcheck.txt', size: '1.8 MB', description: 'אימות עובדות מתקדם' },
          { title: 'דוגמאות למקרי שימוש', type: 'txt', url: '/materials/c1/lesson6-examples.txt', size: '1.3 MB', description: '15 דוגמאות מעשיות' },
        ]
      },
      { 
        id: 'l1-7', 
        title: 'יצירת טבלאות וייצוא ל-Google Sheets', 
        duration: '20:00',
        description: 'עבודה עם נתונים וטבלאות',
        materials: [
          { title: 'מדריך יצירת טבלאות', type: 'txt', url: '/materials/c1/lesson7-tables.txt', size: '2.4 MB', description: 'יצירה וייצוא טבלאות' },
          { title: '20 פרומפטים לטבלאות', type: 'txt', url: '/materials/c1/lesson7-prompts.txt', size: '0.7 MB', description: 'פרומפטים לטבלאות' },
        ]
      },
      { 
        id: 'l1-8', 
        title: 'טיפים לשימוש ב-Gemini Advanced', 
        duration: '25:00',
        description: 'טכניקות מתקדמות למשתמשי Pro',
        materials: [
          { title: 'מדריך Advanced Features', type: 'txt', url: '/materials/c1/lesson8-advanced.txt', size: '4.1 MB', description: 'תכונות מתקדמות' },
          { title: 'טריקים וקיצורי דרך', type: 'txt', url: '/materials/c1/lesson8-tricks.txt', size: '2.2 MB', description: '40 טריקים' },
        ]
      },
      { 
        id: 'l1-9', 
        title: 'Canvas: עריכה אינטראקטיבית עם Gemini', 
        duration: '35:00',
        description: 'כלי החדש לעריכה משותפת - Canvas מאפשר לכתוב ולערוך מסמכים בצורה אינטראקטיבית עם Gemini',
        materials: [
          { title: 'מדריך Canvas המלא', type: 'txt', url: '/materials/c1/lesson9-canvas-guide.txt', size: '3.2 MB', description: 'מדריך מקיף ל-Canvas' },
          { title: 'דוגמאות עריכה', type: 'txt', url: '/materials/c1/lesson9-canvas-examples.txt', size: '2.1 MB', description: '30 דוגמאות לעריכה' },
          { title: 'טיפים לשימוש יעיל', type: 'txt', url: '/materials/c1/lesson9-canvas-tips.txt', size: '1.6 MB', description: 'טיפים וטריקים' },
        ]
      },
      { 
        id: 'l1-10', 
        title: 'Gemini Live: שיחות קוליות עם AI', 
        duration: '25:00',
        description: 'שיחות קוליות טבעיות עם Gemini בזמן אמת',
        materials: [
          { title: 'מדריך Gemini Live', type: 'txt', url: '/materials/c1/lesson10-live-guide.txt', size: '2.4 MB', description: 'מדריך לשיחות קוליות' },
          { title: 'תרחישי שימוש', type: 'txt', url: '/materials/c1/lesson10-live-scenarios.txt', size: '1.8 MB', description: 'דוגמאות מעשיות' },
        ]
      },
      { 
        id: 'l1-11', 
        title: 'סיכום: העתיד של Google Assistant', 
        duration: '15:00',
        description: 'מבט לעתיד של Gemini ו-AI, Gemini 3.0 Pro והמשך',
        materials: [
          { title: 'סיכום הקורס', type: 'txt', url: '/materials/c1/lesson11-summary.txt', size: '2.2 MB', description: 'סיכום מקיף' },
          { title: 'מפת דרכים 2026-2027', type: 'txt', url: '/materials/c1/lesson11-roadmap.txt', size: '1.7 MB', description: 'העתיד של Gemini' },
          { title: 'משאבים נוספים ללמידה', type: 'link', url: 'https://ai.google.dev', size: '-' },
        ]
      },
    ]
  },
  {
    id: 'c2',
    title: 'יצירת מצגות ותוכן ויזואלי עם Google AI',
    description: 'סדנה ליצירת נכסים ויזואליים מרהיבים באמצעות ImageFX עם Imagen 3, Gemini 3.0, Canvas ו-Google Slides עם הרחבות AI החדשות ביותר.',
    level: 'מתחילים',
    category: 'עיצוב ויצירה',
    duration: '4 שעות',
    lessonsCount: 7,
    icon: <Presentation className="w-6 h-6" />,
    price: 300,
    materials: [
      { title: 'תבנית מצגת Google Slides מותאמת AI', type: 'txt', url: '/materials/c2/course-slides-template.txt', size: '1.5 MB', description: 'מדריך ליצירת מצגות' },
      { title: 'מדריך סגנונות (Styles Guide) ל-ImageFX', type: 'txt', url: '/materials/c2/course-styles-guide.txt', size: '2.1 MB', description: 'כל סגנונות ImageFX' },
      { title: 'מאגר תמונות להורדה', type: 'link', url: 'https://drive.google.com/drive/folders/imagefx-examples', size: '-', description: 'דוגמאות תמונות' }
    ],
    lessons: [
      { 
        id: 'l2-1', 
        title: 'הכרות עם ImageFX ו-Imagen 3', 
        duration: '20:00', 
        isFree: true,
        description: 'כלי יצירת התמונות החדש של Google',
        materials: [
          { title: 'מבוא ל-ImageFX', type: 'txt', url: '/materials/c2/lesson1-imagefx-intro.txt', size: '1.8 MB', description: 'מדריך מקיף על ImageFX וטכנולוגיית Imagen 3' },
          { title: 'השוואת Imagen 3 למתחרות', type: 'txt', url: '/materials/c2/lesson1-comparison.txt', size: '1.5 MB', description: 'השוואה מפורטת עם DALL-E, Midjourney ו-Stable Diffusion' },
          { title: 'גלריית דוגמאות וסגנונות', type: 'txt', url: '/materials/c2/lesson1-gallery.txt', size: '2.2 MB', description: 'אוסף דוגמאות תמונות וסגנונות יצירה' },
        ]
      },
      { 
        id: 'l2-2', 
        title: 'כתיבת פרומפטים ליצירת תמונות', 
        duration: '30:00',
        description: 'אמנות הפרומפט לתמונות מושלמות',
        materials: [
          { title: 'מדריך כתיבת פרומפטים', type: 'txt', url: '/materials/c2/lesson2-prompt-guide.txt', size: '2.3 MB', description: 'מדריך מקיף לכתיבת פרומפטים אפקטיביים לתמונות' },
          { title: '50+ פרומפטים מוכנים לשימוש', type: 'txt', url: '/materials/c2/lesson2-prompts.txt', size: '1.8 MB', description: 'אוסף פרומפטים מוכנים לקטגוריות שונות' },
          { title: 'מילון סגנונות אומנותיים', type: 'txt', url: '/materials/c2/lesson2-art-styles.txt', size: '2.1 MB', description: 'מילון מקיף של סגנונות אומנות וטכניקות יצירה' },
        ]
      },
      { 
        id: 'l2-3', 
        title: 'Google Slides + Gemini: יצירת שקפים', 
        duration: '35:00',
        description: 'בניית מצגות מרשימות עם AI',
        materials: [
          { title: 'מדריך Slides עם Gemini', type: 'txt', url: '/materials/c2/lesson3-slides-guide.txt', size: '2.5 MB', description: 'מדריך מלא ליצירת מצגות עם Google Slides ו-Gemini' },
          { title: 'תבניות ורעיונות למצגות', type: 'txt', url: '/materials/c2/lesson3-templates.txt', size: '1.9 MB', description: 'תבניות מוכנות ו-30 רעיונות למצגות מקצועיות' },
          { title: 'טיפים וטריקים למצגות', type: 'txt', url: '/materials/c2/lesson3-tips.txt', size: '1.2 MB', description: 'טיפים מתקדמים ליצירת מצגות מרשימות' },
          { title: 'וידאו הדרכה מלא', type: 'link', url: 'https://youtube.com/watch?v=slides', size: '-' },
        ]
      },
      { 
        id: 'l2-4', 
        title: 'יצירת תמונות רקע לשיחות וידאו', 
        duration: '15:00',
        description: 'רקעים מקצועיים ל-Zoom ו-Meet',
        materials: [
          { title: 'מדריך יצירת רקעים', type: 'txt', url: '/materials/c2/lesson4-backgrounds.txt', size: '1.8 MB', description: 'מדריך מקיף ליצירת רקעים מקצועיים לשיחות וידאו' },
          { title: 'פרומפטים לרקעים מקצועיים', type: 'txt', url: '/materials/c2/lesson4-prompts.txt', size: '1.2 MB', description: 'אוסף פרומפטים מוכנים ליצירת רקעים' },
          { title: 'טיפים לעיצוב רקעים', type: 'txt', url: '/materials/c2/lesson4-tips.txt', size: '0.9 MB', description: 'טיפים וטריקים לעיצוב רקעים מושלמים' },
          { title: '20 רקעים מוכנים', type: 'link', url: 'https://drive.google.com/backgrounds', size: '-' },
        ]
      },
      { 
        id: 'l2-5', 
        title: 'עריכת תמונות ב-Google Photos', 
        duration: '25:00',
        description: 'כלי עריכה חכמים ב-Photos',
        materials: [
          { title: 'מדריך Google Photos AI', type: 'txt', url: '/materials/c2/lesson5-photos-guide.txt', size: '2.1 MB', description: 'מדריך מלא לכלי העריכה החכמים ב-Google Photos' },
          { title: 'טריקים לעריכה מתקדמת', type: 'txt', url: '/materials/c2/lesson5-editing-tricks.txt', size: '1.6 MB', description: 'טריקים וטכניקות מתקדמות לעריכת תמונות' },
          { title: 'תמונות לתרגול עריכה', type: 'link', url: 'https://drive.google.com/practice', size: '-' },
        ]
      },
      { 
        id: 'l2-6', 
        title: 'יצירת לוגו ונכסי מותג', 
        duration: '30:00',
        description: 'בניית זהות ויזואלית עם AI',
        materials: [
          { title: 'מדריך עיצוב לוגו', type: 'txt', url: '/materials/c2/lesson6-logo-design.txt', size: '2.4 MB', description: 'מדריך מקיף לעיצוב לוגואים מקצועיים עם AI' },
          { title: 'דוגמאות לוגואים וזהות מותג', type: 'txt', url: '/materials/c2/lesson6-brand-examples.txt', size: '2.8 MB', description: 'אוסף דוגמאות לוגואים ומדריך לזהות מותג' },
          { title: 'תבנית מדריך סגנון', type: 'txt', url: '/materials/c2/lesson6-style-guide.txt', size: '1.7 MB', description: 'תבנית ומדריך ליצירת מדריך סגנון מותג' },
        ]
      },
      { 
        id: 'l2-7', 
        title: 'פרויקט מסכם: מצגת עסקית', 
        duration: '40:00',
        description: 'פרויקט גמר - מצגת מלאה מ-A עד Z',
        materials: [
          { title: 'הנחיות פרויקט גמר', type: 'txt', url: '/materials/c2/lesson7-project-brief.txt', size: '1.9 MB', description: 'הנחיות מפורטות לפרויקט הגמר - מצגת עסקית' },
          { title: 'רשימת בדיקה (Checklist)', type: 'txt', url: '/materials/c2/lesson7-checklist.txt', size: '1.1 MB', description: 'רשימת בדיקה מקיפה לפרויקט הגמר' },
          { title: 'משאבים וטיפים נוספים', type: 'txt', url: '/materials/c2/lesson7-resources.txt', size: '1.4 MB', description: 'משאבים נוספים, טיפים ודוגמאות לפרויקט' },
          { title: 'משאבים נוספים', type: 'link', url: 'https://design.google', size: '-' },
        ]
      },
    ]
  },
  {
    id: 'c3',
    title: 'פיתוח אפליקציות עם Project IDX',
    description: 'קורס מעשי למפתחים: בניית אתרים ואפליקציות בסביבת הפיתוח בענן של Google עם Gemini 3.0 Code Assist - עוזר הקוד החכם ביותר.',
    level: 'מתקדמים',
    category: 'פיתוח תוכנה',
    duration: '7.5 שעות',
    lessonsCount: 12,
    icon: <Code className="w-6 h-6" />,
    price: 450,
    materials: [
      { title: 'Project IDX Starter Kit - תבנית פרויקט', type: 'txt', url: '/materials/c3/course-starter-kit.txt', size: '3.2 MB', description: 'מדריך הקמת פרויקט' },
      { title: 'קיצורי מקלדת ל-Code Assist', type: 'txt', url: '/materials/c3/course-keyboard-shortcuts.txt', size: '0.6 MB', description: 'רשימת קיצורים' },
      { title: 'דוגמאות קוד לפריסה ב-Firebase', type: 'link', url: 'https://github.com/googlesamples/idx-samples', size: '-', description: 'דוגמאות קוד' }
    ],
    lessons: [
      { 
        id: 'l3-1', 
        title: 'מה זה Project IDX?', 
        duration: '20:00', 
        isFree: true,
        description: 'היכרות עם סביבת הפיתוח בענן של Google',
        materials: [
          { title: 'מבוא ל-Project IDX', type: 'txt', url: '/materials/c3/lesson1-idx-intro.txt', size: '2.8 MB', description: 'מדריך מלא ל-IDX' },
          { title: 'השוואה ל-VS Code', type: 'txt', url: '/materials/c3/lesson1-comparison.txt', size: '1.6 MB', description: 'יתרונות וחסרונות' },
          { title: 'מדריך התחלה מהירה', type: 'txt', url: '/materials/c3/lesson1-quick-start.txt', size: '1.2 MB', description: 'התחלה תוך 5 דקות' },
        ]
      },
      { 
        id: 'l3-2', 
        title: 'הגדרת סביבת העבודה וחיבור ל-GitHub', 
        duration: '25:00',
        description: 'התקנה וקונפיגורציה ראשונית',
        materials: [
          { title: 'מדריך הגדרה מלא', type: 'txt', url: '/materials/c3/lesson2-setup-guide.txt', size: '3.4 MB', description: 'מדריך מקיף להגדרת סביבת העבודה' },
          { title: 'חיבור GitHub צעד אחר צעד', type: 'txt', url: '/materials/c3/lesson2-github-setup.txt', size: '2.1 MB', description: 'הדרכה מפורטת לחיבור GitHub' },
          { title: 'הגדרות מומלצות', type: 'txt', url: '/materials/c3/lesson2-settings.txt', size: '0.1 MB', description: 'הגדרות מומלצות ל-IDX' },
          { title: 'קיצורי מקלדת', type: 'txt', url: '/materials/c3/lesson2-shortcuts.txt', size: '0.8 MB', description: 'רשימת קיצורי מקלדת שימושיים' },
        ]
      },
      { 
        id: 'l3-3', 
        title: 'עבודה עם Gemini Code Assist', 
        duration: '35:00',
        description: 'עוזר הקוד החכם של Google',
        materials: [
          { title: 'מדריך Gemini Code Assist', type: 'txt', url: '/materials/c3/lesson3-code-assist.txt', size: '4.2 MB', description: 'מדריך מקיף לשימוש ב-Code Assist' },
          { title: '50 פרומפטים לקוד', type: 'txt', url: '/materials/c3/lesson3-prompts.txt', size: '1.4 MB', description: 'אוסף פרומפטים מוכנים לשימוש' },
          { title: 'טיפים לעבודה יעילה', type: 'txt', url: '/materials/c3/lesson3-productivity-tips.txt', size: '1.9 MB', description: 'טיפים וטריקים לעבודה מהירה' },
        ]
      },
      { 
        id: 'l3-4', 
        title: 'הקמת פרויקט React', 
        duration: '45:00',
        description: 'יצירת פרויקט React ראשון ב-IDX',
        materials: [
          { title: 'מדריך הקמת פרויקט React', type: 'txt', url: '/materials/c3/lesson4-react-setup.txt', size: '3.2 MB', description: 'מדריך צעד אחר צעד להקמת פרויקט' },
          { title: 'מבנה פרויקט React', type: 'txt', url: '/materials/c3/lesson4-project-structure.txt', size: '2.1 MB', description: 'הסבר על מבנה הפרויקט' },
          { title: 'תרגילים מעשיים', type: 'txt', url: '/materials/c3/lesson4-exercises.txt', size: '1.1 MB', description: 'תרגילים לתרגול' },
        ]
      },
      { 
        id: 'l3-5', 
        title: 'בניית API', 
        duration: '40:00',
        description: 'יצירת API backend עם Node.js',
        materials: [
          { title: 'מדריך בניית API', type: 'txt', url: '/materials/c3/lesson5-api-guide.txt', size: '4.2 MB', description: 'מדריך מקיף לבניית API' },
          { title: '15 דוגמאות API מוסברות', type: 'txt', url: '/materials/c3/lesson5-api-examples.txt', size: '2.8 MB', description: 'קוד מעשי עם הסברים מפורטים' },
          { title: 'טיפול ב-Requests', type: 'txt', url: '/materials/c3/lesson5-requests.txt', size: '1.9 MB', description: 'עבודה עם HTTP requests' },
        ]
      },
      { 
        id: 'l3-6', 
        title: 'פריסה ל-Firebase', 
        duration: '30:00',
        description: 'העלאת האפליקציה ל-Firebase Hosting',
        materials: [
          { title: 'מדריך פריסה ל-Firebase', type: 'txt', url: '/materials/c3/lesson6-firebase-deploy.txt', size: '3.2 MB', description: 'מדריך מקיף לפריסה' },
          { title: 'הגדרת Firebase Hosting', type: 'txt', url: '/materials/c3/lesson6-hosting-setup.txt', size: '2.4 MB', description: 'הגדרה צעד אחר צעד' },
          { title: 'טיפים לפריסה מוצלחת', type: 'txt', url: '/materials/c3/lesson6-deploy-tips.txt', size: '1.1 MB', description: 'טיפים וטריקים' },
        ]
      },
      { 
        id: 'l3-7', 
        title: 'טיפול בשגיאות', 
        duration: '25:00',
        description: 'זיהוי ותיקון שגיאות עם Gemini',
        materials: [
          { title: 'מדריך טיפול בשגיאות', type: 'txt', url: '/materials/c3/lesson7-error-handling.txt', size: '2.9 MB', description: 'טכניקות לטיפול בשגיאות' },
          { title: 'שגיאות נפוצות ופתרונות', type: 'txt', url: '/materials/c3/lesson7-common-errors.txt', size: '2.4 MB', description: 'רשימת שגיאות נפוצות' },
          { title: 'דיבוג עם Gemini', type: 'txt', url: '/materials/c3/lesson7-debugging.txt', size: '1.8 MB', description: 'שימוש ב-Gemini לדיבוג' },
        ]
      },
      { 
        id: 'l3-8', 
        title: 'עבודה עם Firebase Auth', 
        duration: '20:00',
        description: 'הטמעת אימות משתמשים',
        materials: [
          { title: 'מדריך Firebase Authentication', type: 'txt', url: '/materials/c3/lesson8-firebase-auth.txt', size: '3.2 MB', description: 'מדריך מקיף לאימות' },
          { title: 'שיטות אימות', type: 'txt', url: '/materials/c3/lesson8-auth-methods.txt', size: '2.1 MB', description: 'Email, Google, Facebook ועוד' },
          { title: '10 דוגמאות Auth מוסברות', type: 'txt', url: '/materials/c3/lesson8-auth-examples.txt', size: '1.7 MB', description: 'קוד עם הסברים מפורטים' },
        ]
      },
      { 
        id: 'l3-9', 
        title: 'Firestore Database', 
        duration: '50:00',
        description: 'עבודה עם מסד נתונים בענן',
        materials: [
          { title: 'מדריך Firestore מלא', type: 'txt', url: '/materials/c3/lesson9-firestore-guide.txt', size: '5.2 MB', description: 'מדריך מקיף ל-Firestore' },
          { title: 'CRUD Operations', type: 'txt', url: '/materials/c3/lesson9-crud.txt', size: '3.1 MB', description: 'יצירה, קריאה, עדכון ומחיקה' },
          { title: '20 דוגמאות Firestore מוסברות', type: 'txt', url: '/materials/c3/lesson9-firestore-examples.txt', size: '2.8 MB', description: 'קוד עם הסברים שלב אחר שלב' },
        ]
      },
      { 
        id: 'l3-10', 
        title: 'Testing ב-IDX', 
        duration: '30:00',
        description: 'כתיבת ובדיקת קוד',
        materials: [
          { title: 'מדריך Testing', type: 'txt', url: '/materials/c3/lesson10-testing-guide.txt', size: '3.6 MB', description: 'מדריך מקיף לבדיקות' },
          { title: 'Jest ו-React Testing', type: 'txt', url: '/materials/c3/lesson10-jest-react.txt', size: '2.8 MB', description: 'כלי בדיקה ל-React' },
          { title: '15 דוגמאות בדיקות מוסברות', type: 'txt', url: '/materials/c3/lesson10-test-examples.txt', size: '1.9 MB', description: 'קוד בדיקות עם הסברים' },
        ]
      },
      { 
        id: 'l3-11', 
        title: 'CI/CD', 
        duration: '25:00',
        description: 'אוטומציה של תהליכי פיתוח',
        materials: [
          { title: 'מדריך CI/CD', type: 'txt', url: '/materials/c3/lesson11-cicd-guide.txt', size: '3.2 MB', description: 'מדריך מקיף ל-CI/CD' },
          { title: 'GitHub Actions', type: 'txt', url: '/materials/c3/lesson11-github-actions.txt', size: '2.4 MB', description: 'הגדרת GitHub Actions' },
          { title: '10 דוגמאות Workflows מוסברות', type: 'txt', url: '/materials/c3/lesson11-workflows.txt', size: '1.8 MB', description: 'workflows מוכנים עם הסברים' },
        ]
      },
      { 
        id: 'l3-12', 
        title: 'סיכום ופרויקט גמר', 
        duration: '15:00',
        description: 'סיכום הקורס ופרויקט גמר מעשי',
        materials: [
          { title: 'סיכום הקורס', type: 'txt', url: '/materials/c3/lesson12-summary.txt', size: '2.2 MB', description: 'סיכום מקיף של כל הנושאים' },
          { title: 'הנחיות פרויקט גמר', type: 'txt', url: '/materials/c3/lesson12-final-project.txt', size: '3.1 MB', description: 'הנחיות מפורטות לפרויקט גמר' },
          { title: 'משאבים להמשך', type: 'txt', url: '/materials/c3/lesson12-resources.txt', size: '1.4 MB', description: 'משאבים נוספים ללמידה' },
        ]
      },
    ]
  },
  {
    id: 'c4',
    title: 'מומחה Google AI Studio ו-Vertex AI',
    description: 'לצלול לעומק המנוע: עבודה עם ה-API של Gemini 3.0 Flash & Pro, הנדסת פרומפטים מתקדמת, System Instructions, JSON Mode ועוד.',
    level: 'מומחים',
    category: 'פיתוח מתקדם',
    duration: '6.5 שעות',
    lessonsCount: 10,
    icon: <MessageSquare className="w-6 h-6" />,
    price: 500,
    materials: [
      { title: 'ספריית System Instructions', type: 'txt', url: '/materials/c4/course-system-instructions.txt', size: '2.8 MB', description: 'מאגר System Instructions' },
      { title: 'Google AI Studio Cookbook', type: 'txt', url: '/materials/c4/course-cookbook.txt', size: '4.5 MB', description: 'מתכונים ודוגמאות' },
      { title: 'מדריך חיבור Python ל-API', type: 'txt', url: '/materials/c4/course-python-api.txt', size: '1.8 MB', description: 'הדרכה מקיפה + דוגמאות קוד Python' },
      { title: 'טבלת תמחור טוקנים', type: 'txt', url: '/materials/c4/course-pricing.txt', size: '0.4 MB', description: 'מחירון מלא' }
    ],
    lessons: [
      { 
        id: 'l4-1', 
        title: 'מבוא ל-Google AI Studio', 
        duration: '25:00',
        description: 'סביבת הפיתוח ל-Gemini API',
        materials: [
          { title: 'מדריך AI Studio מקיף', type: 'txt', url: '/materials/c4/lesson1-ai-studio-guide.txt', size: '4.8 MB', description: 'מדריך שלם ל-AI Studio' },
          { title: 'סיור בממשק', type: 'txt', url: '/materials/c4/lesson1-interface-tour.txt', size: '3.2 MB', description: 'התמצאות בממשק' },
          { title: 'קישור ל-AI Studio', type: 'link', url: 'https://aistudio.google.com', size: '-' },
        ]
      },
      { 
        id: 'l4-2', 
        title: 'System Instructions מתקדמות', 
        duration: '35:00',
        description: 'יצירת התנהגות מותאמת למודל עם System Instructions',
        materials: [
          { title: 'מדריך System Instructions מתקדם', type: 'txt', url: '/materials/c4/lesson2-system-instructions.txt', size: '4.1 MB', description: 'מדריך מקיף ל-System Instructions' },
          { title: '50 דוגמאות פרסונות', type: 'txt', url: '/materials/c4/lesson2-personas-examples.txt', size: '2.3 MB', description: 'אוסף פרסונות מוכנות' },
          { title: 'Best Practices', type: 'txt', url: '/materials/c4/lesson2-best-practices.txt', size: '1.8 MB', description: 'שיטות עבודה מומלצות' },
        ]
      },
      { 
        id: 'l4-3', 
        title: 'Configuration Options', 
        duration: '30:00',
        description: 'הגדרת פרמטרים מתקדמים: Temperature, Top-P, Top-K ועוד',
        materials: [
          { title: 'מדריך Configuration Options', type: 'txt', url: '/materials/c4/lesson3-configuration.txt', size: '3.6 MB', description: 'מדריך מקיף להגדרות' },
          { title: 'טבלת פרמטרים מומלצים', type: 'txt', url: '/materials/c4/lesson3-parameters-table.txt', size: '1.2 MB', description: 'טבלת המלצות לפרמטרים' },
          { title: 'דוגמאות קונפיגורציה', type: 'txt', url: '/materials/c4/lesson3-config-examples.txt', size: '2.1 MB', description: 'דוגמאות מעשיות' },
        ]
      },
      { 
        id: 'l4-4', 
        title: 'עבודה עם JSON Mode', 
        duration: '35:00',
        description: 'הגדרת פורמט פלט מובנה עם JSON Mode',
        materials: [
          { title: 'מדריך JSON Mode', type: 'txt', url: '/materials/c4/lesson4-json-mode.txt', size: '3.8 MB', description: 'מדריך מקיף ל-JSON Mode' },
          { title: 'דוגמאות Schema', type: 'txt', url: '/materials/c4/lesson4-json-schemas.txt', size: '2.4 MB', description: 'דוגמאות Schema מוכנות' },
          { title: 'טיפים וטריקים', type: 'txt', url: '/materials/c4/lesson4-json-tips.txt', size: '1.5 MB', description: 'טיפים לעבודה עם JSON' },
        ]
      },
      { 
        id: 'l4-5', 
        title: 'Image Understanding', 
        duration: '40:00',
        description: 'עבודה עם תמונות: ניתוח, תיאור, שאלות על תמונות',
        materials: [
          { title: 'מדריך Image Understanding', type: 'txt', url: '/materials/c4/lesson5-image-understanding.txt', size: '4.2 MB', description: 'מדריך מקיף לעבודה עם תמונות' },
          { title: 'דוגמאות קוד מוסברות', type: 'txt', url: '/materials/c4/lesson5-image-examples.txt', size: '3.1 MB', description: '20 דוגמאות מעשיות עם הסברים' },
          { title: 'טיפים מתקדמים', type: 'txt', url: '/materials/c4/lesson5-image-tips.txt', size: '2.3 MB', description: 'טיפים וטריקים מתקדמים' },
        ]
      },
      { 
        id: 'l4-6', 
        title: 'Safety Settings', 
        duration: '25:00',
        description: 'הגדרת רמות בטיחות והגנה מפני תוכן לא הולם',
        materials: [
          { title: 'מדריך Safety Settings', type: 'txt', url: '/materials/c4/lesson6-safety-settings.txt', size: '3.2 MB', description: 'מדריך מקיף להגדרות בטיחות' },
          { title: 'דוגמאות הגדרות', type: 'txt', url: '/materials/c4/lesson6-safety-examples.txt', size: '2.1 MB', description: 'דוגמאות להגדרות שונות' },
          { title: 'Best Practices', type: 'txt', url: '/materials/c4/lesson6-safety-practices.txt', size: '1.8 MB', description: 'שיטות עבודה מומלצות' },
        ]
      },
      { 
        id: 'l4-7', 
        title: 'cURL, Python, JavaScript', 
        duration: '35:00',
        description: 'שימוש ב-API עם cURL, Python ו-JavaScript',
        materials: [
          { title: 'מדריך API מלא', type: 'txt', url: '/materials/c4/lesson7-api-guide.txt', size: '4.2 MB', description: 'מדריך מקיף ל-API' },
          { title: '15 דוגמאות cURL מוסברות', type: 'txt', url: '/materials/c4/lesson7-curl-examples.txt', size: '1.2 MB', description: 'דוגמאות עם הסברים צעד אחר צעד' },
          { title: '25 דוגמאות Python מוסברות', type: 'txt', url: '/materials/c4/lesson7-python-examples.txt', size: '2.8 MB', description: 'קוד עם הסברים מפורטים' },
          { title: '20 דוגמאות JavaScript מוסברות', type: 'txt', url: '/materials/c4/lesson7-javascript-examples.txt', size: '2.1 MB', description: 'קוד עם הסברים מפורטים' },
        ]
      },
      { 
        id: 'l4-8', 
        title: 'חיבור ל-Vertex AI', 
        duration: '45:00',
        description: 'חיבור ל-Vertex AI לעבודה מתקדמת בפרודקשן',
        materials: [
          { title: 'מדריך Vertex AI', type: 'txt', url: '/materials/c4/lesson8-vertex-ai.txt', size: '5.2 MB', description: 'מדריך מקיף ל-Vertex AI' },
          { title: 'הגדרת חיבור', type: 'txt', url: '/materials/c4/lesson8-vertex-setup.txt', size: '3.1 MB', description: 'הגדרה צעד אחר צעד' },
          { title: 'דוגמאות קוד מוסברות', type: 'txt', url: '/materials/c4/lesson8-vertex-examples.txt', size: '2.8 MB', description: '15 דוגמאות מעשיות עם הסברים' },
        ]
      },
      { 
        id: 'l4-9', 
        title: 'Production Deployment', 
        duration: '40:00',
        description: 'העברת אפליקציה לפרודקשן: ניטור, שגיאות, אופטימיזציה',
        materials: [
          { title: 'מדריך Production Deployment', type: 'txt', url: '/materials/c4/lesson9-deployment.txt', size: '4.8 MB', description: 'מדריך מקיף לפריסה' },
          { title: 'ניטור ובקרה', type: 'txt', url: '/materials/c4/lesson9-monitoring.txt', size: '3.2 MB', description: 'ניטור אפליקציות בפרודקשן' },
          { title: 'טיפול בשגיאות', type: 'txt', url: '/materials/c4/lesson9-error-handling.txt', size: '2.6 MB', description: 'טיפול בשגיאות מתקדם' },
        ]
      },
      { 
        id: 'l4-10', 
        title: 'פרויקט גמר: צ\'אטבוט מלא', 
        duration: '60:00',
        description: 'בניית צ\'אטבוט מלא מקצה לקצה עם כל התכונות',
        materials: [
          { title: 'הנחיות פרויקט גמר', type: 'txt', url: '/materials/c4/lesson10-project-brief.txt', size: '3.8 MB', description: 'הנחיות מפורטות לפרויקט' },
          { title: 'מדריך בניית צ\'אטבוט', type: 'txt', url: '/materials/c4/lesson10-chatbot-guide.txt', size: '5.2 MB', description: 'מדריך מקיף לבניית צ\'אטבוט' },
          { title: 'קוד דוגמה מוסבר', type: 'txt', url: '/materials/c4/lesson10-full-code.txt', size: '4.1 MB', description: 'קוד מקור עם הסברים מפורטים על כל חלק' },
        ]
      },
    ]
  },
  {
    id: 'c5',
    title: 'מומחה Google NotebookLM - מחקר ולמידה מתקדמים',
    description: 'הכלי המהפכני של Google למחקר, לימוד ויצירת תוכן. ליצור פודקאסטים אוטומטיים, לנתח מסמכים ארוכים ולהפוך מידע למובן.',
    level: 'מתחילים',
    category: 'מחקר ולמידה',
    duration: '4 שעות',
    lessonsCount: 10,
    icon: <BookOpen className="w-6 h-6" />,
    price: 350,
    materials: [
      { title: 'מדריך NotebookLM המלא', type: 'txt', url: '/materials/c5/course-notebook-guide.txt', size: '3.5 MB', description: 'מדריך מקיף' },
      { title: 'תבניות Notebooks מוכנות', type: 'txt', url: '/materials/c5/course-templates.txt', size: '2.1 MB', description: 'תבניות לשימוש מידי' },
      { title: 'מדריך Audio Overviews', type: 'txt', url: '/materials/c5/course-audio-guide.txt', size: '1.8 MB', description: 'יצירת פודקאסטים' }
    ],
    lessons: [
      { 
        id: 'l5-1', 
        title: 'מבוא ל-NotebookLM - AI למחקר ולמידה', 
        duration: '20:00', 
        isFree: true,
        description: 'היכרות עם NotebookLM - הכלי המהפכני של Google למחקר ולמידה עם חלון הקשר של 2M tokens',
        materials: [
          { title: 'מבוא ל-NotebookLM', type: 'txt', url: '/materials/c5/lesson1-intro.txt', size: '2.8 MB', description: 'מדריך מקיף למתחילים' },
          { title: 'יתרונות NotebookLM', type: 'txt', url: '/materials/c5/lesson1-benefits.txt', size: '1.6 MB', description: 'למה NotebookLM?' },
          { title: 'השוואה לכלים אחרים', type: 'txt', url: '/materials/c5/lesson1-comparison.txt', size: '1.9 MB', description: 'NotebookLM vs ChatGPT' },
        ]
      },
      { 
        id: 'l5-2', 
        title: 'יצירת Notebook ראשון', 
        duration: '25:00',
        description: 'בניית Notebook ראשון והעלאת מקורות',
        materials: [
          { title: 'מדריך יצירת Notebook', type: 'txt', url: '/materials/c5/lesson2-create-notebook.txt', size: '3.2 MB', description: 'צעד אחר צעד' },
          { title: 'סוגי מקורות נתמכים', type: 'txt', url: '/materials/c5/lesson2-source-types.txt', size: '2.1 MB', description: 'PDF, Docs, קישורים ועוד' },
          { title: 'טיפים לארגון', type: 'txt', url: '/materials/c5/lesson2-organization-tips.txt', size: '1.4 MB', description: 'ארגון יעיל' },
        ]
      },
      { 
        id: 'l5-3', 
        title: 'Audio Overview - יצירת פודקאסטים אוטומטית', 
        duration: '30:00',
        description: 'התכונה המהפכנית: הפיכת טקסטים למסמכים לפודקאסטים מקצועיים',
        materials: [
          { title: 'מדריך Audio Overview', type: 'txt', url: '/materials/c5/lesson3-audio-overview.txt', size: '3.8 MB', description: 'מדריך מקיף ליצירת פודקאסטים' },
          { title: 'דוגמאות פודקאסטים', type: 'txt', url: '/materials/c5/lesson3-podcast-examples.txt', size: '2.4 MB', description: '10 דוגמאות להאזנה' },
          { title: 'טיפים לפודקאסט מושלם', type: 'txt', url: '/materials/c5/lesson3-podcast-tips.txt', size: '1.7 MB', description: 'שיפור איכות הפודקאסט' },
        ]
      },
      { 
        id: 'l5-4', 
        title: 'העלאת מסמכים וקבצים', 
        duration: '25:00',
        description: 'העלאה וניהול של PDF, Google Docs, קישורים ועוד',
        materials: [
          { title: 'מדריך העלאת מקורות', type: 'txt', url: '/materials/c5/lesson4-upload-sources.txt', size: '3.1 MB', description: 'כל סוגי המקורות' },
          { title: 'הגבלות וטיפים', type: 'txt', url: '/materials/c5/lesson4-limitations-tips.txt', size: '1.9 MB', description: 'מה עובד ומה לא' },
          { title: 'ארגון מקורות', type: 'txt', url: '/materials/c5/lesson4-source-management.txt', size: '1.5 MB', description: 'ניהול מקורות יעיל' },
        ]
      },
      { 
        id: 'l5-5', 
        title: 'שאלות מתקדמות וניתוח מסמכים', 
        duration: '30:00',
        description: 'אמנות שאילת השאלות הנכונות וניתוח עמוק',
        materials: [
          { title: 'מדריך שאלות מתקדמות', type: 'txt', url: '/materials/c5/lesson5-advanced-questions.txt', size: '3.6 MB', description: 'שאלות יעילות' },
          { title: '100 שאלות לדוגמה', type: 'txt', url: '/materials/c5/lesson5-question-examples.txt', size: '2.8 MB', description: 'בנק שאלות' },
          { title: 'ניתוח משתנים', type: 'txt', url: '/materials/c5/lesson5-analysis-techniques.txt', size: '2.1 MB', description: 'טכניקות ניתוח' },
        ]
      },
      { 
        id: 'l5-6', 
        title: 'ציטוטים והפניות למקורות', 
        duration: '20:00',
        description: 'עבודה עם ציטוטים ומעקב אחרי מקורות המידע',
        materials: [
          { title: 'מדריך ציטוטים', type: 'txt', url: '/materials/c5/lesson6-citations.txt', size: '2.4 MB', description: 'עבודה עם ציטוטים' },
          { title: 'אימות עובדות', type: 'txt', url: '/materials/c5/lesson6-fact-checking.txt', size: '1.8 MB', description: 'בדיקת מהימנות' },
        ]
      },
      { 
        id: 'l5-7', 
        title: 'שימוש במחקר אקדמי ועבודות סמסטר', 
        duration: '30:00',
        description: 'NotebookLM למחקר אקדמי ולכתיבת עבודות',
        materials: [
          { title: 'מדריך למחקר אקדמי', type: 'txt', url: '/materials/c5/lesson7-academic-research.txt', size: '3.8 MB', description: 'מחקר מקצועי' },
          { title: 'תבניות לעבודות', type: 'txt', url: '/materials/c5/lesson7-paper-templates.txt', size: '2.3 MB', description: 'תבניות מוכנות' },
          { title: 'טיפים לכתיבה', type: 'txt', url: '/materials/c5/lesson7-writing-tips.txt', size: '1.9 MB', description: 'כתיבה אקדמית' },
        ]
      },
      { 
        id: 'l5-8', 
        title: 'יצירת מדריכי לימוד וחומרי הוראה', 
        duration: '25:00',
        description: 'למורים: יצירת חומרי לימוד מקצועיים',
        materials: [
          { title: 'מדריך למורים', type: 'txt', url: '/materials/c5/lesson8-teachers-guide.txt', size: '3.4 MB', description: 'NotebookLM לחינוך' },
          { title: 'דוגמאות מערכי שיעור', type: 'txt', url: '/materials/c5/lesson8-lesson-plans.txt', size: '2.7 MB', description: '15 מערכי שיעור' },
          { title: 'יצירת מבחנים', type: 'txt', url: '/materials/c5/lesson8-quiz-creation.txt', size: '2.1 MB', description: 'הכנת מבחנים' },
        ]
      },
      { 
        id: 'l5-9', 
        title: 'שיתוף Notebooks ועבודה משותפת', 
        duration: '20:00',
        description: 'עבודה בצוות ושיתוף Notebooks',
        materials: [
          { title: 'מדריך שיתוף', type: 'txt', url: '/materials/c5/lesson9-sharing.txt', size: '2.6 MB', description: 'שיתוף ועבודה משותפת' },
          { title: 'הרשאות וניהול גישה', type: 'txt', url: '/materials/c5/lesson9-permissions.txt', size: '1.8 MB', description: 'ניהול הרשאות' },
        ]
      },
      { 
        id: 'l5-10', 
        title: 'פרויקט גמר: מחקר מקצועי מלא', 
        duration: '40:00',
        description: 'פרויקט גמר - מחקר מלא עם NotebookLM מ-A עד Z',
        materials: [
          { title: 'הנחיות פרויקט גמר', type: 'txt', url: '/materials/c5/lesson10-final-project.txt', size: '3.2 MB', description: 'הנחיות מפורטות' },
          { title: 'רשימת בדיקה', type: 'txt', url: '/materials/c5/lesson10-checklist.txt', size: '1.4 MB', description: 'Checklist מלא' },
          { title: 'דוגמאות פרויקטים', type: 'txt', url: '/materials/c5/lesson10-project-examples.txt', size: '2.9 MB', description: '5 דוגמאות מצוינות' },
        ]
      },
    ]
  }
];

const WORKSHOP_MATERIALS: WorkshopMaterial[] = [
  {
    id: 'w1',
    title: 'השתלמות מורים: NotebookLM ו-Audio Overviews',
    date: '15.02.2026',
    type: 'פרונטלי',
    materials: [
      { name: 'מדריך למורה: NotebookLM המלא', type: 'pdf', url: '#' },
      { name: 'יצירת פודקאסטים לימודיים עם Audio Overview', type: 'pdf', url: '#' },
      { name: 'דוגמאות למערכי שיעור מבוססי AI', type: 'pdf', url: '#' },
      { name: 'מצגת ההשתלמות - חינוך בעידן Gemini 3.0', type: 'pptx', url: '#' }
    ]
  },
  {
    id: 'w2',
    title: 'סדנה: Canvas ב-Gemini - עריכה אינטראקטיבית',
    date: '22.02.2026',
    type: 'מקוון',
    materials: [
      { name: 'מדריך Canvas המלא', type: 'pdf', url: '#' },
      { name: 'דוגמאות עריכה ושיתוף פעולה', type: 'pdf', url: '#' },
      { name: 'וידאו הדרכה: Canvas למתחילים', type: 'link', url: '#' }
    ]
  },
  {
    id: 'w3',
    title: 'וובינר: אוטומציה עסקית עם Gemini 3.0 ו-Apps Script',
    date: '05.03.2026',
    type: 'מקוון',
    materials: [
      { name: 'סקריפט אוטומטי למיון מיילים עם Gemini', type: 'link', url: '#' },
      { name: 'חיבור Google Forms ל-Gemini 3.0 API', type: 'pdf', url: '#' },
      { name: 'מצגת: אוטומציה חכמה 2026', type: 'pptx', url: '#' }
    ]
  }
];

// --- Components ---

const Header = ({ activeTab, setActiveTab, userRole, setUserRole }: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'ראשי' },
    { id: 'courses', label: 'קורסים' },
    { id: 'workshops', label: 'חומרי עזר' },
    { id: 'about', label: 'אודות' },
  ];

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="bg-blue-500 p-2 rounded-lg"><BrainCircuit className="w-6 h-6 text-white" /></div>
          <span className="text-xl font-bold tracking-wide">Google AI Academy</span>
        </div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`hover:text-blue-400 transition-colors ${activeTab === item.id ? 'text-blue-400 font-bold' : 'text-gray-300'}`}>{item.label}</button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={() => setUserRole(userRole === 'guest' ? 'student' : 'guest')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${userRole === 'student' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-slate-700 hover:bg-slate-600 text-gray-200'}`}>
            {userRole === 'student' ? 'מחובר כתלמיד (גישה מלאה)' : 'מצב אורח (התחבר)'}
          </button>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 p-4 border-t border-slate-700">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }} className="text-right text-gray-300 hover:text-white">{item.label}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
    <div className="container mx-auto relative z-10 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">ללמוד בינה מלאכותית <span className="text-blue-400">עם הכלים של Google</span></h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">מבית הספר המוביל ללימודי Gemini 3.0, NotebookLM, Canvas, Project IDX ו-Vertex AI - עם הטכנולוגיות החדשות ביותר לשנת 2026!</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={onCtaClick} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all">צפה בקורסים</button>
      </div>
    </div>
  </section>
);

const CourseCard = ({ course, userRole, onClick }: { course: Course; userRole: UserRole; onClick: () => void }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
    <div className="h-40 bg-slate-100 flex items-center justify-center relative">
      <div className="text-blue-500 transform scale-150">{course.icon}</div>
      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">{course.level}</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-sm text-blue-600 font-semibold mb-2">{course.category}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{course.description}</p>
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
        <span className="flex items-center gap-1"><MonitorPlay className="w-4 h-4" /> {course.duration}</span>
        <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.lessonsCount} שיעורים</span>
      </div>
      <button onClick={onClick} className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${userRole === 'student' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
        {userRole === 'student' ? <><Play className="w-4 h-4" /> צפה בקורס</> : <><Lock className="w-4 h-4" /> פרטים והרשמה ({course.price}₪)</>}
      </button>
    </div>
  </div>
);

const MaterialViewer = ({ material, onClose }: { material: LessonMaterial; onClose: () => void }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // תוכן לדוגמה לקבצים
  const getSampleContent = (material: LessonMaterial): string => {
    if (material.title.includes('קיצורי מקלדת') || material.title.includes('shortcuts')) {
      return `קיצורי מקלדת נפוצים
===================

Windows/Linux:
• Ctrl + C - העתק
• Ctrl + V - הדבק  
• Ctrl + Z - בטל פעולה
• Ctrl + S - שמור
• Ctrl + F - חפש

Mac:
• Cmd + C - העתק
• Cmd + V - הדבק
• Cmd + Z - בטל פעולה
• Cmd + S - שמור
• Cmd + F - חפש

קיצורי דרך מיוחדים:
• Alt + Tab - מעבר בין חלונות
• Win + D - הצג שולחן עבודה
• Ctrl + Shift + Esc - מנהל משימות

© Google AI Academy 2026`;
    }
    
    if (material.title.includes('הגדרות') || material.title.includes('settings')) {
      return `הגדרות מומלצות
================

הגדרות בסיסיות:
- גודל פונט: 14px
- רווח טאבים: 2 רווחים
- גלישת שורות: מופעל
- שמירה אוטומטית: מופעל

הגדרות מתקדמות:
- זיהוי אוטומטי של קוד
- השלמה אוטומטית
- הדגשת תחביר

טיפים:
✓ התאם אישית לפי העדפותיך
✓ נסה כמה הגדרות לפני שתחליט
✓ שמור את ההגדרות בקובץ נפרד

© Google AI Academy 2026`;
    }

    if (material.title.includes('פרומפטים') || material.title.includes('prompts')) {
      return `רשימת פרומפטים מומלצים
======================

פרומפטים בסיסיים:
1. "הסבר לי מושג [X] במילים פשוטות"
2. "תן לי דוגמה לשימוש ב-[Y]"
3. "מה ההבדל בין [A] ל-[B]?"

פרומפטים מתקדמים:
1. "צור לי תבנית קוד ל-[Z]"
2. "בדוק את הקוד הבא ותן המלצות לשיפור"
3. "כתוב לי תיעוד מקיף לפונקציה"

טיפים לכתיבת פרומפטים טובים:
• היה ספציפי וברור
• תן הקשר מלא
• בקש דוגמאות
• שאל שאלות המשך

© Google AI Academy 2026`;
    }

    if (material.title.includes('cURL') || material.title.includes('API')) {
      return `דוגמאות cURL לשימוש ב-API
============================

בקשה בסיסית:
curl -X GET "https://api.example.com/data" \\
  -H "Authorization: Bearer YOUR_TOKEN"

בקשה עם POST:
curl -X POST "https://api.example.com/create" \\
  -H "Content-Type: application/json" \\
  -d '{"key": "value"}'

בקשה עם פרמטרים:
curl -X GET "https://api.example.com/search?q=test&limit=10" \\
  -H "Accept: application/json"

טיפים חשובים:
⚠️ אל תשתף את ה-API key שלך
⚠️ השתמש ב-HTTPS תמיד
✓ בדוק את התגובה לשגיאות

לתיעוד מלא: https://api.example.com/docs

© Google AI Academy 2026`;
    }

    return `${material.title}
${'='.repeat(material.title.length)}

זהו קובץ לדוגמה המכיל מידע על:
${material.title}

תוכן זה זמין רק לתלמידים רשומים.

גודל הקובץ: ${material.size || 'לא ידוע'}
סוג הקובץ: ${material.type.toUpperCase()}

להורדת הקובץ המלא, לחץ על כפתור ההורדה.

© Google AI Academy 2026`;
  };

  React.useEffect(() => {
    if (material.type === 'txt') {
      setLoading(true);
      fetch(material.url)
        .then(res => {
          if (!res.ok) throw new Error('Failed to load');
          return res.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(() => {
          // אם הקובץ לא קיים, השתמש בתוכן לדוגמה
          setContent(getSampleContent(material));
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [material]);

  const renderContent = () => {
    if (material.type === 'txt') {
      if (loading) {
        return (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">טוען קובץ...</p>
          </div>
        );
      }

      return (
        <div>
          <div className="bg-blue-50 border-r-4 border-blue-500 p-4 mb-4 rounded">
            <p className="text-sm text-blue-800">
              📘 <strong>תצוגה מקדימה</strong> - זהו תוכן לדוגמה. להורדת הקובץ המלא לחץ על כפתור ההורדה.
            </p>
          </div>
          <pre className="bg-slate-50 p-6 rounded-lg text-sm font-mono whitespace-pre-wrap text-right overflow-x-auto border-2 border-slate-200" dir="rtl">{content}</pre>
        </div>
      );
    }

    if (material.type === 'pdf') {
      return (
        <div className="text-center py-12">
          <FileText className="w-20 h-20 mx-auto text-blue-500 mb-4" />
          <h4 className="text-xl font-bold text-slate-900 mb-2">קובץ PDF</h4>
          <p className="text-gray-600 mb-2">{material.title}</p>
          {material.description && <p className="text-gray-500 text-sm mb-6">{material.description}</p>}
          <div className="flex gap-3 justify-center">
            <a href={material.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              <ExternalLink className="w-4 h-4" />
              פתח בחלון חדש
            </a>
            <a href={material.url} download className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              הורד PDF
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center py-12">
        <FileText className="w-20 h-20 mx-auto text-gray-400 mb-4" />
        <h4 className="text-xl font-bold text-slate-900 mb-2">{material.title}</h4>
        <p className="text-gray-600 mb-2">קובץ מסוג: {material.type.toUpperCase()}</p>
        {material.description && <p className="text-gray-500 text-sm mb-6">{material.description}</p>}
        <a href={material.url} download className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          הורד קובץ
        </a>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Eye className="w-5 h-5" />
            תצוגה מקדימה
          </h3>
          <button onClick={onClose} className="hover:bg-slate-800 p-2 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {renderContent()}
        </div>
        <div className="bg-slate-50 p-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{material.title}</span>
            {material.size && <span className="mr-3 text-gray-500">• {material.size}</span>}
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 font-medium">
            סגור
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseViewer = ({ course, onBack, userRole }: { course: Course; onBack: () => void; userRole: UserRole }) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(course.lessons[0].id);
  const activeLesson = course.lessons.find((l) => l.id === activeLessonId) || course.lessons[0];
  const [viewingMaterial, setViewingMaterial] = useState<LessonMaterial | null>(null);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'pptx': return '📊';
      case 'docx': return '📝';
      case 'xlsx': return '📈';
      case 'txt': return '📋';
      case 'link': return '🔗';
      default: return '📁';
    }
  };

  return (
    <>
      {viewingMaterial && <MaterialViewer material={viewingMaterial} onClose={() => setViewingMaterial(null)} />}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-blue-500 mb-6 font-medium"><ChevronRight /> חזרה לקטלוג</button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{course.title}</h1>
            <h2 className="text-xl text-blue-600 flex items-center gap-2"><Video className="w-5 h-5" /> {activeLesson.title}</h2>
            {activeLesson.description && (
              <p className="text-gray-600 mt-2 text-sm">{activeLesson.description}</p>
            )}
          </div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative border border-slate-800">
            {userRole === 'student' || activeLesson.isFree ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white group cursor-pointer relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg"><Play className="w-8 h-8 text-white ml-1 fill-current" /></div>
                </div>
                <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-sm text-gray-200">{userRole === 'student' ? 'מצב תלמיד: גישה מלאה' : 'שיעור לדוגמה (חינם)'}</div>
                <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-sm text-gray-200">{activeLesson.duration}</div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-center p-8">
                <Lock className="w-16 h-16 text-gray-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">שיעור זה נעול</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">רכוש את הקורס ב-{course.price}₪</button>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 p-4 border-b border-gray-200"><h3 className="font-bold text-slate-800">תוכן הקורס</h3></div>
            <div className="max-h-[400px] overflow-y-auto">
              {course.lessons.map((lesson, index) => (
                <div key={lesson.id} onClick={() => setActiveLessonId(lesson.id)} className={`p-4 border-b border-gray-100 cursor-pointer flex items-center justify-between ${activeLessonId === lesson.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">{index + 1}</div>
                     <span className="text-sm font-medium">{lesson.title}</span>
                  </div>
                  {!(userRole === 'guest' && !lesson.isFree) ? <Play className="w-4 h-4 text-blue-500" /> : <Lock className="w-4 h-4 text-gray-300" />}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Download className="w-5 h-5 text-blue-500" /> חומרי השיעור</h3>
            {userRole === 'student' || activeLesson.isFree ? (
              activeLesson.materials && activeLesson.materials.length > 0 ? (
                <ul className="space-y-2">
                  {activeLesson.materials.map((mat, idx) => (
                    <li key={idx} className="bg-slate-50 rounded hover:bg-slate-100 transition-colors p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl flex-shrink-0">{getFileIcon(mat.type)}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-800 truncate">{mat.title}</div>
                          {mat.size && <div className="text-xs text-gray-500">{mat.size}</div>}
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          {(mat.type === 'txt' || mat.type === 'pdf') && (
                            <button
                              onClick={() => setViewingMaterial(mat)}
                              className="p-2 hover:bg-blue-100 rounded-lg transition-colors group"
                              title="צפייה"
                            >
                              <Eye className="w-4 h-4 text-blue-600" />
                            </button>
                          )}
                          <a
                            href={mat.url}
                            download
                            className="p-2 hover:bg-green-100 rounded-lg transition-colors group"
                            title="הורדה"
                          >
                            <Download className="w-4 h-4 text-green-600" />
                          </a>
                          {mat.type === 'link' && (
                            <a
                              href={mat.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
                              title="פתיחה בחלון חדש"
                            >
                              <ExternalLink className="w-4 h-4 text-purple-600" />
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-slate-50 p-4 rounded text-center">
                  <p className="text-sm text-gray-500">אין חומרי עזר זמינים לשיעור זה</p>
                </div>
              )
            ) : (
              <div className="bg-slate-50 p-4 rounded text-center">
                <Lock className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-3">חומרי העזר זמינים רק לנרשמים</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold">
                  רכישת הקורס ב-{course.price}₪
                </button>
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-purple-500" /> חומרי הקורס הכלליים</h3>
            {userRole === 'student' ? (
              <ul className="space-y-2">
                {course.materials.map((mat, idx) => (
                  <li key={idx} className="bg-slate-50 rounded hover:bg-slate-100 transition-colors">
                    <a href={mat.url} target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 text-purple-600 hover:underline p-2 w-full">
                      <FileText className="w-4 h-4" /><span className="text-sm">{mat.title}</span><Download className="w-4 h-4 ml-auto text-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-slate-50 p-4 rounded text-center"><p className="text-sm text-gray-500">זמין לנרשמים בלבד</p></div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

const WorkshopsList = ({ userRole }: { userRole: UserRole }) => (
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {WORKSHOP_MATERIALS.map((workshop) => (
        <div key={workshop.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold">{workshop.type}</span>
            {userRole === 'guest' && <Lock className="w-4 h-4 text-gray-400" />}
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-6">{workshop.title}</h3>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-500 border-b pb-1">קבצים להורדה:</h4>
            {userRole === 'student' ? (
              <ul className="space-y-2">
                {workshop.materials.map((mat, idx) => (
                  <li key={idx} className="bg-slate-50 rounded hover:bg-slate-100 transition-colors">
                    <a href={mat.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline p-2 w-full">
                      <FileText className="w-4 h-4" /><span className="text-sm">{mat.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">התחבר לצפייה</div>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const renderContent = () => {
    if (selectedCourse) return <CourseViewer course={selectedCourse} onBack={() => setSelectedCourse(null)} userRole={userRole} />;
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setActiveTab('courses')} />
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-6">
              {COURSES.map(c => <CourseCard key={c.id} course={c} userRole={userRole} onClick={() => setSelectedCourse(c)} />)}
            </div>
          </>
        );
      case 'courses':
        return (
          <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.map(c => <CourseCard key={c.id} course={c} userRole={userRole} onClick={() => setSelectedCourse(c)} />)}
          </div>
        );
      case 'workshops':
        return <WorkshopsList userRole={userRole} />;
      default:
        return null;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-sans text-slate-900 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} userRole={userRole} setUserRole={setUserRole} />
      <main className="flex-grow">{renderContent()}</main>
    </div>
  );
}
