/**
 * 互动小说 · Chapter 1
 * 文本框：每段展示完后按 Enter 或点击屏幕/角色图继续；念白与对话以聊天记录形式累积显示。
 * 右下角手机图标仅在场景末显示，用于前往下一场景。
 */

(function () {
  'use strict';

  var ASSETS = window.NOVEL_ASSETS || { backgrounds: {}, characters: {}, music: {} };

  var GAME_WIDTH = 1920;
  var GAME_HEIGHT = 1080;

  function setGameScale() {
    var scale = Math.min(window.innerWidth / GAME_WIDTH, window.innerHeight / GAME_HEIGHT);
    document.documentElement.style.setProperty('--game-scale', scale);
  }
  setGameScale();
  window.addEventListener('resize', setGameScale);

  var SCENE_TO_LOCATION = {
    'EXT. GRAVEYARD - DAY': 'graveyard',
    'EXT. PARK - DUSK': 'park',
    'EXT. OLD HOUSE FRONT DOOR - DUSK': 'old_house_door',
    'INT. OLD HOUSE LIVING ROOM - DUSK': 'living_room_dusk',
    'INT. OLD HOUSE BEDROOM 1 - DUSK': 'bedroom1',
    'INT. OLD HOUSE BEDROOM 1 TOILET - DUSK': 'toilet',
    'INT. OLD HOUSE BEDROOM 2 - DUSK': 'bedroom2',
    'INT. OLD HOUSE STUDY ROOM - DUSK': 'study_room',
    'INT. OLD HOUSE LIVING ROOM - NIGHT': 'living_room_night'
  };

  // ——— Chapter 1 剧情数据 ———
  const ACT_ONE = [
    {
      id: 'narr_0',
      scene: 'EXT. GRAVEYARD - DAY',
      narrative: '睁开眼时，你看到的是一片阴沉沉的天空，灰色将你吞没。雨点滴落，起先是轻微的水珠，而后变成了倾盆大雨。那些来吊唁的人都仓皇失措地逃离。而你不一样，你想象自己和母亲一样，躺在棺材里，想到这里，你不由地躺了上去，任由大雨滂沱，将浑身浇透。',
      next: 1
    },
    {
      id: 'narr_1',
      narrative: '你的世界里只剩下了雨声，渐渐地，视线变得模糊，雨声也仿佛骤然减小，你能听见自己的心跳，一下，一下，变得十分有力，与沉重的呼吸声一同响起。你不由地感到窒息，被濒死的恐惧笼罩。',
      next: 2
    },
    {
      id: 'narr_2',
      narrative: '就在你即将失去意识的前一刻，突然，眼前一片黑暗。一把黑色的伞罩在了你的头上。你不由地向身旁之人看去。黑色的风衣，黑色的帽子，这张脸熟悉又陌生——Anta，母亲的政敌。',
      next: 3
    },
    {
      id: 'narr_3',
      narrative: '你没有说话，同样，她也一言不发。你没有挪动自己的身体，她也一动不动，只是任由大雨将她昂贵的大衣淋湿。她的身后站着一群西装革履的保镖，有人上前想要替她撑伞，却被她拦下。',
      next: 4
    },
    {
      id: 'narr_4',
      narrative: '她的左手拿着一束白色的鲜花，见你没有丝毫动弹，她便俯身将鲜花放在了母亲的棺材边。她不再看你，而是注视着母亲的墓碑，她的眼神冷漠到可怕。你读不出任何情绪。',
      next: 5
    },
    {
      id: 'narr_5',
      narrative: '就在这时，响起急促的脚步声，随之而来的高声嘶吼打破了这份诡异的平静。',
      next: 6
    },
    {
      id: 'reporter_1',
      dialogue: 'a不是自杀的，这是个阴谋，是创新党的阴谋——你们不让a推出那项法案所以才杀了她，你们做的那些肮脏勾当，早晚会被公之于众！',
      speaker: '记者',
      next: 7
    },
    {
      id: 'narr_7',
      narrative: '记者的话语在雨声中并不清晰。',
      next: 8
    },
    {
      id: 'reporter_2',
      dialogue: '都信我，这是一起谋杀！谋——杀——',
      speaker: '记者',
      next: 9
    },
    {
      id: 'narr_9',
      narrative: '他还没说完，便被Anta身后的保镖捂住了嘴。记者拼命挣扎，却终是敌不过训练有素的保镖。',
      next: 10
    },
    {
      id: 'reporter_3',
      dialogue: '任你们如何隐藏，真相就是如此！a死于谋杀！',
      speaker: '记者',
      next: 11
    },
    {
      id: 'narr_11',
      narrative: '零碎的话语消失在雨声中。你看向Anta，她依旧是一脸平静，仿佛刚才的闹剧并未对她造成丝毫影响。她一言未发，转身在保镖的护送下离开了。',
      next: 12
    },
    {
      id: 'narr_12',
      narrative: '你没有起身，那把黑伞被风吹远。你再次望向天空，任由视野由清晰再次变得模糊。',
      next: 13
    },
    {
      id: 'narr_13',
      scene: 'EXT. PARK - DUSK',
      narrative: '记忆中的小公园变得不一样了。你回忆着童年时的自己有多调皮，那会儿，你总是与同龄的伙伴们嬉闹。年幼时你曾多次站上这个小秋千，任由母亲如何斥责都不肯回家。你不由地站了上去，使劲晃动。秋千断了，你狠狠地摔倒在地。',
      next: 14
    },
    {
      id: 'narr_14',
      scene: 'EXT. OLD HOUSE FRONT DOOR - DUSK',
      narrative: '你一瘸一拐地来到旧宅门口。你俯身看着门口叶子泛黄几近腐烂的盆栽，随后起身，慢慢推开了门。',
      next: 15
    },
    {
      id: 'narr_15',
      scene: 'INT. OLD HOUSE LIVING ROOM - DUSK',
      narrative: '夕阳透过窗洒在屋内，屋里和从前一样，没有太多变化。客厅里没有太多杂物，只有一盆又一盆的绿植。\n\n地板上摇曳着门前树叶的影子。你回忆起自己曾在地板上踩树影自娱自乐，心里这么想着，你便真的自顾自玩了起来。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'narr_16',
      scene: 'INT. OLD HOUSE BEDROOM 1 - DUSK',
      narrative: '你进入母亲的房间，屋内依旧是母亲喜欢的整洁模样。枕头上放着一件男士西装，你捡起后开始好奇这是谁的衣服。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'player_card',
      dialogue: '母亲离婚这么多年，这件衣服会是谁的呢……',
      speaker: '你',
      next: 18
    },
    {
      id: 'narr_18',
      scene: 'INT. OLD HOUSE BEDROOM 1 TOILET - DUSK',
      narrative: '你进入主卧的厕所，你留意到牙杯里有两只牙刷。\n\n镜子有些破碎。你看着镜子里憔悴的自己，觉得有些好笑。可这时，你突然发现镜子边好像藏着什么东西，你拿起一旁的吹风机，狠狠砸向镜子。镜子随即碎裂，你在夹缝里发现了一张磁卡。你拿起卡片后仔细端详，上面写着：xxxx。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'player_card2',
      dialogue: 'xxx，这是什么意思呢……',
      speaker: '你',
      next: 20
    },
    {
      id: 'narr_20',
      narrative: '不明所以，但你还是收下了这张磁卡。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'narr_21',
      scene: 'INT. OLD HOUSE BEDROOM 2 - DUSK',
      narrative: '你轻轻推开房间门，里面的陈设一如既往，像是这么些年从未有人踏足过般。你摸了一下那张粉红色的儿童书桌，上面纤尘不染，看来母亲肯定打扫过这里了，即便这么些年你从未回来过一次。你看向床头那个滑稽又可笑的涂鸦，你记得那是小时候的你，第一次对母亲发出权威性挑战的尝试。你知道母亲喜欢素净的墙面，可你偏偏要用荧光色的画笔在墙上留下可笑的兔子头像。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'player_childhood',
      dialogue: '从今天起，这就是我！我会长到墙上！',
      speaker: '你',
      next: 23
    },
    {
      id: 'mother_wipe',
      dialogue: '给我擦干净！',
      speaker: '母亲',
      next: 24
    },
    {
      id: 'player_no1',
      dialogue: '我不要，我不要！',
      speaker: '你',
      next: 25
    },
    {
      id: 'mother_mess',
      dialogue: '脏死了！一天天地就知道添乱！',
      speaker: '母亲',
      next: 26
    },
    {
      id: 'player_no2',
      dialogue: '我不要！',
      speaker: '你',
      next: 27
    },
    {
      id: 'narr_27',
      narrative: '母亲伸手想要抹掉这个滑稽的图案，而你死死地抱住她的腰。',
      next: 28
    },
    {
      id: 'player_no_erase',
      dialogue: '不许擦！不许擦！',
      speaker: '你',
      next: 29
    },
    {
      id: 'narr_29',
      narrative: '你再看了一眼这个兔子图案，转身走向你的书柜。你从来都不喜欢那些枯燥乏味的经典书籍，偏偏对漫画情有独钟。你打开那本童年时翻阅了无数遍的《xxx》，书页都被你摸出了毛边。你翻阅着自己最喜欢的这本漫画，可却对里面的内容感到陌生。于是你忍不住读出了声。可这时，你发现书页中竟掉落了一张纸片。你捡起纸片，上面写着三位数字——719。\n\n你意识到有些不对劲，这是母亲的笔迹，只有母亲喜欢写7这个数字的时候加上那一横，她这是想告诉我些什么吗？于是离开了卧室。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'narr_31',
      scene: 'INT. OLD HOUSE STUDY ROOM - DUSK',
      narrative: '你来到书房，记忆中，母亲的书房总是十分神圣。母亲的生活被工作完全侵占，而她却从不知疲倦。你想起无数个深夜里，她独自一人在书房中办公的情景。你推开门走了进去，里面和记忆中别无二致。你想起警方的尸检报告，死者在书房中，服用过度安眠药自尽。就连死亡，都要在她最喜欢的空间里。你无法分辨，是她选择了死亡，还是死亡选择了她。'
      // next: 不自动跳转，等待玩家点击按钮导航
    },
    {
      id: 'narr_32',
      narrative: '你翻开书桌上的笔记本，上面尽是些与保守党有关的内容，令你感到厌恶。你企图拉开书桌的抽屉，却意外发现上锁了。正好需要三位数的密码，于是你将锁转到了刚才看到的三位数。你打开锁，在里面发现了一个盒子。盒子上印着一句话：<em>"时间不应成为特权"</em>\n\n你将磁卡放入了盒子中……'
      // next: 不自动跳转，等待玩家点击按钮返回客厅（会自动变为客厅-夜晚）
    },
    {
      id: 'narr_33',
      scene: 'INT. OLD HOUSE LIVING ROOM - NIGHT',
      narrative: '天色渐暗，你看到远处的夕阳缓缓落下。屋内一片漆黑，在寂静中你隐隐约约听到远方传来歌声，这是一首耳熟能详的小曲，在昏暗的光线中，你拿起客厅里的那把吉他，随着歌声弹奏起来，直到月光洒在客厅里，你终于撑不住躺倒在沙发上。',
      end: true
    }
  ];

  var titleScreen = document.getElementById('title-screen');
  var storyScreen = document.getElementById('story-screen');
  var endScreen = document.getElementById('end-screen');
  var storyViewport = document.querySelector('.story-viewport');
  var sceneBgImg = document.getElementById('scene-bg-img');
  var characterWrap = document.getElementById('character-wrap');
  var characterImg = document.getElementById('character-img');
  var textBox = document.getElementById('text-box') || document.querySelector('.text-box');
  var textBoxContent = document.getElementById('text-box-content');
  var textBoxInner = document.querySelector('.text-box-inner') || textBoxContent;
  var choicesContainer = document.getElementById('choices-container');
  var phoneBtn = document.getElementById('phone-btn');
  var roomNav = document.getElementById('room-nav');
  var roomNavLeft = document.getElementById('room-nav-left');
  var roomNavBottom = document.getElementById('room-nav-bottom');
  var roomNavRight = document.getElementById('room-nav-right');
  var endMessage = document.getElementById('end-message');

  var currentIndex = 0;
  var globalDisplayedUpTo = 0; // 全局最晚展示进度
  var firstEnteredScenes = {}; // 首次进入过的场景集合
  var currentScene = ''; // 当前场景名
  var currentSceneStart = 0; // 当前场景起始索引
  var lastLocationId = '';
  var lastSpeakerInScene = '';
  var activeSpeaker = ''; // 当前显示中的说话人（对话时有效）
  var bgm = null;
  var voiceover = null; // 语音播放器
  var sfxPlayer = null; // 互动音效播放器
  var currentVoiceId = ''; // 当前播放的语音 ID
  var isClosingPopup = false; // 标志：正在关闭弹窗中，阻止 advance
  var visitedScenes = {}; // 已访问过的场景（键为 scene 名）
  var displayedTexts = {}; // 已展示过的文本索引（键为索引，值为 true）
  var isReturningToVisitedScene = false; // 是否返回已访问场景
  var textBoxCollapsed = false; // 对话框是否收起

  // ——— 语音播放函数（支持对话和旁白） ———
  function playVoiceover(stepId, stepIndex) {
    // 优先使用步骤中指定的 id，否则使用自动生成的旁白 id
    var src = ASSETS.voiceover && ASSETS.voiceover[stepId];
    
    // 如果没有指定 id，尝试使用自动生成的旁白 id（如 narr_0, narr_1...）
    if (!src && stepId.indexOf('narr_') === 0) {
      src = ASSETS.voiceover && ASSETS.voiceover[stepId];
    }
    
    if (!src) {
      console.log('[语音] 未找到语音文件: ' + stepId);
      return;
    }
    console.log('[语音] 播放: ' + stepId + ' -> ' + src);
    try {
      if (!voiceover) {
        voiceover = new Audio();
        voiceover.volume = 1.0;
      }
      // 停止之前的语音
      voiceover.pause();
      voiceover.currentTime = 0;
      currentVoiceId = stepId;
      voiceover.src = src;
      voiceover.play().catch(function(e) {
        console.log('[语音] 播放失败: ' + e);
      });
    } catch (e) {
      console.log('[语音] 异常: ' + e);
    }
  }

  // 停止语音的辅助函数（用于跳转时停止当前语音）
  function stopVoiceover() {
    if (voiceover) {
      voiceover.pause();
      voiceover.currentTime = 0;
      currentVoiceId = '';
    }
    // 同时停止音效
    if (sfxPlayer) {
      sfxPlayer.pause();
      sfxPlayer.currentTime = 0;
    }
  }

  // 播放互动音效
  function playInteractionSfx(sfxSrc) {
    if (!sfxSrc) return;
    try {
      if (!sfxPlayer) {
        sfxPlayer = new Audio();
        sfxPlayer.volume = 0.7;
      }
      sfxPlayer.src = sfxSrc;
      sfxPlayer.play().catch(function() {});
    } catch (e) {}
  }

  // ——— 物品系统 ———
  var playerInventory = []; // 玩家物品栏
  var discoveredPasswords = {}; // 已获知的密码 { 'study_drawer': '123' }
  var mirrorClickCount = 0; // 镜子点击次数
  var gameStates = {}; // 游戏状态（不显示在物品栏中）

  // 从配置中读取互动元素和导航选项
  var SCENE_INTERACTIONS = ASSETS.interactions || {};
  var SCENE_NAV_OPTIONS = ASSETS.sceneNav || [];
  var MAP_CONFIG = ASSETS.map || { background: '', locations: [] };

  // 房间导航配置：客厅 -> 主卧、儿童房、书房；主卧 -> 主卧厕所
  var ROOM_NAV_CONFIG = {
    // 客厅-黄昏：左侧-儿童房，底部-书房，右侧-主卧
    'living_room_dusk': {
      left: [
        { scene: 'INT. OLD HOUSE BEDROOM 2 - DUSK', name: '儿童房' }
      ],
      right: [
        { scene: 'INT. OLD HOUSE BEDROOM 1 - DUSK', name: '主卧' }
      ],
      bottom: [
        { scene: 'INT. OLD HOUSE STUDY ROOM - DUSK', name: '书房' }
      ]
    },
    // 客厅-夜晚：不能去往其它房间（游戏结局）
    'living_room_night': {
      left: null,
      right: null,
      bottom: null
    },
    // 主卧：左侧返回客厅，右侧去主卧厕所
    'bedroom1': {
      left: [
        { scene: 'INT. OLD HOUSE LIVING ROOM - DUSK', name: '客厅' }
      ],
      right: [
        { scene: 'INT. OLD HOUSE BEDROOM 1 TOILET - DUSK', name: '主卧厕所' }
      ],
      bottom: null
    },
    // 主卧厕所：只能返回主卧
    'toilet': {
      left: [
        { scene: 'INT. OLD HOUSE BEDROOM 1 - DUSK', name: '主卧' }
      ],
      right: null,
      bottom: null
    },
    // 儿童房：返回客厅
    'bedroom2': {
      left: [
        { scene: 'INT. OLD HOUSE LIVING ROOM - DUSK', name: '客厅' }
      ],
      right: null,
      bottom: null
    },
    // 书房：返回客厅（完成后触发结局逻辑）
    'study_room': {
      left: [
        { scene: 'INT. OLD HOUSE LIVING ROOM - DUSK', name: '客厅' }
      ],
      right: null,
      bottom: null
    }
  };

  var roomNavIndex = { left: 0, bottom: 0, right: 0 }; // 当前导航索引

  function getLocationId(index) {
    var step = ACT_ONE[index];
    if (!step) return '';
    if (step.locationId) return step.locationId;
    if (step.scene && SCENE_TO_LOCATION[step.scene]) return SCENE_TO_LOCATION[step.scene];
    return index > 0 ? getLocationId(index - 1) : 'graveyard';
  }

  function getSceneStartIndex(index) {
    var locId = getLocationId(index);
    var i = index;
    while (i >= 0 && getLocationId(i) === locId) i--;
    return i + 1;
  }

  // 根据 scene 属性获取场景起始 index（向前找到第一个相同 scene 的位置）
  function getSceneStartByScene(sceneName, startFrom) {
    if (!sceneName) return startFrom;
    for (var i = startFrom; i >= 0; i--) {
      if (ACT_ONE[i].scene === sceneName) continue;
      // 跳过 scene 为 undefined 的条目，继续向前找
      if (!ACT_ONE[i].scene) continue;
      return i + 1;
    }
    return 0;
  }

  function isLastInLocation(index) {
    var step = ACT_ONE[index];
    if (!step || step.end) return false;
    var nextIndex = typeof step.next === 'number' ? step.next : index + 1;
    if (nextIndex >= ACT_ONE.length) return true;
    var nextStep = ACT_ONE[nextIndex];
    if (nextStep.end) return true;
    return getLocationId(nextIndex) !== getLocationId(index);
  }

  // 获取场景中的互动元素
  function getInteractionsForLocation(locId) {
    return SCENE_INTERACTIONS[locId] || [];
  }

  // 查找指定互动元素
  function findInteraction(locId, itemId) {
    var interactions = getInteractionsForLocation(locId);
    for (var i = 0; i < interactions.length; i++) {
      if (interactions[i].id === itemId) return interactions[i];
    }
    return null;
  }

  // 将场景 index 转换为对话索引（在 ACT_ONE 中的位置）
  function sceneNameToIndex(sceneName) {
    for (var i = 0; i < ACT_ONE.length; i++) {
      if (ACT_ONE[i].scene === sceneName) return i;
    }
    return -1;
  }

  // 跳转到指定场景（通过场景名）
  function goToSceneByName(sceneName) {
    var idx = sceneNameToIndex(sceneName);
    if (idx >= 0) {
      closePhoneMenu();
      closeMap();
      closeInteractionPopup();
      // 停止当前语音，确保跳转后语音同步
      stopVoiceover();

      // 特殊处理：从书房返回客厅时，如果书房已完成（获得提案文件），跳转到客厅-夜晚
      if (sceneName === 'INT. OLD HOUSE LIVING ROOM - DUSK' && hasGameState('drawer_opened')) {
        var nightIdx = sceneNameToIndex('INT. OLD HOUSE LIVING ROOM - NIGHT');
        if (nightIdx >= 0) {
          idx = nightIdx;
          sceneName = 'INT. OLD HOUSE LIVING ROOM - NIGHT';
        }
      }

      currentIndex = idx;
      currentScene = sceneName;
      lastLocationId = '';
      lastSpeakerInScene = '';
      activeSpeaker = '';
      // 重置房间导航索引
      roomNavIndex = { left: 0, bottom: 0, right: 0 };
      goTo(currentIndex);
    }
  }

  function playBgm(locationId) {
    var src = ASSETS.music && ASSETS.music[locationId];
    if (!src) return;
    try {
      if (!bgm) {
        bgm = new Audio();
        bgm.addEventListener('ended', function() {
          bgm.currentTime = 0;
          bgm.play().catch(function() {});
        });
      }
      bgm.src = src;
      bgm.loop = true;
      bgm.volume = 0.5;
      bgm.play().catch(function () {});
    } catch (e) {}
  }

  function showScreen(screen) {
    [titleScreen, storyScreen, endScreen].forEach(function (s) {
      s.classList.toggle('active', s === screen);
    });
    // 故事界面显示手机菜单按钮
    if (phoneBtn) {
      phoneBtn.classList.toggle('hidden', screen !== storyScreen);
    }
    // 关闭地图弹窗
    if (screen !== storyScreen) {
      closeMap();
    }
  }

  // ——— 修复版角色立绘显示：对话时说话人一直显示，直到场景切换 ———
  function renderStep(step, index) {
    if (!step) return;

    var locId = getLocationId(index);

    // 场景背景图（可替换）
    var bgSrc = ASSETS.backgrounds && ASSETS.backgrounds[locId];
    if (bgSrc) {
      sceneBgImg.src = bgSrc;
      sceneBgImg.onerror = function () { sceneBgImg.removeAttribute('src'); };
    } else {
      sceneBgImg.removeAttribute('src');
    }

    // 场景 BGM（可替换），切换场景时播放
    if (locId !== lastLocationId) {
      lastLocationId = locId;
      lastSpeakerInScene = '';
      activeSpeaker = '';
      playBgm(locId);
      renderInteractions(locId);
    }

    // ——— 修复角色立绘：只在当前 step 有 dialogue 时显示说话人 ———
    if (step.dialogue && step.speaker) {
      activeSpeaker = step.speaker;
      // 播放对话语音（使用步骤中的 id）
      if (step.id) {
        playVoiceover(step.id, index);
      }
    }

    // ——— 如果是旁白，播放旁白语音 ———
    if (step.narrative && !step.dialogue) {
      // 优先使用步骤中指定的 id
      var narrId = step.id || ('narr_' + index);
      playVoiceover(narrId, index);
    }

    // 角色立绘：使用 activeSpeaker，有对话时才显示立绘
    var speakerToShow = activeSpeaker;
    if (speakerToShow && ASSETS.characters && ASSETS.characters[speakerToShow]) {
      characterImg.src = ASSETS.characters[speakerToShow];
      characterImg.alt = speakerToShow;
      characterWrap.classList.remove('hidden');
      characterWrap.classList.add('clickable');
      characterImg.onerror = function () { characterWrap.classList.add('hidden'); };
    } else {
      characterWrap.classList.remove('clickable');
      characterWrap.classList.add('hidden');
    }

    // 左上角文本框：显示念白 + 对话，追踪展示状态
    var html = '';

    // 遍历从场景起始到 currentIndex 的内容
    for (var i = currentSceneStart; i <= currentIndex; i++) {
      var s = ACT_ONE[i];

      // 判断是否已读：
      // 1. 如果是返回已访问场景，该场景所有文本都是已读
      // 2. 否则，只有已展示过的文本才是已读（currentIndex 本身不算已读）
      var isRead = false;
      if (isReturningToVisitedScene) {
        isRead = true;
      } else if (i < currentIndex && displayedTexts[i]) {
        isRead = true;
      }

      // 标记当前文本为已展示
      displayedTexts[i] = true;

      if (s.narrative) {
        var cls = 'narrative-block' + (s.document ? ' document' : '');
        var narrId = 'narr_' + i;
        if (isRead) {
          html += '<div class="read-block"><span class="read-marker">已读</span><p class="' + cls + '" id="' + narrId + '">' + escapeHtml(s.narrative) + '</p></div>';
        } else {
          html += '<p class="' + cls + '" id="' + narrId + '">' + escapeHtml(s.narrative) + '</p>';
        }
      }
      if (s.speaker || s.dialogue) {
        var dialogId = s.id || ('dialogue_' + i);
        var line = (s.speaker ? '<span class="speaker">' + escapeHtml(s.speaker) + '</span>' : '') + escapeHtml(s.dialogue || '');
        if (isRead) {
          html += '<div class="read-block"><span class="read-marker">已读</span><p class="dialogue-line" id="' + dialogId + '">' + line + '</p></div>';
        } else {
          html += '<p class="dialogue-line" id="' + dialogId + '">' + line + '</p>';
        }
      }
    }

    textBoxContent.innerHTML = html || '';
    // 自动滚动到最新内容，使其位于对话框中部
    if (textBoxInner && html) {
      requestAnimationFrame(function() {
        var containerHeight = textBoxInner.clientHeight;
        var newContent = textBoxInner.querySelector('.dialogue-line:last-child, .narrative-block:last-child');
        if (newContent) {
          var contentTop = newContent.offsetTop;
          var targetScroll = contentTop - containerHeight * 0.4;
          textBoxInner.scrollTop = Math.max(0, Math.min(targetScroll, textBoxInner.scrollHeight - containerHeight));
        } else {
          textBoxInner.scrollTop = textBoxInner.scrollHeight;
        }
      });
    }
    // 重置返回标志
    isReturningToVisitedScene = false;

    // 选项
    choicesContainer.innerHTML = '';
    if (step.choices && step.choices.length > 0) {
      phoneBtn.classList.add('hidden');
      step.choices.forEach(function (c) {
        var btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = c.text;
        btn.addEventListener('click', function (e) { e.stopPropagation(); goTo(c.next); });
        choicesContainer.appendChild(btn);
      });
    } else {
      phoneBtn.classList.remove('hidden');
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function goTo(index) {
    if (index < 0 || index >= ACT_ONE.length) return;

    console.log('[goTo] 跳转到索引: ' + index + ' (id: ' + ACT_ONE[index].id + ')');

    // 停止当前语音，确保跳转到下一段时语音同步跳转
    stopVoiceover();

    var prevIndex = currentIndex;
    currentIndex = index;
    var step = ACT_ONE[currentIndex];

    if (step.end) {
      if (!hasItem('proposal')) {
        showProposalRequiredPopup();
        return;
      }
      if (bgm) { bgm.pause(); bgm.currentTime = 0; }
      endMessage.textContent = step.narrative || '感谢阅读第一幕。';
      showScreen(endScreen);
      return;
    }

    // 更新当前场景
    if (step.scene) {
      // 检测是否返回已访问场景
      if (visitedScenes[step.scene]) {
        isReturningToVisitedScene = true;
      } else {
        visitedScenes[step.scene] = true;
        isReturningToVisitedScene = false;
      }

      currentScene = step.scene;
      currentSceneStart = index; // 记录场景起始位置
      // 重置房间导航索引
      roomNavIndex = { left: 0, bottom: 0, right: 0 };
    }

    // 更新全局进度
    if (index > globalDisplayedUpTo) {
      globalDisplayedUpTo = index;
    }

    renderStep(step, currentIndex);

    // 更新房间导航显示
    updateRoomNav();
  }

  // 弹出需要提案文件的提示
  function showProposalRequiredPopup() {
    var popup = getOrCreateInteractionPopup();
    popup.querySelector('.popup-title').textContent = '游戏未完成';
    popup.querySelector('.popup-desc').innerHTML = '你还没有找到那份重要的提案文件……<br><br><em>也许应该在书房里找找线索？</em>';
    popup.querySelector('.popup-close').textContent = '返回书房';
    popup.querySelector('.popup-close').onclick = function(e) {
      e.stopPropagation();
      closeInteractionPopup();
      closeInventory();
      closePhoneMenu();
      goToSceneByName('INT. OLD HOUSE STUDY ROOM - DUSK');
    };
    popup.classList.remove('hidden');
  }

  function advance(ev) {
    // 如果正在关闭弹窗，忽略 advance
    if (isClosingPopup) return;
    // 如果打开了手机菜单，忽略 advance
    if (phoneMenu && !phoneMenu.classList.contains('hidden')) return;
    // 如果地图弹窗打开，忽略 advance
    if (mapOverlay && mapOverlay.classList.contains('active')) return;
    // 如果证据台菜单打开，忽略 advance
    if (evidenceTableOverlay && evidenceTableOverlay.classList.contains('active')) return;
    // 如果弹窗打开，忽略 advance
    if (interactionPopup && !interactionPopup.classList.contains('hidden')) return;
    // 如果物品栏打开，忽略 advance
    if (inventoryUI && !inventoryUI.classList.contains('hidden')) return;
    // 如果物品查看弹窗打开，忽略 advance
    if (itemViewPopup && !itemViewPopup.classList.contains('hidden')) return;
    // 如果解密卡弹窗打开，忽略 advance
    if (decryptPopup && !decryptPopup.classList.contains('hidden')) return;
    // 如果镜子弹窗打开，忽略 advance
    if (mirrorPopup && !mirrorPopup.classList.contains('hidden')) return;
    // 如果拼图弹窗打开，忽略 advance
    if (puzzlePopup && !puzzlePopup.classList.contains('hidden')) return;
    // 如果证据台弹窗打开，忽略 advance
    if (evidenceTableOverlay && evidenceTableOverlay.classList.contains('active')) return;
    // 如果是对话框收起状态，忽略 advance
    if (textBoxCollapsed) return;
    // 选项区域的点击忽略
    if (ev && ev.target && ev.target.closest('.choices-container')) return;
    // 互动热区忽略
    if (ev && ev.target && ev.target.closest('.interaction-hotspot')) return;
    // 手机菜单区域忽略
    if (ev && ev.target && ev.target.closest('#phone-menu')) return;
    // 地图弹窗区域忽略
    if (ev && ev.target && ev.target.closest('#map-overlay')) return;
    // 房间导航按钮忽略
    if (ev && ev.target && ev.target.closest('.room-nav')) return;
    // 物品栏区域忽略
    if (ev && ev.target && ev.target.closest('#inventory-ui')) return;
    // 物品查看弹窗区域忽略
    if (ev && ev.target && ev.target.closest('#item-view-popup')) return;
    // 解密卡弹窗区域忽略
    if (ev && ev.target && ev.target.closest('#decrypt-card-popup')) return;
    // 镜子弹窗区域忽略
    if (ev && ev.target && ev.target.closest('#mirror-popup')) return;
    // 拼图弹窗区域忽略
    if (ev && ev.target && ev.target.closest('#puzzle-popup')) return;
    // 对话框区域忽略（点击展开）
    if (ev && ev.target && ev.target.closest('.text-box')) return;

    var step = ACT_ONE[currentIndex];
    if (!step || step.choices && step.choices.length > 0) return;
    if (step.end) {
      // 检查是否获得提案文件
      if (!hasItem('proposal')) {
        showProposalRequiredPopup();
        return;
      }
      endMessage.textContent = step.narrative || '感谢阅读第一幕。';
      showScreen(endScreen);
      return;
    }

    // 检查是否有 next 指向
    if (typeof step.next !== 'number') {
      // 没有 next，不自动跳转（等待玩家点击按钮导航）
      return;
    }

    // 停止当前语音，确保跳转到下一段时语音同步跳转
    stopVoiceover();
    var nextIndex = step.next;
    goTo(nextIndex);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' || !storyScreen.classList.contains('active')) return;
    e.preventDefault();
    advance(e);
  });

  // 对话框收起/展开
  function toggleTextBox() {
    if (!textBox) return;
    textBoxCollapsed = !textBoxCollapsed;
    if (textBoxCollapsed) {
      textBox.classList.add('collapsed');
    } else {
      textBox.classList.remove('collapsed');
    }
  }

  // 对话框点击事件
  if (textBox) {
    textBox.addEventListener('click', function(e) {
      e.stopPropagation(); // 阻止事件冒泡
      if (!storyScreen.classList.contains('active')) return;
      if (e.target.closest('.choices-container')) return;
      // 点击时：如果已收起则展开，否则收起
      toggleTextBox();
    });
  }

  // 点击画布其他区域：如果对话框收起则展开，关闭弹窗
  if (storyViewport) {
    storyViewport.addEventListener('click', function (e) {
      if (!storyScreen.classList.contains('active')) return;
      // 正在关闭弹窗时不处理
      if (isClosingPopup) return;
      // 证据台弹窗打开时不处理
      if (evidenceTableOverlay && evidenceTableOverlay.classList.contains('active')) return;
      // 弹窗打开时不处理
      if (interactionPopup && !interactionPopup.classList.contains('hidden')) return;
      // 物品栏打开时不处理
      if (inventoryUI && !inventoryUI.classList.contains('hidden')) return;
      // 物品查看弹窗打开时不处理
      if (itemViewPopup && !itemViewPopup.classList.contains('hidden')) return;

      // 如果对话框收起，先展开对话框
      if (textBoxCollapsed) {
        toggleTextBox();
        return;
      }

      // 对话框展开时，调用 advance 前进
      advance(e);
    });
  }

  if (characterWrap) {
    characterWrap.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!storyScreen.classList.contains('active')) return;
      // 正在关闭弹窗时不前进
      if (isClosingPopup) return;
      // 弹窗打开时不前进
      if (interactionPopup && !interactionPopup.classList.contains('hidden')) return;
      // 解密卡弹窗打开时不前进
      if (decryptPopup && !decryptPopup.classList.contains('hidden')) return;
      // 镜子弹窗打开时不前进
      if (mirrorPopup && !mirrorPopup.classList.contains('hidden')) return;
      // 拼图弹窗打开时不前进
      if (puzzlePopup && !puzzlePopup.classList.contains('hidden')) return;
      advance(e);
    });
  }

  phoneBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    // 关闭其他弹窗
    closeInventory();
    closeMap();
    togglePhoneMenu();
  });

  // 地图按钮点击（按钮已移除，改由手机菜单控制）
  // mapBtn 已不再使用

  // 物品栏按钮点击（按钮已移除，改由手机菜单控制）
  // inventoryBtn 已不再使用

  // ——— 手机下拉菜单 ———
  var phoneMenu = null;
  var mapOverlay = null;
  var mapCurrentIndex = 0; // 地图位置导航索引

  function getOrCreatePhoneMenu() {
    if (!phoneMenu) {
      phoneMenu = document.createElement('div');
      phoneMenu.id = 'phone-menu';
      phoneMenu.className = 'phone-menu hidden';
      storyViewport.appendChild(phoneMenu);
    }
    return phoneMenu;
  }

  // ——— 地图弹窗系统 ———
  function getOrCreateMapOverlay() {
    if (!mapOverlay) {
      mapOverlay = document.createElement('div');
      mapOverlay.id = 'map-overlay';
      mapOverlay.className = 'map-overlay';
      storyViewport.appendChild(mapOverlay);

      var modal = document.createElement('div');
      modal.className = 'map-modal';

      var header = document.createElement('div');
      header.className = 'map-modal-header';
      header.innerHTML = '<span class="map-modal-title">地图</span><button class="map-modal-close">×</button>';

      var body = document.createElement('div');
      body.className = 'map-modal-body';
      body.innerHTML = '<div class="map-image-container"><img class="map-image" alt="地图"><div class="map-hotspots"></div></div>';

      modal.appendChild(header);
      modal.appendChild(body);
      mapOverlay.appendChild(modal);

      // 关闭按钮
      header.querySelector('.map-modal-close').addEventListener('click', function(e) {
        e.stopPropagation();
        closeMap();
      });

      // 点击遮罩关闭
      mapOverlay.addEventListener('click', function(e) {
        if (e.target === mapOverlay) {
          closeMap();
        }
      });
    }
    return mapOverlay;
  }

  function toggleMap() {
    var overlay = getOrCreateMapOverlay();
    if (overlay.classList.contains('active')) {
      closeMap();
    } else {
      renderMap();
      overlay.classList.add('active');
    }
  }

  function closeMap() {
    if (mapOverlay) {
      mapOverlay.classList.remove('active');
    }
  }

  function renderMap() {
    var container = mapOverlay.querySelector('.map-image-container');
    var img = container.querySelector('.map-image');
    var hotspotsContainer = container.querySelector('.map-hotspots');

    // 设置地图背景
    img.src = MAP_CONFIG.background || '';
    img.alt = '地图';

    // 渲染可点击位置
    hotspotsContainer.innerHTML = '';
    var locations = MAP_CONFIG.locations || [];
    var markerIcon = MAP_CONFIG.markerIcon || '';

    // 获取当前位置
    var currentLocId = getLocationId(currentIndex);
    var currentLoc = locations.find(function(l) { return l.id === currentLocId; });

    locations.forEach(function(loc) {
      var isCurrent = currentLoc && loc.id === currentLocId;

      // 创建热点容器
      var hotspot = document.createElement('div');
      hotspot.className = 'map-hotspot' + (isCurrent ? ' current' : '');
      hotspot.dataset.name = loc.name;
      hotspot.dataset.scene = loc.scene;
      hotspot.style.left = loc.x + '%';
      hotspot.style.top = loc.y + '%';
      hotspot.style.width = loc.size + 'px';
      hotspot.style.height = loc.size + 'px';
      hotspot.style.transform = 'translate(-50%, -50%)';

      // 如果是当前位置，显示高亮样式
      if (isCurrent) {
        hotspot.style.borderColor = 'var(--accent)';
        hotspot.style.background = 'rgba(196, 135, 90, 0.5)';
        hotspot.style.boxShadow = '0 0 20px rgba(196, 135, 90, 0.8)';
      }

      // 如果有标记图标，在位置上方显示图标
      if (markerIcon) {
        var marker = document.createElement('img');
        marker.src = markerIcon;
        marker.className = 'map-marker-icon';
        marker.alt = loc.name;
        hotspot.appendChild(marker);
      }

      hotspot.addEventListener('click', function(e) {
        e.stopPropagation();
        var sceneName = loc.scene;
        goToSceneByName(sceneName);
        closeMap();
      });

      hotspotsContainer.appendChild(hotspot);
    });
  }

  // ——— 房间导航系统 ———
  function updateRoomNav() {
    if (!roomNav) return;

    var locId = getLocationId(currentIndex);
    var navConfig = ROOM_NAV_CONFIG[locId];

    if (!navConfig) {
      // 不在可导航的房间中，隐藏导航
      roomNav.classList.add('hidden');
      return;
    }

    roomNav.classList.remove('hidden');

    // 更新左按钮
    var leftOptions = navConfig.left || [];
    if (leftOptions.length === 0) {
      roomNavLeft.classList.add('disabled');
      roomNavLeft.style.visibility = 'hidden';
    } else {
      roomNavLeft.style.visibility = 'visible';
      roomNavLeft.classList.remove('disabled');
      // 循环切换
      roomNavIndex.left = (roomNavIndex.left % leftOptions.length + leftOptions.length) % leftOptions.length;
    }

    // 更新下按钮
    var bottomOptions = navConfig.bottom || [];
    if (bottomOptions.length === 0) {
      roomNavBottom.classList.add('disabled');
      roomNavBottom.style.visibility = 'hidden';
    } else {
      roomNavBottom.style.visibility = 'visible';
      roomNavBottom.classList.remove('disabled');
      // 循环切换
      roomNavIndex.bottom = (roomNavIndex.bottom % bottomOptions.length + bottomOptions.length) % bottomOptions.length;
    }

    // 更新右按钮
    var rightOptions = navConfig.right || [];
    if (rightOptions.length === 0) {
      roomNavRight.classList.add('disabled');
      roomNavRight.style.visibility = 'hidden';
    } else {
      roomNavRight.style.visibility = 'visible';
      roomNavRight.classList.remove('disabled');
      // 循环切换
      roomNavIndex.right = (roomNavIndex.right % rightOptions.length + rightOptions.length) % rightOptions.length;
    }
  }

  function navigateRoom(direction) {
    var locId = getLocationId(currentIndex);
    var navConfig = ROOM_NAV_CONFIG[locId];
    if (!navConfig) return;

    var options = navConfig[direction];
    if (!options || options.length === 0) return;

    var idx = roomNavIndex[direction];
    var target = options[idx];

    if (target) {
      goToSceneByName(target.scene);
      // 循环到下一个
      roomNavIndex[direction] = (idx + 1) % options.length;
    }
  }

  // 绑定房间导航按钮事件
  if (roomNavLeft) {
    roomNavLeft.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateRoom('left');
    });
  }

  if (roomNavBottom) {
    roomNavBottom.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateRoom('bottom');
    });
  }

  if (roomNavRight) {
    roomNavRight.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateRoom('right');
    });
  }

  // 场景切换时更新房间导航
  var originalGoTo = goTo;
  goTo = function(index) {
    originalGoTo(index);
    updateRoomNav();
  };

  function togglePhoneMenu() {
    var menu = getOrCreatePhoneMenu();
    if (menu.classList.contains('hidden')) {
      renderPhoneMenu();
      menu.classList.remove('hidden');
    } else {
      closePhoneMenu();
    }
  }

  function closePhoneMenu() {
    if (phoneMenu) {
      phoneMenu.classList.add('hidden');
    }
  }

  // 统一的关闭所有弹窗函数
  function closeAllPopups() {
    closePhoneMenu();
    closeMap();
    closeInventory();
    closeInteractionPopup();
    closeItemViewPopup();
  }

  function renderPhoneMenu() {
    var menu = getOrCreatePhoneMenu();
    var html = '<div class="phone-menu-header">菜单</div>';
    html += '<div class="phone-menu-apps">';

    // 地图按钮
    html += '<button class="phone-app-btn" id="menu-map-btn">';
    html += '<svg class="phone-app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
    html += '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>';
    html += '<line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>';
    html += '</svg>';
    html += '<span class="phone-app-label">地图</span>';
    html += '</button>';

    // 物品栏按钮
    html += '<button class="phone-app-btn" id="menu-inventory-btn">';
    html += '<svg class="phone-app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
    html += '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>';
    html += '<polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>';
    html += '</svg>';
    html += '<span class="phone-app-label">物品</span>';
    html += '</button>';

    html += '</div>';
    html += '<button class="phone-menu-close">关闭</button>';
    menu.innerHTML = html;

    // 绑定地图按钮
    var mapBtn = menu.querySelector('#menu-map-btn');
    mapBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closePhoneMenu();
      toggleMap();
    });

    // 绑定物品栏按钮
    var invBtn = menu.querySelector('#menu-inventory-btn');
    invBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closePhoneMenu();
      toggleInventory();
    });

    var closeBtn = menu.querySelector('.phone-menu-close');
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closePhoneMenu();
    });
  }

  // 点击其他地方关闭菜单
  if (storyViewport) {
    storyViewport.addEventListener('click', function(e) {
      // 物品栏按钮点击只触发 toggle，不关闭
      if (e.target.closest('#inventory-btn')) {
        return;
      }
      // 物品栏 UI 内部点击不关闭
      if (e.target.closest('#inventory-ui')) {
        return;
      }
      // 关闭手机菜单
      if (!e.target.closest('#phone-menu')) {
        closePhoneMenu();
      }
      // 关闭地图弹窗
      if (!e.target.closest('#map-overlay')) {
        closeMap();
      }
      // 关闭物品栏
      closeInventory();
    });
  }

  // ——— 互动元素渲染与交互 ———
  var interactionLayer = null;
  var interactionPopup = null;
  var mirrorPopup = null;
  var mirrorClickCount = 0;
  var mirrorGlass = null;
  var mirrorCrack = null;
  var puzzlePopup = null;
  var puzzleTiles = [];
  var emptyIndex = 8;
  var moveCount = 0;
  var puzzleSolved = false;
  var drawerUnlocked = false; // 抽屉是否已解锁
  var decryptPopup = null;
  var decryptCard = null;
  var decryptCardX = 0, decryptCardY = 0;
  var decryptCardRotation = 0;
  var isDraggingCard = false;
  var dragStartX, dragStartY;
  var cardStartX, cardStartY;

  // 解密卡正确位置和角度
  var DECRYPT_CARD_CORRECT = {
    x: 50,      // 百分比 (40-60% 范围内)
    y: 50,      // 百分比 (40-60% 范围内)
    rotation: 0 // 角度 (-5 到 5 度范围内)
  };

  function getOrCreateInteractionLayer() {
    if (!interactionLayer) {
      interactionLayer = document.createElement('div');
      interactionLayer.id = 'interaction-layer';
      interactionLayer.className = 'interaction-layer';
      storyViewport.appendChild(interactionLayer);
    }
    return interactionLayer;
  }

  function getOrCreateInteractionPopup() {
    if (!interactionPopup) {
      interactionPopup = document.createElement('div');
      interactionPopup.id = 'interaction-popup';
      interactionPopup.className = 'interaction-popup hidden';
      interactionPopup.innerHTML = '<div class="popup-content"><div class="popup-title"></div><div class="popup-desc"></div><button class="popup-close">关闭</button></div>';
      storyViewport.appendChild(interactionPopup);

      interactionPopup.querySelector('.popup-close').addEventListener('click', function(e) {
        e.stopPropagation(); // 阻止事件冒泡，防止触发 advance
        closeInteractionPopup();
      });

      interactionPopup.addEventListener('click', function(e) {
        if (e.target === interactionPopup) {
          closeInteractionPopup();
        }
      });
    }
    return interactionPopup;
  }

  function closeInteractionPopup() {
    if (interactionPopup) {
      isClosingPopup = true;
      interactionPopup.classList.add('hidden');
      setTimeout(function() { isClosingPopup = false; }, 50);
    }
  }

  // ——— 物品栏系统 ———
  var inventoryUI = null;
  var itemViewPopup = null;

  function getOrCreateInventoryUI() {
    if (!inventoryUI) {
      inventoryUI = document.createElement('div');
      inventoryUI.id = 'inventory-ui';
      inventoryUI.className = 'inventory-ui hidden';
      inventoryUI.innerHTML = '<div class="inventory-header">物品栏</div><div class="inventory-items"></div>';
      storyViewport.appendChild(inventoryUI);

      // 点击物品栏空白区域收起
      inventoryUI.addEventListener('click', function(e) {
        e.stopPropagation();
        // 如果点击的是物品按钮，不关闭
        if (e.target.closest('.inventory-item-btn')) return;
        closeInventory();
      });
    }
    return inventoryUI;
  }

  function addItem(itemId, itemName) {
    if (!playerInventory.find(function(i) { return i.id === itemId; })) {
      playerInventory.push({ id: itemId, name: itemName });
      updateInventoryUI();
    }
  }

  // 显示临时消息提示
  function showMessage(text, duration) {
    duration = duration || 2500;
    var existing = document.querySelector('.toast-message');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = text;
    document.body.appendChild(toast);

    requestAnimationFrame(function() {
      toast.classList.add('show');
    });

    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { toast.remove(); }, 300);
    }, duration);
  }

  // 游戏状态（不显示在物品栏中）
  function setGameState(stateId) {
    gameStates[stateId] = true;
  }

  function hasGameState(stateId) {
    return !!gameStates[stateId];
  }

  function hasItem(itemId) {
    return playerInventory.some(function(i) { return i.id === itemId; });
  }

  function discoverPassword(key, password) {
    discoveredPasswords[key] = password;
  }

  function hasPassword(key) {
    return !!discoveredPasswords[key];
  }

  function updateInventoryUI() {
    var ui = getOrCreateInventoryUI();
    var itemsContainer = ui.querySelector('.inventory-items');
    itemsContainer.innerHTML = '';

    if (playerInventory.length === 0) {
      itemsContainer.innerHTML = '<div class="inventory-empty">暂无物品</div>';
    } else {
      playerInventory.forEach(function(item) {
        var btn = document.createElement('button');
        btn.className = 'inventory-item-btn';
        btn.textContent = item.name;
        btn.dataset.id = item.id;
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          showItemView(item);
        });
        itemsContainer.appendChild(btn);
      });
    }
  }

  // 打开物品栏
  function openInventory() {
    var ui = getOrCreateInventoryUI();
    updateInventoryUI();
    ui.classList.remove('hidden');
  }

  function toggleInventory() {
    var ui = getOrCreateInventoryUI();
    if (ui.classList.contains('hidden')) {
      // 关闭其他弹窗
      closePhoneMenu();
      closeInteractionPopup();
      updateInventoryUI();
      positionInventoryNearButton(ui);
      ui.classList.remove('hidden');
    } else {
      closeInventory();
    }
  }

  // 将物品栏定位到按钮正上方
  function positionInventoryNearButton(ui) {
    var btn = document.getElementById('inventory-btn');
    if (!btn) return;
    var invWidth = 280;
    // 按钮右边缘 + 物品栏宽度/2 - 按钮宽度/2 = 居中偏移
    var btnRight = btn.offsetLeft + btn.offsetWidth;
    var invLeft = btnRight - invWidth;
    ui.style.left = invLeft + 'px';
    ui.style.right = 'auto';
    ui.style.bottom = '82px';
    ui.style.top = 'auto';
  }

  // 关闭物品栏
  function closeInventory() {
    if (inventoryUI) {
      inventoryUI.classList.add('hidden');
    }
  }

  // 关闭物品查看弹窗
  function closeItemViewPopup() {
    if (itemViewPopup) {
      itemViewPopup.classList.add('hidden');
    }
  }

  // ===== 镜子击碎系统 =====
  var mirrorBroken = false; // 镜子是否已碎裂
  var mirrorCracks = null; // 裂纹容器

  function openMirrorUI() {
    if (!mirrorPopup) {
      mirrorPopup = document.getElementById('mirror-popup');
      mirrorGlass = mirrorPopup.querySelector('.mirror-glass');
      mirrorCracks = mirrorPopup.querySelector('.mirror-cracks');
      var closeBtn = mirrorPopup.querySelector('.mirror-close');
      var viewer = mirrorPopup.querySelector('.mirror-viewer');

      // 关闭按钮
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMirrorUI();
      });

      // 点击背景关闭
      mirrorPopup.addEventListener('click', function(e) {
        if (e.target === mirrorPopup) {
          closeMirrorUI();
        }
      });

      // 点击镜子击打
      mirrorGlass.addEventListener('click', function(e) {
        e.stopPropagation();
        hitMirror();
      });
    }

    // 重置状态
    mirrorClickCount = 0;
    mirrorGlass.classList.remove('cracked', 'broken');
    mirrorCracks.className = 'mirror-cracks';
    updateMirrorHint();

    mirrorPopup.classList.remove('hidden');
  }

  function closeMirrorUI() {
    if (mirrorPopup) {
      mirrorPopup.classList.add('hidden');
    }
  }

  function hitMirror() {
    mirrorClickCount++;
    var totalHits = 5;

    // 累积裂纹效果，保留之前的裂纹
    if (mirrorClickCount >= 1) {
      mirrorCracks.classList.add('show-crack-1');
    }
    if (mirrorClickCount >= 2) {
      mirrorCracks.classList.remove('show-crack-1');
      mirrorCracks.classList.add('show-crack-2');
    }
    if (mirrorClickCount >= 3) {
      mirrorCracks.classList.remove('show-crack-2');
      mirrorCracks.classList.add('show-crack-3');
    }
    if (mirrorClickCount >= 4) {
      mirrorGlass.classList.add('cracked');
    }
    if (mirrorClickCount >= totalHits) {
      mirrorGlass.classList.add('broken');
      mirrorBroken = true;
    }

    updateMirrorHint();

    // 达到次数后获得磁卡
    if (mirrorClickCount >= totalHits) {
      setTimeout(function() {
        addItem('card', '磁卡');
        showMessage('获得「磁卡」！');
        closeMirrorUI();
      }, 800);
    }
  }

  function updateMirrorHint() {
    var hint = mirrorPopup.querySelector('.mirror-hint');
    var remaining = 5 - mirrorClickCount;
    if (remaining > 0) {
      hint.textContent = '点击镜子击碎它（还需 ' + remaining + ' 次）';
    } else {
      hint.textContent = '镜子已碎裂！';
    }
  }

  // ===== 拼图系统 =====
  function openPuzzleUI() {
    if (!puzzlePopup) {
      puzzlePopup = document.getElementById('puzzle-popup');
      var closeBtn = puzzlePopup.querySelector('.puzzle-close');

      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closePuzzleUI();
      });

      puzzlePopup.addEventListener('click', function(e) {
        if (e.target === puzzlePopup) {
          closePuzzleUI();
        }
      });
    }

    // 初始化拼图
    resetPuzzle();

    puzzlePopup.classList.remove('hidden');
  }

  function closePuzzleUI() {
    if (puzzlePopup) {
      puzzlePopup.classList.add('hidden');
    }
  }

  function resetPuzzle() {
    // 初始状态 [1,2,3,4,5,6,7,8,0] - 0表示空位
    puzzleTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    emptyIndex = 8;
    moveCount = 0;
    puzzleSolved = false;

    // 打乱拼图
    for (var i = 0; i < 50; i++) {
      var movable = getMovableTiles();
      var randomIdx = movable[Math.floor(Math.random() * movable.length)];
      swapTiles(randomIdx, emptyIndex);
    }

    renderPuzzle();
    updateMoveCount();
  }

  function getMovableTiles() {
    var movable = [];
    var row = Math.floor(emptyIndex / 3);
    var col = emptyIndex % 3;

    if (row > 0) movable.push(emptyIndex - 3); // 上
    if (row < 2) movable.push(emptyIndex + 3); // 下
    if (col > 0) movable.push(emptyIndex - 1); // 左
    if (col < 2) movable.push(emptyIndex + 1); // 右

    return movable;
  }

  function swapTiles(idx1, idx2) {
    var temp = puzzleTiles[idx1];
    puzzleTiles[idx1] = puzzleTiles[idx2];
    puzzleTiles[idx2] = temp;
    emptyIndex = idx1;
  }

  function renderPuzzle() {
    var grid = document.getElementById('puzzle-grid');
    grid.innerHTML = '';

    var movable = getMovableTiles();

    for (var i = 0; i < 9; i++) {
      var tile = document.createElement('div');
      tile.className = 'puzzle-tile';
      tile.dataset.index = i;

      if (puzzleTiles[i] === 0) {
        tile.classList.add('empty');
      } else {
        tile.textContent = puzzleTiles[i];
        if (movable.indexOf(i) !== -1) {
          tile.classList.add('movable');
        }
        tile.addEventListener('click', function() {
          var idx = parseInt(this.dataset.index);
          handleTileClick(idx);
        });
      }

      grid.appendChild(tile);
    }

    // 检查是否完成
    checkPuzzleSolved();
  }

  function handleTileClick(idx) {
    if (puzzleSolved) return;

    var movable = getMovableTiles();
    if (movable.indexOf(idx) !== -1) {
      swapTiles(idx, emptyIndex);
      moveCount++;
      renderPuzzle();
      updateMoveCount();
    }
  }

  function updateMoveCount() {
    var el = document.getElementById('puzzle-move-count');
    if (el) el.textContent = '移动次数: ' + moveCount;
  }

  function checkPuzzleSolved() {
    var solution = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    var solved = true;
    for (var i = 0; i < 9; i++) {
      if (puzzleTiles[i] !== solution[i]) {
        solved = false;
        break;
      }
    }

    if (solved && !puzzleSolved) {
      puzzleSolved = true;
      puzzlePopup.classList.add('puzzle-solved');

      // 显示使用磁卡提示
      var hint = puzzlePopup.querySelector('.puzzle-hint');
      hint.innerHTML = '拼图完成！<br><strong>请使用磁卡打开抽屉</strong>';

      // 添加使用磁卡按钮
      var useCardBtn = document.createElement('button');
      useCardBtn.className = 'popup-confirm-btn';
      useCardBtn.textContent = '使用磁卡';
      useCardBtn.style.cssText = 'margin-top: 15px; padding: 10px 30px; background: #4a7a5a; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem;';
      useCardBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (hasItem('card')) {
          setGameState('drawer_unlocked');
          showMessage('抽屉已解锁！获得提案文件！');
          closePuzzleUI();
        } else {
          showMessage('需要磁卡才能打开抽屉');
        }
      });
      hint.appendChild(useCardBtn);
    }
  }

  // ===== 解密卡系统 =====
  var ROTATE_STEP = 15; // 每次旋转角度

  function openDecryptCardUI() {
    if (!decryptPopup) {
      decryptPopup = document.getElementById('decrypt-card-popup');
      decryptCard = decryptPopup.querySelector('.decrypt-card');
      var viewer = decryptPopup.querySelector('.decrypt-viewer');
      var closeBtn = decryptPopup.querySelector('.decrypt-close');
      var rotateLeftBtn = decryptPopup.querySelector('.decrypt-rotate-left');
      var rotateRightBtn = decryptPopup.querySelector('.decrypt-rotate-right');

      // 关闭按钮
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeDecryptCardUI();
      });

      // 点击背景关闭
      decryptPopup.addEventListener('click', function(e) {
        if (e.target === decryptPopup) {
          closeDecryptCardUI();
        }
      });

      // 旋转按钮
      rotateLeftBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        decryptCardRotation -= ROTATE_STEP;
        updateCardTransform();
        checkAlignment();
      });

      rotateRightBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        decryptCardRotation += ROTATE_STEP;
        updateCardTransform();
        checkAlignment();
      });

      // 拖拽卡片
      decryptCard.addEventListener('mousedown', startDrag);
      decryptCard.addEventListener('touchstart', startDrag, { passive: false });
      viewer.addEventListener('mousemove', drag);
      viewer.addEventListener('touchmove', drag, { passive: false });
      viewer.addEventListener('mouseup', endDrag);
      viewer.addEventListener('touchend', endDrag);
      viewer.addEventListener('mouseleave', endDrag);

      // 点击卡片检查对齐
      decryptCard.addEventListener('click', function(e) {
        e.stopPropagation();
        checkAlignment();
      });
    }

    // 重置状态
    var hiddenCode = decryptPopup.querySelector('.decrypt-hidden-code');
    hiddenCode.classList.remove('revealed');
    decryptCard.classList.remove('matched');
    // 随机初始位置和角度
    decryptCardX = (Math.random() - 0.5) * 100;
    decryptCardY = (Math.random() - 0.5) * 80;
    var randomAngle = [15, -15, 30, -30, 45, -45][Math.floor(Math.random() * 6)];
    decryptCardRotation = randomAngle;
    updateCardTransform();

    decryptPopup.classList.remove('hidden');
  }

  function closeDecryptCardUI() {
    if (decryptPopup) {
      decryptPopup.classList.add('hidden');
    }
  }

  function updateCardTransform() {
    if (!decryptCard) return;
    var viewer = decryptPopup.querySelector('.decrypt-viewer');
    var viewerRect = viewer.getBoundingClientRect();
    var cardWidth = 100;
    var cardHeight = 140;

    var left = (viewerRect.width - cardWidth) / 2 + decryptCardX;
    var top = (viewerRect.height - cardHeight) / 2 + decryptCardY;

    decryptCard.style.left = left + 'px';
    decryptCard.style.top = top + 'px';
    decryptCard.style.transform = 'rotate(' + decryptCardRotation + 'deg)';
  }

  function startDrag(e) {
    e.preventDefault();
    isDraggingCard = true;
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragStartX = clientX;
    dragStartY = clientY;
    cardStartX = decryptCardX;
    cardStartY = decryptCardY;
  }

  function drag(e) {
    if (!isDraggingCard) return;
    e.preventDefault();
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var clientY = e.touches ? e.touches[0].clientY : e.clientY;
    var deltaX = clientX - dragStartX;
    var deltaY = clientY - dragStartY;

    decryptCardX = cardStartX + deltaX;
    decryptCardY = cardStartY + deltaY;

    updateCardTransform();
    checkAlignment();
  }

  function endDrag(e) {
    if (!isDraggingCard) return;
    isDraggingCard = false;
    checkAlignment();
  }

  function checkAlignment() {
    // 位置误差小于30px 且 角度接近0°时成功
    var positionOk = Math.abs(decryptCardX) < 30 && Math.abs(decryptCardY) < 30;
    var normalizedAngle = ((decryptCardRotation % 360) + 360) % 360;
    var rotationOk = normalizedAngle < 15 || normalizedAngle > 345;

    console.log('[解密卡] 位置:', decryptCardX.toFixed(1), decryptCardY.toFixed(1), '角度:', normalizedAngle.toFixed(1), '位置OK:', positionOk, '角度OK:', rotationOk);

    // 更新密码位置跟随卡片
    var hiddenCode = decryptPopup.querySelector('.decrypt-hidden-code');
    var viewer = decryptPopup.querySelector('.decrypt-viewer');
    var viewerRect = viewer.getBoundingClientRect();
    var cardWidth = 100;
    var cardHeight = 140;

    var cardCenterX = (viewerRect.width - cardWidth) / 2 + decryptCardX + cardWidth / 2;
    var cardCenterY = (viewerRect.height - cardHeight) / 2 + decryptCardY + cardHeight / 2;

    hiddenCode.style.left = cardCenterX + 'px';
    hiddenCode.style.top = cardCenterY + 'px';
    hiddenCode.style.transform = 'translate(-50%, -50%) rotate(' + (-decryptCardRotation) + 'deg)';

    // 只有位置和角度都正确时才显示密码
    if (positionOk && rotationOk) {
      console.log('[解密卡] 解密成功!');
      // 对齐成功
      decryptCardX = 0;
      decryptCardY = 0;
      decryptCardRotation = 0;
      updateCardTransform();
      decryptCard.classList.add('matched');

      hiddenCode.classList.add('revealed');

      // 发现密码
      discoverPassword('bookshelf', '123');
      // 窗口不关闭，让玩家自己关闭
    } else {
      // 位置或角度不正确时隐藏密码
      hiddenCode.classList.remove('revealed');
    }
  }

  // 查看物品内容 - 显示为浮动框
  function showItemView(item) {
    var popup = getOrCreateItemViewPopup();
    var contentDiv = popup.querySelector('.item-view-content');

    if (item.id === 'card') {
      contentDiv.innerHTML = '<div class="item-view-title">' + escapeHtml(item.name) + '</div>' +
        '<div class="item-view-text">' +
        '<p>一张老旧的磁卡，表面有些磨损。</p>' +
        '<p>上面隐约能看到一行字：<em>"时间不应成为特权"</em></p>' +
        '<hr>' +
        '<p><em>也许能用在某个地方……</em></p>' +
        '</div>';
    } else if (item.id === 'proposal') {
      contentDiv.innerHTML = '<div class="item-view-title">' + escapeHtml(item.name) + '</div>' +
        '<div class="item-view-text">' +
        '<p><strong>《废除"延寿技术"提案》</strong></p>' +
        '<p>——关于全面禁止突破自然寿命上限技术的立法提案</p>' +
        '<hr>' +
        '<p><strong>一、立法宣言</strong></p>' +
        '<p>文明的延续依赖代际更替。自然寿命不是缺陷，而是结构。当技术开始消解"死亡"这一界限，社会将失去最根本的更新机制。本法案认为：</p>' +
        '<p>1. 延寿技术不是单纯医疗行为，</p>' +
        '<p>2. 而是对人类文明时间秩序的根本改写。</p>' +
        '<hr>' +
        '<p><strong>二、立法目标</strong></p>' +
        '<p>1. 全面禁止突破自然寿命上限的技术研发与应用</p>' +
        '<p>2. 防止形成"生物等级社会"</p>' +
        '<p>3. 维护代际流动与社会稳定</p>' +
        '<p>4. 阻断资本借助技术实现时间垄断</p>' +
        '<hr>' +
        '<p><strong>三、禁止范围</strong></p>' +
        '<p>本法案将以下技术定义为"界限突破型技术"，并予以全面取缔：</p>' +
        '<p>1. 生物延寿极限突破技术</p>' +
        '<p>2. 意识延续技术</p>' +
        '<p>3. 生命暂停与复苏技术</p>' +
        '<hr>' +
        '<p><strong>四、刑事与经济制裁</strong></p>' +
        '<p>· 研发机构：永久吊销执照</p>' +
        '<p>· 企业法人：最高资产冻结</p>' +
        '<p>· 参与实验者：视同非法人体试验</p>' +
        '<p>· 资本支持方：追究连带责任</p>' +
        '<hr>' +
        '<p><strong>五、过渡条款</strong></p>' +
        '<p>已处于延寿阶段者：</p>' +
        '<p>· 不得继续接受强化治疗</p>' +
        '<p>· 不得进行意识转移</p>' +
        '<p>· 不得建立数字替身</p>' +
        '</div>';
    } else {
      contentDiv.innerHTML = '<div class="item-view-title">' + escapeHtml(item.name) + '</div>' +
        '<div class="item-view-text">暂无描述。</div>';
    }

    // 定位在物品栏旁边
    positionItemViewNearInventory(popup);
    popup.classList.remove('hidden');
  }

  // 将物品查看框定位到物品栏左侧
  function positionItemViewNearInventory(popup) {
    var invUI = document.getElementById('inventory-ui');
    if (!invUI) return;

    var invLeft = invUI.offsetLeft;
    var invTop = invUI.offsetTop;
    var invWidth = 280;
    var popupWidth = 400;
    var popupHeight = Math.min(500, window.innerHeight * 0.8);

    // 显示在物品栏左侧
    popup.style.left = (invLeft - popupWidth - 15) + 'px';
    popup.style.top = invTop + 'px';
    popup.style.width = popupWidth + 'px';
    popup.style.maxHeight = popupHeight + 'px';
    popup.style.right = 'auto';
    popup.style.bottom = 'auto';
  }

  function getOrCreateItemViewPopup() {
    if (!itemViewPopup) {
      itemViewPopup = document.createElement('div');
      itemViewPopup.id = 'item-view-popup';
      itemViewPopup.className = 'item-view-popup hidden';
      itemViewPopup.innerHTML = '<div class="item-view-inner"><button class="item-view-close-btn">×</button><div class="item-view-content"></div></div>';
      storyViewport.appendChild(itemViewPopup);

      itemViewPopup.querySelector('.item-view-close-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        itemViewPopup.classList.add('hidden');
      });

      itemViewPopup.addEventListener('click', function(e) {
        if (e.target === itemViewPopup) {
          itemViewPopup.classList.add('hidden');
        }
      });
    }
    return itemViewPopup;
  }

  function renderInteractions(locId) {
    var layer = getOrCreateInteractionLayer();
    var interactions = getInteractionsForLocation(locId);

    layer.innerHTML = '';
    interactions.forEach(function(item) {
      var el = document.createElement('div');
      el.className = 'interaction-hotspot';
      el.dataset.id = item.id;
      el.dataset.name = item.name;
      el.dataset.desc = item.desc;
      el.style.left = (item.x / 1920 * 100) + '%';
      el.style.top = (item.y / 1080 * 100) + '%';
      el.style.width = (item.w / 1920 * 100) + '%';
      el.style.height = (item.h / 1080 * 100) + '%';

      // 如果配置了图片，显示图片；否则显示纯热区
      if (item.image) {
        var img = document.createElement('img');
        img.src = item.image;
        img.className = 'interaction-img';
        img.alt = item.name;
        img.addEventListener('error', function() {
          // 图片加载失败时隐藏整个热区
          el.style.display = 'none';
        });
        el.appendChild(img);
        el.title = '';
      } else {
        el.title = item.name;
      }

      el.addEventListener('click', function(e) {
        e.stopPropagation();
        // 关闭其他弹窗后再显示
        closeInventory();
        closePhoneMenu();
        showInteractionPopup(item, el);
      });
      layer.appendChild(el);
    });
  }

  function showInteractionPopup(item, hotspotEl) {
    var popup = getOrCreateInteractionPopup();
    var descDiv = popup.querySelector('.popup-desc');
    var titleDiv = popup.querySelector('.popup-title');

    // 播放互动音效
    playInteractionSfx(item.sound);

    titleDiv.textContent = item.name;

    // 特殊互动处理
    if (item.id === 'mirror') {
      // 添加镜子相关证据
      if (!hasEvidence('evidence_card')) {
        // 证据会在hitMirror成功后通过addItem自动添加
      }
      if (mirrorBroken) {
        // 镜子已碎裂，显示提示
        descDiv.innerHTML = '碎裂的镜子，边上残留着一些玻璃碎片。<br><br><em>磁卡已经收入物品栏。</em>';
      } else {
        openMirrorUI();
        return; // 不显示普通弹窗
      }
    } else if (item.id === 'bookshelf') {
      // 书柜需要解密卡才能查看，查看后获得信件证据
      if (hasItem('decrypt_card')) {
        // 添加书柜信件证据
        addEvidence('evidence_letter');
        openDecryptCardUI();
        return; // 不显示普通弹窗
      } else {
        descDiv.innerHTML = '书柜里有很多漫画书……似乎需要什么特殊工具才能看到隐藏的内容。';
      }
    } else if (item.id === 'drawer') {
      handleDrawerInteraction(popup, descDiv);
      // 添加抽屉证据（如果已解锁）
      if (hasGameState('drawer_unlocked') && !hasEvidence('evidence_proposal')) {
        addEvidence('evidence_proposal');
      }
    } else if (item.id === 'desk') {
      // 粉红书桌可以获得解密卡和密码证据
      if (!hasItem('decrypt_card')) {
        addItem('decrypt_card', '解密卡');
        showMessage('获得「解密卡」！');
        setGameState('got_decrypt_card');
        // 添加密码证据
        addEvidence('evidence_password');
        descDiv.innerHTML = item.desc + '\n\n获得了解密卡！还在抽屉里发现了一张写着"719"的便签。';
      } else {
        descDiv.innerHTML = item.desc;
      }
    } else if (item.id === 'suit') {
      // 男士西装证据
      addEvidence('evidence_suit');
      descDiv.innerHTML = item.desc + '\n\n<em>（西装上残留的香水味，与Anta身上的味道如出一辙...）</em>';
    } else if (item.id === 'notebook') {
      // 笔记本证据
      addEvidence('evidence_notebook');
      descDiv.innerHTML = item.desc + '\n\n<em>（笔记本中记录着母亲对延寿技术阴谋的调查...）</em>';
    } else if (item.id === 'bunny') {
      // 兔子涂鸦证据（童年回忆）
      addEvidence('evidence_photo');
      descDiv.innerHTML = item.desc + '\n\n<em>（回忆涌上心头，那段与母亲争执的往事...）</em>';
    } else {
      descDiv.innerHTML = item.desc;
    }

    // 设置浮动框位置在热区旁边
    positionFloatingPopup(popup, hotspotEl);

    popup.classList.remove('hidden');
  }

  // 根据热区位置设置浮动框位置
  function positionFloatingPopup(popup, hotspotEl) {
    var canvas = document.querySelector('.game-canvas');
    if (!canvas) return;

    var canvasRect = canvas.getBoundingClientRect();
    var popupWidth = 320;
    var popupHeight = 200;
    var offset = 15;

    var left, top;

    if (hotspotEl) {
      var rect = hotspotEl.getBoundingClientRect();
      var relX = rect.left - canvasRect.left;
      var relY = rect.top - canvasRect.top;
      var hotspotRight = relX + rect.width;
      var hotspotBottom = relY + rect.height;

      // 优先放右边，不够则放左边
      if (hotspotRight + popupWidth + offset <= canvasRect.width) {
        left = hotspotRight + offset;
      } else {
        left = relX - popupWidth - offset;
      }

      // 垂直居中对齐
      top = relY + rect.height / 2 - popupHeight / 2;

      // 边界检查
      if (left < 0) left = 0;
      if (left + popupWidth > canvasRect.width) left = canvasRect.width - popupWidth;
      if (top < 0) top = 0;
      if (top + popupHeight > canvasRect.height) top = canvasRect.height - popupHeight;
    } else {
      // 默认居中
      left = (canvasRect.width - popupWidth) / 2;
      top = (canvasRect.height - popupHeight) / 2;
    }

    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    popup.style.right = 'auto';
    popup.style.bottom = 'auto';
    popup.style.width = popupWidth + 'px';
  }

  // 镜子互动：多次点击获得磁卡
  // 漫画书互动：获得密码提示
  // 抽屉互动：密码输入
  function handleDrawerInteraction(popup, descDiv) {
    if (hasGameState('drawer_unlocked')) {
      descDiv.innerHTML = '抽屉已经被打开过了，里面空空如也。';
    } else if (hasPassword('bookshelf')) {
      descDiv.innerHTML = '书桌的抽屉，上锁了……<br><br><strong>你记得密码提示：与漫画有关的数字</strong><br><br><input type="text" id="drawer-password-input" class="password-input" maxlength="3" placeholder="输入三位数密码">';

      var inputEl = popup.querySelector('#drawer-password-input');
      inputEl.focus();

      inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          checkDrawerPassword(inputEl.value, popup, descDiv);
        }
      });

      inputEl.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
      });

      // 添加确认按钮
      var confirmBtn = document.createElement('button');
      confirmBtn.className = 'popup-confirm-btn';
      confirmBtn.textContent = '确认';
      confirmBtn.style.cssText = 'margin-top: 10px; padding: 8px 20px; background: #4a90a4; color: white; border: none; border-radius: 4px; cursor: pointer;';
      confirmBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        checkDrawerPassword(inputEl.value, popup, descDiv);
      });
      descDiv.appendChild(confirmBtn);
    } else {
      descDiv.innerHTML = '书桌的抽屉，上锁了……<br><br><em>需要三位数的密码，但你似乎还不知道密码在哪里。</em>';
    }
  }

  function checkDrawerPassword(password, popup, descDiv) {
    if (password === '123') {
      // 密码正确，打开拼图
      closeInteractionPopup();
      openPuzzleUI();
    } else if (password.length > 0) {
      descDiv.innerHTML = '<span style="color: #ff6b6b;">密码错误！</span><br><br>书桌的抽屉，上锁了……<br><br><strong>你记得密码提示：与漫画有关的数字</strong><br><br><input type="text" id="drawer-password-input" class="password-input" maxlength="3" placeholder="输入三位数密码">';

      var inputEl = popup.querySelector('#drawer-password-input');
      inputEl.focus();

      inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          checkDrawerPassword(inputEl.value, popup, descDiv);
        }
      });

      inputEl.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
      });

      var confirmBtn = document.createElement('button');
      confirmBtn.className = 'popup-confirm-btn';
      confirmBtn.textContent = '确认';
      confirmBtn.style.cssText = 'margin-top: 10px; padding: 8px 20px; background: #4a90a4; color: white; border: none; border-radius: 4px; cursor: pointer;';
      confirmBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        checkDrawerPassword(inputEl.value, popup, descDiv);
      });
      descDiv.appendChild(confirmBtn);
    }
  }

  // 初始化互动层点击事件（点击空白区域关闭弹窗）
  if (storyViewport) {
    storyViewport.addEventListener('click', function(e) {
      // 物品栏按钮点击只触发 toggle，不关闭
      if (e.target.closest('#inventory-btn')) {
        return;
      }
      // 物品栏 UI 内部点击不关闭
      if (e.target.closest('#inventory-ui')) {
        return;
      }
      // 手机菜单按钮点击只触发 toggle，不关闭
      if (e.target.closest('#phone-btn')) {
        return;
      }
      // 手机菜单内部点击不关闭
      if (e.target.closest('#phone-menu')) {
        return;
      }
      // 地图按钮点击只触发 toggle，不关闭
      if (e.target.closest('#map-btn')) {
        return;
      }
      // 地图弹窗内部点击不关闭
      if (e.target.closest('#map-overlay')) {
        return;
      }
      // 证据台菜单内部点击不关闭
      if (e.target.closest('#evidence-table-overlay')) {
        return;
      }
      // 真相核实对话框内部点击不关闭
      if (e.target.closest('.truth-verified-dialog') || e.target.closest('.truth-failure-dialog')) {
        return;
      }
      // 推理提示对话框内部点击不关闭
      if (e.target.closest('.inference-prompt-dialog')) {
        return;
      }
      // 房间导航按钮忽略
      if (e.target.closest('.room-nav')) {
        return;
      }
      // 物品查看弹窗内部点击不关闭
      if (e.target.closest('#item-view-popup')) {
        return;
      }
      // 互动弹窗内部点击不关闭
      if (e.target.closest('.interaction-popup')) {
        return;
      }
      // 关闭所有弹窗
      closeAllPopups();
    });
  }

  // ——— 启动按钮 ———
  document.getElementById('start-btn').addEventListener('click', function () {
    currentIndex = 0;
    lastLocationId = '';
    lastSpeakerInScene = '';
    activeSpeaker = '';
    visitedScenes = {};
    displayedTexts = {};
    isReturningToVisitedScene = false;
    mirrorBroken = false; // 重置镜子状态
    stopVoiceover();
    playerInventory = [];
    discoveredPasswords = {};
    mirrorClickCount = 0;
    gameStates = {};
    roomNavIndex = { left: 0, bottom: 0, right: 0 };
    closePhoneMenu();
    closeMap();
    closeInteractionPopup();
    closeInventory();
    if (roomNav) roomNav.classList.add('hidden');
    showScreen(storyScreen);
    goTo(0);
  });

  document.getElementById('restart-btn').addEventListener('click', function () {
    if (bgm) { bgm.pause(); bgm.currentTime = 0; }
    closePhoneMenu();
    closeMap();
    closeInteractionPopup();
    showScreen(titleScreen);
  });

  // ========== 证据系统 ==========
  
  // 玩家已获得的证据
  var playerEvidences = []; // { id, name, category, description, factionScores, obtainedBy, isNecessary, isSufficient }
  
  // 阵营分数
  var factionScores = {
    order: 0,
    innovation: 0,
    questioning: 0,
    economy: 0
  };
  
  // 真相连线状态
  var truthConnections = []; // { fromEvidenceId, toEvidenceId }
  var activeTruthId = null; // 当前选中的真相
  
  // 真相核实状态
  var verifiedTruths = {}; // { truthId: true }
  var failedTruths = {}; // { truthId: failureReason }
  
  // 获取证据配置
  var EVIDENCE_CONFIG = ASSETS.evidences || {};
  var TRUTH_CONFIG = ASSETS.truths || {};
  var FACTION_CONFIG = ASSETS.factions || {};
  var FAILURE_CONFIG = ASSETS.failureScenes || {};
  var TRUTH_CONNECTIONS_CONFIG = ASSETS.truthConnections || {};
  
  // 添加证据
  function addEvidence(evidenceId) {
    var evidenceData = EVIDENCE_CONFIG[evidenceId];
    if (!evidenceData) {
      console.log('[证据系统] 未找到证据配置: ' + evidenceId);
      return false;
    }
    
    // 检查是否已获得
    if (playerEvidences.find(function(e) { return e.id === evidenceId; })) {
      return false;
    }
    
    // 添加到玩家证据列表
    var newEvidence = {
      id: evidenceData.id,
      name: evidenceData.name,
      category: evidenceData.category,
      description: evidenceData.description,
      factionScores: evidenceData.factionScores ? { ...evidenceData.factionScores } : { order: 0, innovation: 0, questioning: 0, economy: 0 },
      obtainedBy: evidenceData.obtainedBy,
      isNecessary: evidenceData.isNecessary || false,
      isSufficient: evidenceData.isSufficient || false,
      icon: getEvidenceIcon(evidenceData.category)
    };
    
    playerEvidences.push(newEvidence);
    
    // 更新阵营分数
    updateFactionScores(newEvidence.factionScores);
    
    // 显示获得证据提示
    showMessage('获得线索：「' + newEvidence.name + '」');
    
    console.log('[证据系统] 获得证据: ' + newEvidence.name);
    console.log('[证据系统] 阵营分数: ', factionScores);
    
    return true;
  }
  
  // 更新阵营分数
  function updateFactionScores(scores) {
    if (!scores) return;
    if (scores.order) factionScores.order += scores.order;
    if (scores.innovation) factionScores.innovation += scores.innovation;
    if (scores.questioning) factionScores.questioning += scores.questioning;
    if (scores.economy) factionScores.economy += scores.economy;
  }
  
  // 获取证据图标
  function getEvidenceIcon(category) {
    var icons = {
      item: '📦',
      document: '📄',
      event: '📍',
      dialogue: '💬'
    };
    return icons[category] || '🔍';
  }
  
  // 检查是否拥有某证据
  function hasEvidence(evidenceId) {
    return playerEvidences.some(function(e) { return e.id === evidenceId; });
  }
  
  // 获取已获得的证据列表
  function getObtainedEvidences() {
    return playerEvidences.slice();
  }
  
  // 计算必要证据阵营分数
  function calculateNecessaryFactionScores() {
    var scores = { order: 0, innovation: 0, questioning: 0, economy: 0 };
    playerEvidences.forEach(function(evidence) {
      if (evidence.isNecessary) {
        scores.order += evidence.factionScores.order || 0;
        scores.innovation += evidence.factionScores.innovation || 0;
        scores.questioning += evidence.factionScores.questioning || 0;
        scores.economy += evidence.factionScores.economy || 0;
      }
    });
    return scores;
  }
  
  // 计算充分证据阵营分数
  function calculateSufficientFactionScores() {
    var scores = { order: 0, innovation: 0, questioning: 0, economy: 0 };
    playerEvidences.forEach(function(evidence) {
      if (evidence.isSufficient) {
        scores.order += evidence.factionScores.order || 0;
        scores.innovation += evidence.factionScores.innovation || 0;
        scores.questioning += evidence.factionScores.questioning || 0;
        scores.economy += evidence.factionScores.economy || 0;
      }
    });
    return scores;
  }
  
  // ========== 证据台菜单系统 ==========
  var evidenceTableOverlay = null;
  
  function getOrCreateEvidenceTableOverlay() {
    if (!evidenceTableOverlay) {
      evidenceTableOverlay = document.createElement('div');
      evidenceTableOverlay.id = 'evidence-table-overlay';
      evidenceTableOverlay.className = 'evidence-table-overlay';
      storyViewport.appendChild(evidenceTableOverlay);
      
      // 初始化HTML结构
      evidenceTableOverlay.innerHTML = createEvidenceTableHTML();
      
      // 绑定事件
      bindEvidenceTableEvents();
    }
    return evidenceTableOverlay;
  }
  
  function createEvidenceTableHTML() {
    return '<div class="evidence-table-modal">' +
      '<div class="evidence-table-header">' +
        '<div class="evidence-table-tabs">' +
          '<button class="evidence-tab active" data-tab="clues">线索</button>' +
          '<button class="evidence-tab" data-tab="truth">真相面板</button>' +
        '</div>' +
        '<button class="evidence-table-close">×</button>' +
      '</div>' +
      '<div class="evidence-table-body">' +
        // 线索面板
        '<div class="evidence-panel clues-panel active">' +
          '<div class="clues-list"></div>' +
        '</div>' +
        // 真相面板
        '<div class="evidence-panel truth-panel">' +
          '<div class="truth-section">' +
            '<div class="truth-selector"></div>' +
            '<div class="truth-canvas">' +
              '<div class="truth-node-area"></div>' +
              '<svg class="connection-lines"></svg>' +
            '</div>' +
            '<div class="truth-info"></div>' +
            '<div class="faction-scores-display"></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
  
  function bindEvidenceTableEvents() {
    var overlay = evidenceTableOverlay;
    
    // 关闭按钮
    overlay.querySelector('.evidence-table-close').addEventListener('click', function(e) {
      e.stopPropagation();
      closeEvidenceTable();
    });
    
    // 点击遮罩关闭
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeEvidenceTable();
      }
    });
    
    // Tab切换
    overlay.querySelectorAll('.evidence-tab').forEach(function(tab) {
      tab.addEventListener('click', function(e) {
        e.stopPropagation();
        var tabName = this.dataset.tab;
        switchEvidenceTab(tabName);
      });
    });
    
    // 真相选择器事件（事件委托）
    overlay.querySelector('.truth-selector').addEventListener('click', function(e) {
      var btn = e.target.closest('.truth-select-btn');
      if (btn) {
        var truthId = btn.dataset.truthId;
        selectTruth(truthId);
      }
    });
    
    // 真相面板拖拽事件
    setupTruthCanvasDrag();
  }
  
  function switchEvidenceTab(tabName) {
    var overlay = evidenceTableOverlay;
    overlay.querySelectorAll('.evidence-tab').forEach(function(tab) {
      tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    overlay.querySelectorAll('.evidence-panel').forEach(function(panel) {
      panel.classList.toggle('active', panel.classList.contains(tabName + '-panel'));
    });
    
    if (tabName === 'truth') {
      renderTruthPanel();
    } else if (tabName === 'clues') {
      renderCluesList();
    }
  }
  
  function renderCluesList() {
    var container = evidenceTableOverlay.querySelector('.clues-list');
    var evidences = getObtainedEvidences();
    
    if (evidences.length === 0) {
      container.innerHTML = '<div class="clues-empty">' +
        '<p>暂无获得任何线索</p>' +
        '<p class="clues-hint">在场景中与物品互动或对话来获取线索</p>' +
      '</div>';
      return;
    }
    
    var html = '';
    evidences.forEach(function(evidence) {
      var typeLabel = '';
      if (evidence.isNecessary) typeLabel = '<span class="evidence-tag necessary">必要</span>';
      if (evidence.isSufficient) typeLabel += '<span class="evidence-tag sufficient">充分</span>';
      
      html += '<div class="clue-item" data-evidence-id="' + evidence.id + '">' +
        '<div class="clue-header">' +
          '<span class="clue-icon">' + evidence.icon + '</span>' +
          '<span class="clue-name">' + evidence.name + '</span>' +
          typeLabel +
        '</div>' +
        '<div class="clue-desc">' + evidence.description + '</div>' +
        '<div class="clue-source">来源：' + evidence.obtainedBy + '</div>' +
      '</div>';
    });
    
    container.innerHTML = html;
  }
  
  function renderTruthPanel() {
    renderTruthSelector();
    renderTruthCanvas();
    renderFactionScores();
  }
  
  function renderTruthSelector() {
    var container = evidenceTableOverlay.querySelector('.truth-selector');
    var truths = Object.values(TRUTH_CONFIG);
    
    var html = '<div class="truth-selector-title">选择要核实的真相</div>';
    
    truths.forEach(function(truth) {
      var isVerified = verifiedTruths[truth.id];
      var statusClass = isVerified ? 'verified' : '';
      var statusText = isVerified ? '✓ 已核实' : '';
      
      html += '<button class="truth-select-btn ' + statusClass + '" data-truth-id="' + truth.id + '">' +
        '<span class="truth-select-name">' + truth.name + '</span>' +
        '<span class="truth-select-status">' + statusText + '</span>' +
      '</button>';
    });
    
    container.innerHTML = html;
  }
  
  function selectTruth(truthId) {
    activeTruthId = truthId;
    truthConnections = []; // 切换真相时清空连线

    // 更新选择器样式
    evidenceTableOverlay.querySelectorAll('.truth-select-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.truthId === truthId);
    });

    console.log('[真相面板] 选择真相: ' + truthId);
    
    renderTruthCanvas();
    renderTruthInfo();
    renderFactionScores();
  }
  
  function renderTruthCanvas() {
    var container = evidenceTableOverlay.querySelector('.truth-node-area');
    var svg = evidenceTableOverlay.querySelector('.connection-lines');
    
    if (!activeTruthId) {
      container.innerHTML = '<div class="truth-canvas-hint">请先选择一个真相</div>';
      svg.innerHTML = '';
      return;
    }
    
    var truth = TRUTH_CONFIG[activeTruthId];
    var connections = TRUTH_CONNECTIONS_CONFIG[activeTruthId];
    
    // 获取所有需要的证据
    var allRequired = [...(truth.requiredEvidences || []), ...(truth.sufficientEvidences || [])];
    var uniqueRequired = [...new Set(allRequired)];
    
    // 创建证据节点
    var html = '<div class="truth-canvas-title">' + truth.title + '</div>';
    
    // 真相节点（中心）
    html += '<div class="truth-central-node" data-truth-id="' + truth.id + '">' +
      '<span class="truth-node-icon">🎯</span>' +
      '<span class="truth-node-name">真相</span>' +
    '</div>';
    
    // 证据节点（围绕真相）
    var nodeIndex = 0;
    uniqueRequired.forEach(function(evidenceId) {
      var evidenceData = EVIDENCE_CONFIG[evidenceId];
      if (!evidenceData) return;
      
      var hasTheEvidence = hasEvidence(evidenceId);
      var isRequired = truth.requiredEvidences && truth.requiredEvidences.includes(evidenceId);
      var isSufficient = truth.sufficientEvidences && truth.sufficientEvidences.includes(evidenceId);
      
      var angle = (nodeIndex / uniqueRequired.length) * 360 - 90;
      var radius = 140;
      var x = Math.cos(angle * Math.PI / 180) * radius;
      var y = Math.sin(angle * Math.PI / 180) * radius;
      
      var nodeClass = 'evidence-node';
      if (!hasTheEvidence) nodeClass += ' locked';
      if (isRequired) nodeClass += ' required';
      if (isSufficient) nodeClass += ' sufficient';
      
      var lockIcon = hasTheEvidence ? '' : '<span class="lock-icon">🔒</span>';
      
      html += '<div class="' + nodeClass + '" ' +
        'data-evidence-id="' + evidenceId + '" ' +
        'data-x="' + x + '" data-y="' + y + '" ' +
        'style="left: 50%; top: 50%; transform: translate(-50%, -50%) translate(' + x + 'px, ' + y + 'px);">' +
        '<span class="evidence-node-icon">' + getEvidenceIcon(evidenceData.category) + '</span>' +
        '<span class="evidence-node-name">' + evidenceData.name + '</span>' +
        lockIcon +
      '</div>';
      
      nodeIndex++;
    });
    
    container.innerHTML = html;
    
    // 渲染连线
    renderConnections();
    
    // 添加节点拖拽事件
    setupNodeDrag();
  }
  
  function renderConnections() {
    var svg = evidenceTableOverlay.querySelector('.connection-lines');
    var container = evidenceTableOverlay.querySelector('.truth-node-area');
    
    svg.innerHTML = '';
    
    // 获取当前真相的连线配置
    var connections = TRUTH_CONNECTIONS_CONFIG[activeTruthId];
    if (!connections || !connections.connections) return;
    
    var containerRect = container.getBoundingClientRect();
    var centerX = containerRect.width / 2;
    var centerY = containerRect.height / 2;
    
    // 获取真相节点的实际位置
    var truthNode = container.querySelector('.truth-central-node');
    var truthRect = truthNode ? truthNode.getBoundingClientRect() : null;
    var truthX = truthRect ? (truthRect.left - containerRect.left + truthRect.width / 2) : centerX;
    var truthY = truthRect ? (truthRect.top - containerRect.top + truthRect.height / 2) : centerY;
    
    connections.connections.forEach(function(conn) {
      // 检查这两个证据是否都被连线到真相
      var fromNode = container.querySelector('[data-evidence-id="' + conn.from + '"]');
      var toNode = container.querySelector('[data-evidence-id="' + conn.to + '"]');
      
      if (!fromNode || !toNode) return;
      
      // 检查是否有连线连接到真相
      var fromConnected = truthConnections.some(function(c) {
        return (c.from === conn.from && c.to === 'truth') || (c.from === 'truth' && c.to === conn.from);
      });
      var toConnected = truthConnections.some(function(c) {
        return (c.to === conn.to && c.from === 'truth') || (c.from === 'truth' && c.to === conn.to);
      });
      
      if (!fromConnected || !toConnected) return;
      
      // 计算连线端点
      var fromX, fromY, toX, toY;
      
      if (fromNode.classList.contains('truth-central-node')) {
        fromX = truthX;
        fromY = truthY;
      } else {
        fromX = centerX + parseFloat(fromNode.dataset.x || 0);
        fromY = centerY + parseFloat(fromNode.dataset.y || 0);
      }
      
      if (toNode.classList.contains('truth-central-node')) {
        toX = truthX;
        toY = truthY;
      } else {
        toX = centerX + parseFloat(toNode.dataset.x || 0);
        toY = centerY + parseFloat(toNode.dataset.y || 0);
      }
      
      // 获取连线颜色
      var lineColor = 'rgba(196, 135, 90, 0.6)';
      
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', fromX);
      line.setAttribute('y1', fromY);
      line.setAttribute('x2', toX);
      line.setAttribute('y2', toY);
      line.setAttribute('stroke', lineColor);
      line.setAttribute('stroke-width', '2');
      line.setAttribute('stroke-dasharray', '5,5');
      
      svg.appendChild(line);
    });
  }
  
  function setupNodeDrag() {
    var container = evidenceTableOverlay.querySelector('.truth-node-area');
    var svg = evidenceTableOverlay.querySelector('.connection-lines');
    
    container.querySelectorAll('.evidence-node').forEach(function(node) {
      var isDragging = false;
      var startX, startY, startNodeX, startNodeY;
      
      node.addEventListener('mousedown', function(e) {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        
        var evidenceId = node.dataset.evidenceId;
        if (!hasEvidence(evidenceId)) return;
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startNodeX = parseFloat(node.dataset.x);
        startNodeY = parseFloat(node.dataset.y);
        
        node.classList.add('dragging');
      });
      
      document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        
        var newX = startNodeX + dx;
        var newY = startNodeY + dy;
        
        // 限制在一定范围内
        var maxRadius = 200;
        var distance = Math.sqrt(newX * newX + newY * newY);
        if (distance > maxRadius) {
          newX = (newX / distance) * maxRadius;
          newY = (newY / distance) * maxRadius;
        }
        
        node.dataset.x = newX;
        node.dataset.y = newY;
        node.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
        
        // 更新连线
        renderConnections();
      });
      
      document.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        isDragging = false;
        node.classList.remove('dragging');
        
        // 检查是否拖到真相节点附近
        var truthNode = container.querySelector('.truth-central-node');
        if (!truthNode) return;
        
        var nodeRect = node.getBoundingClientRect();
        var truthRect = truthNode.getBoundingClientRect();
        
        var nodeCenterX = nodeRect.left + nodeRect.width / 2;
        var nodeCenterY = nodeRect.top + nodeRect.height / 2;
        var truthCenterX = truthRect.left + truthRect.width / 2;
        var truthCenterY = truthRect.top + truthRect.height / 2;
        
        var distance = Math.sqrt(
          Math.pow(nodeCenterX - truthCenterX, 2) +
          Math.pow(nodeCenterY - truthCenterY, 2)
        );
        
        var evidenceId = node.dataset.evidenceId;
        
        // 如果拖到真相附近，添加连线
        if (distance < 80) {
          // 检查是否已存在连线
          var exists = truthConnections.some(function(c) {
            return (c.from === evidenceId && c.to === 'truth') ||
                   (c.from === 'truth' && c.to === evidenceId);
          });
          
          if (!exists) {
            truthConnections.push({ from: evidenceId, to: 'truth' });
            node.classList.add('connected');
            
            // 添加视觉反馈
            showConnectionFeedback(node);
          }
        } else {
          // 如果拖离真相，移除连线
          truthConnections = truthConnections.filter(function(c) {
            return !((c.from === evidenceId && c.to === 'truth') ||
                     (c.from === 'truth' && c.to === evidenceId));
          });
          node.classList.remove('connected');
        }
        
        // 更新连线
        renderConnections();
        renderTruthInfo();
      });
    });
  }
  
  function setupTruthCanvasDrag() {
    // 真相节点可以被拖拽到证据节点
    var container = evidenceTableOverlay.querySelector('.truth-node-area');
    
    var isDragging = false;
    var draggingNode = null;
    var offsetX, offsetY;
    
    container.addEventListener('mousedown', function(e) {
      var truthNode = e.target.closest('.truth-central-node');
      if (!truthNode) return;
      
      isDragging = true;
      draggingNode = truthNode;
      
      var rect = truthNode.getBoundingClientRect();
      offsetX = e.clientX - rect.left - rect.width / 2;
      offsetY = e.clientY - rect.top - rect.height / 2;
      
      truthNode.classList.add('dragging');
    });
    
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      
      var containerRect = container.getBoundingClientRect();
      var x = e.clientX - containerRect.left - containerRect.width / 2 - offsetX;
      var y = e.clientY - containerRect.top - containerRect.height / 2 - offsetY;
      
      // 限制在一定范围内
      var maxRadius = 100;
      var distance = Math.sqrt(x * x + y * y);
      if (distance > maxRadius) {
        x = (x / distance) * maxRadius;
        y = (y / distance) * maxRadius;
      }
      
      draggingNode.style.left = x + 'px';
      draggingNode.style.top = y + 'px';
      
      // 更新连线
      renderConnections();
    });
    
    document.addEventListener('mouseup', function(e) {
      if (!isDragging) return;
      isDragging = false;
      draggingNode.classList.remove('dragging');
      
      // 重置真相节点位置
      draggingNode.style.left = '0';
      draggingNode.style.top = '0';
      
      renderConnections();
    });
  }
  
  function showConnectionFeedback(node) {
    node.classList.add('connection-flash');
    setTimeout(function() {
      node.classList.remove('connection-flash');
    }, 500);
  }
  
  function renderTruthInfo() {
    var container = evidenceTableOverlay.querySelector('.truth-info');
    
    if (!activeTruthId) {
      container.innerHTML = '';
      return;
    }
    
    var truth = TRUTH_CONFIG[activeTruthId];
    
    // 计算当前连线状态
    var connectedEvidence = truthConnections
      .filter(function(c) { return c.to === 'truth' || c.from === 'truth'; })
      .map(function(c) { return c.from === 'truth' ? c.to : c.from; });
    
    var requiredConnected = (truth.requiredEvidences || []).filter(function(id) {
      return connectedEvidence.includes(id);
    });
    
    var sufficientConnected = (truth.sufficientEvidences || []).filter(function(id) {
      return connectedEvidence.includes(id);
    });
    
    var canVerify = requiredConnected.length === (truth.requiredEvidences || []).length;
    var hasEnoughSufficient = sufficientConnected.length >= Math.ceil((truth.sufficientEvidences || []).length / 2);
    
    var html = '<div class="truth-info-title">' + truth.description + '</div>';
    
    html += '<div class="truth-progress">';
    html += '<div class="progress-label">必要证据连线: ' + requiredConnected.length + '/' + (truth.requiredEvidences || []).length + '</div>';
    html += '<div class="progress-label">充分证据连线: ' + sufficientConnected.length + '/' + (truth.sufficientEvidences || []).length + '</div>';
    html += '</div>';
    
    // 阵营分数检查
    var necessaryScores = calculateNecessaryFactionScores();
    var totalScores = factionScores;
    var reqs = truth.factionRequirements;
    
    var necessaryOk = necessaryScores.order >= reqs.necessary.order &&
                       necessaryScores.questioning >= reqs.necessary.questioning;
    var totalOk = totalScores.order >= reqs.total.order &&
                   totalScores.questioning >= reqs.total.questioning;
    
    html += '<div class="score-check">';
    html += '<div class="score-check-item ' + (necessaryOk ? 'ok' : 'fail') + '">';
    html += '必要证据阵营分数: ' + (necessaryOk ? '✓ 满足' : '✗ 不满足');
    html += '</div>';
    html += '<div class="score-check-item ' + (totalOk ? 'ok' : 'fail') + '">';
    html += '总阵营分数: ' + (totalOk ? '✓ 满足' : '✗ 不满足');
    html += '</div>';
    html += '</div>';
    
    // 核实按钮
    if (canVerify && necessaryOk) {
      html += '<button class="verify-truth-btn" data-truth-id="' + truth.id + '">核实真相</button>';
    } else {
      html += '<div class="verify-hint">';
      if (!canVerify) {
        html += '请将所有必要证据连线到真相';
      } else if (!necessaryOk) {
        html += '阵营分数不满足要求';
      }
      html += '</div>';
    }
    
    container.innerHTML = html;
    
    // 绑定核实按钮
    var verifyBtn = container.querySelector('.verify-truth-btn');
    if (verifyBtn) {
      verifyBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var truthId = this.dataset.truthId;
        verifyTruth(truthId);
      });
    }
  }
  
  function renderFactionScores() {
    var container = evidenceTableOverlay.querySelector('.faction-scores-display');
    
    var html = '<div class="faction-scores-title">现有线索链接的阵营分数</div>';
    html += '<div class="faction-scores-grid">';
    
    html += '<div class="faction-score-item">';
    html += '<span class="faction-icon">' + FACTION_CONFIG.order.icon + '</span>';
    html += '<span class="faction-name">秩序</span>';
    html += '<span class="faction-value">' + factionScores.order + '</span>';
    html += '</div>';
    
    html += '<div class="faction-score-item">';
    html += '<span class="faction-icon">' + FACTION_CONFIG.innovation.icon + '</span>';
    html += '<span class="faction-name">创新</span>';
    html += '<span class="faction-value">' + factionScores.innovation + '</span>';
    html += '</div>';
    
    html += '<div class="faction-score-item">';
    html += '<span class="faction-icon">' + FACTION_CONFIG.questioning.icon + '</span>';
    html += '<span class="faction-name">质疑</span>';
    html += '<span class="faction-value">' + factionScores.questioning + '</span>';
    html += '</div>';
    
    html += '<div class="faction-score-item">';
    html += '<span class="faction-icon">' + FACTION_CONFIG.economy.icon + '</span>';
    html += '<span class="faction-name">经济</span>';
    html += '<span class="faction-value">' + factionScores.economy + '</span>';
    html += '</div>';
    
    html += '</div>';
    
    // 显示必要证据和充分证据的分数
    var necessaryScores = calculateNecessaryFactionScores();
    html += '<div class="evidence-scores-breakdown">';
    html += '<div class="breakdown-title">必要证据阵营分数</div>';
    html += '<div class="breakdown-scores">';
    html += '秩序: ' + necessaryScores.order + ' | 创新: ' + necessaryScores.innovation + ' | 质疑: ' + necessaryScores.questioning + ' | 经济: ' + necessaryScores.economy;
    html += '</div>';
    html += '</div>';
    
    container.innerHTML = html;
  }
  
  // 打开证据台菜单
  function openEvidenceTable() {
    var overlay = getOrCreateEvidenceTableOverlay();
    closePhoneMenu();
    closeInventory();
    closeMap();
    
    // 重置状态
    activeTruthId = null;
    renderCluesList();
    
    overlay.classList.add('active');
  }
  
  function closeEvidenceTable() {
    if (evidenceTableOverlay) {
      evidenceTableOverlay.classList.remove('active');
    }
  }
  
  function toggleEvidenceTable() {
    var overlay = getOrCreateEvidenceTableOverlay();
    if (overlay.classList.contains('active')) {
      closeEvidenceTable();
    } else {
      openEvidenceTable();
    }
  }
  
  // 核实真相
  function verifyTruth(truthId) {
    var truth = TRUTH_CONFIG[truthId];
    if (!truth) return;
    
    // 检查阵营分数
    var necessaryScores = calculateNecessaryFactionScores();
    var totalScores = factionScores;
    var reqs = truth.factionRequirements;
    
    // 检查必要证据阵营分数
    var necessaryPass = necessaryScores.order >= reqs.necessary.order &&
                        necessaryScores.innovation >= reqs.necessary.innovation &&
                        necessaryScores.questioning >= reqs.necessary.questioning &&
                        necessaryScores.economy >= reqs.necessary.economy;
    
    // 检查总阵营分数
    var totalPass = totalScores.order >= reqs.total.order &&
                     totalScores.innovation >= reqs.total.innovation &&
                     totalScores.questioning >= reqs.total.questioning &&
                     totalScores.economy >= reqs.total.economy;
    
    console.log('[真相核实] 必要证据分数检查: ' + necessaryPass);
    console.log('[真相核实] 总分数检查: ' + totalPass);
    console.log('[真相核实] 必要分数: ', reqs.necessary);
    console.log('[真相核实] 当前必要分数: ', necessaryScores);
    console.log('[真相核实] 总分数要求: ', reqs.total);
    console.log('[真相核实] 当前总分数: ', totalScores);
    
    if (!necessaryPass) {
      // 必要证据阵营分数不足，失败
      showTruthFailureDialog(truthId, 'necessary');
      return;
    }
    
    if (!totalPass) {
      // 总分数不足，失败
      showTruthFailureDialog(truthId, 'total');
      return;
    }
    
    // 核实成功
    verifiedTruths[truthId] = true;
    
    // 显示真相内容
    showTruthVerifiedDialog(truthId);
  }
  
  function showTruthVerifiedDialog(truthId) {
    var truth = TRUTH_CONFIG[truthId];
    
    // 创建确认对话框
    var dialog = document.createElement('div');
    dialog.className = 'truth-verified-dialog';
    dialog.innerHTML = '<div class="truth-dialog-content">' +
      '<div class="truth-dialog-header">真相核实完成</div>' +
      '<div class="truth-dialog-body">' +
        '<h3>' + truth.title + '</h3>' +
        truth.content +
      '</div>' +
      '<div class="truth-dialog-footer">' +
        '<button class="confirm-truth-btn">确认真相</button>' +
      '</div>' +
    '</div>';
    
    storyViewport.appendChild(dialog);
    
    // 绑定确认按钮
    dialog.querySelector('.confirm-truth-btn').addEventListener('click', function(e) {
      e.stopPropagation();
      
      // 移除对话框
      dialog.remove();
      
      // 解锁后续剧情
      if (truth.unlocksStory) {
        unlockStoryWithTruth(truth);
      }
      
      // 更新UI
      closeEvidenceTable();
      
      // 显示成功消息
      showMessage('真相已确认识别，剧情已解锁！');
    });
    
    // 点击遮罩关闭
    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) {
        dialog.remove();
      }
    });
  }
  
  function showTruthFailureDialog(truthId, reason) {
    var truth = TRUTH_CONFIG[truthId];
    
    var reasonText = reason === 'necessary' 
      ? '必要证据的阵营分数不满足要求' 
      : '必要证据加充分证据的总阵营分数不满足要求';
    
    var dialog = document.createElement('div');
    dialog.className = 'truth-failure-dialog';
    dialog.innerHTML = '<div class="truth-dialog-content">' +
      '<div class="truth-dialog-header failure">真相核实失败</div>' +
      '<div class="truth-dialog-body">' +
        '<p class="failure-reason">' + reasonText + '</p>' +
        '<p class="failure-hint">你的阵营倾向与真相揭示所需不符。</p>' +
        '<p class="failure-hint">在确认前，请确保收集了足够的必要证据和充分证据。</p>' +
      '</div>' +
      '<div class="truth-dialog-footer">' +
        '<button class="close-failure-btn">返回</button>' +
      '</div>' +
    '</div>';
    
    storyViewport.appendChild(dialog);
    
    // 记录失败
    failedTruths[truthId] = reason;
    
    // 绑定按钮
    dialog.querySelector('.close-failure-btn').addEventListener('click', function(e) {
      e.stopPropagation();
      dialog.remove();
    });
  }
  
  function unlockStoryWithTruth(truth) {
    // 记录解锁的真相
    setGameState('truth_verified_' + truth.id);
    
    // 设置剧情解锁标记
    setGameState('story_unlocked');
    
    console.log('[剧情解锁] 已解锁真相: ' + truth.name);
    console.log('[剧情解锁] 后续剧情: ' + truth.unlocksStory);
    
    // 这里可以添加后续剧情跳转逻辑
    // 例如：跳转到新的场景
    if (truth.unlocksStory) {
      // 延迟跳转，让玩家看到成功消息
      setTimeout(function() {
        goToSceneByName(truth.unlocksStory);
      }, 2000);
    }
  }
  
  // 更新手机菜单，添加证据台按钮
  var originalRenderPhoneMenu = renderPhoneMenu;
  renderPhoneMenu = function() {
    originalRenderPhoneMenu();
    
    var menu = getOrCreatePhoneMenu();
    
    // 添加证据台按钮
    var appsContainer = menu.querySelector('.phone-menu-apps');
    
    // 创建证据台按钮
    var evidenceBtn = document.createElement('button');
    evidenceBtn.className = 'phone-app-btn';
    evidenceBtn.id = 'menu-evidence-btn';
    evidenceBtn.innerHTML = '<svg class="phone-app-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<line x1="16" y1="13" x2="8" y2="13"/>' +
      '<line x1="16" y1="17" x2="8" y2="17"/>' +
      '<polyline points="10 9 9 9 8 9"/>' +
    '</svg>' +
    '<span class="phone-app-label">证据台</span>';
    
    // 插入到物品按钮之前
    var inventoryBtn = menu.querySelector('#menu-inventory-btn');
    if (inventoryBtn) {
      appsContainer.insertBefore(evidenceBtn, inventoryBtn);
    } else {
      appsContainer.appendChild(evidenceBtn);
    }
    
    // 绑定事件
    evidenceBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closePhoneMenu();
      openEvidenceTable();
    });
  };
  
  // 修改advance函数，添加对证据台菜单的检查
  var originalAdvance = advance;
  advance = function(ev) {
    // 如果证据台菜单打开，忽略advance
    if (evidenceTableOverlay && evidenceTableOverlay.classList.contains('active')) return;
    
    // 调用原始advance
    originalAdvance(ev);
  };
  
  // 在advance的忽略条件中添加证据台相关
  var originalAdvanceCheck = advance;
  
  // 修改点击画布的事件处理，添加对证据台的检查
  var storyViewportClick = storyViewport ? storyViewport.onclick : null;
  
  // 重写点击事件处理
  if (storyViewport) {
    storyViewport.removeEventListener('click', storyViewportClick);
    storyViewport.addEventListener('click', function(e) {
      // 证据台打开时不处理
      if (evidenceTableOverlay && evidenceTableOverlay.classList.contains('active')) {
        // 除非点击的是证据台本身
        if (!e.target.closest('#evidence-table-overlay')) {
          return;
        }
      }
      
      // 原有逻辑...
    });
  }
  
  // 在证据获得时自动触发（当获得某些关键证据时）
  // 这需要在现有的互动逻辑中调用 addEvidence()
  
  // ========== 整合证据获取到现有系统 ==========
  
  // 修改 addItem 函数，在获得物品时检查是否需要添加为证据
  var originalAddItem = addItem;
  addItem = function(itemId, itemName) {
    var result = originalAddItem(itemId, itemName);
    
    // 将物品也添加为证据
    // 物品ID映射到证据ID
    var evidenceMapping = {
      'card': 'evidence_card',
      'proposal': 'evidence_proposal',
      'decrypt_card': 'evidence_decrypt_card'
    };
    
    if (evidenceMapping[itemId]) {
      addEvidence(evidenceMapping[itemId]);
    }
    
    return result;
  };
  
  // 在场景互动中自动添加证据
  // 这需要在相应的互动处理中添加 addEvidence 调用
  
  // ========== 对话自动获取证据 ==========
  // 当播放某些关键对话时，自动添加证据
  
  // 修改 playVoiceover 函数，在播放特定语音时添加证据
  var originalPlayVoiceover = playVoiceover;
  playVoiceover = function(stepId, stepIndex) {
    // 特定对话自动添加证据（使用Set确保不重复添加）
    if (!window._evidenceAdded) window._evidenceAdded = {};
    
    if ((stepId === 'reporter_1' || stepId === 'reporter_2' || stepId === 'reporter_3') && !window._evidenceAdded['evidence_reporter']) {
      addEvidence('evidence_reporter');
      window._evidenceAdded['evidence_reporter'] = true;
    }
    if ((stepId === 'narr_2' || stepId === 'narr_3' || stepId === 'narr_4' || stepId === 'narr_5') && !window._evidenceAdded['evidence_anta_visit']) {
      addEvidence('evidence_anta_visit');
      window._evidenceAdded['evidence_anta_visit'] = true;
    }
    
    originalPlayVoiceover(stepId, stepIndex);
  };
  
  // ========== 剧情结束后进入证据推理阶段 ==========
  // 修改 goTo 函数，在书房完成后进入推理阶段
  
  var originalGoToLogic = goTo;
  goTo = function(index) {
    originalGoToLogic(index);
    
    // 检查是否到达书房场景
    var step = ACT_ONE[index];
    if (step && step.scene === 'INT. OLD HOUSE LIVING ROOM - NIGHT') {
      // 检查是否已解锁故事
      if (hasGameState('story_unlocked') || verifiedTruths && Object.keys(verifiedTruths).length > 0) {
        // 已有真相解锁，继续正常剧情
      } else {
        // 首次到达夜晚场景，提示进入推理阶段
        setTimeout(function() {
          showInferencePrompt();
        }, 1500);
      }
    }
  };
  
  function showInferencePrompt() {
    var dialog = document.createElement('div');
    dialog.className = 'inference-prompt-dialog';
    dialog.innerHTML = '<div class="inference-dialog-content">' +
      '<div class="inference-dialog-header">证据推理阶段</div>' +
      '<div class="inference-dialog-body">' +
        '<p>夜色已深，你决定整理手头的线索。</p>' +
        '<p>打开手机，点击「证据台」，开始你的调查。</p>' +
        '<p class="inference-hint">通过将线索连线到真相，揭露母亲之死的秘密。</p>' +
      '</div>' +
      '<div class="inference-dialog-footer">' +
        '<button class="start-inference-btn">开始调查</button>' +
      '</div>' +
    '</div>';
    
    storyViewport.appendChild(dialog);
    
    dialog.querySelector('.start-inference-btn').addEventListener('click', function(e) {
      e.stopPropagation();
      dialog.remove();
      openEvidenceTable();
    });
  }
  
  // ========== 初始化证据系统 ==========
  console.log('[证据系统] 初始化完成');
  console.log('[证据系统] 可用证据数量: ' + Object.keys(EVIDENCE_CONFIG).length);
  console.log('[证据系统] 可用真相数量: ' + Object.keys(TRUTH_CONFIG).length);

})();
