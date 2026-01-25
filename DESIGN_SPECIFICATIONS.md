# Microtech Stampings - Complete Design Specifications

## 1. COLOR SCHEME

### Primary Colors
- **Primary Color (CTA/Buttons)**: `#ff6b35` (Orange-Red)
- **Primary Hover State**: `#ff5520` (Darker Orange-Red)
- **Primary Accent**: `#ff6b35` (Used consistently across accents)

### Secondary Colors
- **Primary Brand Gradient**: Linear gradient from `#3b82f6` (Blue) to `#60a5fa` (Light Blue)
- **Dark Blue**: `#0a0e27` (Navbar background start)
- **Dark Blue Variant**: `#1a1f3a` (Navbar background end)

### Background Colors
- **Default Background**: `#ffffff` (White)
- **Light Section Background**: `#f8f8f8` (Light Gray)
- **Hero Section Background**: Linear gradient from `#0f0f0f` (Very Dark Gray) to `#1a1a1a` (Dark Gray)
- **Capabilities Section Background**: Linear gradient from `#f8f8f8` (Light Gray) to `#ffffff` (White)
- **Contact Section Background**: Linear gradient from `#f8f8f8` (Light Gray) to `#ffffff` (White)

### Text Colors
- **Heading Color**: `#1a1a1a` (Very Dark Gray/Black)
- **Body Text Color**: `#666666` (Medium Gray)
- **Light Text Color**: `#777777` (Slightly Lighter Gray)
- **Muted Text Color**: `#999999` (Light Gray)
- **Secondary Text Color**: `#ccc` (Light Gray) - Used in hero subtitle
- **Link Color**: `#ff6b35` (Orange-Red)
- **Link Hover Color**: `#e5531e` (Darker Orange-Red)
- **White Text**: `#ffffff` (White) - On dark backgrounds
- **Navbar Link Color**: `#b8c6db` (Light Blue-Gray)
- **Navbar Link Hover Color**: `#3b82f6` (Blue)

### Border Colors
- **Light Border**: `#e0e0e0` (Light Gray)
- **Spec Item Border**: `#ff6b35` (Orange-Red) - Left border on spec items

### Shadow Colors
- **Shadow Primary**: `rgba(255, 107, 53, 0.25)` (Orange-Red shadow - primary buttons)
- **Shadow Primary Hover**: `rgba(255, 107, 53, 0.4)` (Orange-Red shadow - primary buttons hover)
- **Shadow Secondary Hover**: `rgba(255, 107, 53, 0.3)` (Orange-Red shadow - secondary buttons hover)
- **Shadow Default**: `rgba(0, 0, 0, 0.08)` (Black shadow - cards)
- **Shadow Default Hover**: `rgba(0, 0, 0, 0.15)` (Black shadow - cards hover)
- **Shadow Navbar**: `rgba(0, 0, 0, 0.15)` (Black shadow - navbar)
- **Shadow Large**: `rgba(0, 0, 0, 0.1)` (Black shadow - images)

---

## 2. TYPOGRAPHY

### Font Family Stack
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
```

### Heading Styles

#### Navbar Logo
- **Font Size**: 24px
- **Font Weight**: 800 (Extra Bold)
- **Letter Spacing**: -0.5px
- **Effect**: Linear gradient text (`#3b82f6` to `#60a5fa`)

#### Hero Title (h1)
- **Font Size**: 52px
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.2
- **Letter Spacing**: -1px
- **Color**: `#ffffff` (on dark background)

#### Section Title (h2)
- **Font Size**: 36px
- **Font Weight**: 800 (Extra Bold)
- **Letter Spacing**: -1px
- **Color**: `#1a1a1a`
- **Margin Bottom**: 10px

#### Intro/Large Title
- **Font Size**: 24px
- **Font Weight**: 700
- **Color**: `#1a1a1a`

#### Product Title/Card Title (h3)
- **Font Size**: 26px (Product) / 22px (Card)
- **Font Weight**: 700
- **Color**: `#1a1a1a`
- **Margin Bottom**: 15px

#### Capability Title
- **Font Size**: 18px
- **Font Weight**: 700
- **Color**: `#1a1a1a`
- **Line Height**: 1.4

