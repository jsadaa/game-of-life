#!/usr/bin/env bash

# Pour quitter le script dès la première erreur
set -e

NEW_RELEASE_PATH="/home/leopa/game-of-life/releases/$(date +"%Y%m%d%H%M%S")"

# Ajout de l'empreinte de GitHub dans les hosts connus
ssh-keyscan -t rsa -H github.com > "/home/leopa/.ssh/known_hosts"

# Récupération de la dernière version du QG
git clone git@github.com:jsadaa/game-of-life.git "$NEW_RELEASE_PATH"

# Déplacement dans le répertoire du projet
cd "$NEW_RELEASE_PATH"

echo "Installation de Game of Life dans le répertoire '$NEW_RELEASE_PATH'"

sudo chown -R leopa:www-data "$NEW_RELEASE_PATH"
sudo chmod -R 755 "$NEW_RELEASE_PATH"

cd "$NEW_RELEASE_PATH"

# Suppression des données inutiles
rm -rf "$NEW_RELEASE_PATH/.git"

# Modification du lien symbolique pour pointer sur la dernière version
ln --symbolic --force --no-target-directory "$NEW_RELEASE_PATH" /home/leopa/game-of-life/current
