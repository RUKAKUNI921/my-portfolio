import type { ComponentType } from "react";
import MochinaviGallery from "@/components/works/mochinavi/MochinaviGallery";
import CoffeeRobotGallery from "@/components/works/coffee-robot/CoffeeRobotGallery";
import MynosGallery from "@/components/works/mynos/MynosGallery";
import SplitKeyboardGallery from "@/components/works/split-keyboard/SplitKeyboardGallery";
import SaunametsaGallery from "@/components/works/saunametsa/SaunametsaGallery";
import SusumuJukukaidoGallery from "@/components/works/susumu-jukukaido/SusumuJukukaidoGallery";
import WatabokuGallery from "@/components/works/wataboku/WatabokuGallery";

export type Work = {
  id: string;
  slug: string;
  title: string;
  category: string[];
  thumb: string;
  year: string;
  tools: string[];
  workType: "GROUP WORK" | "PERSONAL WORK" | "COMMERCIAL WORK";
  description: string;
  link?: string;
  Gallery: ComponentType;
};

// 表示順はこの配列の並びで決まります。順番を変えたい場合はここのslugを並べ替えるだけでOKです。
const workOrder = [
  "coffee-robot",
  "wataboku",
  "susumu-jukukaido",
  "mynos",
  "mochinavi",
  "split-keyboard",
  "saunametsa",
];

