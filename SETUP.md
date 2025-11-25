# Commandes pour lancer EDEN FOOD

## Étape 1 : Nettoyer le cache et arrêter les processus Node
```powershell
cd C:\Users\laptop\xprojects\EDENFOOD
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
```

## Étape 2 : Installer les dépendances (si nécessaire)
```powershell
npm install
```

## Étape 3 : Vérifier que le build fonctionne
```powershell
npm run build
```

## Étape 4 : Lancer le serveur de développement
```powershell
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

## Pour Vercel :

1. Pousser le code sur GitHub/GitLab/Bitbucket
2. Connecter le repository à Vercel
3. Vercel détectera automatiquement Next.js et déploiera


