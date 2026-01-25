# Quick Reference Guide - Microtech Stampings Website

## 🚀 Quick Start

### View the Website
```bash
cd "c:\Users\dell\Desktop\MicroTech Solutions\microtech-stampings"
npm start
# Opens on http://localhost:3001
```

---

## 📱 Responsive Breakpoints

| Device | Width | Behavior |
|--------|-------|----------|
| Large Desktop | 1024px+ | Full 2-column layouts, large fonts |
| Tablet | 768px - 1024px | Optimized layouts, touch-friendly |
| Mobile | 480px - 768px | 1-column layouts, full-width buttons |
| Small Mobile | <480px | Minimal padding, optimized typography |

---

## 🎨 Color Palette

```
Primary Orange:    #ff6b35  (Buttons, accents, hover states)
Dark Orange:       #ff5520  (Hover effect for primary button)
Dark Background:   #1a1a1a, #0f0f0f (Navbar, Hero)
Light Background:  #fff, #f8f8f8 (Sections)
Text Primary:      #1a1a1a (Main text)
Text Secondary:    #666 (Body text)
Text Tertiary:     #aaa (Muted text)
Border Color:      #ddd, #333
```

---

## 📝 Typography Sizes

### Headings
- **H1 / Hero Title:** 56px (desktop) → 28px (mobile)
- **Section Title:** 36px (desktop) → 24px (mobile)
- **Section Subtitle:** 18px (desktop) → 15px (mobile)
- **Card Titles:** 22px (desktop) → 16px (mobile)

### Body Text
- **Desktop:** 15-16px
- **Mobile:** 12-14px
- **Labels:** 11-13px

---

## 🔘 Button Styles

### Primary Button (`.btn-primary`)
```css
Background: #ff6b35
Text: White
Padding: 14px 36px
Font: 15px, 600 weight
Hover: 
  - Background: #ff5520
  - Transform: translateY(-3px)
  - Shadow: 0 12px 24px rgba(255, 107, 53, 0.4)
```

### Secondary Button (`.btn-secondary`)
```css
Background: Transparent
Text: #ff6b35
Border: 2.5px solid #ff6b35
Padding: 14px 36px
Hover:
  - Background: #ff6b35
  - Text: White
  - Transform: translateY(-3px)
```

---

## 🔗 Navigation Links

| Button | Scrolls To | Component |
|--------|-----------|-----------|
| Explore Products | #products | Hero.jsx |
| Request Quote | #contact | Hero.jsx |
| Inquire Now | #contact | Products.jsx |
| Request Custom Quote | #contact | Products.jsx |
| Contact Form | Submits | Contact.jsx |

---

## 📂 File Structure

```
microtech-stampings/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Capabilities.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Products.jsx
│   │   └── Values.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── Capabilities.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── global.css
│   │   ├── Hero.css
│   │   ├── Navbar.css
│   │   ├── Products.css
│   │   └── Values.css
│   ├── App.jsx
│   └── index.js
├── public/
│   ├── index.html
│   └── images/
│       └── hero-bg.png
└── package.json
```

---

## ⚙️ Responsive CSS Media Queries

### Used Breakpoints
```css
/* Desktop (1024px and above) - Default */
/* Tablet (768px - 1024px) */
@media (max-width: 1024px) { }

/* Mobile (480px - 768px) */
@media (max-width: 768px) { }

/* Small Mobile (Below 480px) */
@media (max-width: 480px) { }
```

---

## 🎯 Key Features

### Button Functionality
- ✅ Click handlers with `onClick` attributes
- ✅ Smooth scroll using `scrollIntoView({ behavior: 'smooth' })`
- ✅ Visual feedback with hover/active states
- ✅ Focus states for keyboard navigation

### Form Handling
- ✅ React useState for form state
- ✅ Input validation with `required` attribute
- ✅ Form submission with `handleSubmit`
- ✅ User feedback with alert message
- ✅ Form reset after submission

### Responsive Design
- ✅ Mobile-first CSS approach
- ✅ Flexible grid layouts
- ✅ Responsive typography
- ✅ Touch-friendly targets (44x44px minimum)
- ✅ Optimized images with `object-fit`