const worksData: Work[] = [
  {
    id: "work-01",
    slug: "split-keyboard",
    title: "Split Keyboard",
    category: ["PRODUCT DESIGN"],
    thumb: "/thumbs/splitKeyboard-thumb.png",
    year: "2026.07",
    tools: ["Fusion360", "KiCad", "3D Printing"],
    workType: "PERSONAL WORK",
    description:
      "エンジニアリングスキルの向上を目的に制作した、完全ワイヤレスの自作分割キーボードです。基板設計や筐体設計・製作を自ら行い、一からキーボードの制作に取り組みました。キースイッチなど一部のパーツには既製品を使用しています。 \n\n基板設計にはKiCadを用い、左右の分離した基板をそれぞれ独立して無線接続する完全ワイヤレス構成を採用しました。筐体はFusion360で設計したのち3Dプリントで成形し、電子部品の実装まで一貫して自身で行っています。設計にあたっては、自身の手の形状や打鍵スタイルに合った、使い勝手のよい理想のキーボードを目指すことを重視し、キー配置や分割角度を繰り返し検証しました。",
    Gallery: SplitKeyboardGallery,
  },
  {
    id: "work-02",
    slug: "mochinavi",
    title: "MOCHINAVI",
    category: ["UI DESIGN", "CG ANIMATION"],
    thumb: "/thumbs/mochinavi-thumb.png",
    year: "2025.08",
    tools: ["Illustrator", "Figma", "Blender"],
    workType: "GROUP WORK",
    description:
      "「MOCHINAVI」は、外国人留学生に向けた日本のマナー学習アプリです。\n\n近年、マナーを知らないがゆえに一部の外国人観光客・留学生の行動が問題視される場面が目立っています。その原因は、マナーを学ぶための効率的なツールが存在しないことにあるのではと仮説を立て、来日前の留学生がどのような学習を行っているかをリサーチするところからこのプロジェクトは始まりました。「外国人留学生に快適な留学の準備をどう提供できるか」という観点を軸に、授業の課題としてグループで制作しました。\n\nリサーチや要件定義はメンバー全員で行い、私はアプリケーションDEMOのUI配置・フロー設計をFigmaで担当したほか、プロモーション映像のメインキャラクターのCGモデル制作と実写合成を担当しました。多国籍のユーザーに正しく伝わるUI設計を意識し、言語や文化の違いを超えて直感的に理解できるレイアウトを目指しました。",
    Gallery: MochinaviGallery,
  },
  {
    id: "work-03",
    slug: "coffee-robot",
    title: "COFFEE ROBOT",
    category: ["CG ANIMATION"],
    thumb: "/thumbs/coffeeRobot-thumb.png",
    year: "2025.11",
    tools: ["Maya", "Substance 3D Painter", "Blender", "After Effects"],
    workType: "PERSONAL WORK",
    description:
      "研究室の展示会に向けた「コーヒーマシンの抽出待ち時間を楽しい体験に変える」という課題で作成したアニメーション作品です。\n\n主人公は、ちょっとドジなコーヒーロボット。機械的ではなく人間味のある動きで、コーヒーを一杯淹れるまでの一部始終をフルCGアニメーションで描きました。ゼミの展示会では、実際のコーヒーマシンに簡易的に取り付け、来場者に抽出中の1分間で体験してもらいました。\n\nモデリング、リギング、アニメーションのすべてを一人で担当し、機械であるロボットにいかに「人間味」を感じさせる動きをつけられるかにこだわって制作しました。",
    Gallery: CoffeeRobotGallery,
  },
  {
    id: "work-04",
    slug: "mynos",
    title: "MYNOS",
    category: ["PRODUCT DESIGN", "GRAPHIC DESIGN"],
    thumb: "/thumbs/mynos-thumb.png",
    year: "2025.06",
    tools: ["Maya", "Fusion360", "3D Printing", "Illustrator"],
    workType: "PERSONAL WORK",
    description:
      "「新しい玩具ゲームの提案」という授業課題として制作した、2人用対戦ゲームです。異なる2つのゲームをかけ合わせるというテーマのもと、「迷路」と「パズル」を組み合わせました。\n\nプレイヤーはスタートからゴールを目指しますが、道中は迷路になっており、お互いのターンで迷路パーツを動かして自分の進む道を作ったり、相手の道を妨害したりしながら先にゴールを目指します。\n\n制作では、迷路パーツの種類や組み合わせを何度も調整し、どちらかがすぐに勝敗を決めてしまわないよう、対戦として程よい駆け引きが生まれるバランスを追求しました。",
    Gallery: MynosGallery,
  },
  {
    id: "work-05",
    slug: "saunametsa",
    title: "SAUNA METSÄ OIMACHI",
    category: ["WEB DESIGN"],
    thumb: "/thumbs/saunametsa-thumb.png",
    year: "2026.05",
    tools: ["Figma", "WordPress", "PHP", "GSAP"],
    workType: "COMMERCIAL WORK",
    description:
      "大井町に誕生した都市型ウェルネススパ「SAUNA METSÄ OIMACHI」のブランドサイトです。インターン先の企業で、実際のクライアント案件として制作に携わりました。\n\nサウナ・お風呂・水風呂・レストランなど多様な施設を、単なる機能紹介ではなく“都市の毎日を、静かに整える”という体験価値として伝えることをコンセプトに、施設写真の光や質感を活かした余白の多いデザインで構成されています。\n\n本プロジェクトでは、WordPress・PHPを用いたコーディングを一人で担当しました。デザインはメインデザイナーが全体を手がける中で、GSAPによるスクロールアニメーションを中心に、動きの部分の設計・実装を担当しています。",
    link: "https://ryusenjinoyu.com/saunametsaoimachi/",
    Gallery: SaunametsaGallery,
  },
  {
    id: "work-06",
    slug: "susumu-jukukaido",
    title: "進む！塾街道",
    category: ["WEB DESIGN", "GRAPHIC DESIGN"],
    thumb: "/thumbs/susumuJukukaido-thumb.png",
    year: "2025.01",
    tools: ["Illustrator", "After Effects", "GSAP", "Vercel"],
    workType: "PERSONAL WORK",
    description:
      "「転機」をテーマに、知人や家族などの年長者にインタビューを行い、その経験をWebページとしてまとめる課題として制作したインタビュー記録サイトです。小中学生時代に通っていた塾の恩師にインタビューを行いました。\n\n塾講師のアルバイトから塾長になるまで、先生が20代で経験したいくつもの転機を取り上げました。「先生って呼ばれてみたい」という気持ちで塾業界に飛び込んだこと、上下関係のストレスから独立を考えるようになったこと、そして生徒との信頼関係を大事にするようになったこと——これらをプロローグ＋全3章の構成でまとめています。\n\n制作でいちばん苦労したのは、先生の経験を絵にすること。抽象的な出来事や気持ちを、どうやって一枚のイラストに落とし込むかを何度も考えました。また、GSAPを使ってループアニメーションやスクロールに合わせて動く演出を入れ、読んでいるうちに物語が進んでいくような体験を目指しました。",
    link: "https://md2024-interview-web-page.vercel.app/",
    Gallery: SusumuJukukaidoGallery,
  },
  {
    id: "work-07",
    slug: "wataboku",
    title: "わたぼく",
    category: ["UI DESIGN", "APP DEVELOPMENT"],
    thumb: "/thumbs/wataboku-thumb.png",
    year: "2026.07",
    tools: ["Figma", "React Native"],
    workType: "GROUP WORK",
    description:
      "感情をキャラクターとして可視化・ソートできる日記アプリです。日記を「読み返す」のではなく、羊の姿になった過去の自分に「再会する」という体験を提案しました。日々の記録を身近な存在として振り返ることで、自分自身を理解し、受け入れるきっかけになることを目指しています。\n\n話した文章量が羊の体の大きさに、話すスピードが羊毛の形に反映されるほか、AIが日記の内容から感情を分析し、羊毛や角の色として表現されます。声で綴った日記が、一頭一頭表情の異なる羊として蓄積されていく仕組みです。\n\nグループワークでは、FigmaでのUI設計とReact Nativeでの実装を担当しました。手書き風のあたたかみのあるUIデザインと、AIによる感情分析の実装にこだわって取り組みました。\n\n※本来はスマートフォン向けに設計したアプリのため、このポートフォリオでは掲載用にWeb表示に変換しています。レイアウトが一部崩れている箇所がありますが、あらかじめご了承ください。",
    link: "https://wataboku.vercel.app/",
    Gallery: WatabokuGallery,
  },
];

export const works: Work[] = workOrder.map((slug) => worksData.find((w) => w.slug === slug)!);
