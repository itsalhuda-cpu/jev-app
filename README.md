# JEV App - نظام إدارة متجر احترافي

تطبيق ويب متقدم لإدارة منتجات المتجر والمخزون، مع واجهة مستخدم جميلة وسهلة الاستخدام.

## 🎯 الميزات

- ✅ **إضافة وتحديث وحذف منتجات** - إدارة كاملة للمنتجات
- 📊 **لوحة إحصاءات ذكية** - عرض إجمالي المبيعات والمخزون والفئات
- 🎨 **تصميم احترافي** - واجهة جميلة باللون الأرجواني والأزرق
- 🌙 **وضع ليلي/نهاري** - تبديل سهل بين الأوضاع
- 🏪 **تصفية حسب الفئات** - 5 فئات: مشروبات، حلويات، ملابس، إلكترونيات، مستلزمات
- 💾 **حفظ البيانات** - حفظ تلقائي في localStorage
- 📦 **إدارة المخزون** - بيع منتج، إعادة تخزين، تتبع الكمية
- 🎯 **رموز تعبيرية** - اختيار رمز لكل منتج
- 🔔 **إشعارات ذكية** - رسائل تأكيد عند كل إجراء

## 🚀 البدء السريع

### المتطلبات
- Node.js v16+
- npm أو yarn

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/itsalhuda-cpu/jev-app.git
cd jev-app

# تثبيت المكتبات
npm install

# تشغيل في وضع التطوير
npm run dev
```

سيفتح المتصفح على `http://localhost:3000`

### الإنتاج

```bash
# بناء النسخة الإنتاجية
npm run build

# عرض معاينة الإنتاج
npm run preview
```

## 📁 هيكل المشروع

```
jev-app/
├── src/
│   ├── components/          # مكونات React
│   │   ├── Header.jsx
│   │   ├── Stats.jsx
│   │   ├── AddProductForm.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   └── Toast.jsx
│   ├── styles/              # ملفات CSS
│   │   ├── Header.css
│   │   ├── Stats.css
│   │   ├── AddProductForm.css
│   │   ├── FilterPanel.css
│   │   ├── ProductGrid.css
│   │   ├── ProductCard.css
│   │   ├── Toast.css
│   │   └── App.css
│   ├── App.jsx              # المكون الرئيسي
│   ├── main.jsx             # نقطة البداية
│   └── index.css            # الأنماط العامة
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎓 التعلم من هذا المشروع

هذا المشروع يعلمك:

- **React Basics**: useState, useEffect, useMemo
- **Component Architecture**: تقسيم الواجهة إلى مكونات
- **State Management**: إدارة الحالة المحلية
- **localStorage**: حفظ البيانات في المتصفح
- **CSS Modern**: Flexbox, Grid, Animations
- **Form Handling**: معالجة النماذج والمدخلات
- **Data Filtering**: تصفية وفرز البيانات

## 📱 ميزات UI/UX

- واجهة سريعة الاستجابة (Responsive)
- تدرجات لونية جميلة
- رموز تعبيرية لكل منتج
- رسائل إشعار فورية
- تصميم بطاقات احترافية
- شرائط ملونة للفئات

## 🔧 التخصيص

### إضافة فئة جديدة

عدّل المصفوفة `categories` في `App.jsx`:

```javascript
const categories = ['الكل', 'مشروبات', 'حلويات', 'ملابس', 'إلكترونيات', 'مستلزمات', 'كتب'];
```

### تغيير الألوان

عدّل المتغيرات في `src/index.css`:

```css
:root {
  --primary: #4f46e5;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
}
```

## 💡 أفكار للتطوير

- [ ] إضافة قاعدة بيانات (Firebase, MongoDB)
- [ ] نظام تسجيل الدخول
- [ ] تصدير البيانات إلى PDF/Excel
- [ ] نظام الطلبات
- [ ] إدارة العملاء
- [ ] تقارير المبيعات
- [ ] ربط مع Stripe للدفع

## 📝 الترخيص

هذا المشروع مفتوح المصدر ومتاح للجميع.

---

**صُنع بـ ❤️ بواسطة itsalhuda-cpu**
