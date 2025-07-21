#!/usr/bin/env bash

# 1) Print the 16 “basic” colors (0–15), using background color so the numbers show up nicely
echo "Basic 16 colors:"
for code in {0..15}; do
  # 48;5;${code} → set background to palette entry $code
  # \e[0m resets attributes afterward
  printf "\e[48;5;%2dm %3d \e[0m" "${code}" "${code}"
  # break line every 8 for readability
  if (( (code + 1) % 8 == 0 )); then
    echo
  fi
done
echo -e "\n"

# 2) Print the full 256‐color palette (foreground text)
echo "Full 256‐color palette:"
for code in {0..255}; do
  # 38;5;${code} → set foreground to palette entry $code
  printf "\e[38;5;%3dm %3d \e[0m" "${code}" "${code}"
  # break line every 16 for a grid
  if (( (code + 1) % 16 == 0 )); then
    echo
  fi
done
echo
