#include "Player.h"

#include "../core/utils.h"
#include "Enemy.h"

void Player::init() {
  // 1. 使うアセットを指定
  sprite = &PLAYER_SPRITE;

  // 2. 初期位置の計算（Spriteのサイズを利用）
  x = 20.0f;
  y = 50.0f - sprite->height;  // 足元がGROUND_Y(50)に揃うように配置
  vy = 0;
  isGrounded = true;
}

void Player::update() {
  // ジャンプ処理
  if (M5.BtnA.wasPressed() && isGrounded) {
    vy = -5.0f;
    isGrounded = false;
  }

  // 物理演算
  vy += 0.4f;
  y += vy;

  // 接地判定（Spriteの高さを使って判定）
  if (y >= 50.0f - sprite->height) {
    y = 50.0f - sprite->height;
    vy = 0;
    isGrounded = true;
  }
}

void Player::draw(LGFX_Sprite* canvas) {
  // 自身の座標を渡して、Spriteに描画してもらう
  if (sprite) {
    sprite->draw(canvas, x, y);
  }
}

bool Player::isHit(const Enemy& e) {
  // 自身と敵のスプライト情報を元に判定
  return checkCollision(x, y, sprite->width, sprite->height, e.x, e.y,
                        e.sprite->width, e.sprite->height);
}
