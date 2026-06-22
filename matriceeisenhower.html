<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matrice d'Eisenhower</title>
    <style>
        * { box-sizing:border-box; margin:0; padding:0; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; }
        html, body { height:100%; width:100%; background:#f0f4f8; overflow-x:hidden; }
        body { display:flex; flex-direction:column; align-items:center; padding:20px; min-height:100vh; }
        h1 { font-size:1.8rem; color:#2d3748; margin-bottom:6px; text-align:center; }
        .subtitle { color:#718096; margin-bottom:10px; font-size:.9rem; }

        /* ── OBJECTIFS STRATÉGIQUES ── */
        .strategic-section {
            width:100%; margin-bottom:14px;
        }
        .strategic-panel {
            background:linear-gradient(135deg,#1a202c 0%,#2d3748 100%);
            border:2px solid #4a5568;
            border-radius:14px;
            padding:16px 18px;
            box-shadow:0 6px 20px rgba(0,0,0,.25);
            position:relative;
            overflow:hidden;
        }
        .strategic-panel::before {
            content:'';
            position:absolute; top:0; left:0; right:0; height:3px;
            background:linear-gradient(90deg,#667eea,#764ba2,#f6ad55,#68d391,#63b3ed);
        }
        .strategic-header {
            display:flex; align-items:center; gap:10px;
            margin-bottom:12px; flex-wrap:wrap;
        }
        .strategic-title {
            font-size:1.05rem; font-weight:800;
            color:white; letter-spacing:.03em;
        }
        .strategic-badge {
            font-size:.68rem; font-weight:700; padding:2px 10px;
            border-radius:20px;
            background:linear-gradient(135deg,#667eea,#764ba2);
            color:white;
        }
        .strategic-count {
            font-size:.7rem; color:#a0aec0;
            background:rgba(255,255,255,.1);
            padding:2px 9px; border-radius:20px;
            font-weight:600; margin-left:auto;
        }

        .strategic-list {
            display:flex; flex-wrap:wrap; gap:8px;
            min-height:60px; max-height:220px;
            overflow-y:auto; margin-bottom:10px;
            padding:4px 2px;
            scrollbar-width:thin; scrollbar-color:#4a5568 transparent;
        }
        .strategic-list::-webkit-scrollbar { width:5px; height:5px; }
        .strategic-list::-webkit-scrollbar-thumb { background:#4a5568; border-radius:10px; }

        .strategic-card {
            display:flex; flex-direction:column; gap:4px;
            background:rgba(255,255,255,.07);
            border:1px solid rgba(255,255,255,.15);
            border-left:4px solid #667eea;
            border-radius:10px; padding:9px 12px;
            font-size:.83rem; color:#e2e8f0;
            min-width:160px; max-width:260px;
            position:relative; cursor:grab; flex-shrink:0;
            transition:background .2s, box-shadow .2s;
        }
        .strategic-card:hover { background:rgba(255,255,255,.12); box-shadow:0 3px 12px rgba(102,126,234,.3); }
        .strategic-card.done  { opacity:.6; }
        .strategic-card.done .strategic-card-text { text-decoration:line-through; color:#718096; }
        .strategic-card.editing { background:rgba(255,255,255,.15); box-shadow:0 0 0 2px #667eea; cursor:default; }
        .strategic-card.dragging { opacity:.3; transform:rotate(1.5deg); cursor:grabbing; }

        .strategic-card-main { display:flex; align-items:flex-start; gap:6px; }
        .strategic-card-check { accent-color:#667eea; width:14px; height:14px; cursor:pointer; flex-shrink:0; margin-top:2px; }
        .strategic-card-text  { flex:1; word-break:break-word; font-weight:500; line-height:1.4; }
        .strategic-card-actions { display:flex; gap:2px; opacity:0; transition:opacity .2s; flex-shrink:0; }
        .strategic-card:hover .strategic-card-actions { opacity:1; }
        .strategic-card.editing .strategic-card-actions,
        .strategic-card.editing .strategic-card-text,
        .strategic-card.editing .strategic-card-check,
        .strategic-card.editing .points-badge { display:none; }

        .strategic-edit-zone { display:none; flex-direction:column; gap:6px; padding:4px 0 2px; }
        .strategic-card.editing .strategic-edit-zone { display:flex; }
        .strategic-edit-input {
            flex:1; padding:5px 9px;
            border:2px solid #667eea; border-radius:8px;
            font-size:.82rem; outline:none;
            background:rgba(255,255,255,.9); color:#2d3748;
        }
        .strategic-edit-row-meta { display:flex; align-items:center; gap:6px; flex-wrap:wrap; }

        .strategic-card-tags { display:flex; flex-wrap:wrap; gap:3px; margin-top:4px; padding-left:20px; }

        /* Add task dans strategic */
        .strategic-add {
            display:flex; gap:5px; flex-wrap:wrap; align-items:center;
        }
        .strategic-add input[type="text"] {
            flex:1; min-width:80px; padding:6px 10px;
            border:1px solid rgba(255,255,255,.2); border-radius:8px;
            font-size:.78rem; outline:none;
            background:rgba(255,255,255,.1); color:white;
        }
        .strategic-add input[type="text"]::placeholder { color:#a0aec0; }
        .strategic-add input[type="text"]:focus {
            border-color:#667eea; background:rgba(255,255,255,.18);
        }
        .strategic-add button.btn-add-strategic {
            padding:6px 12px; border:none; border-radius:8px;
            background:linear-gradient(135deg,#667eea,#764ba2);
            color:white; font-size:.9rem; cursor:pointer;
            transition:opacity .2s; flex-shrink:0;
        }
        .strategic-add button.btn-add-strategic:hover { opacity:.85; }

        /* ── TOOLBAR ── */
        .toolbar { display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size:.8rem; color:#718096; margin-bottom:12px; padding:8px 16px; background:white; border-radius:20px; box-shadow:0 2px 6px rgba(0,0,0,.08); width:100%; justify-content:center; }
        .save-dot { width:8px; height:8px; border-radius:50%; background:#68d391; transition:background .3s; flex-shrink:0; }
        .save-dot.saving { background:#f6ad55; }
        .save-dot.saved  { background:#68d391; }
        .toolbar-sep { width:1px; height:20px; background:#e2e8f0; margin:0 4px; }
        .btn-toolbar { font-size:.75rem; padding:5px 12px; border-radius:20px; border:none; cursor:pointer; font-weight:600; transition:all .2s; display:flex; align-items:center; gap:5px; }
        .btn-export { background:#667eea; color:white; } .btn-export:hover { background:#5a67d8; }
        .btn-import { background:#68d391; color:white; } .btn-import:hover { background:#48bb78; }
        .btn-reset  { background:white; color:#fc8181; border:1px solid #fc8181; } .btn-reset:hover { background:#fc8181; color:white; }

        /* ── GLOBAL TAG MANAGER ── */
        .global-tag-manager { width:100%; margin-bottom:10px; background:white; border-radius:12px; padding:10px 16px; box-shadow:0 2px 8px rgba(0,0,0,.07); display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
        .gtm-label { font-size:.78rem; font-weight:700; color:#4a5568; white-space:nowrap; }
        .gtm-tags  { display:flex; flex-wrap:wrap; gap:6px; flex:1; }
        .gtm-tag   { display:inline-flex; align-items:center; gap:4px; font-size:.7rem; font-weight:600; padding:2px 9px; border-radius:20px; }
        .gtm-tag .gtm-del { background:none; border:none; cursor:pointer; font-size:.6rem; opacity:.5; color:inherit; padding:0 1px; }
        .gtm-tag .gtm-del:hover { opacity:1; }
        .gtm-empty { font-size:.73rem; color:#a0aec0; font-style:italic; }

        /* ── FILTRE ── */
        .tag-filter-bar { width:100%; margin-bottom:10px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
        .tag-filter-label { font-size:.78rem; color:#718096; font-weight:600; }
        .filter-tag { font-size:.7rem; font-weight:600; padding:3px 10px; border-radius:20px; cursor:pointer; border:2px solid transparent; transition:all .2s; opacity:.7; }
        .filter-tag:hover { opacity:1; }
        .filter-tag.active { border-color:#2d3748; opacity:1; }
        .filter-clear { font-size:.7rem; padding:3px 10px; border-radius:20px; border:1px solid #e2e8f0; background:white; color:#718096; cursor:pointer; }
        .filter-clear:hover { background:#e2e8f0; }

        /* ── LAYOUT ── */
        .main-layout { width:100%; display:flex; flex-direction:column; flex:1; gap:10px; }
        .axis-x-labels { display:flex; margin-left:44px; gap:10px; }
        .axis-x-labels span { flex:1; text-align:center; font-weight:bold; font-size:.95rem; color:#4a5568; }
        .axis-row { display:flex; gap:10px; flex:1; min-height:0; }
        .axis-y-labels { display:flex; flex-direction:column; gap:10px; width:34px; flex-shrink:0; }
        .axis-y-labels span { flex:1; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:.9rem; color:#4a5568; writing-mode:vertical-rl; transform:rotate(180deg); }
        .matrix-grid { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; gap:10px; flex:1; min-height:0; }

        /* ── QUADRANTS ── */
        .quadrant { border-radius:12px; padding:14px; display:flex; flex-direction:column; box-shadow:0 4px 12px rgba(0,0,0,.1); min-height:0; overflow:hidden; }
        .q-planifier { background:#f0fff4; border:2px solid #68d391; }
        .q-faire     { background:#fff5f5; border:2px solid #fc8181; }
        .q-eliminer  { background:#ebf8ff; border:2px solid #63b3ed; }
        .q-deleguer  { background:#fffaf0; border:2px solid #f6ad55; }
        .drop-zone-active { outline:3px dashed #667eea !important; outline-offset:2px; background-color:rgba(102,126,234,.05) !important; }

        .quadrant-header { display:flex; align-items:center; margin-bottom:6px; gap:6px; flex-wrap:wrap; flex-shrink:0; }
        .quadrant-icon  { font-size:1.3rem; }
        .quadrant-title { font-size:.9rem; font-weight:700; color:#2d3748; }
        .quadrant-action { font-size:.7rem; font-weight:600; padding:2px 9px; border-radius:20px; margin-left:auto; }
        .q-planifier .quadrant-action { background:#68d391; color:white; }
        .q-faire     .quadrant-action { background:#fc8181; color:white; }
        .q-eliminer  .quadrant-action { background:#63b3ed; color:white; }
        .q-deleguer  .quadrant-action { background:#f6ad55; color:white; }

        /* ── BOUTON COLLECTER SCORE ── */
        .btn-collect {
            display:flex; align-items:center; gap:4px; font-size:.7rem; font-weight:600;
            padding:4px 10px; border-radius:20px; border:none; cursor:pointer;
            background:linear-gradient(135deg,#667eea,#764ba2);
            color:white; transition:all .2s; margin-bottom:6px; align-self:flex-end; flex-shrink:0;
            box-shadow:0 2px 6px rgba(102,126,234,.35);
        }
        .btn-collect:hover { transform:scale(1.05); box-shadow:0 4px 12px rgba(102,126,234,.5); }
        .btn-collect:active { transform:scale(.97); }
        .badge-done { background:rgba(255,255,255,.3); color:white; font-size:.65rem; font-weight:700; padding:1px 6px; border-radius:20px; }

        /* ── LISTE AVEC ASCENSEUR ── */
        .task-list { list-style:none; flex:1; overflow-y:auto; min-height:0; padding-right:4px; scrollbar-width:thin; scrollbar-color:#cbd5e0 transparent; }
        .task-list::-webkit-scrollbar { width:5px; }
        .task-list::-webkit-scrollbar-track { background:transparent; }
        .task-list::-webkit-scrollbar-thumb { background:#cbd5e0; border-radius:10px; }

        /* ── ANIMATIONS ── */
        @keyframes fadeOut   { from{opacity:1;transform:translateX(0)}    to{opacity:0;transform:translateX(40px)} }
        @keyframes fadeIn    { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slideInUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scoreFloat {
            0%   { opacity:1; transform:translateY(0) scale(1); }
            100% { opacity:0; transform:translateY(-60px) scale(1.5); }
        }
        @keyframes confettiFall {
            0%   { transform:translateY(0) rotate(0deg) scale(1); opacity:1; }
            100% { transform:translateY(-90px) rotate(720deg) scale(.5); opacity:0; }
        }
        @keyframes scoreBump {
            0%   { transform:scale(1); }
            40%  { transform:scale(1.5); }
            100% { transform:scale(1); }
        }
        @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
        @keyframes pointsUpdate {
            0%   { transform:scale(1); }
            50%  { transform:scale(1.2); box-shadow:0 0 8px rgba(102,126,234,.6); }
            100% { transform:scale(1); }
        }

        .task-removing { animation:fadeOut .35s ease forwards; }
        .task-adding   { animation:fadeIn  .3s ease forwards; }

        /* ── TÂCHES ── */
        .task-item {
            display:flex; flex-direction:column; padding:7px 9px; margin-bottom:6px;
            background:rgba(255,255,255,.78); border-radius:8px; font-size:.84rem;
            color:#4a5568; box-shadow:0 1px 4px rgba(0,0,0,.06);
            transition:background .2s,box-shadow .2s; position:relative; cursor:grab; flex-shrink:0;
        }
        .task-item:hover { background:rgba(255,255,255,.97); }
        .task-item.done  { opacity:.75; }
        .task-item.done .task-text { text-decoration:line-through; color:#a0aec0; }
        .task-item.editing { background:#fff; box-shadow:0 0 0 2px #667eea; cursor:default; }
        .task-item.dragging { opacity:.3; transform:rotate(1.5deg); cursor:grabbing; }
        .task-item.drag-over-top    { border-top:3px solid #667eea; }
        .task-item.drag-over-bottom { border-bottom:3px solid #667eea; }

        .drag-handle { cursor:grab; color:#cbd5e0; font-size:.85rem; flex-shrink:0; padding:0 2px; user-select:none; }
        .drag-handle:hover { color:#667eea; }

        .task-main { display:flex; align-items:center; gap:6px; width:100%; }
        .task-text { flex:1; word-break:break-word; cursor:default; line-height:1.4; }
        .task-actions { display:flex; gap:3px; flex-shrink:0; opacity:0; transition:opacity .2s; }
        .task-item:hover .task-actions { opacity:1; }
        .task-item input[type="checkbox"] { accent-color:#667eea; width:14px; height:14px; cursor:pointer; flex-shrink:0; }

        .btn-action { background:none; border:none; cursor:pointer; font-size:.8rem; padding:2px 5px; border-radius:5px; transition:color .2s,background .2s; line-height:1; }
        .btn-edit   { color:#667eea; } .btn-edit:hover   { background:#ebf4ff; }
        .btn-remove { color:#a0aec0; } .btn-remove:hover { color:#e53e3e; background:#fff5f5; }
        .btn-tag    { color:#b794f4; } .btn-tag:hover    { background:#faf5ff; }

        /* ── BADGE POINTS ── */
        .points-badge {
            display:inline-flex; align-items:center; gap:2px;
            font-size:.64rem; font-weight:700; padding:2px 7px;
            border-radius:20px; background:linear-gradient(135deg,#667eea,#764ba2);
            color:white; flex-shrink:0; white-space:nowrap;
            transition:all .3s;
        }
        .points-badge.updated { animation:pointsUpdate .4s ease; }

        /* ── SÉLECTEUR DE POINTS ── */
        .points-select {
            padding:4px 6px; border:1px solid #e2e8f0; border-radius:8px;
            font-size:.75rem; outline:none; background:white; color:#4a5568;
            cursor:pointer; font-weight:600; flex-shrink:0;
        }
        .points-select:focus { border-color:#667eea; }

        /* ── SÉLECTEUR DE POINTS EN MODE ÉDITION ── */
        .edit-points-select {
            padding:4px 8px; border:2px solid #667eea; border-radius:8px;
            font-size:.78rem; outline:none; background:#f7f8ff; color:#4a5568;
            cursor:pointer; font-weight:700; flex-shrink:0;
            transition:border-color .2s, box-shadow .2s;
        }
        .edit-points-select:focus {
            border-color:#764ba2;
            box-shadow:0 0 0 3px rgba(102,126,234,.2);
            background:white;
        }

        /* Label pts dans edit zone */
        .edit-pts-label {
            font-size:.72rem; font-weight:600; color:#667eea;
            white-space:nowrap; flex-shrink:0;
        }

        /* ── TAGS ── */
        .task-tags,.backlog-card-tags,.success-card-tags { display:flex; flex-wrap:wrap; gap:3px; margin-top:4px; padding-left:20px; }
        .backlog-card-tags,.success-card-tags { padding-left:0; }
        .tag { display:inline-flex; align-items:center; gap:3px; font-size:.66rem; font-weight:600; padding:2px 7px; border-radius:20px; }
        .tag .tag-remove { background:none; border:none; cursor:pointer; font-size:.58rem; padding:0 1px; opacity:.55; line-height:1; color:inherit; }
        .tag .tag-remove:hover { opacity:1; }

        /* ── TAG PANEL ── */
        .tag-panel { display:none; flex-direction:column; gap:7px; margin-top:7px; padding:9px 11px; background:#faf5ff; border:1px solid #d6bcfa; border-radius:10px; }
        .tag-panel.open { display:flex; }
        .tag-panel-title { font-size:.68rem; font-weight:700; color:#805ad5; }
        .existing-tags-row { display:flex; flex-wrap:wrap; gap:4px; min-height:16px; }
        .existing-tag-btn { display:inline-flex; align-items:center; gap:3px; font-size:.66rem; font-weight:600; padding:2px 8px; border-radius:20px; border:2px solid transparent; cursor:pointer; transition:all .15s; opacity:.8; }
        .existing-tag-btn:hover  { opacity:1; transform:scale(1.05); }
        .existing-tag-btn.applied { border-color:#2d3748; opacity:1; }
        .tag-separator { border:none; border-top:1px solid #e9d8fd; }
        .new-tag-row { display:flex; align-items:center; gap:5px; flex-wrap:wrap; }
        .tag-input { padding:3px 9px; border:1px solid #b794f4; border-radius:20px; font-size:.7rem; outline:none; width:110px; background:white; }
        .tag-input:focus { border-color:#805ad5; }
        .tag-color-picker { display:flex; gap:3px; flex-wrap:wrap; }
        .color-dot { width:12px; height:12px; border-radius:50%; cursor:pointer; border:2px solid transparent; transition:transform .15s,border-color .15s; flex-shrink:0; }
        .color-dot:hover    { transform:scale(1.3); }
        .color-dot.selected { border-color:#2d3748; transform:scale(1.2); }
        .btn-add-tag { padding:3px 10px; border:none; border-radius:20px; background:#b794f4; color:white; font-size:.68rem; font-weight:600; cursor:pointer; white-space:nowrap; }
        .btn-add-tag:hover { background:#805ad5; }

        /* ── EDIT ZONE ── */
        .edit-zone {
            display:none; flex-direction:column; gap:6px;
            margin-top:6px; padding:8px 10px;
            background:#f7f8ff; border-radius:8px;
            border:1px solid #e2e8f0;
        }
        .task-item.editing .edit-zone   { display:flex; }
        .task-item.editing .task-text,
        .task-item.editing .task-actions,
        .task-item.editing .drag-handle,
        .task-item.editing .points-badge { display:none; }
        .task-item.editing input[type="checkbox"] { display:none; }

        /* Ligne 1 de l'éditeur : champ texte */
        .edit-row-text { display:flex; align-items:center; gap:6px; }
        .edit-input {
            flex:1; padding:6px 10px; border:2px solid #667eea;
            border-radius:8px; font-size:.84rem; outline:none;
            color:#2d3748; background:white;
            transition:border-color .2s, box-shadow .2s;
        }
        .edit-input:focus { border-color:#764ba2; box-shadow:0 0 0 3px rgba(102,126,234,.15); }

        /* Ligne 2 de l'éditeur : points + boutons */
        .edit-row-meta { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }

        .btn-save-edit {
            padding:5px 12px; border:none; border-radius:8px;
            background:linear-gradient(135deg,#667eea,#764ba2);
            color:white; font-size:.76rem; font-weight:600;
            cursor:pointer; white-space:nowrap; transition:opacity .2s;
            margin-left:auto;
        }
        .btn-save-edit:hover { opacity:.88; }
        .btn-cancel-edit {
            padding:5px 9px; border:1px solid #e2e8f0; border-radius:8px;
            background:white; color:#718096; font-size:.76rem;
            cursor:pointer; white-space:nowrap;
        }
        .btn-cancel-edit:hover { background:#f7fafc; border-color:#cbd5e0; }

        /* ── ADD TASK ── */
        .add-task { display:flex; gap:5px; margin-top:8px; flex-shrink:0; flex-wrap:wrap; align-items:center; }
        .add-task input[type="text"] { flex:1; min-width:60px; padding:6px 9px; border:1px solid #e2e8f0; border-radius:8px; font-size:.78rem; outline:none; background:rgba(255,255,255,.85); }
        .add-task input[type="text"]:focus { border-color:#667eea; background:white; }
        .add-task button.btn-add-task { padding:6px 11px; border:none; border-radius:8px; background:#667eea; color:white; font-size:.9rem; cursor:pointer; transition:background .2s; flex-shrink:0; }
        .add-task button.btn-add-task:hover { background:#5a67d8; }

        /* ── BACKLOG ── */
        .backlog-section { width:100%; flex-shrink:0; }
        .backlog-panel { background:#faf5ff; border:2px solid #b794f4; border-radius:12px; padding:14px 16px; box-shadow:0 4px 12px rgba(0,0,0,.08); }
        .backlog-panel.drop-zone-active { outline:3px dashed #667eea; outline-offset:2px; }
        .backlog-header { display:flex; align-items:center; gap:10px; margin-bottom:10px; flex-wrap:wrap; }
        .backlog-title  { font-size:1rem; font-weight:700; color:#2d3748; }
        .backlog-badge  { font-size:.7rem; font-weight:600; padding:2px 9px; border-radius:20px; background:#b794f4; color:white; }
        .backlog-count  { font-size:.7rem; color:#805ad5; background:#e9d8fd; padding:2px 9px; border-radius:20px; font-weight:600; margin-left:auto; }
        .backlog-list { display:flex; flex-wrap:wrap; gap:8px; min-height:70px; max-height:200px; overflow-y:auto; margin-bottom:10px; padding:4px 2px; scrollbar-width:thin; scrollbar-color:#d6bcfa transparent; }
        .backlog-list::-webkit-scrollbar { height:5px; width:5px; }
        .backlog-list::-webkit-scrollbar-thumb { background:#d6bcfa; border-radius:10px; }

        .backlog-card { display:flex; flex-direction:column; gap:3px; background:white; border:1px solid #d6bcfa; border-radius:10px; padding:8px 11px; font-size:.82rem; color:#4a5568; box-shadow:0 1px 4px rgba(0,0,0,.06); min-width:140px; max-width:230px; position:relative; transition:box-shadow .2s; cursor:grab; flex-shrink:0; }
        .backlog-card:hover { box-shadow:0 3px 10px rgba(183,148,244,.3); }
        .backlog-card.editing { box-shadow:0 0 0 2px #667eea; cursor:default; }
        .backlog-card.dragging { opacity:.3; transform:rotate(1.5deg); cursor:grabbing; }
        .backlog-card-main { display:flex; align-items:flex-start; gap:5px; }
        .backlog-card-text { flex:1; word-break:break-word; font-weight:500; line-height:1.4; }
        .backlog-card-actions { display:flex; gap:2px; opacity:0; transition:opacity .2s; flex-shrink:0; }
        .backlog-card:hover .backlog-card-actions { opacity:1; }
        .backlog-card.editing .backlog-card-actions,
        .backlog-card.editing .backlog-card-text,
        .backlog-card.editing .points-badge { display:none; }
        .backlog-edit-zone { display:none; flex-direction:column; gap:6px; padding:6px 0 2px; }
        .backlog-card.editing .backlog-edit-zone { display:flex; }
        .backlog-edit-input { flex:1; min-width:70px; padding:5px 8px; border:2px solid #667eea; border-radius:6px; font-size:.8rem; outline:none; background:white; }
        .backlog-edit-row-meta { display:flex; align-items:center; gap:6px; flex-wrap:wrap; }

        /* ══════════════════════════════════════
           SECTION TÂCHES RÉUSSIES
        ══════════════════════════════════════ */
        .success-section { width:100%; flex-shrink:0; }
        .success-panel {
            background:linear-gradient(135deg,#f6fff8 0%,#fffff0 100%);
            border:2px solid #68d391; border-radius:12px;
            padding:16px 18px; box-shadow:0 4px 16px rgba(104,211,145,.18);
            position:relative; overflow:hidden;
        }
        .success-panel::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#68d391,#f6e05e,#fc8181,#b794f4,#63b3ed); }
        .success-header { display:flex; align-items:center; gap:10px; margin-bottom:14px; flex-wrap:wrap; }
        .success-title  { font-size:1rem; font-weight:700; color:#2d3748; }
        .success-badge  { font-size:.7rem; font-weight:600; padding:2px 9px; border-radius:20px; background:#68d391; color:white; }
        .score-display  { display:flex; align-items:center; gap:10px; margin-left:auto; flex-wrap:wrap; }
        .score-box { display:flex; align-items:center; gap:8px; background:linear-gradient(135deg,#667eea,#764ba2); color:white; padding:6px 16px; border-radius:20px; font-weight:700; font-size:.88rem; box-shadow:0 3px 10px rgba(102,126,234,.35); }
        .score-value { font-size:1.25rem; font-weight:800; display:inline-block; }
        .score-value.bump { animation:scoreBump .45s ease; }
        .btn-reset-score { font-size:.72rem; padding:5px 12px; border-radius:20px; border:1px solid #fc8181; background:white; color:#fc8181; cursor:pointer; font-weight:600; transition:all .2s; display:flex; align-items:center; gap:4px; }
        .btn-reset-score:hover { background:#fc8181; color:white; }

        .success-list { display:flex; flex-direction:column; gap:8px; max-height:280px; overflow-y:auto; padding:4px 2px; margin-bottom:4px; scrollbar-width:thin; scrollbar-color:#68d391 transparent; }
        .success-list::-webkit-scrollbar { width:5px; }
        .success-list::-webkit-scrollbar-thumb { background:#9ae6b4; border-radius:10px; }

        .success-card { display:flex; flex-direction:column; gap:6px; background:white; border:1px solid #9ae6b4; border-left:4px solid #68d391; border-radius:10px; padding:10px 14px; font-size:.84rem; color:#4a5568; box-shadow:0 2px 8px rgba(104,211,145,.15); position:relative; animation:slideInUp .35s ease forwards; }
        .success-card-row1 { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
        .success-icon { font-size:1.1rem; flex-shrink:0; }
        .success-card-text { flex:1; font-weight:600; color:#718096; text-decoration:line-through; text-decoration-color:#68d391; text-decoration-thickness:2px; word-break:break-word; line-height:1.4; }
        .success-pts-badge { display:inline-flex; align-items:center; gap:3px; font-size:.7rem; font-weight:700; padding:3px 10px; border-radius:20px; background:linear-gradient(135deg,#68d391,#38a169); color:white; flex-shrink:0; white-space:nowrap; }
        .btn-success-del { background:none; border:none; cursor:pointer; font-size:.75rem; color:#cbd5e0; flex-shrink:0; padding:2px 4px; border-radius:4px; transition:all .2s; }
        .btn-success-del:hover { color:#e53e3e; background:#fff5f5; }
        .success-card-row2 { display:flex; align-items:center; gap:8px; flex-wrap:wrap; padding-left:28px; }
        .success-card-meta { font-size:.68rem; color:#a0aec0; }
        .success-empty { font-size:.82rem; color:#a0aec0; font-style:italic; padding:12px 4px; text-align:center; }

        /* ── SCORE FLOTTANT ── */
        .score-float { position:fixed; pointer-events:none; z-index:9999; font-size:1.5rem; font-weight:800; background:linear-gradient(135deg,#667eea,#68d391); -webkit-background-clip:text; -webkit-text-fill-color:transparent; filter:drop-shadow(0 2px 6px rgba(102,126,234,.4)); animation:scoreFloat 1s ease forwards; }
        .confetti-piece { position:fixed; pointer-events:none; z-index:9998; width:7px; height:7px; border-radius:2px; animation:confettiFall .8s ease forwards; }

        /* ── IMPORT MODAL ── */
        .modal-overlay { display:none; position:fixed; inset:0; background:rgba(0,0,0,.45); z-index:2000; align-items:center; justify-content:center; }
        .modal-overlay.open { display:flex; }
        .modal { background:white; border-radius:16px; padding:26px; max-width:460px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,.25); }
        .modal h3 { font-size:1.05rem; color:#2d3748; margin-bottom:10px; }
        .modal p  { font-size:.83rem; color:#718096; margin-bottom:12px; }
        .modal textarea { width:100%; height:130px; border:1px solid #e2e8f0; border-radius:8px; padding:9px; font-size:.76rem; font-family:monospace; outline:none; resize:vertical; }
        .modal textarea:focus { border-color:#667eea; }
        .modal-actions { display:flex; gap:8px; margin-top:12px; justify-content:flex-end; }
        .btn-modal-ok     { padding:7px 16px; border:none; border-radius:8px; background:#667eea; color:white; font-size:.83rem; font-weight:600; cursor:pointer; }
        .btn-modal-ok:hover { background:#5a67d8; }
        .btn-modal-cancel { padding:7px 12px; border:1px solid #e2e8f0; border-radius:8px; background:white; color:#718096; font-size:.83rem; cursor:pointer; }
        .btn-modal-cancel:hover { background:#f7fafc; }
        .modal-error { color:#e53e3e; font-size:.76rem; margin-top:5px; display:none; }

        /* ── TOAST ── */
        .toast { position:fixed; bottom:24px; right:24px; background:#2d3748; color:white; padding:10px 16px; border-radius:10px; font-size:.82rem; box-shadow:0 4px 15px rgba(0,0,0,.2); opacity:0; transform:translateY(20px); transition:opacity .3s,transform .3s; z-index:3000; }
        .toast.show { opacity:1; transform:translateY(0); }
    </style>
</head>
<body>

<!-- ══════════════════════════════════════════
     SECTION OBJECTIFS STRATÉGIQUES (tout en haut)
══════════════════════════════════════════ -->
<div class="strategic-section">
    <div class="strategic-panel">
        <div class="strategic-header">
            <span style="font-size:1.3rem">🎯</span>
            <span class="strategic-title">Objectifs Stratégiques</span>
            <span class="strategic-badge">VISION</span>
            <span class="strategic-count" id="strategic-count">0 objectif</span>
        </div>
        <div class="strategic-list" id="strategic-list"></div>
        <div class="strategic-add">
            <input type="text" placeholder="Ajouter un objectif stratégique..."
                   onkeydown="addStrategicOnEnter(event)">
            <select class="points-select" id="pts-strategic" style="background:rgba(255,255,255,.15);color:white;border-color:rgba(255,255,255,.25);">
                <option value="5">5 pts</option>
                <option value="15" selected>15 pts</option>
                <option value="30">30 pts</option>
                <option value="60">60 pts</option>
                <option value="90">90 pts</option>
            </select>
            <button class="btn-add-strategic" onclick="addStrategicTask(this)">+</button>
        </div>
    </div>
</div>

<h1>🧭 Matrice d'Eisenhower</h1>
<p class="subtitle">Priorisez vos tâches selon leur urgence et leur importance</p>

<!-- TOOLBAR -->
<div class="toolbar">
    <div class="save-dot saved" id="save-dot"></div>
    <span id="save-label">Prêt</span>
    <div class="toolbar-sep"></div>
    <button class="btn-toolbar btn-export" onclick="exportData()">⬇️ Exporter</button>
    <button class="btn-toolbar btn-import" onclick="openImportModal()">⬆️ Importer</button>
    <div class="toolbar-sep"></div>
    <button class="btn-toolbar btn-reset"  onclick="resetAll()">🔄 Réinitialiser</button>
</div>

<!-- GLOBAL TAG MANAGER -->
<div class="global-tag-manager">
    <span class="gtm-label">🏷️ Tags :</span>
    <div class="gtm-tags" id="gtm-tags"><span class="gtm-empty">Aucun tag créé</span></div>
</div>

<!-- FILTRE -->
<div class="tag-filter-bar" id="tag-filter-bar">
    <span class="tag-filter-label">🔍 Filtrer :</span>
    <button class="filter-clear" onclick="clearFilter()">✕ Tous</button>
</div>

<!-- LAYOUT PRINCIPAL -->
<div class="main-layout">

    <div class="axis-x-labels">
        <span>🟢 PAS URGENT</span>
        <span>🔴 URGENT</span>
    </div>

    <div class="axis-row">
        <div class="axis-y-labels">
            <span>⭐ IMPORTANT</span>
            <span>📌 PAS IMPORTANT</span>
        </div>

        <div class="matrix-grid">

            <!-- Q2 -->
            <div class="quadrant q-planifier" id="zone-list-q2"
                 ondragover="onDragOverZone(event,'list-q2')"
                 ondragleave="onDragLeaveZone(event,'list-q2')"
                 ondrop="onDropZone(event,'list-q2')">
                <div class="quadrant-header">
                    <span class="quadrant-icon">📅</span>
                    <span class="quadrant-title">Pas Urgent & Important</span>
                    <span class="quadrant-action">PLANIFIER</span>
                </div>
                <button class="btn-collect" onclick="collectScore('list-q2',this)">
                    🏆 Collecter Score <span class="badge-done" id="badge-q2">0</span>
                </button>
                <ul class="task-list" id="list-q2"></ul>
                <div class="add-task">
                    <input type="text" placeholder="Ajouter..." onkeydown="addOnEnter(event,'list-q2','badge-q2')">
                    <select class="points-select" id="pts-list-q2">
                        <option value="5">5 pts</option>
                        <option value="15" selected>15 pts</option>
                        <option value="30">30 pts</option>
                        <option value="60">60 pts</option>
                        <option value="90">90 pts</option>
                    </select>
                    <button class="btn-add-task" onclick="addTask('list-q2',this,'badge-q2')">+</button>
                </div>
            </div>

            <!-- Q1 -->
            <div class="quadrant q-faire" id="zone-list-q1"
                 ondragover="onDragOverZone(event,'list-q1')"
                 ondragleave="onDragLeaveZone(event,'list-q1')"
                 ondrop="onDropZone(event,'list-q1')">
                <div class="quadrant-header">
                    <span class="quadrant-icon">🔥</span>
                    <span class="quadrant-title">Urgent & Important</span>
                    <span class="quadrant-action">FAIRE</span>
                </div>
                <button class="btn-collect" onclick="collectScore('list-q1',this)">
                    🏆 Collecter Score <span class="badge-done" id="badge-q1">0</span>
                </button>
                <ul class="task-list" id="list-q1"></ul>
                <div class="add-task">
                    <input type="text" placeholder="Ajouter..." onkeydown="addOnEnter(event,'list-q1','badge-q1')">
                    <select class="points-select" id="pts-list-q1">
                        <option value="5">5 pts</option>
                        <option value="15" selected>15 pts</option>
                        <option value="30">30 pts</option>
                        <option value="60">60 pts</option>
                        <option value="90">90 pts</option>
                    </select>
                    <button class="btn-add-task" onclick="addTask('list-q1',this,'badge-q1')">+</button>
                </div>
            </div>

            <!-- Q4 -->
            <div class="quadrant q-eliminer" id="zone-list-q4"
                 ondragover="onDragOverZone(event,'list-q4')"
                 ondragleave="onDragLeaveZone(event,'list-q4')"
                 ondrop="onDropZone(event,'list-q4')">
                <div class="quadrant-header">
                    <span class="quadrant-icon">🗑️</span>
                    <span class="quadrant-title">Pas Urgent & Pas Important</span>
                    <span class="quadrant-action">ÉLIMINER</span>
                </div>
                <button class="btn-collect" onclick="collectScore('list-q4',this)">
                    🏆 Collecter Score <span class="badge-done" id="badge-q4">0</span>
                </button>
                <ul class="task-list" id="list-q4"></ul>
                <div class="add-task">
                    <input type="text" placeholder="Ajouter..." onkeydown="addOnEnter(event,'list-q4','badge-q4')">
                    <select class="points-select" id="pts-list-q4">
                        <option value="5">5 pts</option>
                        <option value="15" selected>15 pts</option>
                        <option value="30">30 pts</option>
                        <option value="60">60 pts</option>
                        <option value="90">90 pts</option>
                    </select>
                    <button class="btn-add-task" onclick="addTask('list-q4',this,'badge-q4')">+</button>
                </div>
            </div>

            <!-- Q3 -->
            <div class="quadrant q-deleguer" id="zone-list-q3"
                 ondragover="onDragOverZone(event,'list-q3')"
                 ondragleave="onDragLeaveZone(event,'list-q3')"
                 ondrop="onDropZone(event,'list-q3')">
                <div class="quadrant-header">
                    <span class="quadrant-icon">📞</span>
                    <span class="quadrant-title">Urgent & Pas Important</span>
                    <span class="quadrant-action">DÉLÉGUER</span>
                </div>
                <button class="btn-collect" onclick="collectScore('list-q3',this)">
                    🏆 Collecter Score <span class="badge-done" id="badge-q3">0</span>
                </button>
                <ul class="task-list" id="list-q3"></ul>
                <div class="add-task">
                    <input type="text" placeholder="Ajouter..." onkeydown="addOnEnter(event,'list-q3','badge-q3')">
                    <select class="points-select" id="pts-list-q3">
                        <option value="5">5 pts</option>
                        <option value="15" selected>15 pts</option>
                        <option value="30">30 pts</option>
                        <option value="60">60 pts</option>
                        <option value="90">90 pts</option>
                    </select>
                    <button class="btn-add-task" onclick="addTask('list-q3',this,'badge-q3')">+</button>
                </div>
            </div>

        </div>
    </div>

    <!-- BACKLOG -->
    <div class="backlog-section">
        <div class="backlog-panel" id="zone-backlog"
             ondragover="onDragOverZone(event,'backlog')"
             ondragleave="onDragLeaveZone(event,'backlog')"
             ondrop="onDropZone(event,'backlog')">
            <div class="backlog-header">
                <span style="font-size:1.2rem">📦</span>
                <span class="backlog-title">Backlog</span>
                <span class="backlog-badge">À TRIER</span>
                <span class="backlog-count" id="backlog-count">0 tâche</span>
            </div>
            <div class="backlog-list" id="backlog-list"></div>
            <div class="add-task">
                <input type="text" placeholder="Ajouter une tâche au backlog..." onkeydown="addBacklogOnEnter(event)">
                <select class="points-select" id="pts-backlog">
                    <option value="5">5 pts</option>
                    <option value="15" selected>15 pts</option>
                    <option value="30">30 pts</option>
                    <option value="60">60 pts</option>
                    <option value="90">90 pts</option>
                </select>
                <button class="btn-add-task" onclick="addBacklogTask(this)">+</button>
            </div>
        </div>
    </div>

    <!-- TÂCHES RÉUSSIES -->
    <div class="success-section">
        <div class="success-panel">
            <div class="success-header">
                <span style="font-size:1.3rem">🏆</span>
                <span class="success-title">Tâches Réussies</span>
                <span class="success-badge">COMPLÉTÉES</span>
                <div class="score-display">
                    <div class="score-box">
                        🌟 Score total :&nbsp;<span class="score-value" id="score-value">0</span>&nbsp;pts
                    </div>
                    <button class="btn-reset-score" onclick="resetScore()">🔄 Réinitialiser le score</button>
                </div>
            </div>
            <div class="success-list" id="success-list">
                <p class="success-empty" id="success-empty">
                    Aucune tâche réussie pour l'instant… Cochez des tâches et collectez votre score ! 🎯
                </p>
            </div>
        </div>
    </div>

</div>

<!-- IMPORT MODAL -->
<div class="modal-overlay" id="import-modal">
    <div class="modal">
        <h3>⬆️ Importer une sauvegarde</h3>
        <p>Collez le contenu JSON de votre fichier de sauvegarde.<br>
           <strong>Attention :</strong> les données actuelles seront remplacées.</p>
        <textarea id="import-textarea" placeholder='{"globalTags":[...],"list-q1":[...],...}'></textarea>
        <div class="modal-error" id="import-error">❌ JSON invalide ou format incorrect.</div>
        <div class="modal-actions">
            <button class="btn-modal-cancel" onclick="closeImportModal()">Annuler</button>
            <button class="btn-modal-ok"     onclick="confirmImport()">⬆️ Importer</button>
        </div>
    </div>
</div>

<div class="toast" id="toast"></div>

<script>
// ═══════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════
const STORAGE_KEY  = 'eisenhower_v9';
const LISTS        = ['list-q1','list-q2','list-q3','list-q4'];
const BADGE_MAP    = {'list-q1':'badge-q1','list-q2':'badge-q2','list-q3':'badge-q3','list-q4':'badge-q4'};
const POINTS_OPTS  = [5, 15, 30, 60, 90];
const TAG_COLORS   = [
    {bg:'#fed7d7',text:'#c53030'},{bg:'#feebc8',text:'#c05621'},
    {bg:'#fefcbf',text:'#b7791f'},{bg:'#c6f6d5',text:'#276749'},
    {bg:'#bee3f8',text:'#2b6cb0'},{bg:'#e9d8fd',text:'#6b46c1'},
    {bg:'#fed7e2',text:'#97266d'},{bg:'#e2e8f0',text:'#4a5568'}
];
const DOT_COLORS   = ['#fc8181','#f6ad55','#f6e05e','#68d391','#63b3ed','#b794f4','#f687b3','#a0aec0'];
const CONFETTI_CLR = ['#fc8181','#f6ad55','#f6e05e','#68d391','#63b3ed','#b794f4','#f687b3'];

const DEFAULT_DATA = {
    globalTags:[], globalScore:0, successTasks:[],
    strategic:[],
    'list-q1':[
        {text:"Répondre à l'email critique du client",done:false,tags:[],points:30},
        {text:"Corriger le bug en production",done:false,tags:[],points:60},
        {text:"Préparer la réunion de demain matin",done:false,tags:[],points:15}
    ],
    'list-q2':[
        {text:"Développer une nouvelle compétence",done:false,tags:[],points:90},
        {text:"Rédiger la stratégie Q3",done:false,tags:[],points:60},
        {text:"Faire du sport régulièrement",done:false,tags:[],points:30}
    ],
    'list-q3':[
        {text:"Répondre aux appels non prioritaires",done:false,tags:[],points:5},
        {text:"Traiter les emails de faible valeur",done:false,tags:[],points:5},
        {text:"Organiser une réunion d'équipe",done:false,tags:[],points:15}
    ],
    'list-q4':[
        {text:"Scroller les réseaux sociaux",done:false,tags:[],points:5},
        {text:"Regarder des vidéos sans intérêt",done:false,tags:[],points:5},
        {text:"Réorganiser son bureau inutilement",done:false,tags:[],points:5}
    ],
    backlog:[]
};

let globalTags   = [];
let globalScore  = 0;
let activeFilter = null;
let saveTimeout  = null;

// ═══════════════════════════════════════════════
// HAUTEUR DYNAMIQUE
// ═══════════════════════════════════════════════
function adjustHeight(){
    const axisRow = document.querySelector('.axis-row');
    if(!axisRow) return;
    const get  = sel => document.querySelector(sel)?.offsetHeight || 0;
    const used = get('.strategic-section') + get('h1') + get('.subtitle') + get('.toolbar') +
                 get('.global-tag-manager') + get('.tag-filter-bar') +
                 get('.axis-x-labels') + get('.backlog-section') +
                 get('.success-section') + 10*10 + 40;
    axisRow.style.height = Math.max(window.innerHeight - used, 280) + 'px';
}
window.addEventListener('resize', adjustHeight);

// ═══════════════════════════════════════════════
// SCORE
// ═══════════════════════════════════════════════
function refreshScoreDisplay(addedPts, btnEl){
    const el = document.getElementById('score-value');
    el.textContent = globalScore;
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
    if(addedPts > 0 && btnEl){
        const r = btnEl.getBoundingClientRect();
        spawnScoreFloat('+' + addedPts + ' pts', r.left + r.width/2, r.top);
        spawnConfetti(r.left + r.width/2, r.top + r.height/2);
    }
}

function resetScore(){
    if(!confirm('Réinitialiser le score et vider les tâches réussies ?')) return;
    globalScore = 0;
    const list = document.getElementById('success-list');
    list.innerHTML = '';
    list.appendChild(buildEmptyMsg());
    refreshScoreDisplay(0, null);
    saveData();
    showToast('🔄 Score réinitialisé');
}

function buildEmptyMsg(){
    const p = document.createElement('p');
    p.className = 'success-empty'; p.id = 'success-empty';
    p.textContent = 'Aucune tâche réussie pour l\'instant… Cochez des tâches et collectez votre score ! 🎯';
    return p;
}

// ═══════════════════════════════════════════════
// ANIMATIONS
// ═══════════════════════════════════════════════
function spawnScoreFloat(text, x, y){
    const el = document.createElement('div');
    el.className = 'score-float'; el.textContent = text;
    el.style.cssText = `left:${x}px;top:${y}px;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1050);
}
function spawnConfetti(x, y){
    for(let i = 0; i < 14; i++){
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.cssText = `background:${CONFETTI_CLR[i%CONFETTI_CLR.length]};left:${x+Math.random()*80-40}px;top:${y+Math.random()*20-10}px;animation-duration:${.5+Math.random()*.5}s;animation-delay:${Math.random()*.15}s;`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 950);
    }
}

// ═══════════════════════════════════════════════
// COLLECTER SCORE
// ═══════════════════════════════════════════════
function collectScore(listId, btnEl){
    const doneTasks = Array.from(document.querySelectorAll(`#${listId} .task-item.done`));
    if(!doneTasks.length){
        btnEl.style.animation = 'shake .3s ease';
        setTimeout(() => btnEl.style.animation = '', 350);
        showToast('⚠️ Aucune tâche cochée à collecter');
        return;
    }
    const badgeId = BADGE_MAP[listId];
    let totalPts  = 0;
    doneTasks.forEach((task, idx) => {
        const text          = task.querySelector('.task-text')?.textContent || '';
        const pts           = parseInt(task.dataset.points) || 0;
        const tags          = getTagsFromEl(task);
        const quadrantLabel = getQuadrantLabel(listId);
        const collectedAt   = new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
        totalPts += pts;
        setTimeout(() => {
            task.classList.add('task-removing');
            setTimeout(() => { task.remove(); updateBadge(badgeId, listId); saveData(); }, 350);
            addSuccessCard({ text, pts, tags, quadrantLabel, collectedAt });
        }, idx * 180);
    });
    setTimeout(() => {
        globalScore += totalPts;
        refreshScoreDisplay(totalPts, btnEl);
        saveData();
        showToast(`🏆 +${totalPts} pts collectés !`);
    }, doneTasks.length * 180 + 100);
}

function getQuadrantLabel(listId){
    return {'list-q1':'🔥 Urgent & Important','list-q2':'📅 Pas Urgent & Important','list-q3':'📞 Urgent & Pas Important','list-q4':'🗑️ Pas Urgent & Pas Important'}[listId] || '';
}

// ═══════════════════════════════════════════════
// CARTE TÂCHE RÉUSSIE
// ═══════════════════════════════════════════════
function addSuccessCard({ text, pts, tags=[], quadrantLabel='', collectedAt='' }){
    const list  = document.getElementById('success-list');
    const empty = document.getElementById('success-empty');
    if(empty) empty.remove();

    const card = document.createElement('div');
    card.className = 'success-card'; card.dataset.pts = pts;

    const row1 = document.createElement('div'); row1.className = 'success-card-row1';
    const icon = document.createElement('span'); icon.className = 'success-icon'; icon.textContent = '✅';
    const textEl = document.createElement('span'); textEl.className = 'success-card-text'; textEl.textContent = text;
    const ptsBadge = document.createElement('span'); ptsBadge.className = 'success-pts-badge'; ptsBadge.textContent = `+${pts} pts`;
    const delBtn = document.createElement('button'); delBtn.className = 'btn-success-del'; delBtn.title = 'Retirer'; delBtn.textContent = '✕';
    delBtn.addEventListener('click', () => {
        globalScore -= parseInt(card.dataset.pts) || 0;
        if(globalScore < 0) globalScore = 0;
        card.remove();
        refreshScoreDisplay(0, null);
        if(!document.querySelectorAll('.success-card').length)
            document.getElementById('success-list').appendChild(buildEmptyMsg());
        saveData();
    });
    row1.appendChild(icon); row1.appendChild(textEl); row1.appendChild(ptsBadge); row1.appendChild(delBtn);

    const row2 = document.createElement('div'); row2.className = 'success-card-row2';
    if(tags && tags.length){
        tags.forEach(t => {
            const col = TAG_COLORS[t.colorIdx] || TAG_COLORS[0];
            const tag = document.createElement('span'); tag.className = 'tag';
            tag.style.backgroundColor = col.bg; tag.style.color = col.text;
            tag.innerHTML = `<span class="tag-label">${escapeHtml(t.label)}</span>`;
            row2.appendChild(tag);
        });
    }
    if(quadrantLabel || collectedAt){
        const meta = document.createElement('span'); meta.className = 'success-card-meta';
        meta.textContent = [quadrantLabel, collectedAt ? `collecté à ${collectedAt}` : ''].filter(Boolean).join(' · ');
        row2.appendChild(meta);
    }

    card.appendChild(row1);
    if(row2.children.length) card.appendChild(row2);
    list.insertBefore(card, list.firstChild);
    saveData();
}

function renderSuccessList(tasks){
    const list = document.getElementById('success-list');
    list.innerHTML = '';
    if(!tasks || !tasks.length){ list.appendChild(buildEmptyMsg()); return; }
    [...tasks].reverse().forEach(t => addSuccessCard({ text:t.text, pts:t.pts, tags:t.tags||[], quadrantLabel:t.quadrantLabel||'', collectedAt:t.collectedAt||'' }));
}

// ═══════════════════════════════════════════════
// SAUVEGARDE & CHARGEMENT
// ═══════════════════════════════════════════════
function saveData(){
    const dot = document.getElementById('save-dot');
    const lbl = document.getElementById('save-label');
    dot.className = 'save-dot saving'; lbl.textContent = 'Sauvegarde...';
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(collectData()));
        dot.className = 'save-dot saved';
        const n = new Date();
        lbl.textContent = `✅ ${n.getHours()}h${String(n.getMinutes()).padStart(2,'0')}`;
    }, 500);
}

function collectData(){
    const data = { globalTags, globalScore, backlog:[], successTasks:[], strategic:[] };
    LISTS.forEach(id => {
        data[id] = Array.from(document.querySelectorAll(`#${id} .task-item`)).map(el => ({
            text:   el.querySelector('.task-text').textContent,
            done:   el.classList.contains('done'),
            tags:   getTagsFromEl(el),
            points: parseInt(el.dataset.points) || 15
        }));
    });
    data.backlog = Array.from(document.querySelectorAll('#backlog-list .backlog-card')).map(el => ({
        text:   el.querySelector('.backlog-card-text').textContent,
        tags:   getTagsFromEl(el),
        points: parseInt(el.dataset.points) || 15
    }));
    // Collecte des objectifs stratégiques
    data.strategic = Array.from(document.querySelectorAll('#strategic-list .strategic-card')).map(el => ({
        text:   el.querySelector('.strategic-card-text').textContent,
        done:   el.classList.contains('done'),
        tags:   getTagsFromEl(el),
        points: parseInt(el.dataset.points) || 15
    }));
    data.successTasks = Array.from(document.querySelectorAll('.success-card')).map(card => ({
        text:          card.querySelector('.success-card-text')?.textContent || '',
        pts:           parseInt(card.dataset.pts) || 0,
        tags:          Array.from(card.querySelectorAll('.tag')).map(t => ({ label:t.querySelector('.tag-label')?.textContent||'', colorIdx:parseInt(t.dataset.colorIdx)||0 })),
        quadrantLabel: card.querySelector('.success-card-meta')?.textContent?.split(' · ')[0] || '',
        collectedAt:   card.querySelector('.success-card-meta')?.textContent?.split('collecté à ')[1] || ''
    })).reverse();
    return data;
}

function loadData(){ const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : DEFAULT_DATA; }

function getTagsFromEl(el){
    return Array.from(el.querySelectorAll('.tag')).map(t => ({ label:t.querySelector('.tag-label')?.textContent||'', colorIdx:parseInt(t.dataset.colorIdx)||0 }));
}

// ═══════════════════════════════════════════════
// EXPORT / IMPORT
// ═══════════════════════════════════════════════
function exportData(){
    const json = JSON.stringify(collectData(), null, 2);
    const blob = new Blob([json],{type:'application/json'});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    const now  = new Date();
    const stamp= `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
    a.href = url; a.download = `eisenhower_${stamp}.json`; a.click();
    URL.revokeObjectURL(url); showToast('⬇️ Exporté !');
}
function openImportModal(){ document.getElementById('import-textarea').value=''; document.getElementById('import-error').style.display='none'; document.getElementById('import-modal').classList.add('open'); }
function closeImportModal(){ document.getElementById('import-modal').classList.remove('open'); }
function confirmImport(){
    const raw = document.getElementById('import-textarea').value.trim();
    const errEl = document.getElementById('import-error'); errEl.style.display='none';
    try {
        const data = JSON.parse(raw);
        if(typeof data!=='object'||!data['list-q1']) throw new Error();
        if(!confirm('⚠️ Importer ? Les données actuelles seront remplacées.')) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        globalTags=data.globalTags||[]; globalScore=data.globalScore||0;
        renderAll(data); closeImportModal(); showToast('⬆️ Importé !');
    } catch { errEl.style.display='block'; }
}

// ═══════════════════════════════════════════════
// REGISTRE GLOBAL DES TAGS
// ═══════════════════════════════════════════════
function registerGlobalTag(label, colorIdx){
    if(!globalTags.find(t=>t.label===label)){ globalTags.push({label,colorIdx}); renderGlobalTagManager(); refreshFilterBar(); saveData(); }
}
function deleteGlobalTag(label){
    if(!confirm(`Supprimer le tag "${label}" de toutes les tâches ?`)) return;
    globalTags = globalTags.filter(t=>t.label!==label);
    document.querySelectorAll('.tag').forEach(t=>{ if(t.querySelector('.tag-label')?.textContent===label) t.remove(); });
    if(activeFilter===label) clearFilter();
    renderGlobalTagManager(); refreshFilterBar(); saveData(); showToast(`🗑️ Tag "${label}" supprimé`);
}
function renderGlobalTagManager(){
    const c = document.getElementById('gtm-tags'); c.innerHTML='';
    if(!globalTags.length){ c.innerHTML='<span class="gtm-empty">Aucun tag créé</span>'; return; }
    globalTags.forEach(({label,colorIdx})=>{
        const col=TAG_COLORS[colorIdx]||TAG_COLORS[0];
        const el=document.createElement('span'); el.className='gtm-tag';
        el.style.backgroundColor=col.bg; el.style.color=col.text;
        el.innerHTML=`<span>${escapeHtml(label)}</span><button class="gtm-del" title="Supprimer partout">✕</button>`;
        el.querySelector('.gtm-del').addEventListener('click',()=>deleteGlobalTag(label));
        c.appendChild(el);
    });
}

// ═══════════════════════════════════════════════
// FILTRE
// ═══════════════════════════════════════════════
function refreshFilterBar(){
    const bar=document.getElementById('tag-filter-bar');
    bar.innerHTML=`<span class="tag-filter-label">🔍 Filtrer :</span><button class="filter-clear" onclick="clearFilter()">✕ Tous</button>`;
    globalTags.forEach(({label,colorIdx})=>{
        const col=TAG_COLORS[colorIdx]||TAG_COLORS[0];
        const btn=document.createElement('button');
        btn.className='filter-tag'+(activeFilter===label?' active':'');
        btn.style.backgroundColor=col.bg; btn.style.color=col.text; btn.textContent=label;
        btn.addEventListener('click',()=>setFilter(label)); bar.appendChild(btn);
    });
}
function setFilter(l){activeFilter=l;refreshFilterBar();applyFilter();}
function clearFilter(){activeFilter=null;refreshFilterBar();applyFilter();}
function applyFilter(){
    document.querySelectorAll('.task-item').forEach(el=>{
        if(!activeFilter){el.style.display='';return;}
        el.style.display=Array.from(el.querySelectorAll('.tag-label')).some(t=>t.textContent===activeFilter)?'':'none';
    });
    document.querySelectorAll('.backlog-card').forEach(el=>{
        if(!activeFilter){el.style.display='';return;}
        el.style.display=Array.from(el.querySelectorAll('.tag-label')).some(t=>t.textContent===activeFilter)?'':'none';
    });
    // Filtre aussi les objectifs stratégiques
    document.querySelectorAll('.strategic-card').forEach(el=>{
        if(!activeFilter){el.style.display='';return;}
        el.style.display=Array.from(el.querySelectorAll('.tag-label')).some(t=>t.textContent===activeFilter)?'':'none';
    });
}

// ═══════════════════════════════════════════════
// TAG PANEL
// ═══════════════════════════════════════════════
function buildTagPanel(hostEl, tagsContainer){
    let currentColor=0;
    const panel=document.createElement('div'); panel.className='tag-panel';
    const t1=document.createElement('div'); t1.className='tag-panel-title'; t1.textContent='📌 Cliquer pour appliquer / retirer';
    const existingRow=document.createElement('div'); existingRow.className='existing-tags-row';
    function refreshExisting(){
        existingRow.innerHTML='';
        if(!globalTags.length){existingRow.innerHTML='<span style="font-size:.68rem;color:#a0aec0;font-style:italic">Aucun tag disponible</span>';return;}
        globalTags.forEach(({label,colorIdx})=>{
            const col=TAG_COLORS[colorIdx]||TAG_COLORS[0];
            const applied=Array.from(tagsContainer.querySelectorAll('.tag-label')).some(el=>el.textContent===label);
            const btn=document.createElement('button');
            btn.className='existing-tag-btn'+(applied?' applied':'');
            btn.style.backgroundColor=col.bg; btn.style.color=col.text;
            btn.innerHTML=(applied?'<span class="check">✔ </span>':'')+escapeHtml(label);
            btn.addEventListener('click',()=>{toggleTagOnTask(tagsContainer,label,colorIdx);refreshExisting();refreshFilterBar();applyFilter();saveData();});
            existingRow.appendChild(btn);
        });
    }
    const sep=document.createElement('hr'); sep.className='tag-separator';
    const t2=document.createElement('div'); t2.className='tag-panel-title'; t2.textContent='✨ Créer un nouveau tag';
    const newRow=document.createElement('div'); newRow.className='new-tag-row';
    const input=document.createElement('input'); input.className='tag-input'; input.type='text'; input.placeholder='Nom du tag...'; input.maxLength=20;
    const picker=document.createElement('div'); picker.className='tag-color-picker';
    DOT_COLORS.forEach((color,i)=>{
        const dot=document.createElement('div'); dot.className='color-dot'+(i===0?' selected':''); dot.style.backgroundColor=color; dot.title=`Couleur ${i+1}`;
        dot.addEventListener('click',()=>{picker.querySelectorAll('.color-dot').forEach(d=>d.classList.remove('selected'));dot.classList.add('selected');currentColor=i;});
        picker.appendChild(dot);
    });
    const btnCreate=document.createElement('button'); btnCreate.className='btn-add-tag'; btnCreate.textContent='+ Créer';
    const doCreate=()=>{
        const val=input.value.trim(); if(!val) return;
        registerGlobalTag(val,currentColor); toggleTagOnTask(tagsContainer,val,currentColor,true);
        input.value=''; refreshExisting(); refreshFilterBar(); applyFilter(); saveData(); showToast(`🏷️ Tag "${val}" créé`);
    };
    btnCreate.addEventListener('click',doCreate); input.addEventListener('keydown',e=>{if(e.key==='Enter') doCreate();});
    newRow.appendChild(input); newRow.appendChild(picker); newRow.appendChild(btnCreate);
    panel.appendChild(t1); panel.appendChild(existingRow); panel.appendChild(sep); panel.appendChild(t2); panel.appendChild(newRow);
    panel._refresh=refreshExisting;
    return panel;
}
function toggleTagOnTask(tagsContainer,label,colorIdx,forceAdd=false){
    const existing=Array.from(tagsContainer.querySelectorAll('.tag')).find(t=>t.querySelector('.tag-label')?.textContent===label);
    if(existing&&!forceAdd) existing.remove();
    else if(!existing) tagsContainer.appendChild(createTagEl(label,colorIdx,tagsContainer));
}
function createTagEl(label,colorIdx,tagsContainer){
    const col=TAG_COLORS[colorIdx]||TAG_COLORS[0];
    const tag=document.createElement('span'); tag.className='tag'; tag.dataset.colorIdx=colorIdx;
    tag.style.backgroundColor=col.bg; tag.style.color=col.text;
    tag.innerHTML=`<span class="tag-label">${escapeHtml(label)}</span><button class="tag-remove" title="Retirer">✕</button>`;
    tag.querySelector('.tag-remove').addEventListener('click',e=>{
        e.stopPropagation(); tag.remove();
        const panel=tagsContainer.closest('.task-item,.backlog-card,.strategic-card')?.querySelector('.tag-panel');
        if(panel?._refresh) panel._refresh();
        refreshFilterBar(); applyFilter(); saveData();
    });
    return tag;
}

// ═══════════════════════════════════════════════
// DRAG & DROP
// ═══════════════════════════════════════════════
let dragSrcEl=null, dragSrcZone=null, dragType=null;
function initDrag(el,zone,type){
    el.setAttribute('draggable','true');
    el.addEventListener('dragstart',e=>{ dragSrcEl=el;dragSrcZone=zone;dragType=type; setTimeout(()=>el.classList.add('dragging'),0); e.dataTransfer.effectAllowed='move'; e.dataTransfer.setData('text/plain',zone); });
    el.addEventListener('dragend',()=>{ el.classList.remove('dragging'); document.querySelectorAll('.drag-over-top,.drag-over-bottom').forEach(x=>x.classList.remove('drag-over-top','drag-over-bottom')); clearAllDropHighlights(); dragSrcEl=dragSrcZone=dragType=null; });
    if(type==='task'){
        el.addEventListener('dragover',e=>{ if(!dragSrcEl||dragType!=='task') return; e.preventDefault(); const rect=el.getBoundingClientRect(); el.classList.remove('drag-over-top','drag-over-bottom'); el.classList.add(e.clientY<rect.top+rect.height/2?'drag-over-top':'drag-over-bottom'); });
        el.addEventListener('dragleave',()=>el.classList.remove('drag-over-top','drag-over-bottom'));
        el.addEventListener('drop',e=>{ e.preventDefault();e.stopPropagation(); if(!dragSrcEl||dragSrcEl===el) return; if(dragSrcZone===el.closest('ul')?.id){ const after=e.clientY>=el.getBoundingClientRect().top+el.getBoundingClientRect().height/2; if(after) el.after(dragSrcEl); else el.before(dragSrcEl); } el.classList.remove('drag-over-top','drag-over-bottom'); saveData(); });
    }
}
function onDragOverZone(e,zoneId){ if(!dragSrcEl) return; e.preventDefault(); e.dataTransfer.dropEffect='move'; const el=document.getElementById('zone-'+zoneId)||document.getElementById(zoneId); el?.classList.add('drop-zone-active'); }
function onDragLeaveZone(e,zoneId){ const el=document.getElementById('zone-'+zoneId)||document.getElementById(zoneId); if(el&&!el.contains(e.relatedTarget)) el.classList.remove('drop-zone-active'); }
function onDropZone(e,targetZoneId){
    e.preventDefault(); clearAllDropHighlights();
    if(!dragSrcEl||dragSrcZone===targetZoneId){saveData();return;}
    const srcText=dragSrcEl.querySelector('.task-text,.backlog-card-text,.strategic-card-text')?.textContent||'';
    const srcDone=dragSrcEl.classList.contains('done');
    const srcTags=getTagsFromEl(dragSrcEl);
    const srcPts=parseInt(dragSrcEl.dataset.points)||15;
    dragSrcEl.remove();
    if(targetZoneId==='backlog') renderBacklogCard(srcText,srcTags,true,srcPts);
    else if(targetZoneId==='strategic') renderStrategicCard(srcText,srcDone,srcTags,true,srcPts);
    else renderTask(targetZoneId,srcText,srcDone,srcTags,true,srcPts);
    if(dragSrcZone!=='backlog'&&dragSrcZone!=='strategic'&&BADGE_MAP[dragSrcZone]) updateBadge(BADGE_MAP[dragSrcZone],dragSrcZone);
    if(targetZoneId!=='backlog'&&targetZoneId!=='strategic'&&BADGE_MAP[targetZoneId]) updateBadge(BADGE_MAP[targetZoneId],targetZoneId);
    updateBacklogCount(); updateStrategicCount(); saveData(); showToast('↕️ Tâche déplacée');
}
function clearAllDropHighlights(){ document.querySelectorAll('.drop-zone-active').forEach(el=>el.classList.remove('drop-zone-active')); }

// ═══════════════════════════════════════════════
// HELPER : crée un <select> de points
// ═══════════════════════════════════════════════
function buildPointsSelect(currentPts, cssClass){
    const sel = document.createElement('select');
    sel.className = cssClass;
    POINTS_OPTS.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v; opt.textContent = v + ' pts';
        if(v === currentPts) opt.selected = true;
        sel.appendChild(opt);
    });
    return sel;
}

// ═══════════════════════════════════════════════
// OBJECTIFS STRATÉGIQUES
// ═══════════════════════════════════════════════
function renderStrategicCard(text, done=false, tags=[], animate=false, points=15){
    const container = document.getElementById('strategic-list');
    const card      = document.createElement('div');
    card.className  = 'strategic-card' + (done?' done':'') + (animate?' task-adding':'');
    card.dataset.points = points;

    // Ligne principale
    const mainRow = document.createElement('div'); mainRow.className='strategic-card-main';

    const checkbox = document.createElement('input');
    checkbox.type='checkbox'; checkbox.className='strategic-card-check'; checkbox.checked=done;
    checkbox.addEventListener('change', () => {
        card.classList.toggle('done', checkbox.checked);
        saveData();
    });

    const textEl = document.createElement('span');
    textEl.className='strategic-card-text'; textEl.textContent=text;
    textEl.addEventListener('dblclick', () => startStrategicEdit(card));

    const ptsBadge = document.createElement('span');
    ptsBadge.className='points-badge'; ptsBadge.textContent='⭐ '+points+' pts';

    const actions = document.createElement('div'); actions.className='strategic-card-actions';
    actions.innerHTML=`<button class="btn-action btn-edit"   title="Modifier">✏️</button>
                       <button class="btn-action btn-tag"    title="Tags">🏷️</button>
                       <button class="btn-action btn-remove" title="Supprimer">✕</button>`;
    actions.querySelector('.btn-edit').addEventListener('click',   () => startStrategicEdit(card));
    actions.querySelector('.btn-remove').addEventListener('click', () => removeStrategicCard(card));

    mainRow.appendChild(checkbox); mainRow.appendChild(textEl);
    mainRow.appendChild(ptsBadge); mainRow.appendChild(actions);

    // Tags
    const tagsRow = document.createElement('div'); tagsRow.className='strategic-card-tags';
    (tags||[]).forEach(t => tagsRow.appendChild(createTagEl(t.label, t.colorIdx, tagsRow)));

    // Tag panel
    const tagPanel = buildTagPanel(card, tagsRow);
    actions.querySelector('.btn-tag').addEventListener('click', e => {
        e.stopPropagation(); closeAllTagPanels(tagPanel);
        tagPanel.classList.toggle('open');
        if(tagPanel.classList.contains('open')) tagPanel._refresh();
    });

    // Zone édition
    const editZone = document.createElement('div'); editZone.className='strategic-edit-zone';

    const editInput = document.createElement('input');
    editInput.className='strategic-edit-input'; editInput.type='text'; editInput.value=text;
    editInput.placeholder='Objectif stratégique...';

    const editRowMeta = document.createElement('div'); editRowMeta.className='strategic-edit-row-meta';
    const ptsLabel    = document.createElement('span'); ptsLabel.className='edit-pts-label'; ptsLabel.textContent='⭐ Points :';
    const editPtsSelect = buildPointsSelect(points, 'edit-points-select');

    const btnSave   = document.createElement('button'); btnSave.className='btn-save-edit'; btnSave.textContent='✔ Valider';
    const btnCancel = document.createElement('button'); btnCancel.className='btn-cancel-edit'; btnCancel.textContent='✕ Annuler';

    editRowMeta.appendChild(ptsLabel); editRowMeta.appendChild(editPtsSelect);
    editRowMeta.appendChild(btnSave);  editRowMeta.appendChild(btnCancel);
    editZone.appendChild(editInput);   editZone.appendChild(editRowMeta);

    editInput.addEventListener('keydown', e => {
        if(e.key==='Enter')  confirmStrategicEdit(card, editInput, editPtsSelect, ptsBadge);
        if(e.key==='Escape') cancelStrategicEdit(card, editInput, editPtsSelect);
    });
    btnSave.addEventListener('click',   () => confirmStrategicEdit(card, editInput, editPtsSelect, ptsBadge));
    btnCancel.addEventListener('click', () => cancelStrategicEdit(card, editInput, editPtsSelect));

    card.appendChild(mainRow); card.appendChild(tagsRow);
    card.appendChild(tagPanel); card.appendChild(editZone);
    container.appendChild(card);
    initDrag(card, 'strategic', 'backlog-card');
    updateStrategicCount();
}

function startStrategicEdit(card){
    closeAllEdits(); closeAllTagPanels();
    card.classList.add('editing');
    const sel = card.querySelector('.edit-points-select');
    if(sel) sel.value = card.dataset.points;
    const inp = card.querySelector('.strategic-edit-input');
    inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length);
}

function confirmStrategicEdit(card, editInput, editPtsSelect, ptsBadge){
    const newText = editInput.value.trim();
    const newPts  = parseInt(editPtsSelect.value) || 15;
    if(!newText){
        editInput.style.borderColor='#fc8181';
        setTimeout(() => editInput.style.borderColor='#667eea', 1500);
        return;
    }
    const txt = card.querySelector('.strategic-card-text');
    txt.textContent  = newText;
    editInput.value  = newText;
    card.dataset.points = newPts;
    ptsBadge.textContent = '⭐ ' + newPts + ' pts';
    ptsBadge.classList.remove('updated');
    void ptsBadge.offsetWidth;
    ptsBadge.classList.add('updated');
    card.classList.remove('editing');
    saveData();
    showToast('✏️ Objectif modifié (' + newPts + ' pts)');
}

function cancelStrategicEdit(card, editInput, editPtsSelect){
    const txt = card.querySelector('.strategic-card-text');
    if(editInput && txt) editInput.value = txt.textContent;
    if(editPtsSelect)    editPtsSelect.value = card.dataset.points;
    card.classList.remove('editing');
}

function removeStrategicCard(card){
    card.classList.add('task-removing');
    setTimeout(() => { card.remove(); updateStrategicCount(); saveData(); }, 350);
}

function updateStrategicCount(){
    const n = document.querySelectorAll('#strategic-list .strategic-card').length;
    document.getElementById('strategic-count').textContent = `${n} objectif${n>1?'s':''}`;
}

function addStrategicTask(button){
    const ptsSelect = button.previousElementSibling;
    const input     = ptsSelect.previousElementSibling;
    const text      = input.value.trim(); if(!text) return;
    const pts       = parseInt(ptsSelect.value) || 15;
    closeAllEdits(); closeAllTagPanels();
    renderStrategicCard(text, false, [], true, pts);
    input.value=''; saveData(); showToast('🎯 Objectif ajouté ('+pts+' pts)');
}

function addStrategicOnEnter(event){
    if(event.key==='Enter'){
        const btn = event.target.nextElementSibling?.nextElementSibling;
        if(btn) addStrategicTask(btn);
    }
}

// Gestion drop zone pour les objectifs stratégiques
document.addEventListener('DOMContentLoaded', () => {
    const strategicPanel = document.querySelector('.strategic-panel');
    if(strategicPanel){
        strategicPanel.addEventListener('dragover',  e => onDragOverZone(e,'strategic'));
        strategicPanel.addEventListener('dragleave', e => onDragLeaveZone(e,'strategic'));
        strategicPanel.addEventListener('drop',      e => onDropZone(e,'strategic'));
    }
});

// ═══════════════════════════════════════════════
// RENDU TÂCHE QUADRANT
// ═══════════════════════════════════════════════
function renderTask(listId, text, done, tags=[], animate=false, points=15){
    const badgeId = BADGE_MAP[listId];
    const list    = document.getElementById(listId);
    const li      = document.createElement('li');
    li.className  = 'task-item' + (done?' done':'') + (animate?' task-adding':'');
    li.dataset.points = points;

    const handle = document.createElement('span');
    handle.className='drag-handle'; handle.textContent='⠿'; handle.title='Glisser';

    const mainRow  = document.createElement('div'); mainRow.className='task-main';
    const checkbox = document.createElement('input'); checkbox.type='checkbox'; checkbox.checked=done;
    checkbox.addEventListener('change', () => toggleDone(checkbox, badgeId));

    const textEl = document.createElement('span'); textEl.className='task-text'; textEl.textContent=text;
    textEl.addEventListener('dblclick', () => startEdit(li, badgeId));

    const ptsBadge = document.createElement('span');
    ptsBadge.className='points-badge'; ptsBadge.textContent='⭐ '+points+' pts';

    const actions = document.createElement('div'); actions.className='task-actions';
    actions.innerHTML=`<button class="btn-action btn-edit" title="Modifier">✏️</button>
                       <button class="btn-action btn-tag"  title="Tags">🏷️</button>
                       <button class="btn-action btn-remove" title="Supprimer">✕</button>`;
    actions.querySelector('.btn-edit').addEventListener('click', () => startEdit(li, badgeId));
    actions.querySelector('.btn-remove').addEventListener('click', () => removeTask(li, badgeId));

    mainRow.appendChild(handle); mainRow.appendChild(checkbox);
    mainRow.appendChild(textEl); mainRow.appendChild(ptsBadge); mainRow.appendChild(actions);

    const tagsRow = document.createElement('div'); tagsRow.className='task-tags';
    (tags||[]).forEach(t => tagsRow.appendChild(createTagEl(t.label, t.colorIdx, tagsRow)));

    const tagPanel = buildTagPanel(li, tagsRow);
    actions.querySelector('.btn-tag').addEventListener('click', e => {
        e.stopPropagation(); closeAllTagPanels(tagPanel);
        tagPanel.classList.toggle('open');
        if(tagPanel.classList.contains('open')) tagPanel._refresh();
    });

    const editZone = document.createElement('div'); editZone.className='edit-zone';
    const editRowText = document.createElement('div'); editRowText.className='edit-row-text';
    const editInput   = document.createElement('input');
    editInput.className='edit-input'; editInput.type='text'; editInput.value=text;
    editInput.placeholder='Titre de la tâche...';
    editRowText.appendChild(editInput);

    const editRowMeta = document.createElement('div'); editRowMeta.className='edit-row-meta';
    const ptsLabel = document.createElement('span');
    ptsLabel.className='edit-pts-label'; ptsLabel.textContent='⭐ Points :';
    const editPtsSelect = buildPointsSelect(points, 'edit-points-select');
    const btnSave = document.createElement('button');
    btnSave.className='btn-save-edit'; btnSave.textContent='✔ Valider';
    const btnCancel = document.createElement('button');
    btnCancel.className='btn-cancel-edit'; btnCancel.textContent='✕ Annuler';
    editRowMeta.appendChild(ptsLabel); editRowMeta.appendChild(editPtsSelect);
    editRowMeta.appendChild(btnSave);  editRowMeta.appendChild(btnCancel);
    editZone.appendChild(editRowText); editZone.appendChild(editRowMeta);

    editInput.addEventListener('keydown', e => {
        if(e.key==='Enter')  confirmEdit(li, badgeId, editInput, editPtsSelect, ptsBadge);
        if(e.key==='Escape') cancelEdit(li, editInput, editPtsSelect);
    });
    btnSave.addEventListener('click',   () => confirmEdit(li, badgeId, editInput, editPtsSelect, ptsBadge));
    btnCancel.addEventListener('click', () => cancelEdit(li, editInput, editPtsSelect));

    li.appendChild(mainRow); li.appendChild(tagsRow); li.appendChild(tagPanel); li.appendChild(editZone);
    list.appendChild(li);
    initDrag(li, listId, 'task');
    updateBadge(badgeId, listId);
}

// ═══════════════════════════════════════════════
// RENDU BACKLOG CARD
// ═══════════════════════════════════════════════
function renderBacklogCard(text, tags=[], animate=false, points=15){
    const container = document.getElementById('backlog-list');
    const card      = document.createElement('div');
    card.className  = 'backlog-card' + (animate?' task-adding':'');
    card.dataset.points = points;

    const mainRow = document.createElement('div'); mainRow.className='backlog-card-main';
    const textEl  = document.createElement('span'); textEl.className='backlog-card-text'; textEl.textContent=text;
    textEl.addEventListener('dblclick', () => startBacklogEdit(card));

    const ptsBadge = document.createElement('span');
    ptsBadge.className='points-badge'; ptsBadge.textContent='⭐ '+points+' pts';

    const actions = document.createElement('div'); actions.className='backlog-card-actions';
    actions.innerHTML=`<button class="btn-action btn-edit"   title="Modifier">✏️</button>
                       <button class="btn-action btn-tag"    title="Tags">🏷️</button>
                       <button class="btn-action btn-remove" title="Supprimer">✕</button>`;
    actions.querySelector('.btn-edit').addEventListener('click',   () => startBacklogEdit(card));
    actions.querySelector('.btn-remove').addEventListener('click', () => removeBacklogCard(card));

    mainRow.appendChild(textEl); mainRow.appendChild(ptsBadge); mainRow.appendChild(actions);

    const tagsRow = document.createElement('div'); tagsRow.className='backlog-card-tags';
    (tags||[]).forEach(t => tagsRow.appendChild(createTagEl(t.label, t.colorIdx, tagsRow)));

    const tagPanel = buildTagPanel(card, tagsRow);
    actions.querySelector('.btn-tag').addEventListener('click', e => {
        e.stopPropagation(); closeAllTagPanels(tagPanel);
        tagPanel.classList.toggle('open');
        if(tagPanel.classList.contains('open')) tagPanel._refresh();
    });

    const editZone = document.createElement('div'); editZone.className='backlog-edit-zone';
    const editInput = document.createElement('input');
    editInput.className='backlog-edit-input'; editInput.type='text'; editInput.value=text;

    const editRowMeta = document.createElement('div'); editRowMeta.className='backlog-edit-row-meta';
    const ptsLabel    = document.createElement('span'); ptsLabel.className='edit-pts-label'; ptsLabel.textContent='⭐ Points :';
    const editPtsSelect = buildPointsSelect(points, 'edit-points-select');
    const btnSave   = document.createElement('button'); btnSave.className='btn-save-edit'; btnSave.textContent='✔';
    const btnCancel = document.createElement('button'); btnCancel.className='btn-cancel-edit'; btnCancel.textContent='✕';
    editRowMeta.appendChild(ptsLabel); editRowMeta.appendChild(editPtsSelect);
    editRowMeta.appendChild(btnSave);  editRowMeta.appendChild(btnCancel);
    editZone.appendChild(editInput); editZone.appendChild(editRowMeta);

    editInput.addEventListener('keydown', e => {
        if(e.key==='Enter')  confirmBacklogEdit(card, editInput, editPtsSelect, ptsBadge);
        if(e.key==='Escape') cancelBacklogEdit(card, editInput, editPtsSelect);
    });
    btnSave.addEventListener('click',   () => confirmBacklogEdit(card, editInput, editPtsSelect, ptsBadge));
    btnCancel.addEventListener('click', () => cancelBacklogEdit(card, editInput, editPtsSelect));

    card.appendChild(mainRow); card.appendChild(tagsRow); card.appendChild(tagPanel); card.appendChild(editZone);
    container.appendChild(card);
    initDrag(card, 'backlog', 'backlog-card');
    updateBacklogCount();
}

// ═══════════════════════════════════════════════
// RENDU GLOBAL
// ═══════════════════════════════════════════════
function renderAll(data){
    globalTags  = data.globalTags  || [];
    globalScore = data.globalScore || 0;
    document.getElementById('score-value').textContent = globalScore;
    LISTS.forEach(id => {
        document.getElementById(id).innerHTML='';
        (data[id]||[]).forEach(t => renderTask(id, t.text, t.done, t.tags||[], false, t.points||15));
    });
    document.getElementById('backlog-list').innerHTML='';
    (data.backlog||[]).forEach(t => renderBacklogCard(t.text, t.tags||[], false, t.points||15));
    // Rendu des objectifs stratégiques
    document.getElementById('strategic-list').innerHTML='';
    (data.strategic||[]).forEach(t => renderStrategicCard(t.text, t.done||false, t.tags||[], false, t.points||15));
    renderSuccessList(data.successTasks||[]);
    updateBacklogCount(); updateStrategicCount(); renderGlobalTagManager(); refreshFilterBar();
    setTimeout(adjustHeight, 50);
}

// ═══════════════════════════════════════════════
// BADGE
// ═══════════════════════════════════════════════
function updateBadge(badgeId, listId){
    const n = document.querySelectorAll(`#${listId} input[type="checkbox"]:checked`).length;
    const b = document.getElementById(badgeId);
    b.textContent=n; b.style.backgroundColor=n>0?'rgba(255,255,255,.35)':'rgba(255,255,255,.15)';
}

// ═══════════════════════════════════════════════
// ÉDITION TÂCHE QUADRANT
// ═══════════════════════════════════════════════
function closeAllEdits(){
    document.querySelectorAll('.task-item.editing,.backlog-card.editing,.strategic-card.editing').forEach(el => {
        el.classList.remove('editing');
        const inp = el.querySelector('.edit-input,.backlog-edit-input,.strategic-edit-input');
        const txt = el.querySelector('.task-text,.backlog-card-text,.strategic-card-text');
        if(inp && txt) inp.value = txt.textContent;
        const sel = el.querySelector('.edit-points-select');
        if(sel) sel.value = el.dataset.points;
    });
}

function closeAllTagPanels(except=null){
    document.querySelectorAll('.tag-panel.open').forEach(p => { if(p!==except) p.classList.remove('open'); });
}

function startEdit(li, badgeId){
    closeAllEdits(); closeAllTagPanels();
    li.classList.add('editing');
    const sel = li.querySelector('.edit-points-select');
    if(sel) sel.value = li.dataset.points;
    const inp = li.querySelector('.edit-input');
    inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length);
}

function confirmEdit(li, badgeId, editInput, editPtsSelect, ptsBadge){
    const newText = editInput.value.trim();
    const newPts  = parseInt(editPtsSelect.value) || 15;
    if(!newText){
        editInput.style.borderColor='#fc8181';
        setTimeout(() => editInput.style.borderColor='#667eea', 1500);
        return;
    }
    const textEl = li.querySelector('.task-text');
    textEl.textContent = newText;
    editInput.value    = newText;
    li.dataset.points  = newPts;
    ptsBadge.textContent = '⭐ ' + newPts + ' pts';
    ptsBadge.classList.remove('updated');
    void ptsBadge.offsetWidth;
    ptsBadge.classList.add('updated');
    li.classList.remove('editing');
    saveData();
    showToast('✏️ Tâche modifiée (' + newPts + ' pts)');
}

function cancelEdit(li, editInput, editPtsSelect){
    const txt = li.querySelector('.task-text');
    if(editInput && txt) editInput.value = txt.textContent;
    if(editPtsSelect)    editPtsSelect.value = li.dataset.points;
    li.classList.remove('editing');
}

// ═══════════════════════════════════════════════
// ÉDITION BACKLOG CARD
// ═══════════════════════════════════════════════
function startBacklogEdit(card){
    closeAllEdits(); closeAllTagPanels();
    card.classList.add('editing');
    const sel = card.querySelector('.edit-points-select');
    if(sel) sel.value = card.dataset.points;
    const inp = card.querySelector('.backlog-edit-input');
    inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length);
}

function confirmBacklogEdit(card, editInput, editPtsSelect, ptsBadge){
    const newText = editInput.value.trim();
    const newPts  = parseInt(editPtsSelect.value) || 15;
    if(!newText){
        editInput.style.borderColor='#fc8181';
        setTimeout(() => editInput.style.borderColor='#667eea', 1500);
        return;
    }
    const txt = card.querySelector('.backlog-card-text');
    txt.textContent  = newText;
    editInput.value  = newText;
    card.dataset.points = newPts;
    ptsBadge.textContent = '⭐ ' + newPts + ' pts';
    ptsBadge.classList.remove('updated');
    void ptsBadge.offsetWidth;
    ptsBadge.classList.add('updated');
    card.classList.remove('editing');
    saveData();
    showToast('✏️ Backlog modifié (' + newPts + ' pts)');
}

function cancelBacklogEdit(card, editInput, editPtsSelect){
    const txt = card.querySelector('.backlog-card-text');
    if(editInput && txt) editInput.value = txt.textContent;
    if(editPtsSelect)    editPtsSelect.value = card.dataset.points;
    card.classList.remove('editing');
}

// ═══════════════════════════════════════════════
// ACTIONS TÂCHES
// ═══════════════════════════════════════════════
function toggleDone(checkbox, badgeId){
    const item=checkbox.closest('.task-item'); const listId=item.parentElement.id;
    item.classList.toggle('done', checkbox.checked); updateBadge(badgeId, listId); saveData();
}

function addTask(listId, button, badgeId){
    const ptsSelect = button.previousElementSibling;
    const input     = ptsSelect.previousElementSibling;
    const text      = input.value.trim(); if(!text) return;
    const pts       = parseInt(ptsSelect.value) || 15;
    closeAllEdits(); closeAllTagPanels();
    renderTask(listId, text, false, [], true, pts);
    input.value=''; saveData(); showToast('✅ Tâche ajoutée ('+pts+' pts)');
}

function addOnEnter(event, listId, badgeId){
    if(event.key==='Enter'){
        const btn = event.target.nextElementSibling?.nextElementSibling;
        if(btn) addTask(listId, btn, badgeId);
    }
}

function removeTask(li, badgeId){
    const listId=li.parentElement.id; li.classList.add('task-removing');
    setTimeout(() => { li.remove(); updateBadge(badgeId, listId); saveData(); }, 350);
}

// ═══════════════════════════════════════════════
// BACKLOG
// ═══════════════════════════════════════════════
function addBacklogTask(button){
    const ptsSelect=button.previousElementSibling; const input=ptsSelect.previousElementSibling;
    const text=input.value.trim(); if(!text) return;
    const pts=parseInt(ptsSelect.value)||15;
    closeAllEdits(); closeAllTagPanels();
    renderBacklogCard(text,[],true,pts); input.value=''; saveData(); showToast('📦 Ajouté au backlog');
}
function addBacklogOnEnter(event){
    if(event.key==='Enter'){ const btn=event.target.nextElementSibling?.nextElementSibling; if(btn) addBacklogTask(btn); }
}
function removeBacklogCard(card){
    card.classList.add('task-removing');
    setTimeout(() => { card.remove(); updateBacklogCount(); saveData(); }, 350);
}
function updateBacklogCount(){
    const n=document.querySelectorAll('#backlog-list .backlog-card').length;
    document.getElementById('backlog-count').textContent=`${n} tâche${n>1?'s':''}`;
}

// ═══════════════════════════════════════════════
// RESET GLOBAL
// ═══════════════════════════════════════════════
function resetAll(){
    if(!confirm('⚠️ Réinitialiser toutes les tâches, tags et le score ?')) return;
    localStorage.removeItem(STORAGE_KEY); globalTags=[]; globalScore=0;
    renderAll(DEFAULT_DATA); saveData(); showToast('🔄 Réinitialisé');
}

// ═══════════════════════════════════════════════
// UTILITAIRES
// ═══════════════════════════════════════════════
function escapeHtml(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }
function showToast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2500); }

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const isNew = !localStorage.getItem(STORAGE_KEY);
    renderAll(loadData());
    if(isNew){ saveData(); showToast('👋 Bienvenue !'); }
    else showToast('📂 Données restaurées');
    adjustHeight();
});

document.addEventListener('click', e => {
    if(!e.target.closest('.tag-panel') && !e.target.closest('.btn-tag')) closeAllTagPanels();
    if(!e.target.closest('.task-item') && !e.target.closest('.backlog-card') && !e.target.closest('.strategic-card')) closeAllEdits();
});
document.getElementById('import-modal').addEventListener('click', e => {
    if(e.target===document.getElementById('import-modal')) closeImportModal();
});
</script>
</body>
</html>
