/**
 * 可替换素材配置
 * 修改下方路径以使用自己的背景图、角色图、BGM。
 * 路径相对于 index.html 所在目录，例如：assets/bg/graveyard.jpg
 */
window.NOVEL_ASSETS = {
  // 场景背景图（键名 = 场景 id，与步骤中的 locationId 对应）
  backgrounds: {
    graveyard: 'assets/bg/graveyard.png',
    park: 'assets/bg/park.png',
    old_house_door: 'assets/bg/old_house_door.png',
    living_room_dusk: 'assets/bg/living_room_dusk.png',
    bedroom1: 'assets/bg/bedroom1.png',
    toilet: 'assets/bg/toilet.png',
    bedroom2: 'assets/bg/bedroom2.png',
    study_room: 'assets/bg/study_room.png',
    living_room_night: 'assets/bg/living_room_night.png'
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
        desc: '那张粉红色的儿童书桌，上面纤尘不染。抽屉里有一张卡片……', image: 'assets/interaction/pinkdesk.png',
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
        sound: 'assets/sfx/drawer.mp3' },
      { id: 'files', x: 1200, y: 340, w: 180, h: 120, name: '案头文件',
        desc: '书桌旁堆放的案头文件，最上面一份写着“尸检报告摘要”。', image: 'assets/interaction/notebook.png',
        sound: 'assets/sfx/notebook.mp3' },
      { id: 'safe', x: 1100, y: 620, w: 160, h: 220, name: '保险箱',
        desc: '墙角的保险箱，箱门半开着，里面已经空了。', image: 'assets/interaction/drawer.png',
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
  },

  // ========== 证据系统配置 ==========
  // 四大阵营
  factions: {
    order: { name: '秩序', color: '#4a90d9', icon: '⚖️', desc: '维护传统秩序，遵循既有规则' },
    innovation: { name: '创新', color: '#9b59b6', icon: '💡', desc: '拥抱技术进步，突破生命界限' },
    questioning: { name: '质疑', color: '#e67e22', icon: '🔍', desc: '追求真相，揭露阴谋' },
    economy: { name: '经济', color: '#27ae60', icon: '💰', desc: '重视实际利益，发展经济' }
  },

  // 所有证据定义
  evidences: {
    // ===== 基础证据（可通过场景互动获得） =====
    evidence_suit: {
      id: 'evidence_suit',
      icon: '👔',
      name: '神秘男士西装',
      category: 'item', // 物品类证据
      location: 'bedroom1', // 获得地点
      description: '枕头上放着的男士西装，尺码偏大，领口有磨损痕迹，似乎是经常佩戴领带的人穿的。西装内侧口袋有淡淡的香水味，与Anta身上的味道相似。',
      obtainedBy: '点击主卧的男士西装',
      // 阵营分数贡献
      factionScores: {
        order: 1,
        innovation: 0,
        questioning: 1, // 质疑派会追查来源
        economy: 2
      },
      // 证据类型
      isNecessary: false,  // 是否为必要证据
      isSufficient: false  // 是否为充分证据
    },
    evidence_card: {
      id: 'evidence_card',
      icon: '💳',
      name: '隐藏的磁卡',
      category: 'item',
      location: 'toilet',
      description: '从碎裂的镜子后发现的磁卡，上面刻着"时间不应成为特权"。这是进入某个安全区域的钥匙。',
      obtainedBy: '击碎主卧厕所的镜子',
      factionScores: {
        order: 1,
        innovation: 2,
        questioning: 2,
        economy: 0
      },
      isNecessary: false,
      isSufficient: false
    },
    evidence_password: {
      id: 'evidence_password',
      icon: '🔑',
      name: '密码便签719',
      category: 'document', // 文档类证据
      location: 'bedroom2',
      description: '在童年漫画书中发现的便签，上面用母亲的笔迹写着三位数字"719"。母亲的笔迹很有特点，7字都会加一横。',
      obtainedBy: '翻阅儿童房的漫画书',
      factionScores: {
        order: 0,
        innovation: 1,
        questioning: 3,
        economy: 0
      },
      isNecessary: false,
      isSufficient: false
    },
    evidence_proposal: {
      id: 'evidence_proposal',
      icon: '📜',
      name: '《延寿技术禁止提案》',
      category: 'document',
      location: 'study_room',
      description: '母亲书房抽屉中的提案文件。这份立法提案主张全面禁止突破自然寿命上限的技术。母亲是秩序党的核心人物，坚决反对延寿技术。',
      obtainedBy: '打开书房的抽屉锁（密码719）',
      factionScores: {
        order: 4,
        innovation: 0,
        questioning: 1,
        economy: 0
      },
      isNecessary: true,   // 必要证据
      isSufficient: false
    },
    evidence_notebook: {
      id: 'evidence_notebook',
      icon: '📓',
      name: '母亲的笔记本',
      category: 'document',
      location: 'study_room',
      description: '书房桌上的笔记本，记录着母亲对延寿技术的担忧，以及对"创新党"背后势力的调查笔记。',
      obtainedBy: '翻阅书房的笔记本',
      factionScores: {
        order: 1,
        innovation: 0,
        questioning: 3,
        economy: 1
      },
      isNecessary: false,
      isSufficient: true   // 充分证据
    },
    evidence_anta_visit: {
      id: 'evidence_anta_visit',
      icon: '🌧️',
      name: 'Anta的出现',
      category: 'event', // 事件类证据
      location: 'graveyard',
      description: '在母亲的葬礼上，Anta（母亲的政敌）不请自来。她一身黑衣，举止冷漠，却在你即将昏迷时为你撑起了伞。',
      obtainedBy: '墓地场景剧情自动获得',
      factionScores: {
        order: 1,
        innovation: 1,
        questioning: 2,
        economy: 2
      },
      isNecessary: true,
      isSufficient: false
    },
    evidence_reporter: {
      id: 'evidence_reporter',
      icon: '📢',
      name: '记者的嘶吼',
      category: 'event',
      location: 'graveyard',
      description: '葬礼上，一名记者高声宣称母亲之死是"谋杀"，是"创新党的阴谋"，指责Anta及其势力"肮脏勾当"。他被Anta的保镖捂住了嘴。',
      obtainedBy: '墓地场景剧情自动获得',
      factionScores: {
        order: 1,
        innovation: 1,
        questioning: 3,
        economy: 1
      },
      isNecessary: false,
      isSufficient: true
    },
    evidence_anta_whisper: {
      id: 'evidence_anta_whisper',
      icon: '🤫',
      name: 'Anta的低语',
      category: 'dialogue', // 对话类证据
      location: 'graveyard',
      description: '在被保镖带走时，那名记者最后挣扎着说了一句："Anta知道一切...她也是受害者..."',
      obtainedBy: '墓地场景剧情自动获得',
      factionScores: {
        order: 0,
        innovation: 1,
        questioning: 3,
        economy: 0
      },
      isNecessary: false,
      isSufficient: true
    },
    evidence_decrypt_card: {
      id: 'evidence_decrypt_card',
      icon: '🔮',
      name: '解密卡',
      category: 'item',
      location: 'bedroom2',
      description: '粉红书桌抽屉里的特殊卡片，可以用来揭示隐藏的信息。',
      obtainedBy: '打开儿童房的粉红书桌',
      factionScores: {
        order: 0,
        innovation: 1,
        questioning: 1,
        economy: 0
      },
      isNecessary: false,
      isSufficient: false
    },
    evidence_letter: {
      id: 'evidence_letter',
      icon: '✉️',
      name: '未寄出的信',
      category: 'document',
      location: 'bedroom2',
      description: '在书桌抽屉深处发现的一封信，收件人是Anta，但从未寄出。信中母亲写道："我知道他们在利用延寿技术做什么...我不能让这一切继续..."',
      obtainedBy: '使用解密卡查看书柜中的隐藏信息',
      factionScores: {
        order: 2,
        innovation: 0,
        questioning: 3,
        economy: 0
      },
      isNecessary: true,
      isSufficient: true
    },
    evidence_photo: {
      id: 'evidence_photo',
      icon: '📷',
      name: '泛黄的照片',
      category: 'item',
      location: 'bedroom1',
      description: '西装口袋里有一张合照：年轻时的母亲和Anta站在一起，背景是一座研究所。照片背面写着："2008年，永生计划启动"。',
      obtainedBy: '检查男士西装的口袋',
      factionScores: {
        order: 1,
        innovation: 2,
        questioning: 2,
        economy: 1
      },
      isNecessary: true,
      isSufficient: true
    },
    evidence_autopsy: {
      id: 'evidence_autopsy',
      icon: '🔬',
      name: '尸检报告摘要',
      category: 'document',
      location: 'study_room',
      description: '母亲死亡时，体内检测出超量的安眠药成分。但奇怪的是，她的胃容物中还有一种罕见的神经抑制剂——这种药物通常用于延寿技术的临床试验。',
      obtainedBy: '在书房文件中发现',
      factionScores: {
        order: 2,
        innovation: 1,
        questioning: 2,
        economy: 0
      },
      isNecessary: false,
      isSufficient: true
    },
    evidence_safe_opened: {
      id: 'evidence_safe_opened',
      icon: '🔐',
      name: '被打开的保险箱',
      category: 'event',
      location: 'study_room',
      description: '书房的保险箱已被打开，里面空空如也——有人比你先一步取走了里面的东西。箱门上有细微的划痕，像是用磁卡刷开的。',
      obtainedBy: '在书房发现保险箱被打开',
      factionScores: {
        order: 1,
        innovation: 0,
        questioning: 2,
        economy: 1
      },
      isNecessary: false,
      isSufficient: false
    }
  },

  // ===== 真相定义 =====
  // 每个真相都有前置条件、所需证据组合、阵营分数要求
  truths: {
    truth_murder: {
      id: 'truth_murder',
      icon: '🔪',
      name: '母亲的死因',
      title: '母亲之死：谋杀而非自杀',
      description: '根据收集到的证据，母亲并非自杀，而是一场精心策划的谋杀。',
      // 真相内容（核实真相时显示）
      content: '<p><strong>真相揭露：</strong></p><p>母亲并非自杀身亡。根据尸检报告，她体内的安眠药剂量远超正常自杀所需，而那种罕见的神经抑制剂更是她绝不会自行服用的药物。</p><p>更重要的是，她死前一直在秘密调查"永生计划"——一个由创新党主导、涉及政商两界的延寿技术阴谋。</p><p>她发现了不该发现的东西，于是被灭口了。</p>',
      // 必要证据列表（必须全部获得）
      requiredEvidences: ['evidence_proposal', 'evidence_anta_visit', 'evidence_letter', 'evidence_photo'],
      // 充分证据列表（至少需要获得一半以上才能充分证明）
      sufficientEvidences: ['evidence_notebook', 'evidence_reporter', 'evidence_anta_whisper', 'evidence_autopsy', 'evidence_password'],
      // 阵营分数要求（确认真相时必须满足）
      // threshold: 各阵营所需达到的最低分数
      // failureFaction: 该阵营若 total > threshold 则真相失败；若 total == threshold 则成功
      factionRequirements: {
        threshold: { order: 9, innovation: 5, questioning: 16, economy: 3 }
      },
      // 单一失败阵营
      failureFaction: 'innovation',
      // 解锁的后续剧情
      unlocksStory: 'INT. OLD HOUSE STUDY ROOM - NIGHT'
    },
    truth_conspiracy: {
      id: 'truth_conspiracy',
      icon: '🧬',
      name: '延寿技术阴谋',
      title: '永生计划：政商勾结的黑暗产业链',
      description: '一个涉及政商两界的巨大阴谋，通过延寿技术建立新型权力垄断。',
      content: '<p><strong>真相揭露：</strong></p><p>"永生计划"是一个跨越二十年的阴谋。2008年，创新党在Anta的支持下启动了这项秘密计划，目标是利用延寿技术建立新的权力等级。</p><p>他们首先在政要和富豪中推广延寿技术，形成一个"不老阶层"。这些人通过延寿技术长期占据权力和财富，导致社会流动性彻底僵化。</p><p>母亲发现了这一切，她试图通过立法禁止延寿技术来阻止这个阴谋。但她的提案触动了某些人的核心利益，于是她成为了必须被清除的障碍。</p>',
      requiredEvidences: ['evidence_proposal', 'evidence_photo', 'evidence_notebook', 'evidence_autopsy'],
      sufficientEvidences: ['evidence_reporter', 'evidence_letter', 'evidence_anta_whisper'],
      factionRequirements: {
        threshold: { order: 9, innovation: 4, questioning: 14, economy: 2 }
      },
      failureFaction: 'economy',
      unlocksStory: 'INT. OLD HOUSE BASEMENT - NIGHT'
    },
    truth_anta: {
      id: 'truth_anta',
      icon: '🎭',
      name: 'Anta的真相',
      title: 'Anta：敌人还是盟友？',
      description: 'Anta的真实身份和立场，远比表面看起来复杂得多。',
      content: '<p><strong>真相揭露：</strong></p><p>Anta曾经是母亲最亲密的战友。2008年，两人一同发现了"永生计划"的真相，母亲决定用法律武器阻止阴谋，而Anta选择了卧底——她假装投靠创新党，从内部收集证据。</p><p>母亲的西装是Anta的，她把自己的外套盖在母亲遗体上，以战友的身份送她最后一程。那名记者其实是Anta安排的人，他试图在混乱中传递信息，但被打断了。</p><p>Anta手中的磁卡，是她从保险箱中取走的——那里面有"永生计划"的全部核心证据。她在等待一个继承母亲遗志的人，来完成这场未竟的战斗。</p>',
      requiredEvidences: ['evidence_suit', 'evidence_anta_visit', 'evidence_anta_whisper', 'evidence_photo'],
      sufficientEvidences: ['evidence_notebook', 'evidence_letter', 'evidence_reporter'],
      factionRequirements: {
        threshold: { order: 5, innovation: 4, questioning: 14, economy: 5 }
      },
      failureFaction: 'questioning',
      unlocksStory: 'INT. OLD HOUSE STUDY ROOM - DAWN'
    },
    truth_final: {
      id: 'truth_final',
      icon: '👁️',
      name: '最终真相',
      title: '继承遗志：揭开一切的钥匙',
      description: '当所有线索汇聚一处，完整的真相终于浮出水面。',
      content: '<p><strong>真相揭露：</strong></p><p>母亲——林清漪，是秩序党的核心领袖，也是"延寿技术禁止立法"的发起人。她用一生的时间与"永生计划"抗争，因为她深知：当死亡不再是必然，权力将永世固化，社会将彻底失去活力。</p><p>你继承了她的遗志。Anta已经将"永生计划"的核心证据交到了你手中。接下来的路，将由你来走完。</p><p>但请记住：真相的力量不在于复仇，而在于改变。当你握有真相时，你将面临最后的抉择——是将这一切公之于众，还是用另一种方式改变这个世界？</p>',
      requiredEvidences: ['evidence_proposal', 'evidence_letter', 'evidence_photo', 'evidence_autopsy'],
      sufficientEvidences: ['evidence_notebook', 'evidence_anta_visit', 'evidence_anta_whisper', 'evidence_reporter'],
      factionRequirements: {
        threshold: { order: 10, innovation: 3, questioning: 13, economy: 1 }
      },
      failureFaction: 'order',
      unlocksStory: 'INT. OLD HOUSE ENDING'
    }
  },

  // 真相验证关系图（用于连线提示和验证）
  // 定义哪些证据组合可以证明哪个真相
  truthConnections: {
    truth_murder: {
      primary: ['evidence_proposal', 'evidence_autopsy'],  // 直接证据
      supporting: ['evidence_notebook', 'evidence_reporter', 'evidence_password'], // 旁证
      connections: [
        { from: 'evidence_proposal', to: 'evidence_autopsy', label: '药物来源' },
        { from: 'evidence_autopsy', to: 'evidence_notebook', label: '调查线索' },
        { from: 'evidence_notebook', to: 'evidence_reporter', label: '内部消息' }
      ]
    },
    truth_conspiracy: {
      primary: ['evidence_photo', 'evidence_proposal'],
      supporting: ['evidence_notebook', 'evidence_autopsy'],
      connections: [
        { from: 'evidence_photo', to: 'evidence_proposal', label: '计划起源' },
        { from: 'evidence_notebook', to: 'evidence_autopsy', label: '死亡真相' }
      ]
    },
    truth_anta: {
      primary: ['evidence_suit', 'evidence_photo'],
      supporting: ['evidence_anta_visit', 'evidence_anta_whisper'],
      connections: [
        { from: 'evidence_suit', to: 'evidence_photo', label: '真实身份' },
        { from: 'evidence_photo', to: 'evidence_anta_visit', label: '出席葬礼' },
        { from: 'evidence_anta_whisper', to: 'evidence_anta_visit', label: '证人证词' }
      ]
    },
    truth_final: {
      primary: ['evidence_proposal', 'evidence_letter'],
      supporting: ['evidence_photo', 'evidence_autopsy', 'evidence_notebook'],
      connections: [
        { from: 'evidence_proposal', to: 'evidence_letter', label: '立法决心' },
        { from: 'evidence_photo', to: 'evidence_letter', label: '历史渊源' },
        { from: 'evidence_autopsy', to: 'evidence_notebook', label: '调查记录' }
      ]
    }
  },

  // 失败剧情配置
  failureScenes: {
    economy: {
      title: '真相的迷雾',
      narrative: '你被利益的迷雾所笼罩。在这个世界上，金钱和权力才是真正的通行证。母亲的理想固然伟大，但在现实面前，它显得如此苍白无力。\n\n你选择将那些证据出卖给了出价最高的人——无论是创新党还是秩序党的幕后金主。这笔交易足以让你一生无忧。\n\n至于真相？它从来就不是人们真正想要的东西。\n\n—— Chapter 1 · 完（经济结局）'
    },
    innovation: {
      title: '另一种选择',
      narrative: '延寿技术...也许并没有母亲说得那么可怕。当权力和金钱可以换来更长的生命时，为什么要拒绝呢？\n\n你理解了创新党的逻辑——也许在这个世界上，总有些人比其他人更"平等"。而你，完全可以成为其中之一。\n\n你销毁了那些证据，选择加入"永生计划"。毕竟，谁不想活得更久呢？\n\n—— Chapter 1 · 完（创新结局）'
    },
    questioning: {
      title: '质疑的代价',
      narrative: '你开始怀疑一切：母亲的死、真相的意义、甚至你自己追查这一切的初衷。\n\n当怀疑吞噬了信念，你发现自己再也无法站定立场。你收集的证据变成了无意义的碎片，真相在你手中化为了虚无。\n\n也许，有些门一旦打开，就再也关不上了。\n\n—— Chapter 1 · 完（质疑结局）'
    },
    order: {
      title: '秩序的代价',
      narrative: '你选择了维护现有的秩序。母亲的死、阴谋的存在、真相的意义——这些都不重要。\n\n重要的是稳定，是规则，是不动摇的体制。你亲手将证据封存，让真相永远埋藏在档案室的深处。\n\n毕竟，秩序需要牺牲。而母亲，只是其中一个罢了。\n\n—— Chapter 1 · 完（秩序结局）'
    }
  }
};
