# Dossier "videos"

Ce dossier contient les vidéos du projet. Il est créé pour rassembler les fichiers vidéo (mp4, webm, etc.).

Actuellement, ce commit ajoute un fichier README et un fichier `.gitkeep` pour conserver le dossier dans le dépôt même s'il est vide.

Comment ajouter des vidéos :
- Placez vos fichiers vidéo dans ce dossier (ex. `videos/monfilm.mp4`).
- Préférez le format MP4 (H.264) pour une meilleure compatibilité entre navigateurs.
- Si les fichiers sont volumineux, pensez à les héberger sur un service externe (YouTube, Vimeo, CDN) et à intégrer ou lier les vidéos depuis ce dossier.

Exemple d'intégration HTML :

<video controls width="640">
  <source src="videos/monfilm.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la balise <code>&lt;video&gt;</code>.
</video>

N'hésitez pas à me dire si vous voulez :
- un fichier `videos.html` qui affiche automatiquement toutes les vidéos du dossier (statique),
- des placeholders vidéo (petits fichiers d'exemple),
- ou une page listant/présentant les vidéos avec descriptions.