#### Detail Title
- **Font Size**: 16px
- **Font Weight**: 700
- **Color**: `#1a1a1a`

#### Section Subtitle
- **Font Size**: 18px
- **Font Weight**: 600
- **Color**: `#ff6b35`
- **Text Transform**: Capitalize

#### Card Header/Feature Header
- **Font Size**: 11px-12px
- **Font Weight**: 700
- **Color**: `#ff6b35`
- **Letter Spacing**: 1px-2px
- **Text Transform**: Uppercase

#### Spec Label
- **Font Size**: 11px
- **Font Weight**: 700
- **Color**: `#999999`
- **Letter Spacing**: 0.5px
- **Text Transform**: Uppercase

### Body Text
- **Font Size**: 14px-16px (Default)
- **Font Weight**: 400 (Regular)
- **Color**: `#666666`
- **Line Height**: 1.6-1.8

### Small Text
- **Font Size**: 13px
- **Color**: `#666666`
- **Line Height**: 1.6

### Detail/Caption Text
- **Font Size**: 13px
- **Font Weight**: 400-500
- **Color**: `#666666`

### Info Value (Large)
- **Font Size**: 18px
- **Font Weight**: 600
- **Color**: `#1a1a1a`

### Spec Value
- **Font Size**: 16px
- **Font Weight**: 600
- **Color**: `#1a1a1a`

### Stat Number
- **Font Weight**: 700 (inherits size from context)

---

## 3. LAYOUT & SPACING

### Container
- **Max Width**: 1200px
- **Horizontal Padding**: 20px-40px
- **Auto Margin**: `margin: 0 auto`

### Section Padding
- **Standard Section Padding**: 60px 0 (top and bottom)
- **Large Section Padding**: 80px 0 (products, capabilities, contact)

### Component Padding

#### Button
- **Padding**: 14px 36px
- **Border Radius**: 8px

#### Card Content
- **Padding**: 40px

#### Capability Content
- **Padding**: 35px

#### Card Header (Product Cards)
- **Margin Bottom**: 10px

#### Card Title
- **Margin Bottom**: 15px

#### Card Description
- **Margin Bottom**: 20px

### Gaps & Gaps Between Elements

#### Navbar Menu Gap
- **Desktop**: 48px
- **Tablet**: 32px

#### Hero Buttons Gap
- **Gap**: 15px
- **Flex Wrap**: Wrap

#### Hero Stats Gap
- **Gap**: 40px

#### Capabilities Grid Gap
- **Desktop**: 40px
- **Tablet**: 35px

#### Products Grid Gap
- **Gap**: 40px

#### Contact Grid Gap
- **Gap**: 60px

#### Detail Items Gap
- **Gap**: 25px

#### Feature Items Gap
- **Gap**: 12px (columns), 12px (gap)

#### Machine Specs Gap
- **Gap**: 20px

#### Feature Group Gap
- **Gap**: 30px

#### Hero Content Gap
- **Gap**: 60px

#### Featured Product Gap
- **Gap**: 60px

#### Section Header Margin Bottom
- **Margin Bottom**: 50px (desktop), 45px (tablet)

### Border Radius

#### Large Elements (Cards, Sections)
- **Border Radius**: 12px

#### Medium Elements (Buttons, Icons)
- **Border Radius**: 8px

#### Small Elements (Borders)
- **Border Radius**: 6px

#### Spec Items Border
- **Border Left**: 3px solid `#ff6b35`

### Grid Layouts

#### Capabilities Grid
- **Desktop**: `grid-template-columns: repeat(3, 1fr)`
- **Tablet**: `grid-template-columns: repeat(2, 1fr)`
- **Mobile**: Single column

#### Products Grid
- **Desktop**: `grid-template-columns: 1fr 1fr`
- **Mobile**: Single column

#### Featured Product/Contact Layout
- **Desktop**: `grid-template-columns: 1fr 1fr`
- **Mobile**: Single column

#### Feature List (Products)
- **Grid**: `grid-template-columns: 1fr 1fr`
- **Gap**: 30px

#### Product Features
- **Grid**: `grid-template-columns: 1fr 1fr`
- **Gap**: 12px

#### Machine Specs
- **Grid**: `grid-template-columns: 1fr 1fr`
- **Gap**: 20px

