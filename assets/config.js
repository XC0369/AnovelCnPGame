/**
 * 可替换素材配置
 * 修改下方路径以使用自己的背景图、角色图、BGM。
 * 路径相对于 index.html 所在目录，例如：assets/bg/graveyard.jpg
 */
window.NOVEL_ASSETS = {
  // 场景背景图（键名 = 场景 id，与步骤中的 locationId 对应）
  backgrounds: {
    graveyard: 'assets/bg/graveyard.jpg',
    park: 'assets/bg/park.jpg',
    old_house_door: 'assets/bg/old_house_door.jpg',
    living_room_dusk: 'assets/bg/living_room_dusk.jpg',
    bedroom1: 'assets/bg/bedroom1.jpg',
    toilet: 'assets/bg/toilet.jpg',
    bedroom2: 'assets/bg/bedroom2.jpg',
    study_room: 'assets/bg/study_room.jpg',
    living_room_night: 'assets/bg/living_room_night.jpg'
  },
  // 角色立绘（键名 = 说话人 speaker，有台词时在场景中显示）
  characters: {
    '你': 'assets/char/player.png',
    '母亲': 'assets/char/mother.png',
    'Anta': 'assets/char/anta.png',
    '记者': 'assets/char/reporter.png'
  },
  // 场景 BGM（键名 = 场景 id）
  music: {
    graveyard: 'assets/music/graveyard.mp3',
    park: 'assets/music/park.mp3',
    old_house_door: 'assets/music/old_house_door.mp3',
    living_room_dusk: 'assets/music/living_room_dusk.mp3',
    bedroom1: 'assets/music/bedroom1.mp3',
    toilet: 'assets/music/toilet.mp3',
    bedroom2: 'assets/music/bedroom1.mp3',
    study_room: 'assets/music/study_room.mp3',
    living_room_night: 'assets/music/living_room_dusk.mp3'
  },
  // 对话语音（键名 = 步骤中的 id，值为语音文件路径）
  // 对话示例：步骤中有 id: 'reporter_1'，则配置 'reporter_1': 'assets/voice/reporter_1.mp3'
  voiceover: {
    // 对话语音
    'reporter_1': 'assets/voice/reporter_1.mp3',
    'reporter_2': 'assets/voice/reporter_2.mp3',
    'reporter_3': 'assets/voice/reporter_3.mp3',
    'player_card': 'assets/voice/player_card.mp3',
    'player_card2': 'assets/voice/player_card2.mp3',
    'player_childhood': 'assets/voice/player_childhood.mp3',
    'player_no1': 'assets/voice/player_no1.mp3',
    'player_no2': 'assets/voice/player_no2.mp3',
    'player_no_erase': 'assets/voice/player_no_erase.mp3',
    'mother_wipe': 'assets/voice/mother_wipe.mp3',
    'mother_mess': 'assets/voice/mother_mess.mp3',

    // 旁白语音（键名格式：narr_ + 步骤索引）
    'narr_0': 'assets/voice/narr_0.mp3',
    'narr_1': 'assets/voice/narr_1.mp3',
    'narr_2': 'assets/voice/narr_2.mp3',
    'narr_3': 'assets/voice/narr_3.mp3',
    'narr_4': 'assets/voice/narr_4.mp3',
    'narr_5': 'assets/voice/narr_5.mp3',
    'narr_7': 'assets/voice/narr_7.mp3',
    'narr_9': 'assets/voice/narr_9.mp3',
    'narr_11': 'assets/voice/narr_11.mp3',
    'narr_12': 'assets/voice/narr_12.mp3',
    'narr_13': 'assets/voice/narr_13.mp3',
    'narr_14': 'assets/voice/narr_14.mp3',
    'narr_15': 'assets/voice/narr_15.mp3',
    'narr_16': 'assets/voice/narr_16.mp3',
    'narr_18': 'assets/voice/narr_18.mp3',
    'narr_20': 'assets/voice/narr_20.mp3',
    'narr_21': 'assets/voice/narr_21.mp3',
    'narr_22': 'assets/voice/narr_22.mp3',
    'narr_27': 'assets/voice/narr_27.mp3',
    'narr_29': 'assets/voice/narr_29.mp3',
    'narr_31': 'assets/voice/narr_31.mp3',
    'narr_32': 'assets/voice/narr_32.mp3',
    'narr_33': 'assets/voice/narr_33.mp3'
  },
  // 场景互动元素（键名 = 场景 id，x/y/w/h 基于 1920×1080 画布）
  // image 字段指定图片路径，设为 null 则显示热区边框
  // sound 字段指定点击时播放的音效文件路径
  interactions: {
    graveyard: [
      { id: 'umbrella', x: 860, y: 280, w: 200, h: 300, name: '黑伞',
        desc: '一把黑色的伞，被风吹到了不远处。', image: 'assets/interaction/black_umb.png',
        sound: 'assets/sfx/umbrella.mp3' },
      { id: 'coffin', x: 810, y: 600, w: 300, h: 280, name: '棺材',
        desc: '母亲的棺材，静静地躺在这里。', image: 'assets/interaction/coffin.png',
        sound: 'assets/sfx/coffin.mp3' }
    ],
    park: [
      { id: 'swing', x: 550, y: 380, w: 300, h: 220, name: '秋千',
        desc: '记忆中的秋千，如今已经破旧不堪。', image: 'assets/interaction/trapeze.png',
        sound: 'assets/sfx/swing.mp3' }
    ],
    old_house_door: [
      { id: 'potted', x: 100, y: 680, w: 140, h: 120, name: '盆栽',
        desc: '门口叶子泛黄几近腐烂的盆栽。', image: 'assets/interaction/potplant.png',
        sound: 'assets/sfx/potplant.mp3' }
    ],
    bedroom1: [
      { id: 'suit', x: 1000, y: 420, w: 200, h: 260, name: '男士西装',
        desc: '枕头上放着一件男士西装，你好奇这是谁的衣服……', image: 'assets/interaction/mensuit.png',
        sound: 'assets/sfx/suit.mp3' }
    ],
    toilet: [
      { id: 'mirror', x: 1100, y: 200, w: 280, h: 380, name: '镜子',
        desc: '镜子有些破碎，边上好像藏着什么东西……', image: 'assets/interaction/mirror.png',
        sound: 'assets/sfx/mirror.mp3' }
    ],
    bedroom2: [
      { id: 'desk', x: 80, y: 440, w: 280, h: 200, name: '粉红书桌',
        desc: '那张粉红色的儿童书桌，上面纤尘不染。', image: 'assets/interaction/pinkdesk.png',
        sound: 'assets/sfx/desk.mp3' },
      { id: 'bunny', x: 1380, y: 300, w: 200, h: 200, name: '兔子涂鸦',
        desc: '床头那个滑稽又可笑的涂鸦，小时候的你第一次对母亲发出权威性挑战的尝试。', image: 'assets/interaction/rabbitgraffiti.png',
        sound: 'assets/sfx/bunny.mp3' },
      { id: 'bookshelf', x: 1500, y: 180, w: 280, h: 400, name: '书柜',
        desc: '你从来都不喜欢那些枯燥乏味的经典书籍，偏偏对漫画情有独钟……', image: 'assets/interaction/bookcase.png',
        sound: 'assets/sfx/bookshelf.mp3' }
    ],
    study_room: [
      { id: 'notebook', x: 800, y: 320, w: 220, h: 140, name: '笔记本',
        desc: '书桌上的笔记本，上面尽是些与保守党有关的内容。', image: 'assets/interaction/notebook.png',
        sound: 'assets/sfx/notebook.mp3' },
      { id: 'drawer', x: 700, y: 500, w: 280, h: 140, name: '抽屉',
        desc: '书桌的抽屉，上锁了……需要三位数的密码。', image: 'assets/interaction/drawer.png',
        sound: 'assets/sfx/drawer.mp3' }
    ],
    living_room_night: [
      { id: 'guitar', x: 280, y: 380, w: 200, h: 320, name: '吉他',
        desc: '客厅里的吉他，你随着远处的歌声弹奏起来。', image: 'assets/interaction/gituar.png',
        sound: 'assets/sfx/guitar.mp3' }
    ]
  },
  // 手机菜单场景导航选项
  sceneNav: [
    { id: 'graveyard', name: '墓地', scene: 'EXT. GRAVEYARD - DAY' },
    { id: 'park', name: '小公园', scene: 'EXT. PARK - DUSK' },
    { id: 'old_house_door', name: '旧宅门口', scene: 'EXT. OLD HOUSE FRONT DOOR - DUSK' },
    { id: 'living_room_dusk', name: '客厅（黄昏）', scene: 'INT. OLD HOUSE LIVING ROOM - DUSK' },
    { id: 'living_room_night', name: '客厅（夜晚）', scene: 'INT. OLD HOUSE LIVING ROOM - NIGHT' },
    { id: 'bedroom1', name: '主卧', scene: 'INT. OLD HOUSE BEDROOM 1 - DUSK' },
    { id: 'toilet', name: '主卧厕所', scene: 'INT. OLD HOUSE BEDROOM 1 TOILET - DUSK' },
    { id: 'bedroom2', name: '儿童房', scene: 'INT. OLD HOUSE BEDROOM 2 - DUSK' },
    { id: 'study_room', name: '书房', scene: 'INT. OLD HOUSE STUDY ROOM - DUSK' }
  ],

  // 地图配置
  map: {
    // 地图背景图片（可配置，支持 gif/jpg/png 等格式）
    background: 'assets/map/map_bg.gif',
    // 地图图标（用于标记可选位置，设为空则不显示图标）
    markerIcon: 'assets/icon/map_icon_01.png',
    // 地图上的可点击位置
    locations: [
      {
        id: 'graveyard',
        name: '墓地',
        x: 60,  // 百分比
        y: 40,
        size: 50,
        scene: 'EXT. GRAVEYARD - DAY'
      },
      {
        id: 'park',
        name: '小公园',
        x: 75,
        y: 35,
        size: 50,
        scene: 'EXT. PARK - DUSK'
      },
      {
        id: 'old_house_door',
        name: '旧宅门口',
        x: 90,
        y: 45,
        size: 50,
        scene: 'EXT. OLD HOUSE FRONT DOOR - DUSK'
      }
    ]
  }
};
