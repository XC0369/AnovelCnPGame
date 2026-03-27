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
      scene: 'EXT. GRAVEYARD - DAY',
      narrative: '睁开眼时，你看到的是一片阴沉沉的天空，灰色将你吞没。雨点滴落，起先是轻微的水珠，而后变成了倾盆大雨。那些来吊唁的人都仓皇失措地逃离。而你不一样，你想象自己和母亲一样，躺在棺材里，想到这里，你不由地躺了上去，任由大雨滂沱，将浑身浇透。',
      next: 1
    },
    {
      narrative: '你的世界里只剩下了雨声，渐渐地，视线变得模糊，雨声也仿佛骤然减小，你能听见自己的心跳，一下，一下，变得十分有力，与沉重的呼吸声一同响起。你不由地感到窒息，被濒死的恐惧笼罩。',
      next: 2
    },
    {
      narrative: '就在你即将失去意识的前一刻，突然，眼前一片黑暗。一把黑色的伞罩在了你的头上。你不由地向身旁之人看去。黑色的风衣，黑色的帽子，这张脸熟悉又陌生——Anta，母亲的政敌。',
      next: 3
    },
    {
      narrative: '你没有说话，同样，她也一言不发。你没有挪动自己的身体，她也一动不动，只是任由大雨将她昂贵的大衣淋湿。她的身后站着一群西装革履的保镖，有人上前想要替她撑伞，却被她拦下。',
      next: 4
    },
    {
      narrative: '她的左手拿着一束白色的鲜花，见你没有丝毫动弹，她便俯身将鲜花放在了母亲的棺材边。她不再看你，而是注视着母亲的墓碑，她的眼神冷漠到可怕。你读不出任何情绪。',
      next: 5
    },
    {
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
      narrative: '零碎的话语消失在雨声中。你看向Anta，她依旧是一脸平静，仿佛刚才的闹剧并未对她造成丝毫影响。她一言未发，转身在保镖的护送下离开了。',
      next: 12
    },
    {
      narrative: '你没有起身，那把黑伞被风吹远。你再次望向天空，任由视野由清晰再次变得模糊。',
      next: 13
    },
    {
      scene: 'EXT. PARK - DUSK',
      narrative: '记忆中的小公园变得不一样了。你回忆着童年时的自己有多调皮，那会儿，你总是与同龄的伙伴们嬉闹。年幼时你曾多次站上这个小秋千，任由母亲如何斥责都不肯回家。你不由地站了上去，使劲晃动。秋千断了，你狠狠地摔倒在地。',
      next: 14
    },
    {
      scene: 'EXT. OLD HOUSE FRONT DOOR - DUSK',
      narrative: '你一瘸一拐地来到旧宅门口。你俯身看着门口叶子泛黄几近腐烂的盆栽，随后起身，慢慢推开了门。',
      next: 15
    },
    {
      scene: 'INT. OLD HOUSE LIVING ROOM - DUSK',
      narrative: '夕阳透过窗洒在屋内，屋里和从前一样，没有太多变化。客厅里没有太多杂物，只有一盆又一盆的绿植。\n\n地板上摇曳着门前树叶的影子。你回忆起自己曾在地板上踩树影自娱自乐，心里这么想着，你便真的自顾自玩了起来。',
      next: 16
    },
    {
      scene: 'INT. OLD HOUSE BEDROOM 1 - DUSK',
      narrative: '你进入母亲的房间，屋内依旧是母亲喜欢的整洁模样。枕头上放着一件男士西装，你捡起后开始好奇这是谁的衣服。',
      next: 17
    },
    {
      id: 'player_card',
      dialogue: '母亲离婚这么多年，这件衣服会是谁的呢……',
      speaker: '你',
      next: 18
    },
    {
      scene: 'INT. OLD HOUSE BEDROOM 1 TOILET - DUSK',
      narrative: '你进入主卧的厕所，你留意到牙杯里有两只牙刷。\n\n镜子有些破碎。你看着镜子里憔悴的自己，觉得有些好笑。可这时，你突然发现镜子边好像藏着什么东西，你拿起一旁的吹风机，狠狠砸向镜子。镜子随即碎裂，你在夹缝里发现了一张磁卡。你拿起卡片后仔细端详，上面写着：xxxx。',
      next: 19
    },
    {
      id: 'player_card2',
      dialogue: 'xxx，这是什么意思呢……',
      speaker: '你',
      next: 20
    },
    {
      narrative: '不明所以，但你还是收下了这张磁卡。',
      next: 21
    },
    {
      scene: 'INT. OLD HOUSE BEDROOM 2 - DUSK',
      narrative: '你轻轻推开房间门，里面的陈设一如既往，像是这么些年从未有人踏足过般。你摸了一下那张粉红色的儿童书桌，上面纤尘不染，看来母亲肯定打扫过这里了，即便这么些年你从未回来过一次。你看向床头那个滑稽又可笑的涂鸦，你记得那是小时候的你，第一次对母亲发出权威性挑战的尝试。你知道母亲喜欢素净的墙面，可你偏偏要用荧光色的画笔在墙上留下可笑的兔子头像。',
      next: 22
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
      next: 28
    },
    {
      narrative: '母亲伸手想要抹掉这个滑稽的图案，而你死死地抱住她的腰。',
      next: 29
    },
    {
      id: 'player_no_erase',
      dialogue: '不许擦！不许擦！',
      speaker: '你',
      next: 30
    },
    {
      narrative: '你再看了一眼这个兔子图案，转身走向你的书柜。你从来都不喜欢那些枯燥乏味的经典书籍，偏偏对漫画情有独钟。你打开那本童年时翻阅了无数遍的《xxx》，书页都被你摸出了毛边。你翻阅着自己最喜欢的这本漫画，可却对里面的内容感到陌生。于是你忍不住读出了声。可这时，你发现书页中竟掉落了一张纸片。你捡起纸片，上面写着三位数字——719。\n\n你意识到有些不对劲，这是母亲的笔迹，只有母亲喜欢写7这个数字的时候加上那一横，她这是想告诉我些什么吗？于是离开了卧室。',
      next: 31
    },
    {
      scene: 'INT. OLD HOUSE STUDY ROOM - DUSK',
      narrative: '你来到书房，记忆中，母亲的书房总是十分神圣。母亲的生活被工作完全侵占，而她却从不知疲倦。你想起无数个深夜里，她独自一人在书房中办公的情景。你推开门走了进去，里面和记忆中别无二致。你想起警方的尸检报告，死者在书房中，服用过度安眠药自尽。就连死亡，都要在她最喜欢的空间里。你无法分辨，是她选择了死亡，还是死亡选择了她。',
      next: 32
    },
    {
      narrative: '你翻开书桌上的笔记本，上面尽是些与保守党有关的内容，令你感到厌恶。你企图拉开书桌的抽屉，却意外发现上锁了。正好需要三位数的密码，于是你将锁转到了刚才看到的三位数。你打开锁，在里面发现了一个盒子。盒子上印着一句话：<em>"时间不应成为特权"</em>\n\n你将磁卡放入了盒子中……',
      next: 33
    },
    {
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
  var inventoryBtn = document.getElementById('inventory-btn');
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
  var currentVoiceId = ''; // 当前播放的语音 ID
  var isClosingPopup = false; // 标志：正在关闭弹窗中，阻止 advance
  var visitedScenes = {}; // 已访问过的场景（键为 scene 名）
  var isReturningToVisitedScene = false; // 是否返回已访问场景
  var textBoxCollapsed = false; // 对话框是否收起

  // ——— 语音播放函数 ———
  function playVoiceover(stepId) {
    var src = ASSETS.voiceover && ASSETS.voiceover[stepId];
    if (!src) return;
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
      voiceover.play().catch(function() {});
    } catch (e) {}
  }

  function stopVoiceover() {
    if (voiceover) {
      voiceover.pause();
      voiceover.currentTime = 0;
      currentVoiceId = '';
    }
  }

  // ——— 物品系统 ———
  var playerInventory = []; // 玩家物品栏
  var discoveredPasswords = {}; // 已获知的密码 { 'study_drawer': '123' }
  var mirrorClickCount = 0; // 镜子点击次数

  // 从配置中读取互动元素和导航选项
  var SCENE_INTERACTIONS = ASSETS.interactions || {};
  var SCENE_NAV_OPTIONS = ASSETS.sceneNav || [];

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
      closeInteractionPopup();
      stopVoiceover();
      currentIndex = idx;
      currentScene = sceneName;
      lastLocationId = '';
      lastSpeakerInScene = '';
      activeSpeaker = '';
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
    // 两个按钮仅在故事界面显示
    if (inventoryBtn) {
      inventoryBtn.classList.toggle('hidden', screen !== storyScreen);
    }
    if (phoneBtn) {
      phoneBtn.classList.toggle('hidden', screen !== storyScreen);
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
      // 播放对话语音
      if (step.id) {
        playVoiceover(step.id);
      }
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

    // 左上角文本框：显示当前场景的念白 + 对话历史
    var html = '';

    // 遍历从场景起始到 globalDisplayedUpTo 的内容
    for (var i = currentSceneStart; i <= globalDisplayedUpTo; i++) {
      var s = ACT_ONE[i];
      if (s.narrative) {
        var cls = 'narrative-block' + (s.document ? ' document' : '');
        html += '<p class="' + cls + '">' + escapeHtml(s.narrative) + '</p>';
      }
      if (s.speaker || s.dialogue) {
        var line = (s.speaker ? '<span class="speaker">' + escapeHtml(s.speaker) + '</span>' : '') + escapeHtml(s.dialogue || '');
        html += '<p class="dialogue-line">' + line + '</p>';
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
      currentScene = step.scene;
      currentSceneStart = index; // 记录场景起始位置
    }

    // 更新全局进度
    if (index > globalDisplayedUpTo) {
      globalDisplayedUpTo = index;
    }

    renderStep(step, currentIndex);
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
    // 如果弹窗打开，忽略 advance
    if (interactionPopup && !interactionPopup.classList.contains('hidden')) return;
    // 如果物品栏打开，忽略 advance
    if (inventoryUI && !inventoryUI.classList.contains('hidden')) return;
    // 如果物品查看弹窗打开，忽略 advance
    if (itemViewPopup && !itemViewPopup.classList.contains('hidden')) return;
    // 如果是对话框收起状态，忽略 advance
    if (textBoxCollapsed) return;
    // 选项区域的点击忽略
    if (ev && ev.target && ev.target.closest('.choices-container')) return;
    // 互动热区忽略
    if (ev && ev.target && ev.target.closest('.interaction-hotspot')) return;
    // 手机菜单区域忽略
    if (ev && ev.target && ev.target.closest('#phone-menu')) return;
    // 物品栏区域忽略
    if (ev && ev.target && ev.target.closest('#inventory-ui')) return;
    // 物品查看弹窗区域忽略
    if (ev && ev.target && ev.target.closest('#item-view-popup')) return;
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
    // 停止当前语音
    stopVoiceover();
    var nextIndex = typeof step.next === 'number' ? step.next : currentIndex + 1;
    goTo(nextIndex);
  }

  document.getElementById('start-btn').addEventListener('click', function () {
    currentIndex = 0;
    currentScene = '';
    currentSceneStart = 0;
    lastLocationId = '';
    showScreen(storyScreen);
    goTo(0);
  });

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
      if (!storyScreen.classList.contains('active')) return;
      if (e.target.closest('.choices-container')) return;
      // 点击时：如果已收起则展开，否则收起
      toggleTextBox();
    });
  }

  // 点击画布其他区域：如果对话框收起则展开
  if (storyViewport) {
    storyViewport.addEventListener('click', function (e) {
      if (!storyScreen.classList.contains('active')) return;
      // 正在关闭弹窗时不前进
      if (isClosingPopup) return;
      // 弹窗打开时不前进
      if (interactionPopup && !interactionPopup.classList.contains('hidden')) return;
      // 物品栏打开时不前进
      if (inventoryUI && !inventoryUI.classList.contains('hidden')) return;
      // 物品查看弹窗打开时不前进
      if (itemViewPopup && !itemViewPopup.classList.contains('hidden')) return;
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
      advance(e);
    });
  }

  phoneBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    togglePhoneMenu();
  });

  // 物品栏按钮点击
  var invBtn = document.getElementById('inventory-btn');
  if (invBtn) {
    invBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleInventory();
    });
  } else {
    console.error('inventory-btn not found');
  }

  // ——— 手机下拉菜单 ———
  var phoneMenu = null;
  function getOrCreatePhoneMenu() {
    if (!phoneMenu) {
      phoneMenu = document.createElement('div');
      phoneMenu.id = 'phone-menu';
      phoneMenu.className = 'phone-menu hidden';
      storyViewport.appendChild(phoneMenu);
    }
    return phoneMenu;
  }

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

  function renderPhoneMenu() {
    var menu = getOrCreatePhoneMenu();
    var html = '<div class="phone-menu-header">选择场景</div>';
    html += '<div class="phone-menu-list">';
    for (var i = 0; i < SCENE_NAV_OPTIONS.length; i++) {
      var opt = SCENE_NAV_OPTIONS[i];
      var isCurrent = getLocationId(currentIndex) === opt.id;
      html += '<button class="phone-menu-item' + (isCurrent ? ' current' : '') + '"';
      html += ' data-scene="' + opt.scene + '">';
      html += opt.name + '</button>';
    }
    html += '</div>';
    html += '<button class="phone-menu-close">继续当前</button>';
    menu.innerHTML = html;

    // 绑定点击事件
    var items = menu.querySelectorAll('.phone-menu-item');
    for (var j = 0; j < items.length; j++) {
      items[j].addEventListener('click', (function(idx) {
        return function() {
          var sceneName = SCENE_NAV_OPTIONS[idx].scene;
          goToSceneByName(sceneName);
        };
      })(j));
    }

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
      // 关闭物品栏
      closeInventory();
    });
  }

  // ——— 互动元素渲染与交互 ———
  var interactionLayer = null;
  var interactionPopup = null;

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
      updateInventoryUI();
      ui.classList.remove('hidden');
    } else {
      closeInventory();
    }
  }

  // 关闭物品栏
  function closeInventory() {
    if (inventoryUI) {
      inventoryUI.classList.add('hidden');
    }
  }

  // 查看物品内容
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

    popup.classList.remove('hidden');
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
        showInteractionPopup(item);
      });
      layer.appendChild(el);
    });
  }

  function showInteractionPopup(item) {
    var popup = getOrCreateInteractionPopup();
    var descDiv = popup.querySelector('.popup-desc');
    var titleDiv = popup.querySelector('.popup-title');
    var closeBtn = popup.querySelector('.popup-close');

    titleDiv.textContent = item.name;

    // 特殊互动处理
    if (item.id === 'mirror') {
      handleMirrorInteraction(popup, descDiv, closeBtn);
    } else if (item.id === 'bookshelf') {
      handleBookshelfInteraction(popup, descDiv, closeBtn);
    } else if (item.id === 'drawer') {
      handleDrawerInteraction(popup, descDiv, closeBtn);
    } else {
      descDiv.textContent = item.desc;
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    }

    popup.classList.remove('hidden');
  }

  // 镜子互动：多次点击获得磁卡
  function handleMirrorInteraction(popup, descDiv, closeBtn) {
    mirrorClickCount++;
    if (mirrorClickCount < 3) {
      descDiv.innerHTML = '镜子有些破碎，边上好像藏着什么东西……<br><br><em>（还需要点击 ' + (3 - mirrorClickCount) + ' 次）</em>';
      closeBtn.style.display = '';
      closeBtn.textContent = '继续点击';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    } else if (mirrorClickCount === 3 && !hasItem('card')) {
      addItem('card', '磁卡');
      descDiv.innerHTML = '你拿起一旁的吹风机，狠狠砸向镜子。镜子随即碎裂，你在夹缝里发现了一张磁卡！<br><br><strong>获得物品：磁卡</strong>';
      closeBtn.style.display = '';
      closeBtn.textContent = '收入物品栏';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    } else {
      descDiv.innerHTML = '碎裂的镜子，边上残留着一些玻璃碎片。<br><br><em>磁卡已经收入物品栏。</em>';
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    }
  }

  // 漫画书互动：获得密码提示
  function handleBookshelfInteraction(popup, descDiv, closeBtn) {
    if (!hasPassword('study_drawer')) {
      discoverPassword('study_drawer', '123');
      descDiv.innerHTML = '你翻阅着自己最喜欢的这本漫画，可却对里面的内容感到陌生。就在这时，你发现书页中竟掉落了一张纸片。你捡起纸片，上面写着三位数字——<strong>719</strong>。<br><br>不对……等等，这张纸片的背面还有字！<br><br>上面写着：<strong>密码提示：与漫画有关的数字</strong>';
      closeBtn.style.display = '';
      closeBtn.textContent = '记下提示';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    } else {
      descDiv.innerHTML = '你翻了翻那本漫画书，书页还是那么熟悉。<br><br><em>密码提示：与漫画有关的数字（答案：123）</em>';
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    }
  }

  // 抽屉互动：密码输入
  function handleDrawerInteraction(popup, descDiv, closeBtn) {
    if (hasItem('drawer_opened')) {
      descDiv.innerHTML = '抽屉已经被打开过了，里面空空如也。';
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    } else if (hasPassword('study_drawer')) {
      descDiv.innerHTML = '书桌的抽屉，上锁了……<br><br><strong>你记得密码提示：与漫画有关的数字</strong><br><br><input type="text" id="drawer-password-input" class="password-input" maxlength="3" placeholder="输入三位数密码">';
      closeBtn.style.display = 'none';

      var inputEl = popup.querySelector('#drawer-password-input');
      inputEl.focus();

      inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          checkDrawerPassword(inputEl.value, popup, descDiv, closeBtn);
        }
      });

      inputEl.addEventListener('input', function(e) {
        // 只允许数字
        this.value = this.value.replace(/[^0-9]/g, '');
      });

      // 添加确认按钮
      var confirmBtn = document.createElement('button');
      confirmBtn.className = 'popup-confirm-btn';
      confirmBtn.textContent = '确认';
      confirmBtn.style.cssText = 'margin-top: 10px; padding: 8px 20px; background: #4a90a4; color: white; border: none; border-radius: 4px; cursor: pointer;';
      confirmBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        checkDrawerPassword(inputEl.value, popup, descDiv, closeBtn);
      });
      descDiv.appendChild(confirmBtn);

      // 添加返回按钮
      var backBtn = document.createElement('button');
      backBtn.className = 'popup-back-btn';
      backBtn.textContent = '返回';
      backBtn.style.cssText = 'margin-top: 10px; margin-left: 10px; padding: 8px 20px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;';
      backBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      });
      descDiv.appendChild(backBtn);
    } else {
      descDiv.innerHTML = '书桌的抽屉，上锁了……<br><br><em>需要三位数的密码，但你似乎还不知道密码在哪里。</em>';
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    }
  }

  function checkDrawerPassword(password, popup, descDiv, closeBtn) {
    if (password === '123') {
      addItem('drawer_opened', '已打开的抽屉');
      closeBtn.style.display = 'none';
      showCardUsagePopup(popup, descDiv, closeBtn);
    } else if (password.length > 0) {
      descDiv.innerHTML = '<span style="color: #ff6b6b;">密码错误！</span><br><br>书桌的抽屉，上锁了……<br><br><strong>你记得密码提示：与漫画有关的数字</strong><br><br><input type="text" id="drawer-password-input" class="password-input" maxlength="3" placeholder="输入三位数密码">';
      closeBtn.style.display = 'none';

      var inputEl = popup.querySelector('#drawer-password-input');
      inputEl.focus();

      inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          checkDrawerPassword(inputEl.value, popup, descDiv, closeBtn);
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
        checkDrawerPassword(inputEl.value, popup, descDiv, closeBtn);
      });
      descDiv.appendChild(confirmBtn);

      var backBtn = document.createElement('button');
      backBtn.className = 'popup-back-btn';
      backBtn.textContent = '返回';
      backBtn.style.cssText = 'margin-top: 10px; margin-left: 10px; padding: 8px 20px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;';
      backBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      });
      descDiv.appendChild(backBtn);
    }
  }

  // 抽屉使用磁卡弹窗
  function showCardUsagePopup(popup, descDiv, closeBtn) {
    var hasCard = hasItem('card');
    var hasProposal = hasItem('proposal');

    if (hasProposal) {
      descDiv.innerHTML = '<strong>密码正确！</strong><br><br>抽屉已经被打开过了，盒子已经取出。';
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    } else if (hasCard) {
      descDiv.innerHTML = '<strong>密码正确！</strong><br><br>你打开锁，在里面发现了一个盒子。盒子上印着一句话：<em>"时间不应成为特权"</em><br><br>盒子上有一个磁卡槽……';
      closeBtn.style.display = '';

      // 使用磁卡按钮
      var useBtn = document.createElement('button');
      useBtn.className = 'popup-use-card-btn';
      useBtn.textContent = '使用磁卡';
      useBtn.style.cssText = 'margin-top: 12px; width: 100%; padding: 10px 20px; background: #4a90a4; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: var(--font-serif); font-size: 1rem;';
      useBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        addItem('proposal', '提案文件');
        descDiv.innerHTML = '<strong>成功！</strong><br><br>你将磁卡放入盒子，盒子打开，里面是一份提案文件！<br><br><strong>获得物品：提案文件</strong><br><br><em>可以在物品栏中查看提案内容。</em>';
        closeBtn.style.display = '';
        closeBtn.textContent = '确定';
        closeBtn.onclick = function(e) {
          e.stopPropagation();
          closeInteractionPopup();
        };
      });
      descDiv.appendChild(useBtn);

      closeBtn.textContent = '返回';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    } else {
      descDiv.innerHTML = '<strong>密码正确！</strong><br><br>你打开锁，在里面发现了一个盒子。盒子上印着一句话：<em>"时间不应成为特权"</em><br><br>盒子上有一个磁卡槽，但似乎是空的……<br><br><em>也许需要找到什么东西才能打开它。</em>';
      closeBtn.style.display = '';
      closeBtn.textContent = '关闭';
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        closeInteractionPopup();
      };
    }
  }

  // 初始化互动层点击事件（点击空白区域关闭弹窗）
  if (storyViewport) {
    storyViewport.addEventListener('click', function(e) {
      if (!e.target.closest('.interaction-hotspot') && !e.target.closest('#interaction-popup')) {
        closeInteractionPopup();
      }
    });
  }

  // ——— 启动按钮 ———
  document.getElementById('start-btn').addEventListener('click', function () {
    currentIndex = 0;
    lastLocationId = '';
    lastSpeakerInScene = '';
    activeSpeaker = '';
    visitedScenes = {};
    isReturningToVisitedScene = false;
    stopVoiceover();
    playerInventory = [];
    discoveredPasswords = {};
    mirrorClickCount = 0;
    closePhoneMenu();
    closeInteractionPopup();
    closeInventory();
    showScreen(storyScreen);
    goTo(0);
  });

  document.getElementById('restart-btn').addEventListener('click', function () {
    if (bgm) { bgm.pause(); bgm.currentTime = 0; }
    closePhoneMenu();
    closeInteractionPopup();
    showScreen(titleScreen);
  });
})();
