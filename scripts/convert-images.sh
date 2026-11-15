#!/usr/bin/env bash
# Convert every photo in static/ to 3 formats for the <picture> fallback chain:
#   AVIF (first, smallest) -> WebP -> JPEG (universal fallback)
# Re-run after adding a new photo: outputs are skipped when newer than the source.
# Requires: ffmpeg with libaom-av1 and mjpeg encoders.
set -euo pipefail
cd "$(dirname "$0")/.."

for src in static/*.webp; do
  base="${src%.webp}"
  # AVIF: visually near-identical to the WebP source at ~half the size
  if [ ! -f "$base.avif" ] || [ "$src" -nt "$base.avif" ]; then
    ffmpeg -hide_banner -loglevel error -y -i "$src" -c:v libaom-av1 -crf 30 -b:v 0 -cpu-used 5 -row-mt 1 "$base.avif"
  fi
  # JPEG: universal fallback for browsers without AVIF/WebP
  if [ ! -f "$base.jpg" ] || [ "$src" -nt "$base.jpg" ]; then
    ffmpeg -hide_banner -loglevel error -y -i "$src" -c:v mjpeg -q:v 3 "$base.jpg"
  fi
done

echo "Format sizes (smaller is better):"
ls -lh static/*.avif static/*.webp static/*.jpg | awk '{print $9, $5}'
