# Afternoon Nap — Interactive Film Experience

**Afternoon Nap** is an interactive web-based film that follows Mahlet, a meticulous roommate, as she navigates her dynamic with her laid-back roommate Naz. Through branching storylines, viewers can influence the direction of the film, making each watch unique.

---

## 🎬 Overview

This project blends traditional filmmaking with interactive web storytelling. Built as a fully client-side experience, it allows viewers to:

- Make real-time decisions that affect the narrative.
- Seamlessly navigate between story branches.
- Explore behind-the-scenes content, cast profiles, and more.

---

## ✨ Features

### 🎥 Interactive Storytelling
- Branching narrative with multiple story outcomes.
- Decision points embedded within the video experience.
- Seamless transitions between video scenes.
- Linear back-navigation system for story consistency.

### 💻 Modern User Interface
- Fully responsive design (desktop, tablet, mobile).
- Elegant CSS animations and transitions.
- Custom video player UI with integrated decision overlays.
- Interactive rating system with emoji-style facial feedback.
- Behind-the-scenes content section.

### 🎭 Cast & Team Sections
- Detailed cast bios and team member profiles.
- Animated floating cards on hover.
- Responsive grid layout for clean presentation.
- Integrated behind-the-scenes video snippets.

### 🧭 User Experience Features
- Dynamic rating system based on facial expressions.
- Mobile-friendly hamburger menu and smooth navigation.
- Subtle animated background elements.
- Social proof section with user reviews and ratings.

---

## 🛠️ Technical Stack

**Frontend:**
- HTML5  
- CSS3 (Responsive & Animated)  
- Vanilla JavaScript  
- YouTube iFrame Player API  

**External Libraries:**
- Font Awesome v6.0.0-beta3  
- YouTube iFrame API  

---

## 📁 Project Structure

```bash
.
├── index.html # Main HTML file
├── style.css # Stylesheet
├── script.js # JavaScript logic
├── Images/ # Image assets
│ ├── Afra.jpg
│ ├── Iqra.jpg
│ ├── Mahlet.jpg
│ └── Naz.jpg
└── Videos/ # Video content
```

## 🎬 Interactive Video Navigation

The interactive video system follows these rules:

- **Initial video (`1.MOV`)** plays and shows decision options.
- Based on user choice:
  - 📨 **"Text Her"** path leads to `2.MOV`
  - 🧽 **"Clean It Yourself"** path leads to `3.MOV`
- 🔁 Back navigation is available from `2.MOV` / `3.MOV` onwards.
- 📽️ Linear navigation ensures proper story flow.

---

## 📱 Responsive Design Breakpoints

- **Desktop:** > 1024px  
- **Tablet:** 701px – 1024px  
- **Mobile:** ≤ 700px  
- **Small Mobile:** ≤ 500px  

---

## 👥 Team

**Iqra** – Web Designer and Developer  
*Senior | Class of 2026*  
*Double Major: Interactive Media & Psychology*  
📧 ib2419@nyu.edu  

**Mahlet** – Web Developer & Actor  
*Senior | Class of 2026*  
*Major: Computer Science & Mathematics*  
📧 ma7030@nyu.edu  

**Naz** – Editor, Camera & Actor  
*Senior | Class of 2025*  
*Major: Computer Engineering*  
📧 ic2268@nyu.edu  

**Afra** – Cast  
*Senior | Class of 2027*  
*Major: Interactive Media & Design*  
📧 aab8407@nyu.edu  

---

## 🌐 Browser Compatibility

Tested and optimized for:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

---

## 🐞 Known Issues

- 🔙 Back button navigation from `4.MOV` may show decision overlay incorrectly  
- 📱 Some mobile devices may require additional optimization for video playback

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/AmazingFeature
