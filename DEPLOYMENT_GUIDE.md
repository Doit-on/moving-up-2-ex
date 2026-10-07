# Moving Up 2: Critical Reading (ม.5) - Deployment & Operation Guide

**เว็บแอปพลิเคชันเพื่อการศึกษา สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ) & WorldCom ELT**  
**รหัสเล่ม:** `MU-B2` | **เวอร์ชัน:** `v1.0.2-bamboo` (Universal Dual-Path Edition - All 10 Tracks Included)

---

## 1. ข้อมูลสถาปัตยกรรมและไฟล์ในระบบ

แอปพลิเคชันนี้ใช้โครงสร้าง **Clean Modular Architecture** เช่นเดียวกับ Moving Up 1 โดยแยกสโคปและหน่วยความจำอิสระ 100%:

```text
Moving Up 2 app/
├── assets/
│   ├── audio/              # ไฟล์เสียง MP3 แท้ครบ 100% (ex1.mp3 - ex10.mp3)
│   └── images/
│       ├── covers/         # ภาพปก 8 เล่มสำหรับแถบวิ่งด้านล่าง (Marquee)
│       ├── cover.jpg       # ภาพปก Moving Up 2 สีเขียวมรกตไผ่ (S__48250903.jpg)
│       ├── twp_logo.png    # โลโก้ ทวพ
│       └── ex1.jpg-ex10.jpg# ภาพประกอบประจำบทเรียน 10 บท ตรงตามเนื้อหาจริง (16:9)
├── css/
│   └── style.css           # ธีมสีธรรมชาติ Bamboo Forest & Emerald Green (#1b4332, #40916c)
├── js/
│   ├── app.js              # Quiz Engine, Audio Engine, Isolated Scope (mu2_*)
│   ├── data.js             # ฐานข้อมูล 10 บทเรียนเต็ม (150 ข้อ) + Audio Timestamps ครบ 10 บท
│   ├── i18n.js             # ระบบสลับภาษา ไทย ⇄ อังกฤษ Real-time
│   ├── settings.js         # ตัวควบคุมการตั้งค่า (Scoped: mu2_*)
│   ├── system-check.js     # ระบบตรวจวิเคราะห์ความพร้อมของเบราว์เซอร์
│   └── qrcode.min.js       # ไลบรารีสร้าง QR Code ออฟไลน์
├── index.html              # มาร์กอัปหลัก รองรับการเปิด Local โดยตรง 100%
├── manifest.json           # Web App Manifest สำหรับติดตั้ง PWA
├── sw.js                   # Service Worker Offline แคชครบทั้ง 10 เสียง Auto Cache Purge
├── .nojekyll               # ข้าม Jekyll สำหรับ GitHub Pages
├── vercel.json             # Configuration สำหรับ Vercel
├── _redirects              # Configuration สำหรับ Netlify
├── Launch_Moving_Up_2.bat  # สคริปต์เปิดใช้งานบน Windows
├── เปิดใช้งาน Moving Up 2.bat # สคริปต์เปิดใช้งานภาษาไทย
└── DEPLOYMENT_GUIDE.md     # เอกสารแนะนำการติดตั้ง
```

---

## 2. คุณสมบัติเด่นและจุดป้องกันข้อผิดพลาด (Quality Assurance)

* **ธีม Bamboo Forest & Emerald Green:** 
  * ออกแบบตามสีปกหนังสือเล่ม 2 อย่างแท้จริง (เขียวมรกตและเขียวไผ่ธรรมชาติ)
* **หน้า Landing Page สะอาดตา:** 
  * ไม่มีข้อความที่ไม่จำเป็น คงไว้เฉพาะข้อมูลหลักของหลักสูตร ม.5 (Grade 11)
* **การแสดงผลข้อที่ตอบผิด (Red Text Feedback):** 
  * เมื่อตอบผิด ตัวเลือก/คำตอบจะแสดงผลด้วยสีแดงเด่นชัด (`#dc2626`) พร้อมเครื่องหมาย ❌ เพื่อให้ผู้เรียนสังเกตข้อผิดพลาดได้ทันที
* **ระบบเรียงประโยค Part C (Full Stop Token):** 
  * ทุกข้อในทั้ง 10 บทเรียน มีเครื่องหมายจุดมหัพภาค (`.`) อยู่ที่คำท้ายประโยคอย่างชัดเจนตามมาตรฐาน
* **ภาพประกอบตรงตามเนื้อหา 100%:** 
  * ภาพประกอบทั้ง 10 บทสะท้อนเนื้อเรื่องในบทอ่านจริง (เช่น โบราณคดี, สถานีอวกาศนานาชาติ, การสมานกระดูก, มลพิษทางเสียง, กายวิภาคดวงตากับกล้อง, จิตวิทยาร้านค้า, หลุมฝังกลบขยะ, ข้อมูลเท็จบนโซเชียลมีเดีย, สังคมไร้เงินสด, และวิกฤตผึ้งผสมเกสร)
* **ระบบเสียง MP3 เจ้าของภาษาแท้ครบ 10 บท (100% Complete):**
  * มีไฟล์ MP3 ครบถ้วนทั้ง 10 บทเรียน (`ex1.mp3` ถึง `ex10.mp3`)
  * ระบบ **Synchronized Highlighting** ไฮไลต์ตามเสียงพูดย่อหน้าแบบแม่นยำ
  * ระบบ **Click-to-Play Single Paragraph** คลิกที่ย่อหน้าใดก็ได้เพื่อฟังเฉพาะย่อหน้านั้น
* **แยกสโคปความจำอิสระ:**
  * ใช้ `mu2_` prefix ทั้งหมด ไม่ปะปนกับข้อมูลการเรียนของเล่ม 1 หรือเล่ม 3 อย่างแน่นอน

---

## 3. ขั้นตอนการนำขึ้น GitHub Pages / Web Hosting

### ตัวเลือกที่ 1: GitHub Pages
1. สร้าง Repository ใหม่บน GitHub เช่น `moving-up-2-app`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นสู่ Repository (Branch: `main`)
3. ไปที่ **Settings** > **Pages** > **Build and deployment**
4. เลือก Branch `main` และโฟลเดอร์ `/ (root)` แล้วกด **Save**
5. เว็บไซต์จะออนไลน์พร้อมใช้งานทันที เช่น `https://username.github.io/moving-up-2-app/`

### ตัวเลือกที่ 2: Vercel / Netlify
* ลากโฟลเดอร์นี้วางบน Dashboard ของ Netlify หรือเชื่อมต่อ Git กับ Vercel จะเริ่มทำงานอัตโนมัติ

---

## 4. การเปิดใช้งานแบบ Local (ออฟไลน์)
* ดับเบิลคลิกที่ไฟล์ `Launch_Moving_Up_2.bat` หรือ `เปิดใช้งาน Moving Up 2.bat` เพื่อเปิดแอปในเบราว์เซอร์ทันที
* รองรับการติดตั้งแบบ PWA (Install App) ลงในเครื่องคอมพิวเตอร์หรือแท็บเล็ตเพื่อใช้งานได้แม้อยู่ในโหมด Offline
