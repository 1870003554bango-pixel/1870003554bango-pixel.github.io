#!/usr/bin/env python3
"""Copy new airshow photos from 素材/飞机照片 into src/assets/airshow/ as photo-NN.jpg.

- Re-encodes every photo (drops EXIF / GPS), long edge capped at 2400 px.
- Skips photos already added (tracked in src/assets/airshow/sources.txt by original filename).
- New photos get the next free number, so they appear at the end of the page's gallery.

Run from the repo root:  python3 scripts/add-airshow-photos.py
Then add an alt text for each new photo in src/data/airshow.ts (a generic one is used until you do).
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / '素材' / '飞机照片'
DST = ROOT / 'src' / 'assets' / 'airshow'
LOG = DST / 'sources.txt'

DST.mkdir(parents=True, exist_ok=True)
done = dict(line.split('\t') for line in LOG.read_text().splitlines() if '\t' in line) if LOG.exists() else {}
used = {int(p.stem.split('-')[1]) for p in DST.glob('photo-*.jpg')}

ORDER = [  # preferred order for the first batch; anything else follows by name
    'c7f73c661aa65aa8e1f5e09eccc726.JPG', '4c74aeb592b5f09227fe5c7c65ecdf.JPG', '467fb8fa9a99a808a75998308a238e.JPG',
    '8767c03f89205a55bf2fdc1eeb8c12.JPG', '78ac89914d4b0d1d4e699233f87f3b.JPG', '9225468d1ce3cad3f0b481a3ca400e.JPG',
    '99dcfb8844b6d751b0122be4a04b4e.JPG', 'c39119c1f1d14f43851a6e72888828.JPG', 'c5edee4b6f225aa4e2515f74b53631.JPG',
]
files = [p for p in SRC.iterdir() if p.suffix.lower() in {'.jpg', '.jpeg', '.png', '.heic', '.tif', '.tiff'} and not p.name.startswith('._')]
files.sort(key=lambda p: (ORDER.index(p.name) if p.name in ORDER else len(ORDER), p.name))

added = []
for f in files:
    if f.name in done.values():
        continue
    n = 1
    while n in used:
        n += 1
    used.add(n)
    im = ImageOps.exif_transpose(Image.open(f)).convert('RGB')
    im.thumbnail((2400, 2400))
    out = DST / f'photo-{n:02d}.jpg'
    im.save(out, quality=88, optimize=True)  # saved without EXIF
    done[out.name] = f.name
    added.append(f'{out.name} ← {f.name} {im.size}')

LOG.write_text(''.join(f'{k}\t{v}\n' for k, v in sorted(done.items())))
print('\n'.join(added) if added else 'No new photos.')
