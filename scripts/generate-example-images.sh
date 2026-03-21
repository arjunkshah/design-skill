#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.local"
OUT_DIR="$ROOT_DIR/public/assets/openai"
GEN_SCRIPT="/Users/arjunkshah21/.agents/skills/openai-image-gen/scripts/gen.py"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE" >&2
  exit 1
fi

set -a
source "$ENV_FILE"
set +a

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  echo "OPENAI_API_KEY is not set in $ENV_FILE" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

gen_image() {
  local name="$1"
  local size="$2"
  local prompt="$3"
  local tmp_dir

  tmp_dir="$(mktemp -d)"
  echo "Generating $name"
  python3 "$GEN_SCRIPT" \
    --model gpt-image-1 \
    --count 1 \
    --size "$size" \
    --quality high \
    --output-format webp \
    --out-dir "$tmp_dir" \
    --prompt "$prompt"

  mv "$tmp_dir"/*.webp "$OUT_DIR/$name.webp"
  rm -f "$tmp_dir/prompts.json" "$tmp_dir/index.html"
  rmdir "$tmp_dir"
}

gen_image "landing-hero-main" "1024x1536" "Premium editorial design studio for an AI website design system, warm paper-inspired monochrome palette, oversized layout printouts pinned to a wall, tactile mockups and refined product direction materials, photographed like a high-end design magazine, soft tungsten light, no text, no logos"
gen_image "landing-hero-detail" "1024x1536" "Close-up still life of refined web design materials, layered paper comps, grid notes, elegant neutral textures, restrained luxury, art-directed editorial photography, no text, no logos"
gen_image "landing-process-structure" "1536x1024" "Abstract design system composition showing structure and hierarchy, modular frames, typographic blocks, grid overlays, premium editorial art direction, quiet neutral palette, high-end campaign image, no text"
gen_image "landing-process-variation" "1536x1024" "Curated wall of contrasting website section concepts, bento grid, centered thesis, sticky storytelling, horizontal rail ideas translated into a refined abstract visual composition, art-directed, no text"
gen_image "landing-process-review" "1536x1024" "Minimal creative review desk with printed website proofs, annotation marks, pacing and hierarchy studies, warm natural light, premium editorial product image, no readable text"
gen_image "axon-stage-main" "1536x1024" "Cinematic enterprise AI operations control surface, dark precise interface on large glass displays, routing graphs, approval states, evaluation signals, premium product render, sharp blue accents, no readable text"
gen_image "axon-stage-detail" "1536x1024" "Close-up of a high-end dark AI infrastructure interface, precise panels, model routing details, latency and policy signals, elegant blue-black palette, premium product render, no readable text"
gen_image "ledger-stage" "1536x1024" "Warm editorial finance advisory scene, cream paper memos, subtle charts, leather desk surface, brass details, composed private-capital atmosphere, luxury editorial photography, no readable text"
gen_image "canopy-stage" "1024x1536" "Quiet wellness product scene with calm ritual objects, soft green and oat palette, journal surface, subtle mobile app presence, airy natural light, premium editorial photography, no readable text"

echo "Wrote images to $OUT_DIR"