#### Navbar Layout
- **Justify Content**: Space-between
- **Align Items**: Center
- **Display**: Flex

---

## 4. COMPONENTS

### Buttons

#### Primary Button `.btn-primary`
- **Background Color**: `#ff6b35`
- **Text Color**: `#ffffff`
- **Padding**: 14px 36px
- **Font Size**: 15px
- **Font Weight**: 600
- **Border Radius**: 8px
- **Box Shadow**: `0 4px 15px rgba(255, 107, 53, 0.25)`
- **Text Transform**: Capitalize
- **Transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Hover State**:
- **Background Color**: `#ff5520`
- **Transform**: `translateY(-3px)`
- **Box Shadow**: `0 12px 24px rgba(255, 107, 53, 0.4)`

**Active State**:
- **Transform**: `translateY(-1px)`

#### Secondary Button `.btn-secondary`
- **Background Color**: Transparent
- **Text Color**: `#ff6b35`
- **Border**: 2.5px solid `#ff6b35`
- **Padding**: 14px 36px
- **Font Size**: 15px
- **Font Weight**: 600
- **Border Radius**: 8px
- **Text Transform**: Capitalize
- **Transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Hover State**:
- **Background Color**: `#ff6b35`
- **Text Color**: `#ffffff`
- **Transform**: `translateY(-3px)`
- **Box Shadow**: `0 12px 24px rgba(255, 107, 53, 0.3)`

**Active State**:
- **Transform**: `translateY(-1px)`

#### Button Focus State
- **Outline**: 2px solid `#ff6b35`
- **Outline Offset**: 2px

### Cards

#### Product Card `.product-card`
- **Background Color**: `#f8f8f8`
- **Border Radius**: 12px
- **Overflow**: Hidden
- **Box Shadow**: `0 5px 20px rgba(0, 0, 0, 0.08)`
- **Transition**: `transform 0.3s ease, box-shadow 0.3s ease`

**Hover State**:
- **Transform**: `translateY(-8px)`
- **Box Shadow**: `0 15px 40px rgba(0, 0, 0, 0.15)`

**Card Image Hover**:
- **Transform**: `scale(1.05)`

#### Capability Card `.capability-card`
- **Background Color**: `#ffffff`
- **Border Radius**: 12px
- **Overflow**: Hidden
- **Box Shadow**: `0 5px 20px rgba(0, 0, 0, 0.08)`
- **Transition**: `transform 0.3s ease, box-shadow 0.3s ease`
- **Animation**: `scaleIn 0.6s ease`

**Hover State**:
- **Transform**: `translateY(-8px)`
- **Box Shadow**: `0 15px 40px rgba(0, 0, 0, 0.15)`

**Image Hover**:
- **Transform**: `scale(1.08)`

#### Featured Product Section
- **Background Color**: `#f8f8f8`
- **Border Radius**: 12px
- **Padding**: 40px
- **Grid**: 1fr 1fr layout with 60px gap

#### Manufacturing Info Card
- **Background Color**: `#ffffff`
- **Border Radius**: 12px
- **Padding**: 40px
- **Border**: 1px solid `#e0e0e0`
- **Text Align**: Center

### Navigation Bar

#### Navbar Container
- **Background**: Linear gradient from `#0a0e27` to `#1a1f3a`
- **Color**: `#ffffff`
- **Padding**: 16px 0
- **Position**: Sticky
- **Top**: 0
- **Z-index**: 1000
- **Box Shadow**: `0 4px 20px rgba(0, 0, 0, 0.15)`

**Responsive**:
- **Tablet Padding**: 0 30px
- **Mobile Padding**: 0 20px
- **Mobile Padding Vertical**: 12px 0

#### Navbar Menu
- **List Style**: None
- **Display**: Flex
- **Gap**: 48px (desktop), 32px (tablet)
- **Margin**: 0
- **Padding**: 0

#### Navbar Links
- **Color**: `#b8c6db`
- **Font Size**: 14px (desktop), 13px (tablet)
- **Font Weight**: 500
- **Text Transform**: Capitalize
- **Transition**: `color 0.3s ease`

**Hover State**:
- **Color**: `#3b82f6`

