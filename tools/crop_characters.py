#!/usr/bin/env python3
"""Cut expression portraits out of the character sheets in assets/source/.

Output: assets/chars/<who>_<expression>.webp, portrait 0.8:1, head-centred.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "chars"
SIZE = (320, 400)  # output pixels, 0.8 aspect

# (x_centre, y_top, y_bottom) — Allan's busts sit on white, no frame
ALLAN = {
    "smile":   (893, 790, 1128), "laugh":  (1202, 790, 1128), "think": (1512, 790, 1128), "confused": (1805, 790, 1128),
    "shock":   (893, 1132, 1470), "point": (1205, 1132, 1470), "wink":  (1512, 1132, 1470), "talk":     (1814, 1132, 1472),
}
# Arale's expressions are framed panels; inner bounds measured from the sheet borders
AX = [(436, 797), (823, 1183), (1209, 1570), (1593, 1954)]
AY = [(807, 1115), (1143, 1451)]
ARALE_NAMES = [["laugh", "think", "shock", "confused"], ["talk", "sad", "wink", "jump"]]


def portrait(img, cx, y0, y1, xmin=0, xmax=None):
    h = y1 - y0
    w = int(h * SIZE[0] / SIZE[1])
    x0 = max(xmin, min(cx - w // 2, (xmax or img.width) - w))
    return img.crop((x0, y0, x0 + w, y1)).resize(SIZE, Image.LANCZOS)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    allan = Image.open(ROOT / "assets/source/allan_sheet.jpg").convert("RGB")
    for name, (cx, y0, y1) in ALLAN.items():
        portrait(allan, cx, y0, y1).save(OUT / f"allan_{name}.webp", quality=88)
    arale = Image.open(ROOT / "assets/source/arale_sheet.jpg").convert("RGB")
    for r, (y0, y1) in enumerate(AY):
        for c, (x0, x1) in enumerate(AX):
            portrait(arale, (x0 + x1) // 2, y0, y1, x0, x1).save(OUT / f"arale_{ARALE_NAMES[r][c]}.webp", quality=88)
    print("wrote", len(list(OUT.glob("*.webp"))), "portraits to", OUT.relative_to(ROOT))


if __name__ == "__main__":
    main()
