# Content Guide

All editable content lives in `src/data/*.json`. Edit these files directly (in GitHub,
VS Code, or any text editor), commit, and push — no code changes needed for most updates.

## Add a Family Member
Edit `src/data/family-members.json` and add an object:
```json
{ "id": "unique-id", "name": "Full Name", "relationship": "", "summary": "Short bio.", "photos": [], "stories": [] }
```

## Add a Pet
Edit `src/data/pets.json`:
```json
{ "id": "unique-id", "name": "Pet Name", "nicknames": [], "type": "Dog", "status": "Living", "summary": "About the pet.", "photos": [] }
```

## Add a Dear Friend
Edit `src/data/friends.json`:
```json
{ "id": "unique-id", "name": "Name", "relationship": "Dear family friend", "summary": "", "howWeMet": "", "yearsKnown": "", "memories": [], "photos": [] }
```

## Add a Recipe
Edit `src/data/recipes.json`:
```json
{ "id": "unique-id", "title": "Recipe Name", "person": "Connected family member", "ingredients": [], "instructions": [], "story": "", "photos": [] }
```

## Add a Story
Edit `src/data/stories.json`:
```json
{ "id": "unique-id", "title": "Story Title", "category": "Family Tradition", "summary": "", "photos": [] }
```

## Add Photos
Place image files in `public/images/<category>/` (e.g. `public/images/pets/momo.jpg`),
then reference them in the relevant JSON file's `photos` array as `/images/pets/momo.jpg`.

## Adding a Brand New Page
1. Create a new `.astro` file in `src/pages/`
2. Wrap it in `<BaseLayout title="Page Name">...</BaseLayout>`
3. Add the page to the nav list in `src/layouts/BaseLayout.astro`
