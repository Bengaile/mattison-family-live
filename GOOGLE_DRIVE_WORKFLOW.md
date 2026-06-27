# Google Drive Archive Workflow

Google Drive is the long-term archive / source of truth for raw family materials
(originals, high-res scans, video files). The website displays curated/optimized
copies of what lives in Drive.

## Recommended Drive Folder Structure

```
Mattison Family MOmeries/
  00_Project Administration/
    PRD/
    Claude Prompts/
    GitHub/
    README/
    Branding/
  01_Family Members/
  02_Mattison Farms/
  03_Family Pets/
  04_Dear Friends/
  05_Clemson/
  06_Furman/
  07_Photos/
  08_Videos/
  09_Family Recipes/
  10_Stories & Memories/
  11_Legacy Vault/
  12_Family History/
  13_Documents/
  Website Assets/
```

## Intended Submission Workflow (Phase 3)

```
Upload Memories Form (mattisonfamily.org)
  -> Formspree
  -> n8n workflow
  -> Google Sheet submission log
  -> Google Drive folder routing
  -> Email notification to site administrator
```

This is not yet implemented — the website currently just submits via Formspree.
n8n automation, Sheet logging, and Drive routing are Phase 3 work.

## Submission Log Sheet Structure

| Column | Notes |
|---|---|
| Submission ID | |
| Submitted Date | |
| Submitted By | |
| Email | |
| Category | |
| Related Person/Pet/Friend/Farm/School | |
| Year | |
| Location | |
| Description | |
| File Name | |
| Google Drive Folder | |
| Review Status | New / Needs Review / Approved / Published / Archived / Private |
| Publish Status | |
| Notes | |