### Animations
- ✅ CSS transitions (0.3s duration)
- ✅ CSS transforms (GPU-accelerated)
- ✅ Keyframe animations (slideIn, fadeIn)
- ✅ Staggered animation delays

---

## 🔧 Common Modifications

### Change Primary Color
Replace `#ff6b35` with your color in all CSS files:
```css
.btn-primary { background-color: #NEW_COLOR; }
.btn-secondary { color: #NEW_COLOR; border-color: #NEW_COLOR; }
```

### Adjust Responsive Breakpoints
Modify media query limits in all CSS files:
```css
@media (max-width: 768px) { } /* Change 768 to your breakpoint */
```

### Change Hero Background Image
Edit `Hero.jsx`:
```jsx
<img src="/images/hero-bg.png" alt="Industrial Manufacturing" />
<!-- Change path to your image -->
```

### Modify Button Text
Edit component JSX files:
```jsx
<button className="btn btn-primary">Your Text Here</button>
```

---

## 📊 Performance Tips

1. **Smooth Scrolling:**
   - Browser handles with `scroll-behavior: smooth`
   - No additional JavaScript needed

2. **Optimized Animations:**
   - Use `transform: translateX/Y` instead of `left/top`
   - GPU acceleration for better performance

3. **CSS Organization:**
   - Global styles in `global.css`
   - Component styles in corresponding CSS files
   - Mobile-first approach in media queries

---

## 🐛 Debugging

### Common Issues

**Buttons Not Scrolling:**
- Check that section has correct `id` attribute
- Verify `onClick` handler is attached
- Check browser console for errors

**Responsive Design Not Working:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check media query breakpoints
- Verify CSS is linked in component

**Form Not Submitting:**
- Check `handleSubmit` function exists
- Verify form has `onSubmit` attribute
- Check browser console for JavaScript errors

**Images Not Loading:**
- Verify image path in `public/images/`
- Check image file name is correct
- Use relative paths: `/images/filename.png`

---

## 📱 Testing on Mobile

### Using Chrome DevTools
1. Press `F12` to open DevTools
2. Click device toggle icon (top-left)
3. Select device from dropdown
4. Test responsive layout

### Using Different Devices
- Desktop: 1920x1080, 1440x900, 1024x768
- Tablet: 768x1024, 834x1112
- Mobile: 480x800, 375x667, 320x568

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Latest version |
| Firefox | ✅ Full | Latest version |
| Safari | ✅ Full | Latest version |
| Edge | ✅ Full | Latest version |
| Mobile | ✅ Full | iOS/Android |
| IE11 | ⚠️ Partial | No CSS Grid |

---

## 📞 Contact Information

**Microtech Stampings**
- Phone: +91 9404123171
- Email: microstampings@gmail.com
- Address: Gat No 742, Near Laxmi Park, Gaikwad DP Road, Kadamwak Wasti, Tal-Haveli, Dist-Pune, Pin-412201

---

## 📄 Documentation Files

1. **UI_IMPROVEMENTS_SUMMARY.md** - Detailed improvements overview
2. **COMPLETION_VERIFICATION.md** - Complete checklist
3. **QUICK_START.md** - Getting started guide
4. **README.md** - Project overview
5. **This File** - Quick reference

---

## 🎓 Best Practices

### When Adding New Features
1. Follow existing component structure
2. Use matching color scheme
3. Implement responsive design
4. Add focus states for accessibility
5. Test on multiple devices
6. Update documentation

### Code Style
- Use kebab-case for CSS class names
- Use camelCase for JavaScript variables
- Keep components focused and small
- Comment complex logic
- Follow DRY principles

---

## 🔒 Security Notes

- Form data not sent to backend (demo only)
- Email links are safe (`mailto:`)
- Phone links are safe (`tel:`)
- No sensitive data exposed
- No external dependencies with vulnerabilities

---

## 📈 Future Enhancements

- [ ] Backend form submission
- [ ] Email notifications
- [ ] SEO optimization
- [ ] Image lazy loading
- [ ] Dark mode
- [ ] Analytics integration
- [ ] Progressive Web App
- [ ] Multilingual support

---

**Version:** 2.0
**Last Updated:** 2024
**Status:** Production Ready ✅
