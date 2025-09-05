npm run build
rsync -av --delete --exclude '.git' /home/sfandres/GitHub/portfolio/build/ /home/sfandres/GitHub/sfandres.github.io/
