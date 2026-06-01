#include "Enemy.h"

void Enemy::init(int score) {
  // 1. アセットの紐付け
  sprite = &ENEMY_SPRITE;

  // 2. 初期状態の設定
  x = 128.0f;
  // 足元を50.0fに揃える
  y = 50.0f - sprite->height;
  isPassed = false;

  // スコアに応じて速度を上げる
  speed = 2.0f + (score * 0.2f) + (random(0, 10) / 10.0f);
}

bool Enemy::update(float playerX, int score) {
  x -= speed;

  bool scored = false;
  // sprite->width を使用して追い越し判定
  if (!isPassed && playerX > (x + sprite->width)) {
    isPassed = true;
    scored = true;
  }

  if (x < -sprite->width) {
    init(score);  // 再初期化
  }
  return scored;
}

void Enemy::draw(LGFX_Sprite* canvas) {
  if (sprite) {
    sprite->draw(canvas, x, y);
  }
}
