# Rack U-Layout

Rack cabinet U-Layout planner: front and rear view, U positions, cable colours,
rack specifications, equipment list, notes and dimensions — exported as one PDF (A4–A0, Letter, Legal, Tabloid).

Version 2.0 adds:
- Asset data per device: hostname, IP, MAC, serial, asset tag, firmware, owner, status, install / warranty dates, TIA-606 style IDs (e.g. `R01-U28`).
- Power & heat budget: A/B feeds, 0U and 1U PDUs, dual-PSU redundancy check (each feed ≤ 80% on failover), UPS load and runtime, kW / kVA / BTU/h, cooling capacity.
- Checks: depth vs usable depth, airflow direction, blanking panels, centre of gravity and heavy devices up high, duplicate IP / hostname / serial / ports / cable IDs, copper > 90 m.
- Cable / patch schedule with cable IDs, ports and lengths; model library with typical values; title block and revisions; version history (Ctrl+S); search (Ctrl+F); all-racks overview; CSV exports.
Installable web app (PWA) that also works offline, on phone and computer.

- Data is stored only on the device that uses it (browser storage). Nothing is uploaded.
- Move data between devices with **Export / Import** (`.rack.json`).
- Languages: Azərbaycanca, Türkçe, English, Русский.

Open the app: https://ulveelives.github.io/racklayout/

**Install on a phone**
- Android (Chrome): open the address → ☰ menu → *Install app* (or Chrome ⋮ → *Install app*).
- iPhone (Safari): open the address → Share □↑ → *Add to Home Screen*.
