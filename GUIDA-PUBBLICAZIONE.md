# 🚀 Guida alla Pubblicazione del Sito Web

Questa guida ti mostrerà come pubblicare il tuo sito GC Digital Designs online in modo gratuito e semplice.

## 📋 Opzione 1: Netlify Drop (IL PIÙ SEMPLICE - 2 minuti)

### Passo 1: Prepara i file
Assicurati di avere questi file nella cartella del progetto:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`

### Passo 2: Vai su Netlify Drop
1. Apri il browser e vai su: **https://app.netlify.com/drop**
2. **Non serve registrarsi** per la versione Drop!

### Passo 3: Carica i file
1. **Trascina e rilascia** l'intera cartella del progetto (o tutti i file) nella zona di upload
2. Oppure clicca e seleziona tutti i file

### Passo 4: Ottieni il link
- Netlify genererà automaticamente un URL tipo: `https://random-name-123.netlify.app`
- Il sito sarà online immediatamente! 🎉

### Passo 5: Personalizza l'URL (opzionale)
1. Clicca su "Site settings"
2. Vai su "Change site name"
3. Scegli un nome personalizzato (es: `gc-digital-designs`)
4. Il tuo URL diventerà: `https://gc-digital-designs.netlify.app`

---

## 📋 Opzione 2: Netlify con Account (Raccomandato per aggiornamenti)

### Passo 1: Crea account Netlify
1. Vai su: **https://www.netlify.com**
2. Clicca su "Sign up" (puoi usare GitHub, Google o Email)

### Passo 2: Deploy manuale
1. Accedi al tuo account
2. Vai su "Sites" → "Add new site" → "Deploy manually"
3. Trascina la cartella del progetto
4. Il sito sarà online in pochi secondi!

### Vantaggi:
- ✅ Aggiornamenti facili (basta ricaricare i file)
- ✅ URL personalizzato gratuito
- ✅ SSL/HTTPS automatico
- ✅ Statistiche di traffico

---

## 📋 Opzione 3: Vercel (Alternativa moderna)

### Passo 1: Crea account
1. Vai su: **https://vercel.com**
2. Registrati (puoi usare GitHub, GitLab o Email)

### Passo 2: Deploy
1. Clicca su "Add New Project"
2. Scegli "Import Git Repository" oppure "Deploy" → "Browse"
3. Seleziona la cartella del progetto
4. Clicca "Deploy"

### Vantaggi:
- ✅ Velocità elevata
- ✅ URL personalizzato
- ✅ SSL automatico

---

## 📋 Opzione 4: GitHub Pages (Per sviluppatori)

### Passo 1: Crea repository GitHub
1. Vai su **https://github.com** e crea un account (se non ce l'hai)
2. Clicca su "New repository"
3. Dai un nome (es: `gc-digital-designs`)
4. Scegli "Public"
5. Clicca "Create repository"

### Passo 2: Carica i file
1. Nel repository, clicca "uploading an existing file"
2. Trascina tutti i file del progetto
3. Scrivi un messaggio di commit (es: "Initial commit")
4. Clicca "Commit changes"

### Passo 3: Attiva GitHub Pages
1. Vai su "Settings" del repository
2. Scorri fino a "Pages"
3. In "Source", scegli "main" branch
4. Clicca "Save"
5. Il tuo sito sarà disponibile su: `https://tuousername.github.io/gc-digital-designs`

---

## 🎯 Quale opzione scegliere?

| Opzione | Difficoltà | Tempo | Migliore per |
|---------|-----------|-------|--------------|
| **Netlify Drop** | ⭐ Facilissimo | 2 min | Pubblicazione rapida |
| **Netlify Account** | ⭐⭐ Facile | 5 min | Aggiornamenti frequenti |
| **Vercel** | ⭐⭐ Facile | 5 min | Performance elevate |
| **GitHub Pages** | ⭐⭐⭐ Media | 10 min | Sviluppatori |

**Raccomandazione**: Inizia con **Netlify Drop** per pubblicare subito, poi crea un account Netlify per gestire aggiornamenti futuri.

---

## 🔄 Come aggiornare il sito dopo la pubblicazione

### Con Netlify:
1. Accedi al tuo account Netlify
2. Vai al tuo sito
3. Trascina i nuovi file nella sezione "Deploy"
4. Il sito si aggiorna automaticamente!

### Con Vercel:
1. Accedi a Vercel
2. Vai al tuo progetto
3. Clicca "Redeploy" e carica i nuovi file

---

## 🌐 Personalizzare il dominio (opzionale)

Se vuoi un dominio personalizzato (es: `www.gcdigitaldesigns.com`):

1. **Acquista un dominio** su servizi come:
   - Namecheap
   - Google Domains
   - Cloudflare

2. **Collega il dominio a Netlify/Vercel**:
   - Vai nelle impostazioni del sito
   - Sezione "Domain settings"
   - Aggiungi il tuo dominio
   - Segui le istruzioni per configurare i DNS

---

## ✅ Checklist pre-pubblicazione

Prima di pubblicare, verifica:

- [ ] Tutti i file sono presenti (index.html, styles.css, script.js)
- [ ] Il sito funziona localmente aprendo index.html
- [ ] Le informazioni di contatto sono corrette
- [ ] I testi sono finali e senza errori
- [ ] Hai testato il sito su mobile

---

## 🆘 Problemi comuni

### Il sito non si carica
- Verifica che `index.html` sia nella root della cartella
- Controlla che i percorsi dei file CSS e JS siano corretti

### Le animazioni non funzionano
- Assicurati che `script.js` sia caricato correttamente
- Controlla la console del browser per errori

### Il form non invia email
- Il form attualmente è solo frontend
- Per funzionalità completa, integra con servizi come:
  - Formspree
  - Netlify Forms
  - EmailJS

---

## 📞 Supporto

Se hai problemi, controlla:
- Documentazione Netlify: https://docs.netlify.com
- Documentazione Vercel: https://vercel.com/docs
- Documentazione GitHub Pages: https://docs.github.com/pages

---

**Buona pubblicazione! 🚀**

