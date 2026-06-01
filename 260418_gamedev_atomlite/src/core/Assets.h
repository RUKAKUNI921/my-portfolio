#ifndef ASSETS_H
#define ASSETS_H

#include "Sprite.h"

// 自機のデータ
static const uint8_t player_bmp[] = {0x3C, 0x7E, 0xFF, 0xDB,
                                     0xFF, 0xFF, 0xA5, 0x00};
const Sprite PLAYER_SPRITE = {player_bmp, 8, 8};

// 敵のデータ
static const uint8_t enemy_bmp[] = {0x18, 0x3C, 0x7E, 0xFF,
                                    0xFF, 0x7E, 0x3C, 0x18};
const Sprite ENEMY_SPRITE = {enemy_bmp, 8, 8};

#endif
