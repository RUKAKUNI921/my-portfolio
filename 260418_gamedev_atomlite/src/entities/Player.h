#ifndef PLAYER_H
#define PLAYER_H

#include <M5Unified.h>

#include "../core/Assets.h"  // Assets(Sprite)を読み込む

struct Enemy;

struct Player {
  float x, y, vy;
  bool isGrounded;
  const Sprite* sprite;  // Spriteへのポインタ（参照）

  void init();
  void update();
  void draw(LGFX_Sprite* canvas);

  // 当たり判定用メソッドを追加
  bool isHit(const Enemy& e);
};

#endif
