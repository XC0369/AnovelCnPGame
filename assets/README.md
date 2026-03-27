# 美术与音频素材（可替换）

在 **`assets/config.js`** 中修改路径即可切换背景图、角色立绘和 BGM。  
将对应文件放入下面文件夹，或改为你的绝对/相对路径。

## 场景背景图 `bg/`
- 建议尺寸：1920×1080 或同比例，格式 jpg/png
- 在 `config.js` 的 `backgrounds` 里，键名与场景对应：
  - `graveyard` 墓园 · 日
  - `park` 小公园 · 黄昏
  - `old_house_door` 旧宅门口
  - `living_room_dusk` 客厅 · 黄昏
  - `bedroom1` 母亲卧室
  - `toilet` 主卧厕所
  - `bedroom2` 童年卧室
  - `study_room` 书房
  - `living_room_night` 客厅 · 夜

## 角色立绘 `char/`
- 建议透明底 PNG，高度约 800px，有台词时在画面中显示
- 在 `config.js` 的 `characters` 里，键名与说话人对应：`你`、`母亲`、`Anta`、`记者`

## 背景音乐 `music/`
- 建议格式：mp3，进入该场景时自动播放并循环
- 在 `config.js` 的 `music` 里按场景 id 配置，可共用同一文件（如多个室内场景用同一首 `home.mp3`）
