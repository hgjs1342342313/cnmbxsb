import type { Question, RoleKey, RoleProfile } from "../types";

export const roleOrder: RoleKey[] = [
  "planner",
  "builder",
  "analyst",
  "creator",
  "connector",
  "supporter",
];

export const roleProfiles: Record<RoleKey, RoleProfile> = {
  planner: {
    key: "planner",
    name: "策略导航员",
    tagline: "你习惯先看全局，再决定怎么出手。",
    summary:
      "你通常会把复杂事情拆开来看，喜欢从目标、路径和优先级入手。你适合那些需要判断、协调和设计方案的岗位。",
    strengths: ["目标感强", "擅长排优先级", "会统筹资源", "能把混乱变清晰"],
    careers: ["产品经理", "项目策划", "商业分析", "战略运营"],
    environments: ["需要跨团队协作", "变化快但目标明确", "允许你做判断和取舍"],
    nextSteps: [
      "尝试做一次完整活动或产品方案拆解",
      "练习把想法写成清晰文档",
      "关注真实岗位 JD 里的协调与判断要求",
    ],
    watchOut: "容易想得很全，但启动偏慢。别等到完全准备好才开始。",
    aura: "适合当那个“先把地图画出来的人”",
  },
  builder: {
    key: "builder",
    name: "现实推进者",
    tagline: "你对把事情真的做出来，有天然执念。",
    summary:
      "你比起空谈更相信落地，擅长把抽象需求变成可执行步骤。你适合执行链条清晰、能看到成果的岗位。",
    strengths: ["执行力强", "行动快", "抗压稳定", "能把事情收住"],
    careers: ["运营", "项目执行", "前端开发", "实施交付"],
    environments: ["节奏明确", "强调结果交付", "重视配合与推进"],
    nextSteps: [
      "做一个能独立完成的小项目",
      "把一次复杂任务拆成自己的执行 SOP",
      "训练复盘能力，而不只是埋头完成",
    ],
    watchOut: "容易先做再想，偶尔会在方向判断上吃亏。",
    aura: "适合当那个“把 PPT 变成现实的人”",
  },
  analyst: {
    key: "analyst",
    name: "探索分析师",
    tagline: "你会本能地追问：这件事到底为什么会这样？",
    summary:
      "你对逻辑、规律和因果关系比较敏感，喜欢先弄明白机制再行动。你适合需要分析、研究和严谨思考的工作。",
    strengths: ["逻辑清楚", "善于发现问题", "能快速学习复杂系统", "判断基于事实"],
    careers: ["数据分析", "后端开发", "测试工程师", "研究助理"],
    environments: ["有明确问题可研究", "重视证据和推理", "允许深入思考"],
    nextSteps: [
      "练习用数据或事实支撑观点",
      "做几次完整的问题分析案例",
      "补足表达，让别人听懂你的结论",
    ],
    watchOut: "容易卡在“还没想透”，需要给自己设置行动节点。",
    aura: "适合当那个“先把问题看穿的人”",
  },
  creator: {
    key: "creator",
    name: "创意表达者",
    tagline: "你在意的不只是能不能做，还在意有没有感觉。",
    summary:
      "你往往能感知内容、审美和用户情绪，善于把抽象概念包装成更有吸引力的表达。你适合创意与内容驱动的职业方向。",
    strengths: ["表达欲和感受力强", "审美敏锐", "善于讲故事", "点子多"],
    careers: ["视觉设计", "内容运营", "品牌策划", "新媒体编辑"],
    environments: ["重视创意", "允许试错", "能接触用户反馈和内容传播"],
    nextSteps: [
      "建立自己的作品集或内容样本",
      "练习围绕目标做表达，而不只是自我表达",
      "多看优秀案例，训练拆解能力",
    ],
    watchOut: "灵感很多，但要避免只停在想法阶段。",
    aura: "适合当那个“让东西变得更有记忆点的人”",
  },
  connector: {
    key: "connector",
    name: "沟通影响者",
    tagline: "你擅长理解人，也知道怎么推动人。",
    summary:
      "你对人际互动比较敏感，能快速建立关系、影响氛围并推动沟通。你适合需要表达、说服和资源连接的岗位。",
    strengths: ["沟通自然", "共情力强", "适应场合快", "会带动气氛"],
    careers: ["销售", "商务拓展", "用户运营", "招聘"],
    environments: ["需要和人高频互动", "目标明确", "反馈及时"],
    nextSteps: [
      "多做需要沟通推动的小项目",
      "练习把热情转化成结构化表达",
      "积累真实对话和说服经验",
    ],
    watchOut: "别只顾着把关系聊顺，也要记得追结果。",
    aura: "适合当那个“把人和机会连起来的人”",
  },
  supporter: {
    key: "supporter",
    name: "稳态支撑者",
    tagline: "你未必最抢眼，但很容易成为团队底盘。",
    summary:
      "你更在意秩序、稳定和配合，擅长让团队运行得更顺。你适合支持协同、流程管理和长期服务型岗位。",
    strengths: ["细致可靠", "耐心稳定", "责任感强", "擅长照顾流程细节"],
    careers: ["人力资源", "行政支持", "客户成功", "项目协调"],
    environments: ["流程明确", "关系稳定", "重视长期合作和信任"],
    nextSteps: [
      "训练主动表达自己的价值",
      "把细致执行沉淀成流程能力",
      "关注需要长期陪伴和支持的岗位",
    ],
    watchOut: "容易低估自己，别把稳定误解成普通。",
    aura: "适合当那个“让团队不掉链子的人”",
  },
};

