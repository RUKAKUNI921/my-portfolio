#include <M5Unified.h>

#include "core/Display.h"
#include "entities/Enemy.h"
#include "entities/Player.h"

LGFX_Sprite canvas;
Player player;
Enemy enemy;

int score = 0;

bool isGameOver = false;

void setup() {
  M5.begin();

  randomSeed(analogRead(33));
  display.init();

  canvas.setColorDepth(1);
  canvas.createSprite(128, 64);

  player.init();
  enemy.init(score);
}

void loop() {
  M5.update();

  if (!isGameOver) {
    // --- 1. Update ---
    player.update();
    if (enemy.update(player.x, score)) {
      score++;
    }

    // --- 2. Collision Check ---
    // Playerの描画位置を中心(x,y)・半径4とした場合の矩形範囲を計算
    if (player.isHit(enemy)) {
      isGameOver = true;
    }

    // --- 3. Draw ---
    canvas.clear();
    player.draw(&canvas);
    enemy.draw(&canvas);

    // スコア表示 (右上に配置)
    canvas.setCursor(80, 0);
    canvas.printf("SC:%03d", score);  // 3桁で表示
  } else {
    // ゲームオーバー画面
    canvas.clear();
    canvas.setCursor(20, 20);
    canvas.printf("FINAL SCORE: %d", score);
    canvas.setCursor(20, 40);
    canvas.print("Press Btn to Reset");

    if (M5.BtnA.wasPressed()) {
      isGameOver = false;
      score = 0;  // リセット
      player.init();
      enemy.init(score);
    }
  }

  canvas.pushSprite(&display, 0, 0);
  delay(16);
}