#### Navbar Logo
- **Font Size**: 24px
- **Font Weight**: 800
- **Letter Spacing**: -0.5px
- **Background Gradient**: `#3b82f6` to `#60a5fa`
- **Background Clip**: Text
- **Text Fill Color**: Transparent

#### Hamburger Menu
- **Display**: None (hidden on desktop)
- **Flex Direction**: Column
- **Gap**: 6px

**Hamburger Spans**:
- **Width**: 25px
- **Height**: 2.5px
- **Background**: `#ffffff`
- **Border Radius**: 2px
- **Transition**: `all 0.3s ease`

**Active States**:
- **Span 1**: `rotate(45deg) translate(10px, 10px)`
- **Span 2**: `opacity: 0`
- **Span 3**: `rotate(-45deg) translate(7px, -7px)`

### Hero Section

#### Hero Container
- **Background**: Linear gradient from `#0f0f0f` to `#1a1a1a`
- **Color**: `#ffffff`
- **Padding**: 80px 0
- **Margin Top**: 60px
- **Display**: Grid (2 columns on desktop)
- **Gap**: 60px
- **Align Items**: Center

#### Hero Title
- **Font Size**: 52px
- **Font Weight**: 700
- **Line Height**: 1.2
- **Letter Spacing**: -1px
- **Margin Bottom**: 20px

#### Hero Subtitle
- **Font Size**: 16px
- **Color**: `#ccc`
- **Line Height**: 1.6
- **Margin Bottom**: 30px

#### Hero Stats
- **Display**: Flex
- **Gap**: 40px

**Stat Items**:
- **Flex Direction**: Column

### Products Section

#### Featured Product Layout
- **Display**: Grid (2 columns)
- **Gap**: 60px
- **Align Items**: Center
- **Margin Bottom**: 80px
- **Padding**: 40px
- **Background**: `#f8f8f8`
- **Border Radius**: 12px

#### Product Image
- **Animation**: `fadeInLeft 0.8s ease`
- **Image Border Radius**: 8px
- **Image Shadow**: `0 10px 30px rgba(0, 0, 0, 0.1)`

#### Product Details
- **Animation**: `fadeInRight 0.8s ease`

#### Product Title
- **Font Size**: 26px
- **Font Weight**: 700
- **Color**: `#1a1a1a`
- **Margin Bottom**: 15px

#### Product Description
- **Font Size**: 14px
- **Line Height**: 1.8
- **Color**: `#666`
- **Margin Bottom**: 20px

#### Feature Item
- **Display**: Flex
- **Align Items**: Flex-start
- **Gap**: 10px
- **Font Size**: 13px
- **Color**: `#666`
- **Line Height**: 1.6

#### Feature Icon
- **Color**: `#ff6b35`
- **Font Weight**: 700
- **Font Size**: 16px
- **Flex Shrink**: 0

### Capabilities Section

#### Capabilities Grid
- **Display**: Grid
- **Columns**: 3 (desktop), 2 (tablet), 1 (mobile)
- **Gap**: 40px (desktop), 35px (tablet)
- **Margin Bottom**: 60px

#### Capability Card
- **Background**: `#ffffff`
- **Border Radius**: 12px
- **Box Shadow**: `0 5px 20px rgba(0, 0, 0, 0.08)`
- **Transition**: `transform 0.3s ease, box-shadow 0.3s ease`

#### Capability Image
- **Height**: 250px
- **Overflow**: Hidden
- **Image Transition**: `transform 0.3s ease`

#### Capability Content
- **Padding**: 35px (desktop), 30px (tablet)

#### Machine Specs
- **Display**: Grid (2 columns)
- **Gap**: 20px

#### Spec Item
- **Display**: Flex (column)
- **Padding**: 15px
- **Background**: `#f8f8f8`
- **Border Radius**: 8px
- **Border Left**: 3px solid `#ff6b35`

#### Spec Label
- **Font Size**: 11px
- **Font Weight**: 700
- **Color**: `#999`
- **Letter Spacing**: 0.5px
- **Text Transform**: Uppercase
- **Margin Bottom**: 5px

#### Spec Value
- **Font Size**: 16px
- **Font Weight**: 600
- **Color**: `#1a1a1a`

