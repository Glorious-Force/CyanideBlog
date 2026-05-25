  const CONFIG = {
    // ================================
    // 加载动画 (Loading Animation)
    // ============================================
    ENDSPACE_LOADING_COVER: true,
    ENDSPACE_LOADING_SITE_NAME: 'CLOUD09_SPACE',

    ENDSPACE_LOADING_TEXT_INT: 'INITIALIZING',
    ENDSPACE_LOADING_TEXT_LOADING: 'LOADING',
    ENDSPACE_LOADING_TEXT_COMPLETE: 'READY',
    ENDSPACE_LOADING_TEXT_SWEPING: 'LAUNCHING',
    ENDSPACE_LOADING_TEXT_FADEOUT: 'WELCOME',

    // 加载图：固定一张温室仰望 (15.png) —构图最贴竖排大字
    ENDSPACE_LOADING_IMAGE: '/images/15.png',

    // 如果主题支持随机池，这里就是竖图候选
    ENDSPACE_LOADING_IMAGES: [
      '/images/1.png',
      '/images/4.png',
      '/images/5.png',
      '/images/9.png',
      '/images/15.png'
    ],

    // 侧边栏头像 / 卡片用方图随机
    ENDSPACE_AVATAR_IMAGES: [
      '/images/2.png',
      '/images/6.png',
      '/images/7.png',
      '/images/8.png',
      '/images/12.png',
      '/images/13.png',
      '/images/14.png'
    ],

    // 文章默认封面 / 横幅用横图
    ENDSPACE_POST_COVER_IMAGES: [
      '/images/3.png',
      '/images/10.png',
      '/images/11.png'
    ],

    // ============================================
    // 文章详情页 (Article Page)
    // ============================================
    ENDSPACE_ARTICLE_LAYOUT_VERTICAL: false,
    ENDSPACE_ARTICLE_ADJACENT: true,

    // ============================================
    // 浮动控件 (Floating controls)
    // ============================
    ENDSPACE_WIDGET_DARK_MODE: true
  }

  export default CONFIG
