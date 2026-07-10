@echo off
cd /d C:\Games\CnPgame\AnovelCnPGame
git checkout -b cursor/fix-truth-panel-overflow
git add style.css script.js
git commit -m "Fix truth panel overflow and connection rendering

- Remove overflow:hidden from evidence-table-modal, evidence-panel, evidence-table-body
- Add overflow:visible to truth-panel and truth-section
- Fix truth-central-node CSS positioning
- Fix evidence node positioning with proper transform
- Update renderConnections to handle truth node correctly"
