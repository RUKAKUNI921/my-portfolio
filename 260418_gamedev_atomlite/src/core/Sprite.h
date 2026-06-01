#ifndef SPRITE_H
#define SPRITE_H

#include <M5Unified.h>

struct Sprite {
  const uint8_t* data;  // 画像データへのポインタ
  int width;
  int height;

  // 指定されたキャンバスに描画する汎用メソッド
  void draw(LGFX_Sprite* canvas, float x, float y) const {
    if (data == nullptr) return;  // 安全策：データが空なら何もしない

    // pushImage ではなく drawBitmap を使う
    // canvas->drawBitmap(x, y, データ, 幅, 高さ, 色);
    canvas->drawBitmap((int16_t)x, (int16_t)y, data, width, height, 1);
  }
};

#endif
