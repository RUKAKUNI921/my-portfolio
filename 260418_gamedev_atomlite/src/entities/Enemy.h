#ifndef ENEMY_H
#define ENEMY_H

#include <M5Unified.h>

#include "../core/Assets.h"

struct Enemy {
  float x, y;
  float speed;
  bool isPassed;
  const Sprite* sprite;  // Spriteアセットへの参照

  void init(int score);
  bool update(float playerX, int score);
  void draw(LGFX_Sprite* canvas);
};

#endif