#### Info Label
- **Font Size**: 12px
- **Font Weight**: 700
- **Color**: `#ff6b35`
- **Letter Spacing**: 1px
- **Text Transform**: Uppercase
- **Margin Bottom**: 10px

#### Info Value
- **Font Size**: 18px
- **Font Weight**: 600
- **Color**: `#1a1a1a`

### Contact Section

#### Contact Content Grid
- **Display**: Grid (2 columns)
- **Gap**: 60px
- **Align Items**: Flex-start

#### Contact Info
- **Animation**: `fadeInLeft 0.8s ease`

#### Intro Title
- **Font Size**: 24px
- **Font Weight**: 700
- **Color**: `#1a1a1a`
- **Margin Bottom**: 15px

#### Intro Text
- **Font Size**: 14px
- **Line Height**: 1.8
- **Color**: `#666`
- **Margin Bottom**: 25px

#### Contact Details
- **Display**: Flex (column)
- **Gap**: 25px

#### Detail Item
- **Display**: Flex
- **Gap**: 20px
- **Animation**: `fadeInUp 0.6s ease`

#### Detail Icon
- **Font Size**: 28px
- **Width**: 45px
- **Height**: 45px
- **Display**: Flex
- **Align Items**: Center
- **Justify Content**: Center
- **Background**: `#ff6b35`
- **Border Radius**: 8px
- **Color**: `#ffffff`
- **Flex Shrink**: 0

#### Detail Title
- **Font Size**: 16px
- **Font Weight**: 700
- **Color**: `#1a1a1a`
- **Margin Bottom**: 8px

#### Detail Text
- **Font Size**: 13px
- **Color**: `#666`
- **Line Height**: 1.7

---

## 5. VISUAL EFFECTS

### Box Shadows

#### Card Shadows
- **Default Shadow**: `0 5px 20px rgba(0, 0, 0, 0.08)`
- **Hover Shadow**: `0 15px 40px rgba(0, 0, 0, 0.15)`

#### Image Shadows
- **Shadow**: `0 10px 30px rgba(0, 0, 0, 0.1)`

#### Navbar Shadow
- **Shadow**: `0 4px 20px rgba(0, 0, 0, 0.15)`

#### Primary Button Shadow
- **Default**: `0 4px 15px rgba(255, 107, 53, 0.25)`
- **Hover**: `0 12px 24px rgba(255, 107, 53, 0.4)`

#### Secondary Button Hover Shadow
- **Shadow**: `0 12px 24px rgba(255, 107, 53, 0.3)`

### Gradients

#### Navbar Background
- **Type**: Linear gradient (135deg)
- **Colors**: `#0a0e27` → `#1a1f3a`

#### Hero Background
- **Type**: Linear gradient (135deg)
- **Colors**: `#0f0f0f` → `#1a1a1a`

#### Capabilities Background
- **Type**: Linear gradient (135deg)
- **Colors**: `#f8f8f8` → `#ffffff`

#### Navbar/Logo Text Gradient
- **Type**: Linear gradient (135deg)
- **Colors**: `#3b82f6` → `#60a5fa`
- **Background Clip**: Text

#### Contact Background
- **Type**: Linear gradient (135deg)
- **Colors**: `#f8f8f8` → `#ffffff`

### Transitions & Animations

#### Standard Transition
- **Timing**: `0.3s ease` or `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Property**: `all` or specific properties like `color`, `transform`, `box-shadow`

#### Button Transition
- **Duration**: 0.3s
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Properties**: All

#### Card Hover Transition
- **Duration**: 0.3s
- **Easing**: ease
- **Properties**: `transform`, `box-shadow`

#### Image Hover Transition
- **Duration**: 0.3s
- **Easing**: ease
- **Property**: `transform`

### Animations

#### Slide In Left
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
- **Duration**: 0.8s
- **Easing**: ease
- **Use**: Hero text

#### Fade In Left
```css
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
- **Duration**: 0.8s
- **Easing**: ease
- **Use**: Product images, contact info

#### Fade In Right
```css
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```
- **Duration**: 0.8s
- **Easing**: ease
- **Use**: Product details

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- **Duration**: 0.6s
- **Easing**: ease
- **Use**: Detail items

#### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```
- **Duration**: 0.6s
- **Easing**: ease
- **Use**: Capability cards

### Hover States

#### Button Primary Hover
- **Background Color Change**: `#ff6b35` → `#ff5520`
- **Transform**: `translateY(-3px)`
- **Shadow Enhancement**: Increased shadow depth

#### Button Secondary Hover
- **Background Color Change**: Transparent → `#ff6b35`
- **Text Color Change**: `#ff6b35` → `#ffffff`
- **Transform**: `translateY(-3px)`
- **Shadow Enhancement**: Shadow added

#### Card Hover
- **Transform**: `translateY(-8px)` (lift effect)
- **Shadow Enhancement**: Shadow depth increased

#### Image Hover
- **Transform**: `scale(1.05)` or `scale(1.08)`
- **Transition**: Smooth over 0.3s

#### Link Hover
- **Color Change**: `#ff6b35` → `#e5531e`
- **Transition**: 0.3s ease

#### Navigation Link Hover
- **Color Change**: `#b8c6db` → `#3b82f6`
- **Transition**: 0.3s ease

### Active/Focus States

#### Button Active
- **Transform**: `translateY(-1px)` (subtle lift)
- **Scale**: `scale(0.98)` (slight press effect)

#### Button Focus
- **Outline**: 2px solid `#ff6b35`
- **Outline Offset**: 2px

### Transform Effects

#### Translate Y
- **Normal State**: translateY(0)
- **Hover State**: translateY(-3px) or translateY(-8px)
- **Active State**: translateY(-1px)

#### Scale
- **Image Zoom**: scale(1.05) or scale(1.08)
- **Button Active**: scale(0.98)

---

## 6. RESPONSIVE DESIGN

### Breakpoints
- **Desktop**: 1200px (max-width for container)
- **Tablet**: 1024px
- **Mobile**: 768px

### Responsive Adjustments

#### Navbar
- **Desktop Padding**: 0 40px
- **Tablet Padding**: 0 30px
- **Mobile Padding**: 0 20px
- **Desktop Gap**: 48px
- **Tablet Gap**: 32px
- **Mobile**: Hamburger menu activates

#### Sections
- **Desktop Padding**: 80px 0 / 60px 0
- **Tablet Padding**: 70px 0
- **Mobile Padding**: 60px 0

#### Grid Layouts
- **Desktop**: Multi-column (2-3 columns)
- **Tablet**: 2 columns or reduced columns
- **Mobile**: Single column

#### Font Sizes
- **Desktop**: Full sizes
- **Tablet**: Slightly reduced
- **Mobile**: Further reduced

---

## 7. HTML/CSS BEHAVIOR

### Smooth Scrolling
- **Global**: `scroll-behavior: smooth;` on html element

### Global Resets
- **Margin/Padding**: All elements reset to 0
- **Box Sizing**: All elements use `border-box`

### Font Smoothing
- **WebKit**: `-webkit-font-smoothing: antialiased`
- **Mozilla**: `-moz-osx-font-smoothing: grayscale`

### Link Behavior
- **Text Decoration**: None
- **Color**: Inherit from parent

### Image Behavior
- **Max Width**: 100%
- **Height**: Auto
- **Display**: Block

### Text Rendering
- **Color**: `#333` (default)
- **Font Family**: System font stack

---

## 8. ACCESSIBILITY

### Focus States
- All buttons have visible focus states with `outline: 2px solid #ff6b35` and `outline-offset: 2px`

### Color Contrast
- All text meets WCAG accessibility standards
- Primary orange (`#ff6b35`) provides sufficient contrast on white backgrounds
- White text on dark backgrounds has strong contrast

### Interactive Elements
- All buttons and links have clear hover states
- Form inputs should have visible focus indicators

---

## Summary

This design specification captures the complete visual identity of Microtech Stampings website. The design features:
- A professional orange (`#ff6b35`) accent color for CTAs and interactive elements
- Dark hero section with gradient backgrounds
- Clean card-based layouts with subtle shadows
- Smooth animations and transitions for engaging user experience
- Responsive design that works across all device sizes
- Consistent typography using system font stack
- Accessibility-first approach with proper contrast and focus states