export const questions: Question[] = [
  {
    id: 1,
    prompt: "做小组作业时，你最自然会接过哪件事？",
    options: [
      {
        text: "先理清目标、分工和时间线",
        scores: { planner: 3, builder: 1, analyst: 1, creator: 0, connector: 1, supporter: 1 },
      },
      {
        text: "直接开做，把东西先推起来",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 1, connector: 1, supporter: 1 },
      },
      {
        text: "先研究信息和资料，确保方向靠谱",
        scores: { planner: 1, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 1 },
      },
      {
        text: "负责表达包装，让成果更有吸引力",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 3, connector: 1, supporter: 0 },
      },
    ],
  },
  {
    id: 2,
    prompt: "遇到一个全新的任务，你第一反应通常是？",
    options: [
      {
        text: "先判断目标是什么，值不值得做",
        scores: { planner: 3, builder: 0, analyst: 1, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "边做边摸索，先把第一步走出去",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 1, connector: 1, supporter: 0 },
      },
      {
        text: "查资料、找规律，先搞懂机制",
        scores: { planner: 1, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "想想怎么做得更特别、更出彩",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 3, connector: 1, supporter: 0 },
      },
    ],
  },
  {
    id: 3,
    prompt: "当一个活动、产品或页面做得不太好时，你最先注意到什么？",
    options: [
      {
        text: "整体逻辑和目标是不是不清楚",
        scores: { planner: 3, builder: 0, analyst: 1, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "流程卡不卡，执行上哪里掉链子了",
        scores: { planner: 1, builder: 3, analyst: 1, creator: 0, connector: 0, supporter: 1 },
      },
      {
        text: "数据或机制上是不是哪里不合理",
        scores: { planner: 0, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "视觉、内容或表达是不是没打动人",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 3, connector: 1, supporter: 0 },
      },
    ],
  },
  {
    id: 4,
    prompt: "如果你要在一个陌生团队里快速建立存在感，你更可能靠什么？",
    options: [
      {
        text: "提出清晰方向，让大家更知道怎么走",
        scores: { planner: 3, builder: 1, analyst: 0, creator: 0, connector: 1, supporter: 0 },
      },
      {
        text: "把事情默默推进，先产出成果",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 0, connector: 0, supporter: 1 },
      },
      {
        text: "靠洞察和判断，让人觉得你很靠谱",
        scores: { planner: 1, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "靠沟通和配合，让气氛立刻顺起来",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 0, connector: 3, supporter: 2 },
      },
    ],
  },
  {
    id: 5,
    prompt: "下面哪种反馈最能让你有成就感？",
    options: [
      {
        text: "你把这件事想得很清楚",
        scores: { planner: 3, builder: 0, analyst: 2, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "你真的把它做成了",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 0, connector: 0, supporter: 1 },
      },
      {
        text: "你分析得很准，问题一下就明白了",
        scores: { planner: 0, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "你这表达太有感觉了 / 太会说了",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 2, connector: 2, supporter: 0 },
      },
    ],
  },
  {
    id: 6,
    prompt: "你更喜欢哪种工作节奏？",
    options: [
      {
        text: "需要不断判断方向和优先级的节奏",
        scores: { planner: 3, builder: 1, analyst: 1, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "目标明确，事情一件件推进完成",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 0, connector: 0, supporter: 2 },
      },
      {
        text: "可以沉下来研究复杂问题",
        scores: { planner: 0, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "既能表达创意，也能和人互动",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 2, connector: 2, supporter: 0 },
      },
    ],
  },
  {
    id: 7,
    prompt: "如果朋友来问你该怎么选职业，你最可能先问他什么？",
    options: [
      {
        text: "你真正想要的目标和生活方式是什么",
        scores: { planner: 3, builder: 0, analyst: 1, creator: 0, connector: 1, supporter: 0 },
      },
      {
        text: "你已经做过什么，哪些事情你能扛下来",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 0, connector: 0, supporter: 1 },
      },
      {
        text: "你在哪些问题上比别人更容易看懂本质",
        scores: { planner: 0, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "你是更喜欢和内容打交道，还是和人打交道",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 2, connector: 2, supporter: 1 },
      },
    ],
  },
  {
    id: 8,
    prompt: "你理想中的自己，更接近下面哪一种？",
    options: [
      {
        text: "那个能定方向、做选择的人",
        scores: { planner: 3, builder: 0, analyst: 1, creator: 0, connector: 1, supporter: 0 },
      },
      {
        text: "那个能把很多事稳稳做成的人",
        scores: { planner: 0, builder: 3, analyst: 0, creator: 0, connector: 0, supporter: 2 },
      },
      {
        text: "那个能看懂复杂问题的人",
        scores: { planner: 0, builder: 0, analyst: 3, creator: 0, connector: 0, supporter: 0 },
      },
      {
        text: "那个能打动别人、留下印象的人",
        scores: { planner: 0, builder: 0, analyst: 0, creator: 2, connector: 2, supporter: 0 },
      },
    ],
  },
];

