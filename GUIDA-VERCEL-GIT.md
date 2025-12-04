# 🚀 Guida: Push su Vercel con Git (Deploy Automatico)

Questa guida ti mostra come collegare il tuo repository Git a Vercel per avere deploy automatici ogni volta che fai push su `main`.

---

## 📋 Prerequisiti

- ✅ Account GitHub (gratuito): https://github.com
- ✅ Account Vercel (gratuito): https://vercel.com
- ✅ Git installato sul tuo computer

---

## 🔧 Passo 1: Inizializza Git nel progetto (se non l'hai già fatto)

Apri il terminale nella cartella del progetto e esegui:

```bash
# Inizializza Git
git init

# Aggiungi tutti i file
git add .

# Fai il primo commit
git commit -m "Initial commit: GC Digital Designs website"
```

---

## 📤 Passo 2: Crea repository su GitHub

### 2.1 Crea il repository
1. Vai su **https://github.com** e accedi
2. Clicca su **"+"** in alto a destra → **"New repository"**
3. Compila:
   - **Repository name**: `gc-digital-designs` (o un nome a tua scelta)
   - **Description**: "GC Digital Designs - Professional Web Development & IT Consulting"
   - **Visibility**: Scegli **Public** (gratuito) o **Private**
   - ⚠️ **NON** spuntare "Add a README file" (lo abbiamo già)
4. Clicca **"Create repository"**

### 2.2 Collega il repository locale a GitHub
GitHub ti mostrerà dei comandi. Esegui questi nel terminale:

```bash
# Aggiungi il remote (sostituisci USERNAME con il tuo username GitHub)
git remote add origin https://github.com/USERNAME/gc-digital-designs.git

# Rinomina il branch in main (se necessario)
git branch -M main

# Fai push del codice
git push -u origin main
```

**Nota**: Se ti chiede username e password, usa un **Personal Access Token** invece della password:
- Vai su GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Genera un nuovo token con permessi `repo`
- Usa il token come password

---

## 🔗 Passo 3: Collega GitHub a Vercel

### 3.1 Accedi a Vercel
1. Vai su **https://vercel.com**
2. Clicca **"Sign Up"** (se non hai account)
3. Scegli **"Continue with GitHub"** per collegare direttamente GitHub

### 3.2 Importa il progetto
1. Dopo il login, clicca su **"Add New..."** → **"Project"**
2. Vercel mostrerà tutti i tuoi repository GitHub
3. Trova `gc-digital-designs` e clicca **"Import"**

### 3.3 Configura il deploy
Vercel rileverà automaticamente che è un sito statico. Verifica:

- **Project Name**: `gc-digital-designs` (o personalizzalo)
- **Framework Preset**: Dovrebbe essere "Other" o "Static"
- **Root Directory**: `./` (lascia così)
- **Build Command**: Lascia vuoto (non serve build)
- **Output Directory**: Lascia vuoto (o metti `./`)

### 3.4 Deploy!
1. Clicca **"Deploy"**
2. Aspetta 1-2 minuti
3. Il sito sarà online! 🎉

Vercel ti darà un URL tipo: `https://gc-digital-designs.vercel.app`

---

## 🔄 Passo 4: Deploy Automatico (Funziona già!)

Ora ogni volta che fai push su `main`, Vercel farà il deploy automaticamente!

### Come funziona:
1. Modifichi i file localmente
2. Fai commit:
   ```bash
   git add .
   git commit -m "Descrizione delle modifiche"
   ```
3. Fai push:
   ```bash
   git push origin main
   ```
4. Vercel rileva automaticamente il push
5. Inizia il deploy (vedrai una notifica su Vercel)
6. Il sito si aggiorna in 1-2 minuti!

---

## 📝 Comandi Git Utili

```bash
# Vedere lo stato dei file modificati
git status

# Aggiungere tutti i file modificati
git add .

# Aggiungere un file specifico
git add nome-file.html

# Fare commit
git commit -m "Messaggio descrittivo"

# Fare push su GitHub (e triggerare deploy Vercel)
git push origin main

# Vedere la cronologia dei commit
git log

# Tornare a una versione precedente (se necessario)
git checkout HEAD~1
```

---

## 🎯 Personalizzare l'URL Vercel

1. Vai sul tuo progetto su Vercel
2. Clicca su **"Settings"**
3. Vai su **"Domains"**
4. Clicca **"Add"** e inserisci un nome personalizzato
5. Esempio: `gc-digital-designs` → URL: `https://gc-digital-designs.vercel.app`

---

## 🔍 Monitorare i Deploy

Su Vercel puoi:
- ✅ Vedere tutti i deploy nella sezione **"Deployments"**
- ✅ Vedere i log di build
- ✅ Fare rollback a una versione precedente
- ✅ Vedere preview di ogni branch/pull request

---

## 🆘 Risoluzione Problemi

### Git non è installato
**Mac**:
```bash
# Installa Homebrew se non ce l'hai
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Installa Git
brew install git
```

**Windows**: Scarica da https://git-scm.com/download/win

### Errore "repository not found"
- Verifica che il repository esista su GitHub
- Controlla che il remote URL sia corretto: `git remote -v`
- Verifica i permessi del repository

### Vercel non trova il repository
- Assicurati di aver dato i permessi a Vercel su GitHub
- Vai su GitHub → Settings → Applications → Authorized OAuth Apps
- Verifica che Vercel sia autorizzato

### Il deploy fallisce
- Controlla i log su Vercel
- Verifica che `index.html` sia nella root
- Controlla che i percorsi dei file CSS/JS siano corretti

---

## ✅ Checklist Completa

- [ ] Git inizializzato nel progetto
- [ ] Repository creato su GitHub
- [ ] Codice pushato su GitHub
- [ ] Account Vercel creato
- [ ] Repository collegato a Vercel
- [ ] Primo deploy completato
- [ ] URL personalizzato configurato (opzionale)
- [ ] Testato push automatico

---

## 🎉 Fatto!

Ora hai:
- ✅ Sito online su Vercel
- ✅ Deploy automatico ad ogni push
- ✅ URL personalizzato
- ✅ HTTPS/SSL automatico
- ✅ Performance ottimizzate

Ogni modifica che fai e pushati su `main` verrà automaticamente pubblicata! 🚀

---

**Hai bisogno di aiuto?** Controlla:
- Documentazione Vercel: https://vercel.com/docs
- Documentazione Git: https://git-scm.com/doc
- Documentazione GitHub: https://docs.github.com

