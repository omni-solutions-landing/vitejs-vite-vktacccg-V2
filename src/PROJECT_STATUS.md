# Projektstatus: Omni Solutions AB (osab-ai.se)
**Datum:** 2025-12-11
**Status:** Live (Väntar på DNS-propagering)

## ✅ Vad är klart?
* **Design:** Landningssida komplett med Hero, Tjänster, System, FAQ och Footer.
* **Layout:** Footern och "Tech stack"-sektionen är fixade (full-width).
* **Funktion:** Kontaktformulär kopplat via EmailJS (skickar till admin + autosvar till kund).
* **Hosting:** Sidan driftas på Netlify.
* **Domän (Loopia):**
  * Hemsidan kopplad via DNS (A-record & CNAME).
  * E-post (info@osab-ai.se) vidarebefordras till privat mail (MX-records inlagda).

## 🛠 Teknikstack
* React + Vite
* Tailwind CSS
* EmailJS (Service ID: service_e4lrv82)
* Lucide React (Ikoner)
## 🚀 Hur man startar projektet (Vite)
1. **Installera beroenden:** `npm install` (om du bytt dator/mapp)
2. **Starta utvecklingsserver:** `npm run dev`
3. **Bygg för produktion:** `npm run build`
4. **Förhandsgranska build:** `npm run preview`

## 📌 Att göra vid omstart (Nästa steg)
1. **Verifiera DNS:** Kolla så att sidan laddar korrekt på www.osab-ai.se utan säkerhetsvarningar (SSL sköts oftast auto av Netlify).
2. **Testa formulär:** Gör ett skarpt test från den publicerade sidan för att se att mailet landar i den vidarebefordrade inkorgen.
3. **SEO:** Lägg till meta-beskrivningar och titel-taggar för Google-sökbarhet.
4. **E-post:** Utvärdera om vidarebefordring räcker eller om vi ska köpa Loopia E-post/Google Workspace för att kunna *svara* som info@osab-ai.se.

## 📂 Viktiga konton
* **Netlify:** Hosting av sidan.
* **Loopia:** Domän och DNS.
* **EmailJS:** Hanterar formuläret (gratisnivå).