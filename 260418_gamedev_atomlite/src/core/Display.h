#ifndef DISPLAY_H
#define DISPLAY_H

#include <M5Unified.h>

#include <lgfx/v1/panel/Panel_SSD1306.hpp>

// クラス定義をここに封印する
class LGFX_OLED : public lgfx::LGFX_Device {
  lgfx::v1::Panel_SSD1306 _panel_instance;
  lgfx::v1::Bus_I2C _bus_instance;

 public:
  LGFX_OLED() {
    {
      auto cfg = _bus_instance.config();
      cfg.pin_sda = 26;  // Atom Lite Grove SDA
      cfg.pin_scl = 32;  // Atom Lite Grove SCL
      _bus_instance.config(cfg);
      _panel_instance.setBus(&_bus_instance);
    }
    {
      auto cfg = _panel_instance.config();
      cfg.panel_width = 128;
      cfg.panel_height = 64;
      _panel_instance.config(cfg);
    }
    setPanel(&_panel_instance);
  }
};

// 他のファイルからこの display を使えるようにする魔法の言葉
extern LGFX_OLED display;

#endif
