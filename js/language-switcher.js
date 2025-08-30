// Trilingual Language Switcher for TERABOX Website
// Complete translations for Japanese, English, and Chinese
// Fixed version matching all index.html content

const translations = {
    ja: {
        // Navigation
        'nav-strength': '当社の強み',
        'nav-business-news': '業務新聞',
        'nav-company': '会社概要',
        'nav-message': '代表挨拶',
        'nav-business': '事業内容',
        'nav-cases': '導入実績',
        'nav-recruit': '採用情報',
        'nav-contact': 'お問い合わせ',
        
        // Hero Section
        'hero-title': 'TERABOX',
        'hero-subtitle': '社会と人々の生活をより豊かなものへと推進し進化をもたらすIT組織を目指していきます',
        'hero-description': 'システムエンジニアリング・AI/DXソリューション・スマート機器導入<br>25名以上の専門エンジニアチーム、平均7年以上の業界経験<br>お客様のビジネス課題を解決する一站式ITソリューション',
        'hero-cta': '詳細を見る',
        'hero-stat-engineers': '専門エンジニア',
        'hero-stat-companies': '年間サービス企業',
        'hero-stat-experience': '平均業界経験',
        
        // Strength Section
        'strength-title': '当社の強み',
        'strength-subtitle': 'Our Competitive Advantages',
        'strength-team-title': '多国籍精鋭チーム',
        'strength-team-text': '日本人エンジニアと外国籍エンジニアが協働。官公庁・自治体案件でのプリセールス・提案・要件定義・入札支援等の豊富な実績。グローバルな知見と日本国内公共/民間領域への対応力を両立。',
        'strength-service-title': 'エンドツーエンドサービス',
        'strength-service-text': 'RFP（提案依頼書）・要件定義など上流工程から、技術選定・見積・課題整理・設計～運用まで一貫対応。上流工程経験豊富なPM/PLと最適なチームが高品質プロジェクトを推進。',
        'strength-experience-title': '豊富な業界経験',
        'strength-experience-text': '金融（メガバンク）、医療、物流、製造業など多業界での実績。特に金融・保険業界の経験者が多数在籍していることから、セキュリティに対する高い意識と豊富な知識を保有。',
        
        // Business News Section
        'business-news-title': '業務新聞',
        'business-news-subtitle': 'Latest Business Updates',
        
        // News Content
        'news-badge-new': 'NEW',
        'news-date-1': '2025年1月15日',
        'news-date-2': '2025年1月10日',
        'news-date-3': '2025年1月5日',
        'news-category-press': 'プレスリリース',
        'news-category-award': '受賞情報',
        'news-category-partnership': 'パートナーシップ',
        'news-title-1': '大手製造業向けAI品質検査システムを納入',
        'news-text-1': '当社が開発したAIベースの品質検査システムが、国内大手製造業に採用されました。深層学習技術を活用し、不良品検出率を99.8%まで向上させ、検査時間を従来の1/3に短縮することに成功しました。今後も製造業のDX推進に貢献してまいります。',
        'news-title-2': 'Google Cloud Partner認定を取得',
        'news-text-2': 'この度、当社はGoogle Cloud Partnerとして正式に認定されました。これまでのクラウド移行実績と技術力が評価されての認定となります。今後はGoogle Cloudの最新技術を活用し、お客様により高度なクラウドソリューションを提供してまいります。',
        'news-title-3': 'Microsoft社との戦略的パートナーシップを締結',
        'news-text-3': 'Microsoft Dynamics 365の導入支援において、Microsoft社と戦略的パートナーシップを締結しました。これにより、エンタープライズ向けERPソリューションの提供能力が大幅に強化され、より包括的なデジタルトランスフォーメーションを支援できるようになります。',
        
        // Company Section
        'company-title': '会社概要',
        'company-subtitle': 'Company Information',
        'company-headquarters': '本社',
        'company-subsidiary': '関連会社',
        'company-headquarters-title': 'テラボックス株式会社',
        'company-name-label': '名　称',
        'company-name-value': 'テラボックス株式会社',
        'company-address-label': '所在地',
        'company-address-value': '〒104-0045 東京都中央区築地6丁目17-4<br>リードシー築地ビル 4F',
        'company-tel-label': 'TEL',
        'company-tel-value': '03-5542-7798',
        'company-email-label': 'E-mail',
        'company-email-value': 'info@terabox.jp',
        'company-established-label': '設立日',
        'company-established-value': '平成28年4月',
        'company-capital-label': '資本金',
        'company-capital-value': '2000万円',
        'company-ceo-label': '代表者',
        'company-ceo-value': '荆　威',
        'company-certifications-label': '諸資格',
        'company-certifications-value': 'Pマーク認証 10825028<br>有料職業紹介許可証 13-ユ-309628<br>労働者派遣事業許可証 派13-312878<br>Google Cloud Partner',
        'company-lawyer-label': '顧問弁護士',
        'company-lawyer-value': '飯田綜合法律事務所',
        
        // Subsidiary Company Info
        'subsidiary-company-title': '博科思信息科技（広州）有限公司',
        'subsidiary-company-badge': 'Guangzhou Branch',
        'subsidiary-address-label': '所在地',
        'subsidiary-address-value': '〒510000<br>中国広東省広州市<br>海珠区赤岗西路205号A棟210室A16',
        'subsidiary-tel-label': 'TEL',
        'subsidiary-tel-value': '86-13167022930',
        'subsidiary-established-label': '設立',
        'subsidiary-established-value': '2019年12月',
        'subsidiary-capital-label': '資本金',
        'subsidiary-capital-value': '50万人民币',
        'subsidiary-ceo-label': '代表者',
        'subsidiary-ceo-value': '荆　威',
        'subsidiary-business-label': '事業内容',
        'subsidiary-business-value': '技術開発・オフショア開発センター',
        
        // Message Section
        'message-title': '代表挨拶',
        'message-subtitle': 'Message from CEO',
        'ceo-name': '荆　威',
        'ceo-title': '代表取締役',
        'message-greeting': '拝啓',
        'message-p1': '貴社ますますご清栄のこととお慶び申し上げます。',
        'message-p2': 'このたびテラボックスは、日系企業で長く働きながら日本のビジネスを身に付けた経験豊富な精鋭メンバーの結集により設立させていただきました。今後とも、お客様から信頼されるビジネスパートナーとして真摯に業務に取り組んで参ります。',
        'message-p3': '昨今では外国系のIT企業は乱立気味であり、ともすれば人材を奪い合うような状況に陥りがちな市況でもある中、弊社の創業メンバーは逆転の発想と長い業界経験を活かし、互いに協力関係を築き合えるパートナーネットワークの仕組みを構築いたしました。',
        'message-p4': '優秀なビジネスパートナーとの緊密な連携により、お客様の様々なニーズに対応できる体制を整えております。',
        'message-p5': '弊社の主な事業範囲としては、システムエンジニアリング事業、AI・DXソリューション事業、スマート機器・IoT事業、IT人材サービス事業の四つの柱を軸に事業展開しております。また、特に金融・保険業界の経験者が多数在籍していることから、セキュリティに対する高い意識と豊富な知識も保有しております。',
        'message-p6': '今後とも弊社ならびに弊社ネットワークの経験値と知見を結集し、貴社のご要望に柔軟に対応して参ります。また、それに対応するための十分以上の知力と体力を備えていると自負致しております。貴社のご期待に応えるべく全力を尽くす所存でございますので、何卒ご検討の程宜しくお願い申し上げます。',
        'message-closing': '敬具',
        'message-company': 'テラボックス株式会社',
        'message-signature': '代表取締役　荆威',
        
        // Business Section
        'business-title': '事業内容',
        'business-subtitle': 'Our Business Services',
        'business-engineering-title': 'システムエンジニアリング事業',
        'business-engineering-text': '25名以上の多国籍エンジニアチーム、平均業界経験7年以上のプロフェッショナル集団',
        'business-ai-title': 'AI・DXソリューション事業',
        'business-ai-text': 'RFPから運用まで一站式AI/DXソリューション提供',
        'business-iot-title': 'スマート機器・IoT事業',
        'business-iot-text': 'サービスロボット日本初導入のパイオニア',
        'business-hr-title': 'IT人材サービス事業',
        'business-hr-text': '総合的な人材ソリューション提供',
        'business-blockchain-title': 'Blockchain & Web3事業',
        'business-blockchain-text': '次世代Web3技術とブロックチェーンソリューションの開発・導入',
        'business-enterprise-title': 'エンタープライズソリューション事業',
        'business-enterprise-text': '企業のデジタル変革を支援する総合ソリューション',
        
        // Cases Section
        'cases-title': '導入実績',
        'cases-subtitle': 'Our Track Record',
        'case-megabank-title': '某メガバンク - AWS共通基盤構築',
        'case-megabank-text': '次期基盤構築・運用保守プロジェクト。延べ100+人月、継続中。24/7運用体制を構築し、高可用性とセキュリティを実現。',
        'case-medical-title': '上場医療データ専門会社 - ビッグデータ基盤',
        'case-medical-text': 'ビッグデータ分析を含め、データ基盤構築・運用保守。延べ100+人月、継続中。AI/MLを活用した高度な分析環境を提供。',
        'case-nursing-title': '介護施設 - 日本初サービスロボット導入',
        'case-nursing-text': '配膳・清掃ロボットの日本初導入を実現。85%の利用者が負担軽減を実感。作業時間を25%～70%削減に成功。',
        
        // Recruit Section
        'recruit-title': '採用情報',
        'recruit-subtitle': 'Join Our Team',
        'recruit-requirements-title': '募集要項（新卒・中途）',
        'recruit-position-label': '募集職種',
        'recruit-position-value': '①ITエンジニア　②総合職',
        'recruit-hours-label': '勤務時間',
        'recruit-hours-value': '9:00～18:00（休憩1時間）　土日祝日休み　年次有給休暇の計画的付与あり',
        'recruit-hours-note': '※勤務時間・休みは職種や部署によって異なる場合があります。相談可。',
        'recruit-allowance-label': '諸手当',
        'recruit-allowance-value': '通勤手当、家族手当、勤続手当、役職手当等あり',
        'recruit-salary-label': '給与',
        'recruit-salary-new': '新卒',
        'recruit-salary-mid': '中途採用',
        'recruit-salary-mid-range': '年収400～1,000万円',
        'recruit-raise-label': '昇給・昇格',
        'recruit-raise-value': '半期毎評定あり',
        'recruit-trial-label': '試用・研修期間について',
        'recruit-trial-value': '３ヶ月',
        'recruit-vacation-label': '休暇',
        'recruit-vacation-value': '週休2日制　リフレッシュ休暇',
        'recruit-training-label': '研修制度',
        'recruit-training-value': '能力開発体系に基づく研修<br>テクニカルスキル研修<br>eラーニング研修　OJT',
        'recruit-positions-title': '中途採用職種',
        
        // Mid-Career Positions
        'position-skills-label': '必要スキル:',
        'position-apply-btn': '応募する',
        'position-ai-title': 'AIエンジニア',
        'position-ai-description': '機械学習モデルの開発・改善、データパイプライン構築、AIプロダクトの実装に従事していただきます。最新の技術トレンドを追いながら、革新的なソリューション開発に携わることができます。',
        'position-ai-skills': 'Python, TensorFlow/PyTorch, 機械学習の基礎知識',
        'position-fullstack-title': 'フルスタックエンジニア',
        'position-fullstack-description': 'フロントエンドからバックエンドまで、システム全体の設計・開発に携わります。モダンな技術スタックを使用した開発環境で、技術力を存分に発揮できます。',
        'position-fullstack-skills': 'JavaScript, React, Node.js, クラウドサービス',
        'position-cloud-title': 'クラウドアーキテクト',
        'position-cloud-description': '企業のクラウド移行戦略立案、アーキテクチャ設計、インフラ構築を担当します。スケーラブルで安全なクラウドソリューションの提供を通じて、お客様のDXを推進します。',
        'position-cloud-skills': 'AWS/Azure/GCP, Kubernetes, Infrastructure as Code',
        'position-pm-title': 'プロダクトマネージャー',
        'position-pm-description': 'AIプロダクトの企画・開発・運用を統括し、市場ニーズを技術要件に落とし込みます。エンジニアリングチームと密接に連携し、革新的なプロダクトの創出をリードします。',
        'position-pm-skills': 'プロダクト企画経験, 技術理解力, プロジェクト管理',
        'position-devops-title': 'DevOpsエンジニア',
        'position-devops-description': 'CI/CDパイプラインの構築、インフラの自動化、監視システムの導入を通じて、開発プロセスの効率化と品質向上を実現します。',
        'position-devops-skills': 'Docker, Kubernetes, CI/CD, 監視ツール',
        'position-ds-title': 'データサイエンティスト',
        'position-ds-description': '大規模データの分析、統計モデリング、ビジネス課題解決のための洞察抽出を行います。データから価値を創出し、意思決定を支援する重要な役割です。',
        'position-ds-skills': 'R/Python, SQL, 統計学の知識',
        
        // Access Section
        'access-title': 'アクセス',
        'access-subtitle': 'How to reach us',
        'access-company-label': '会社名',
        'access-company-value': 'テラボックス株式会社',
        'access-address-label': '住所',
        'access-address-value': '〒104-0045<br>東京都中央区築地6丁目17-4<br>リードシー築地ビル 4F',
        'access-station-label': '最寄り駅',
        'access-station-value': '東京メトロ日比谷線 築地駅 徒歩5分<br>都営浅草線 東銀座駅 徒歩7分<br>都営大江戸線 勝どき駅 徒歩5分',
        'access-phone-label': '電話番号',
        'access-phone-value': '03-5542-7798',
        'access-hours-label': '営業時間',
        'access-hours-value': '平日 9:00 - 18:00<br>(土日祝日は休業)',
        'access-map-text': 'Google Maps',
        
        // Contact Section
        'contact-title': 'お問い合わせ',
        'contact-subtitle': 'Contact Us',
        'contact-description': 'システム開発、AI/DXソリューション、人材サービスなど、<br>お気軽にご相談ください。',
        'contact-cta': 'お問い合わせする',
        
        // Footer
        'footer-copyright': 'TERABOX Copyright © 2024. All Rights Reserved.',
        
        // Engineering Service Page
        'engineering-title': 'エンジニアリング事業',
        'engineering-subtitle': 'Engineering Services',
        'engineering-description': '25名以上の多国籍エンジニアチーム | 平均7年以上の業界経験<br>システム開発・AI/DX・クラウド技術の最先端エキスパート集団で<br>お客様のIT開発ニーズに幅広く対応し、高品質なシステム開発・運用サービスを提供します。',
        
        // Engineering Page Content
        'eng-hero-stat-projects': '年間プロジェクト',
        'eng-hero-stat-availability': 'システム可用性',
        'eng-hero-stat-efficiency': '開発効率向上',
        'eng-services-overview': 'サービス概要',
        'eng-service-development': '受託開発',
        'eng-service-development-desc': '要件定義から設計・開発・テストまで、一貫したシステム開発サービスを提供し、お客様のビジネス要求を実現します。',
        'eng-service-ses': '業務支援（SES）',
        'eng-service-ses-desc': '経験豊富なエンジニアをお客様先に派遣し、開発プロジェクトの成功をサポートします。',
        'eng-service-operation': 'システム開発・運用',
        'eng-service-operation-desc': 'システム構築から運用保守まで、ライフサイクル全体をカバーする包括的なサービスを提供します。',
        'eng-service-consulting': '技術コンサルティング',
        'eng-service-consulting-desc': '最新技術動向と豊富な経験を基に、お客様の技術戦略策定と実装を支援します。',
        'eng-development-process': '開発プロセス',
        'eng-process-subtitle': 'お客様のプロジェクトを成功に導く体系的なアプローチ',
        'eng-process-requirements': '要件定義',
        'eng-process-requirements-desc': 'お客様の課題とニーズを詳細にヒアリングし、システムの要件を明確化',
        'eng-process-design': '設計',
        'eng-process-design-desc': 'システムアーキテクチャ、UI/UX、データベース設計など、詳細設計を実施',
        'eng-process-development': '開発',
        'eng-process-development-desc': 'アジャイル開発手法を採用し、反復的にシステムを構築',
        'eng-process-testing': 'テスト',
        'eng-process-testing-desc': '単体テスト、結合テスト、システムテストを実施し、品質を保証',
        'eng-process-operations': '運用保守',
        'eng-process-operations-desc': 'リリース後の運用監視、保守メンテナンス、機能追加に対応',
        'eng-tech-stack': '技術スタック & 資格保有',
        'eng-tech-frontend': 'フロントエンド',
        'eng-tech-backend': 'バックエンド',
        'eng-tech-mobile': 'モバイル',
        'eng-tech-database': 'データベース',
        'eng-tech-cloud': 'クラウド・インフラ',
        'eng-tech-tools': '開発ツール',
        'eng-quality-assurance': '品質保証',
        'eng-qa-code': 'コード品質管理',
        'eng-qa-code-desc': 'コードレビュー、静的解析、単体テストカバレッジにより高品質なコードを保証します。',
        'eng-qa-security': 'セキュリティテスト',
        'eng-qa-security-desc': '脆弱性診断、ペネトレーションテストによりセキュリティリスクを最小化します。',
        'eng-qa-performance': 'パフォーマンステスト',
        'eng-qa-performance-desc': '負荷テスト、ストレステストによりシステムの性能を検証します。',
        'eng-qa-usability': 'ユーザビリティテスト',
        'eng-qa-usability-desc': '実際のユーザー視点でのテストにより、使いやすさを追求します。',
        'eng-pm-methods': 'プロジェクト管理手法',
        'eng-pm-agile': 'アジャイル開発',
        'eng-pm-agile-desc': 'スクラム・カンバン手法による反復的開発で、変化する要求に柔軟に対応します。',
        'eng-pm-devops': 'DevOps',
        'eng-pm-devops-desc': 'CI/CDパイプラインによる自動化で、迅速かつ安定したソフトウェアデリバリーを実現します。',
        'eng-case-studies': '導入実績 & 大型プロジェクト',
        'eng-case-megabank': 'メガバンク次期基盤構築',
        'eng-case-megabank-desc': 'AWS共通基盤構築・運用保守',
        'eng-case-logistics': '物流システム最適化',
        'eng-case-logistics-desc': 'AWS WMSシステム・画像認識PoC',
        'eng-case-medical': '上場医療データ専門会社',
        'eng-case-medical-desc': 'ビッグデータ分析基盤構築',
        'eng-case-ecommerce': 'ECプラットフォーム構築',
        'eng-case-ecommerce-desc': '中堅アパレル企業のオンライン販売チャネル',
        'eng-cta-title': 'エンジニアリングサービスで未来を構築する',
        'eng-cta-desc': '最先端の開発技術と豊富な実績で、お客様のシステム開発課題を革新的に解決します。<br>まずは貴社の課題をお聞かせください。最適なソリューションをご提案いたします。',
        'eng-cta-contact': 'お問い合わせ',
        'eng-cta-download': '技術資料ダウンロード',
        
        // Case Studies - Detailed
        'case-apparel-title': '中堅アパレル企業様',
        'case-apparel-service': 'ECサイト構築',
        'case-apparel-desc': '従来の店舗販売に加えて、オンライン販売チャネルを新規構築。React + Node.js構成で高性能なECサイトを開発し、売上30%向上を実現。',
        'case-apparel-result1': '売上30%向上',
        'case-apparel-result2': '開発期間4ヶ月',
        'case-apparel-result3': 'モバイル対応',
        
        'case-manufacturing-title': '製造業大手様',
        'case-manufacturing-service': '基幹システム刷新',
        'case-manufacturing-desc': '20年使用していたレガシーシステムをクラウドネイティブなマイクロサービス架構に刷新。運用コスト50%削減と処理性能10倍向上を達成。',
        'case-manufacturing-result1': '運用コスト50%削減',
        'case-manufacturing-result2': '処理性能10倍向上',
        'case-manufacturing-result3': '可用性99.9%',
        
        'case-fintech-title': 'フィンテック企業様',
        'case-fintech-service': 'モバイルアプリ開発',
        'case-fintech-desc': '金融サービス向けモバイルアプリをReact Nativeで開発。高いセキュリティ要件をクリアし、iOS・Android同時リリースでユーザー獲得を加速。',
        'case-fintech-result1': '同時リリース実現',
        'case-fintech-result2': '高セキュリティ対応',
        'case-fintech-result3': 'ユーザー評価4.8点',
        
        'case-financial-title': 'ネット金融サービス様',
        'case-financial-service': 'AWSクラウド基盤構築',
        'case-financial-desc': 'CI/CD自動化を含むクラウド基盤を構築。IaCによるインフラ自動化で運用効率を大幅改善し、24/7監視体制を実現。',
        'case-financial-result1': 'デプロイ時間90%短縮',
        'case-financial-result2': '可用性99.99%',
        'case-financial-result3': '運用コスト50%削減',
        
        // Engineering Service Features/Sub-items
        'eng-feature-web-app': 'Webアプリケーション開発',
        'eng-feature-mobile-app': 'モバイルアプリ開発',
        'eng-feature-api': 'API開発・連携',
        'eng-feature-legacy': 'レガシーシステム刷新',
        'eng-feature-se-dispatch': 'システムエンジニア派遣',
        'eng-feature-pm-dispatch': 'プロジェクトマネージャー派遣',
        'eng-feature-tech-lead': 'テクニカルリード派遣',
        'eng-feature-term-support': '長期・短期対応',
        'eng-feature-infra-design': 'インフラ設計・構築',
        'eng-feature-cloud-migration': 'クラウド移行支援',
        'eng-feature-ops-monitoring': '運用監視・保守',
        'eng-feature-performance': 'パフォーマンス最適化',
        'eng-feature-tech-selection': '技術選定支援',
        'eng-feature-arch-design': 'アーキテクチャ設計',
        'eng-feature-code-review': 'コードレビュー',
        'eng-feature-tech-training': '技術教育・研修',
        
        // Development Process Tags
        'eng-tag-hearing': 'ヒアリング',
        'eng-tag-requirements': '要件整理',
        'eng-tag-specification': '仕様策定',
        'eng-tag-system-design': 'システム設計',
        'eng-tag-ui-ux-design': 'UI/UX設計',
        'eng-tag-db-design': 'DB設計',
        'eng-tag-agile-dev': 'アジャイル開発',
        'eng-tag-code-review-process': 'コードレビュー',
        'eng-tag-quality-mgmt': '品質管理',
        'eng-tag-unit-test': '単体テスト',
        'eng-tag-integration-test': '結合テスト',
        'eng-tag-quality-assurance': '品質保証',
        'eng-tag-24-7-monitoring': '24/7監視',
        'eng-tag-maintenance': '保守対応',
        'eng-tag-feature-addition': '機能追加',
        
        // Project Management Sub-items
        'eng-pm-2week-sprint': '2週間スプリント',
        'eng-pm-daily-standup': 'デイリースタンドアップ',
        'eng-pm-sprint-review': 'スプリントレビュー',
        'eng-pm-retrospective': 'レトロスペクティブ',
        'eng-pm-auto-build': '自動ビルド・テスト',
        'eng-pm-auto-deploy': '自動デプロイ',
        'eng-pm-iac': 'インフラ as Code',
        'eng-pm-monitoring-logs': '監視・ログ管理',
        
        // Case Studies Project Scale
        'eng-scale-100-months-ongoing': '延べ100+人月（継続中）',
        'eng-scale-200-months-ongoing': '延べ200+人月（継続中）',
        'eng-scale-50-months-completed': '延べ50+人月（完了）',
        
        // Detailed Case Studies
        'eng-case-detail-apparel': '中堅アパレル企業様',
        'eng-case-detail-ec-title': 'ECサイト構築',
        'eng-case-detail-ec-desc': '従来の店舗販売に加えて、オンライン販売チャネルを新規構築。React + Node.js構成で高性能なECサイトを開発し、売上30%向上を実現。',
        'eng-result-sales-increase': '売上30%向上',
        'eng-result-dev-period': '開発期間4ヶ月',
        'eng-result-mobile-support': 'モバイル対応',
        'eng-case-detail-manufacturing': '製造業大手様',
        'eng-case-detail-legacy-title': '基幹システム刷新',
        'eng-case-detail-legacy-desc': '20年使用していたレガシーシステムをクラウドネイティブなマイクロサービス架構に刷新。運用コスト50%削減と処理性能10倍向上を達成。',
        'eng-result-cost-reduction': '運用コスト50%削減',
        'eng-result-performance-10x': '処理性能10倍向上',
        'eng-result-availability': '可用性99.9%',
        'eng-case-detail-fintech': 'フィンテック企業様',
        'eng-case-detail-mobile-title': 'モバイルアプリ開発',
        'eng-case-detail-mobile-desc': '金融サービス向けモバイルアプリをReact Nativeで開発。高いセキュリティ要件をクリアし、iOS・Android同時リリースでユーザー獲得を加速。',
        'eng-result-simultaneous-release': '同時リリース実現',
        'eng-result-high-security': '高セキュリティ対応',
        'eng-result-user-rating': 'ユーザー評価4.8点',
        'eng-case-detail-netfinance': 'ネット金融サービス様',
        'eng-case-detail-aws-title': 'AWSクラウド基盤構築',
        'eng-case-detail-aws-desc': 'CI/CD自動化を含むクラウド基盤を構築。IaCによるインフラ自動化で運用効率を大幅改善し、24/7監視体制を実現。',
        'eng-result-deploy-time': 'デプロイ時間90%短縮',
        'eng-result-availability-9999': '可用性99.99%',
        'eng-result-ops-cost-reduction': '運用コスト50%削減',
        
        // AI Solution Page
        'ai-title': 'AI・DXソリューション事業',
        'ai-subtitle': 'AI/DX Solutions',
        'ai-description': 'AI・機械学習・DXの導入から運用まで、包括的なソリューションを提供します。',
        
        // Enterprise Solution Page
        'enterprise-title': 'エンタープライズソリューション事業',
        'enterprise-subtitle': 'Enterprise Solutions',
        'enterprise-description': '企業のデジタル変革を支援する総合的なソリューションを提供します。',
        
        // Human Resource Page
        'hr-title': 'IT人材サービス事業',
        'hr-subtitle': 'IT Human Resources',
        'hr-description': '優秀なIT人材の派遣・紹介から育成まで、総合的な人材ソリューションを提供します。',
        
        // IoT Systems Page
        'iot-title': 'スマート機器・IoT事業',
        'iot-subtitle': 'Smart Devices & IoT',
        'iot-description': '最新のIoT技術とスマートデバイスで、効率的な業務環境を実現します。',
        
        // Blockchain Web3 Page
        'blockchain-title': 'ブロックチェーン・Web3事業',
        'blockchain-subtitle': 'Blockchain & Web3',
        'blockchain-description': '次世代Web3技術とブロックチェーンソリューションの開発・導入を支援します。',
        
        // Entry Form
        'form-title': 'エントリーフォーム',
        'form-name': '氏名',
        'form-furigana': 'ふりがな',
        'form-email': 'メールアドレス',
        'form-phone': '電話番号',
        'form-free-input': '自由記入欄',
        'form-placeholder': '志望動機、経験、スキル等をご記入ください',
        'privacy-title': '個人情報の取扱いについて',
        'privacy-p1': '応募時に記載いただく個人情報は、弊社の個人情報保護マネジメントシステムに基づき取り扱いさせていただきます。',
        'privacy-p2': '１．個人情報は、採用目的のためです。',
        'privacy-p3': '２．個人情報管理責任者は、代表取締役です。',
        'privacy-p4': '３．第三者への提供は行いません。',
        'privacy-p5': '４．個人情報の処理のための外部委託は、機密保持契約を締結している会社とします。',
        'privacy-p6': '５．弊社に個人情報を提供されることは任意ですが、記載内容に不備があった場合に、連絡が取れない場合があります。',
        'privacy-p7': '６．弊社に提供した個人情報に関して、開示等の請求は、下記まで御連絡下さい。',
        'consent-instruction': '同意される場合、下記にチェック願います。',
        'consent-warning': '※下記にチェックされない場合、確認画面に進めません。',
        'consent-text': '私は上記「個人情報の取り扱いについて」に同意する',
        'submit-button': '確認画面へ',
        'form-footer-company': 'テラボックス株式会社',
        'form-footer-address': '〒104-0045 東京都中央区築地6丁目17-4 リードシー築地ビル 4F',
        'form-footer-tel': 'TEL 03-5542-7798',
        
        // Salary Table Education Levels
        'edu-graduate': '大学院卒',
        'edu-university': '大学卒',
        'edu-college': '短大卒',
        'edu-vocational-4y': '専門卒（4年制）',
        'edu-vocational': '専門卒',
        'edu-high-school': '高卒',
        
        // AI Solution Page
        'ai-title': 'AIソリューション事業',
        'ai-subtitle': 'Next-Generation AI Technology Solutions',
        'ai-description': '75名以上の多国籍AIエンジニアチーム | 平均7年以上の業界経験<br>LLM・Deep Learning・自動運転・画像認識の最先端技術で<br>お客様のビジネス課題を革新的に解決します',
        'ai-stat-projects': '年間プロジェクト',
        'ai-stat-accuracy': 'AI認識精度',
        'ai-stat-efficiency': '業務効率改善',
        
        'ai-core-title': 'コア技術とソリューション',
        'ai-core-llm-title': 'LLM & Deep Learning',
        'ai-core-llm-desc': '大規模言語モデル構築、アルゴリズム最適化、Kaggle実績保有エンジニア在籍',
        'ai-core-autonomous-title': '自動運転技術',
        'ai-core-autonomous-desc': 'MaaS企業との協業実績、モビリティデータ分析・システム設計（延べ50+人月）',
        'ai-core-ocr-title': 'OCR×AI画像認識',
        'ai-core-ocr-desc': '医療AI/NLP、物流AI最適化、99%以上の認識精度目標',
        'ai-core-cloud-title': 'クラウドAI基盤',
        'ai-core-cloud-desc': 'AWS/Azure/GCP認定エンジニア20名、大手金融機関基盤構築実績',
        
        'ai-services-title': 'AIソリューションサービス',
        'ai-market-research-title': 'AIインテリジェント市場調査',
        'ai-market-research-badge': '業界革新',
        'ai-market-research-desc': '3週間の作業を1時間以内に完了。AI Agentによる自動分解・多次元検索',
        'ai-market-research-feature1': 'Big Data検索精度向上',
        'ai-market-research-feature2': '企業知識自動関連付け',
        'ai-market-research-feature3': '自動レポート生成',
        'ai-market-research-feature4': 'リアルタイムBI出力',
        'ai-market-research-metric1': '効率: 95%向上',
        'ai-market-research-metric2': '時間: 1/500短縮',
        
        'ai-hr-matching-title': 'AI人材マッチングシステム',
        'ai-hr-matching-badge': '特許出願中',
        'ai-hr-matching-desc': '1人/日80件処理可能、マッチング時間1分のみ。革新的な効率化を実現',
        'ai-hr-matching-feature1': 'インテリジェントクロール',
        'ai-hr-matching-feature2': 'パーソナライズマッチング',
        'ai-hr-matching-feature3': '多次元クエリサポート',
        'ai-hr-matching-feature4': '自動スコアリング',
        'ai-hr-matching-metric1': '処理能力: 80件/日',
        'ai-hr-matching-metric2': '精度: 40%向上',
        
        'ai-face-recognition-title': '顔認証システム',
        'ai-face-recognition-desc': 'メガバンク導入実績。高精度な顔認証技術で、セキュリティと利便性を両立',
        'ai-face-recognition-feature1': 'リアルタイム顔認証',
        'ai-face-recognition-feature2': 'マスク着用時対応',
        'ai-face-recognition-feature3': '入退室管理連携',
        'ai-face-recognition-feature4': '勤怠管理システム連携',
        
        'ai-medical-ai-title': 'AI文献要約・医療AI',
        'ai-medical-ai-desc': '上場医療データ専門会社との協業。論文読解時間を70%短縮',
        'ai-medical-ai-feature1': '多言語対応',
        'ai-medical-ai-feature2': '医療NLP特化',
        'ai-medical-ai-feature3': 'キーワード自動抽出',
        'ai-medical-ai-feature4': '要約精度95%以上',
        
        'ai-service-robot-title': 'サービスロボット・配送ロボット',
        'ai-service-robot-desc': '日本初導入のパイオニア。KEENON社との戦略的パートナーシップ',
        'ai-service-robot-feature1': '音声認識・対話機能',
        'ai-service-robot-feature2': '自律移動・ナビゲーション',
        'ai-service-robot-feature3': '感情認識技術',
        'ai-service-robot-feature4': 'クラウド連携',
        
        'ai-aiot-meter-title': 'AIoTスマートメーター',
        'ai-aiot-meter-desc': '通関業務DX、工場自動化。NB-IoT無線通信とAI画像認識の融合',
        'ai-aiot-meter-feature1': '99%認識精度目標',
        'ai-aiot-meter-feature2': '異常検知・予知保全',
        'ai-aiot-meter-feature3': 'リアルタイムデータ収集',
        'ai-aiot-meter-feature4': '省人化・自動化',
        
        'ai-tech-title': '技術スタック & 資格保有',
        'ai-tech-kaggle': 'Kaggleメダリスト在籍',
        'ai-tech-cloud-cert': 'クラウド認定20名以上',
        'ai-tech-security': '情報処理安全確保支援士',
        'ai-tech-pmp': 'PMP資格保有者',
        'ai-tech-ai-framework': 'AI/ML Framework',
        'ai-tech-programming': 'プログラミング言語',
        'ai-tech-cloud-infra': 'クラウド・インフラ',
        'ai-tech-database': 'データベース',
        
        'ai-cases-title': '導入実績 & 大型プロジェクト',
        'ai-case-megabank-title': 'メガバンク次期基盤構築',
        'ai-case-megabank-desc': 'AWS共通基盤構築・運用保守',
        'ai-case-megabank-scale': '延べ100+人月（継続中）',
        'ai-case-maas-title': '大手MaaS会社自動運転',
        'ai-case-maas-desc': 'モビリティデータ分析・システム設計',
        'ai-case-maas-scale': '延べ50+人月（継続中）',
        'ai-case-logistics-title': '物流AI最適化プロジェクト',
        'ai-case-logistics-desc': 'AWS WMSシステム・画像認識PoC',
        'ai-case-logistics-scale': '延べ200+人月（継続中）',
        'ai-case-medical-data-title': '上場医療データ専門会社',
        'ai-case-medical-data-desc': 'ビッグデータ分析基盤構築',
        'ai-case-medical-data-scale': '延べ100+人月（継続中）',
        'ai-case-finance-client': '大手金融機関様',
        'ai-case-finance-project': '顔認証システム導入',
        'ai-case-finance-desc': '本店および全国支店に顔認証システムを導入し、セキュリティレベルを大幅に向上。CI/CD自動化により開発効率も改善。',
        'ai-case-finance-result1': 'セキュリティ向上',
        'ai-case-finance-result2': 'コスト30%削減',
        'ai-case-finance-result3': '処理速度5倍',
        'ai-case-medical-client': '医療法人様',
        'ai-case-medical-project': 'AI文献要約システム',
        'ai-case-medical-desc': '医療論文の要約システムを導入し、医師の研究業務を支援。NLP技術により診断支援も実現。',
        'ai-case-medical-result1': '読解時間70%短縮',
        'ai-case-medical-result2': '情報量3倍増',
        'ai-case-medical-result3': '研究効率向上',
        'ai-case-retail-client': '大型商業施設様',
        'ai-case-retail-project': 'サービスロボット導入',
        'ai-case-retail-desc': '日本初の配膳・掃除ロボット導入。案内・接客ロボットにより顧客満足度が20%向上。',
        'ai-case-retail-result1': '満足度20%向上',
        'ai-case-retail-result2': '人件費40%削減',
        'ai-case-retail-result3': '24時間対応',
        'ai-case-fintech-client': 'ネット金融サービス様',
        'ai-case-fintech-project': 'AWSクラウド基盤構築',
        'ai-case-fintech-desc': 'CI/CD自動化を含むクラウド基盤を構築。IaCによるインフラ自動化で運用効率を大幅改善。',
        'ai-case-fintech-result1': 'デプロイ時間90%短縮',
        'ai-case-fintech-result2': '可用性99.99%',
        'ai-case-fintech-result3': '運用コスト50%削減',
        
        'ai-team-title': 'エンジニアチーム体制',
        'ai-team-members': '25名以上',
        'ai-team-members-desc': '多国籍エンジニアチーム',
        'ai-team-experience': '平均7年以上',
        'ai-team-experience-desc': '業界経験',
        'ai-team-ai-ratio': '20%',
        'ai-team-ai-ratio-desc': 'AI専門エンジニア比率',
        'ai-team-clients': '年間20社以上',
        'ai-team-clients-desc': 'クライアント対応実績',
        
        'ai-process-title': 'RFPから運用まで一貫対応',
        'ai-process-rfp-title': 'RFP・要件定義',
        'ai-process-rfp-desc': '上流工程から参画',
        'ai-process-tech-title': '技術選定・見積',
        'ai-process-tech-desc': '最適な技術スタック提案',
        'ai-process-dev-title': '設計・開発',
        'ai-process-dev-desc': 'アジャイル開発',
        'ai-process-ops-title': '運用・保守',
        'ai-process-ops-desc': '24/365サポート',
        
        'ai-cta-title': 'AIソリューションで未来を創造する',
        'ai-cta-desc': '最先端のAI技術と豊富な実績で、お客様のビジネス課題を革新的に解決します。<br>まずは貴社の課題をお聞かせください。最適なソリューションをご提案いたします。',
        'ai-cta-contact': 'お問い合わせ',
        'ai-cta-download': '資料ダウンロード'
    },
    
    en: {
        // Navigation
        'nav-strength': 'Our Strengths',
        'nav-business-news': 'Business News',
        'nav-company': 'Company',
        'nav-message': 'CEO Message',
        'nav-business': 'Business',
        'nav-cases': 'Case Studies',
        'nav-recruit': 'Careers',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'TERABOX',
        'hero-subtitle': 'We strive to be an IT organization that promotes and brings evolution to society and people\'s lives, making them richer.',
        'hero-description': 'System Engineering • AI/DX Solutions • Smart Device Implementation<br>25+ Professional Engineers, Average 7+ Years Industry Experience<br>One-Stop IT Solutions for Your Business Challenges',
        'hero-cta': 'Learn More',
        'hero-stat-engineers': 'Professional Engineers',
        'hero-stat-companies': 'Annual Service Companies',
        'hero-stat-experience': 'Average Industry Experience',
        
        // Strength Section
        'strength-title': 'Our Strengths',
        'strength-subtitle': 'Our Competitive Advantages',
        'strength-team-title': 'Multinational Elite Team',
        'strength-team-text': 'Collaboration between Japanese and international engineers. Rich experience in government and municipal projects including presales, proposals, requirements definition, and bidding support. Combining global insights with domestic public/private sector capabilities.',
        'strength-service-title': 'End-to-End Services',
        'strength-service-text': 'Comprehensive support from upstream processes like RFP and requirements definition to technology selection, estimation, issue resolution, design, and operations. Experienced PMs/PLs lead optimal teams for high-quality project delivery.',
        'strength-experience-title': 'Extensive Industry Experience',
        'strength-experience-text': 'Proven track record across finance (megabanks), healthcare, logistics, and manufacturing. Strong security awareness and knowledge from numerous financial and insurance industry veterans.',
        
        // Business News Section
        'business-news-title': 'Business News',
        'business-news-subtitle': 'Latest Business Updates',
        
        // News Content
        'news-badge-new': 'NEW',
        'news-date-1': 'January 15, 2025',
        'news-date-2': 'January 10, 2025',
        'news-date-3': 'January 5, 2025',
        'news-category-press': 'Press Release',
        'news-category-award': 'Award',
        'news-category-partnership': 'Partnership',
        'news-title-1': 'AI Quality Inspection System Delivered to Major Manufacturing Company',
        'news-text-1': 'Our AI-based quality inspection system has been adopted by a major domestic manufacturing company. By leveraging deep learning technology, we successfully improved defect detection rates to 99.8% and reduced inspection time to one-third of the conventional process. We will continue contributing to manufacturing industry DX promotion.',
        'news-title-2': 'Obtained Google Cloud Partner Certification',
        'news-text-2': 'We are pleased to announce that our company has been officially certified as a Google Cloud Partner. This certification recognizes our cloud migration achievements and technical capabilities. Moving forward, we will leverage Google Cloud\'s latest technologies to provide more advanced cloud solutions to our customers.',
        'news-title-3': 'Strategic Partnership Agreement with Microsoft',
        'news-text-3': 'We have entered into a strategic partnership with Microsoft for Microsoft Dynamics 365 implementation support. This significantly strengthens our enterprise ERP solution delivery capabilities, enabling us to provide more comprehensive digital transformation support.',
        
        // Company Section
        'company-title': 'Company Overview',
        'company-subtitle': 'Company Information',
        'company-headquarters': 'Headquarters',
        'company-subsidiary': 'Subsidiary',
        'company-headquarters-title': 'Terabox Co., Ltd.',
        'company-name-label': 'Company Name',
        'company-name-value': 'Terabox Co., Ltd.',
        'company-address-label': 'Address',
        'company-address-value': '〒104-0045 Tokyo, Chuo City, Tsukiji 6-17-4<br>REID-C Tsukiji Building 4F',
        'company-tel-label': 'TEL',
        'company-tel-value': '03-5542-7798',
        'company-email-label': 'E-mail',
        'company-email-value': 'info@terabox.jp',
        'company-established-label': 'Established',
        'company-established-value': 'April 2016',
        'company-capital-label': 'Capital',
        'company-capital-value': '20 Million Yen',
        'company-ceo-label': 'Representative',
        'company-ceo-value': 'Jing Wei',
        'company-certifications-label': 'Certifications',
        'company-certifications-value': 'P MARK Certification 10825028<br>Employment Agency License 13-ユ-309628<br>Worker Dispatch License 派13-312878<br>Google Cloud Partner',
        'company-lawyer-label': 'Legal Advisor',
        'company-lawyer-value': 'Iida Sogo Law Office',
        
        // Subsidiary Company Info
        'subsidiary-company-title': 'Bocos Information Technology (Guangzhou) Co., Ltd.',
        'subsidiary-company-badge': 'Guangzhou Branch',
        'subsidiary-address-label': 'Address',
        'subsidiary-address-value': '〒510000<br>Guangzhou, Guangdong, China<br>Room A16, 210, Block A, No.205 Chigang West Road, Haizhu District',
        'subsidiary-tel-label': 'TEL',
        'subsidiary-tel-value': '86-13167022930',
        'subsidiary-established-label': 'Established',
        'subsidiary-established-value': 'December 2019',
        'subsidiary-capital-label': 'Capital',
        'subsidiary-capital-value': '500,000 RMB',
        'subsidiary-ceo-label': 'Representative',
        'subsidiary-ceo-value': 'Jing Wei',
        'subsidiary-business-label': 'Business Scope',
        'subsidiary-business-value': 'Technology Development & Offshore Development Center',
        
        // Message Section
        'message-title': 'Message from CEO',
        'message-subtitle': 'Message from CEO',
        'ceo-name': 'Jing Wei',
        'ceo-title': 'President & CEO',
        'message-greeting': 'Dear Valued Partners,',
        'message-p1': 'We are pleased to see your company continues to prosper.',
        'message-p2': 'Terabox was established through the collaboration of experienced elite members who have long worked in Japanese companies and acquired deep knowledge of Japanese business practices. We will continue to work diligently as a trusted business partner for our customers.',
        'message-p3': 'In recent years, foreign IT companies have become increasingly prevalent, and the market tends to fall into a situation where companies compete for talent. Our founding members have leveraged their reverse thinking and extensive industry experience to build a partner network system that enables mutual cooperation.',
        'message-p4': 'Through close collaboration with excellent business partners, we have established a system that can respond to various customer needs.',
        'message-p5': 'Our main business scope is based on four pillars: System Engineering, AI/DX Solutions, Smart Devices & IoT, and IT Human Resources Services. In addition, since we have many experienced professionals from the financial and insurance industries, we possess high security awareness and extensive knowledge.',
        'message-p6': 'We will continue to combine the experience and knowledge of our company and our network to flexibly respond to your requirements. We are confident that we have more than sufficient intelligence and physical strength to handle this. We will do our best to meet your expectations, so we ask for your kind consideration.',
        'message-closing': 'Sincerely,',
        'message-company': 'Terabox Co., Ltd.',
        'message-signature': 'President & CEO, Jing Wei',
        
        // Business Section
        'business-title': 'Our Business',
        'business-subtitle': 'Our Business Services',
        'business-engineering-title': 'System Engineering',
        'business-engineering-text': '25+ multinational engineers with average 7+ years industry experience',
        'business-ai-title': 'AI/DX Solutions',
        'business-ai-text': 'End-to-end AI/DX solutions from RFP to operations',
        'business-iot-title': 'Smart Devices & IoT',
        'business-iot-text': 'Pioneer in service robot implementation in Japan',
        'business-hr-title': 'IT HR Services',
        'business-hr-text': 'Comprehensive human resource solutions',
        'business-blockchain-title': 'Blockchain & Web3',
        'business-blockchain-text': 'Development and implementation of next-generation Web3 technology and blockchain solutions',
        'business-enterprise-title': 'Enterprise Solutions',
        'business-enterprise-text': 'Comprehensive solutions supporting enterprise digital transformation',
        
        // Cases Section
        'cases-title': 'Case Studies',
        'cases-subtitle': 'Our Track Record',
        'case-megabank-title': 'Major Bank - AWS Common Infrastructure',
        'case-megabank-text': 'Next-generation infrastructure construction and operation maintenance project. Over 100+ person-months, ongoing. Built 24/7 operational system achieving high availability and security.',
        'case-medical-title': 'Listed Medical Data Company - Big Data Platform',
        'case-medical-text': 'Data platform construction and operation maintenance including big data analysis. Over 100+ person-months, ongoing. Providing advanced analytical environment utilizing AI/ML.',
        'case-nursing-title': 'Nursing Facility - First Service Robot Implementation in Japan',
        'case-nursing-text': 'Achieved the first implementation of meal serving and cleaning robots in Japan. 85% of users experienced burden reduction. Successfully reduced working time by 25% to 70%.',
        
        // Recruit Section
        'recruit-title': 'Careers',
        'recruit-subtitle': 'Join Our Team',
        'recruit-requirements-title': 'Job Requirements (New Graduates & Mid-Career)',
        'recruit-position-label': 'Positions',
        'recruit-position-value': '①IT Engineer　②General Position',
        'recruit-hours-label': 'Working Hours',
        'recruit-hours-value': '9:00-18:00 (1 hour break) Weekends and holidays off, planned annual leave available',
        'recruit-hours-note': '※Working hours and holidays may vary by position or department. Negotiable.',
        'recruit-allowance-label': 'Allowances',
        'recruit-allowance-value': 'Transportation, family, service years, position allowances available',
        'recruit-salary-label': 'Salary',
        'recruit-salary-new': 'New Graduates',
        'recruit-salary-mid': 'Mid-Career',
        'recruit-salary-mid-range': 'Annual salary 4-10 million yen',
        'recruit-raise-label': 'Promotion & Raises',
        'recruit-raise-value': 'Semi-annual evaluations',
        'recruit-trial-label': 'Trial/Training Period',
        'recruit-trial-value': '3 months',
        'recruit-vacation-label': 'Holidays',
        'recruit-vacation-value': '5-day work week, refresh leave',
        'recruit-training-label': 'Training System',
        'recruit-training-value': 'Capability development training<br>Technical skills training<br>E-learning, OJT',
        'recruit-positions-title': 'Mid-Career Positions',
        
        // Mid-Career Positions
        'position-skills-label': 'Required Skills:',
        'position-apply-btn': 'Apply Now',
        'position-ai-title': 'AI Engineer',
        'position-ai-description': 'You will be involved in developing and improving machine learning models, building data pipelines, and implementing AI products. You can engage in innovative solution development while following the latest technology trends.',
        'position-ai-skills': 'Python, TensorFlow/PyTorch, Basic knowledge of machine learning',
        'position-fullstack-title': 'Full Stack Engineer',
        'position-fullstack-description': 'You will be involved in the design and development of entire systems from front-end to back-end. You can fully utilize your technical skills in a development environment using modern technology stacks.',
        'position-fullstack-skills': 'JavaScript, React, Node.js, Cloud Services',
        'position-cloud-title': 'Cloud Architect',
        'position-cloud-description': 'You will be responsible for enterprise cloud migration strategy planning, architecture design, and infrastructure construction. Through providing scalable and secure cloud solutions, you will promote customer DX.',
        'position-cloud-skills': 'AWS/Azure/GCP, Kubernetes, Infrastructure as Code',
        'position-pm-title': 'Product Manager',
        'position-pm-description': 'You will oversee AI product planning, development, and operations, translating market needs into technical requirements. Work closely with engineering teams to lead the creation of innovative products.',
        'position-pm-skills': 'Product planning experience, Technical understanding, Project management',
        'position-devops-title': 'DevOps Engineer',
        'position-devops-description': 'You will achieve development process efficiency and quality improvement through CI/CD pipeline construction, infrastructure automation, and monitoring system implementation.',
        'position-devops-skills': 'Docker, Kubernetes, CI/CD, Monitoring tools',
        'position-ds-title': 'Data Scientist',
        'position-ds-description': 'You will perform large-scale data analysis, statistical modeling, and insight extraction for business problem solving. This is an important role that creates value from data and supports decision-making.',
        'position-ds-skills': 'R/Python, SQL, Knowledge of statistics',
        
        // Access Section
        'access-title': 'Access',
        'access-subtitle': 'How to reach us',
        'access-company-label': 'Company Name',
        'access-company-value': 'Terabox Co., Ltd.',
        'access-address-label': 'Address',
        'access-address-value': '〒104-0045<br>6-17-4 Tsukiji, Chuo City, Tokyo<br>REID-C Tsukiji Building 4F',
        'access-station-label': 'Nearest Station',
        'access-station-value': 'Tokyo Metro Hibiya Line Tsukiji Station 5 min walk<br>Toei Asakusa Line Higashi-Ginza Station 7 min walk<br>Toei Oedo Line Kachidoki Station 5 min walk',
        'access-phone-label': 'Phone',
        'access-phone-value': '03-5542-7798',
        'access-hours-label': 'Business Hours',
        'access-hours-value': 'Weekdays 9:00 - 18:00<br>(Closed on weekends and holidays)',
        'access-map-text': 'Google Maps',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Get in Touch',
        'contact-description': 'System development, AI/DX solutions, HR services, and more.<br>Feel free to contact us for consultation.',
        'contact-cta': 'Contact Us',
        
        // Footer
        'footer-copyright': 'TERABOX Copyright © 2024. All Rights Reserved.',
        
        // Engineering Service Page
        'engineering-title': 'System Engineering',
        'engineering-subtitle': 'Engineering Services',
        'engineering-description': '25+ Multinational Engineer Team | Average 7+ Years Industry Experience<br>Leading experts in system development, AI/DX, and cloud technologies<br>We provide high-quality system development and operational services to meet your diverse IT development needs.',
        
        // Engineering Page Content
        'eng-hero-stat-projects': 'Annual Projects',
        'eng-hero-stat-availability': 'System Availability',
        'eng-hero-stat-efficiency': 'Development Efficiency',
        'eng-services-overview': 'Services Overview',
        'eng-service-development': 'Contract Development',
        'eng-service-development-desc': 'We provide comprehensive system development services from requirements definition to design, development, and testing to realize your business requirements.',
        'eng-service-ses': 'Business Support (SES)',
        'eng-service-ses-desc': 'We dispatch experienced engineers to customer sites to support the success of development projects.',
        'eng-service-operation': 'System Development & Operations',
        'eng-service-operation-desc': 'We provide comprehensive services covering the entire lifecycle from system construction to operation and maintenance.',
        'eng-service-consulting': 'Technical Consulting',
        'eng-service-consulting-desc': 'Based on the latest technology trends and extensive experience, we support the formulation and implementation of your technology strategy.',
        'eng-development-process': 'Development Process',
        'eng-process-subtitle': 'A systematic approach that leads your project to success',
        'eng-process-requirements': 'Requirements Definition',
        'eng-process-requirements-desc': 'Detailed interviews with customers to clarify system requirements',
        'eng-process-design': 'Design',
        'eng-process-design-desc': 'Detailed design including system architecture, UI/UX, and database design',
        'eng-process-development': 'Development',
        'eng-process-development-desc': 'Iterative system construction using agile development methodology',
        'eng-process-testing': 'Testing',
        'eng-process-testing-desc': 'Unit testing, integration testing, and system testing to ensure quality',
        'eng-process-operations': 'Operations & Maintenance',
        'eng-process-operations-desc': 'Post-release operational monitoring, maintenance, and feature additions',
        'eng-tech-stack': 'Technology Stack & Certifications',
        'eng-tech-frontend': 'Frontend',
        'eng-tech-backend': 'Backend',
        'eng-tech-mobile': 'Mobile',
        'eng-tech-database': 'Database',
        'eng-tech-cloud': 'Cloud & Infrastructure',
        'eng-tech-tools': 'Development Tools',
        'eng-quality-assurance': 'Quality Assurance',
        'eng-qa-code': 'Code Quality Management',
        'eng-qa-code-desc': 'We ensure high-quality code through code reviews, static analysis, and unit test coverage.',
        'eng-qa-security': 'Security Testing',
        'eng-qa-security-desc': 'We minimize security risks through vulnerability assessments and penetration testing.',
        'eng-qa-performance': 'Performance Testing',
        'eng-qa-performance-desc': 'We verify system performance through load testing and stress testing.',
        'eng-qa-usability': 'Usability Testing',
        'eng-qa-usability-desc': 'We pursue usability through testing from the perspective of actual users.',
        'eng-pm-methods': 'Project Management Methods',
        'eng-pm-agile': 'Agile Development',
        'eng-pm-agile-desc': 'Flexible response to changing requirements through iterative development using Scrum and Kanban methodologies.',
        'eng-pm-devops': 'DevOps',
        'eng-pm-devops-desc': 'Achieve fast and stable software delivery through automation with CI/CD pipelines.',
        'eng-case-studies': 'Implementation Results & Major Projects',
        'eng-case-megabank': 'Mega Bank Next-Generation Infrastructure',
        'eng-case-megabank-desc': 'AWS common infrastructure construction and operations',
        'eng-case-logistics': 'Logistics System Optimization',
        'eng-case-logistics-desc': 'AWS WMS system and image recognition PoC',
        'eng-case-medical': 'Listed Medical Data Company',
        'eng-case-medical-desc': 'Big data analysis platform construction',
        'eng-case-ecommerce': 'E-commerce Platform Development',
        'eng-case-ecommerce-desc': 'Online sales channel for mid-sized apparel company',
        'eng-cta-title': 'Building the Future with Engineering Services',
        'eng-cta-desc': 'We innovatively solve your system development challenges with cutting-edge development technologies and extensive track record.<br>Please let us know about your challenges first. We will propose the optimal solution.',
        'eng-cta-contact': 'Contact Us',
        'eng-cta-download': 'Technical Documentation Download',
        
        // Case Studies - Detailed
        'case-apparel-title': 'Mid-sized Apparel Company',
        'case-apparel-service': 'E-commerce Site Development',
        'case-apparel-desc': 'Built a new online sales channel in addition to traditional store sales. Developed a high-performance e-commerce site with React + Node.js configuration, achieving 30% sales increase.',
        'case-apparel-result1': '30% Sales Increase',
        'case-apparel-result2': '4-Month Development',
        'case-apparel-result3': 'Mobile Compatible',
        
        'case-manufacturing-title': 'Major Manufacturing Company',
        'case-manufacturing-service': 'Core System Modernization',
        'case-manufacturing-desc': 'Modernized legacy system used for 20 years to cloud-native microservice architecture. Achieved 50% operational cost reduction and 10x performance improvement.',
        'case-manufacturing-result1': '50% Cost Reduction',
        'case-manufacturing-result2': '10x Performance Boost',
        'case-manufacturing-result3': '99.9% Availability',
        
        'case-fintech-title': 'Fintech Company',
        'case-fintech-service': 'Mobile App Development',
        'case-fintech-desc': 'Developed mobile app for financial services using React Native. Met high security requirements and accelerated user acquisition with simultaneous iOS/Android release.',
        'case-fintech-result1': 'Simultaneous Release',
        'case-fintech-result2': 'High Security Standards',
        'case-fintech-result3': '4.8-Star User Rating',
        
        'case-financial-title': 'Online Financial Service',
        'case-financial-service': 'AWS Cloud Infrastructure',
        'case-financial-desc': 'Built cloud infrastructure including CI/CD automation. Significantly improved operational efficiency through IaC infrastructure automation and realized 24/7 monitoring system.',
        'case-financial-result1': '90% Deploy Time Reduction',
        'case-financial-result2': '99.99% Availability',
        'case-financial-result3': '50% Cost Reduction',
        
        // Engineering Service Features/Sub-items
        'eng-feature-web-app': 'Web Application Development',
        'eng-feature-mobile-app': 'Mobile App Development',
        'eng-feature-api': 'API Development & Integration',
        'eng-feature-legacy': 'Legacy System Modernization',
        'eng-feature-se-dispatch': 'System Engineer Dispatch',
        'eng-feature-pm-dispatch': 'Project Manager Dispatch',
        'eng-feature-tech-lead': 'Technical Lead Dispatch',
        'eng-feature-term-support': 'Long-term & Short-term Support',
        'eng-feature-infra-design': 'Infrastructure Design & Construction',
        'eng-feature-cloud-migration': 'Cloud Migration Support',
        'eng-feature-ops-monitoring': 'Operations Monitoring & Maintenance',
        'eng-feature-performance': 'Performance Optimization',
        'eng-feature-tech-selection': 'Technology Selection Support',
        'eng-feature-arch-design': 'Architecture Design',
        'eng-feature-code-review': 'Code Review',
        'eng-feature-tech-training': 'Technical Education & Training',
        
        // Development Process Tags
        'eng-tag-hearing': 'Interview',
        'eng-tag-requirements': 'Requirements Analysis',
        'eng-tag-specification': 'Specification Development',
        'eng-tag-system-design': 'System Design',
        'eng-tag-ui-ux-design': 'UI/UX Design',
        'eng-tag-db-design': 'Database Design',
        'eng-tag-agile-dev': 'Agile Development',
        'eng-tag-code-review-process': 'Code Review',
        'eng-tag-quality-mgmt': 'Quality Management',
        'eng-tag-unit-test': 'Unit Testing',
        'eng-tag-integration-test': 'Integration Testing',
        'eng-tag-quality-assurance': 'Quality Assurance',
        'eng-tag-24-7-monitoring': '24/7 Monitoring',
        'eng-tag-maintenance': 'Maintenance Support',
        'eng-tag-feature-addition': 'Feature Addition',
        
        // Project Management Sub-items
        'eng-pm-2week-sprint': '2-week Sprint',
        'eng-pm-daily-standup': 'Daily Standup',
        'eng-pm-sprint-review': 'Sprint Review',
        'eng-pm-retrospective': 'Retrospective',
        'eng-pm-auto-build': 'Automated Build & Test',
        'eng-pm-auto-deploy': 'Automated Deployment',
        'eng-pm-iac': 'Infrastructure as Code',
        'eng-pm-monitoring-logs': 'Monitoring & Log Management',
        
        // Case Studies Project Scale
        'eng-scale-100-months-ongoing': 'Total 100+ person-months (ongoing)',
        'eng-scale-200-months-ongoing': 'Total 200+ person-months (ongoing)',
        'eng-scale-50-months-completed': 'Total 50+ person-months (completed)',
        
        // Detailed Case Studies
        'eng-case-detail-apparel': 'Mid-size Apparel Company',
        'eng-case-detail-ec-title': 'E-commerce Site Development',
        'eng-case-detail-ec-desc': 'Built new online sales channel in addition to traditional store sales. Developed high-performance e-commerce site with React + Node.js architecture, achieving 30% sales increase.',
        'eng-result-sales-increase': '30% Sales Increase',
        'eng-result-dev-period': '4-month Development',
        'eng-result-mobile-support': 'Mobile Compatible',
        'eng-case-detail-manufacturing': 'Major Manufacturing Company',
        'eng-case-detail-legacy-title': 'Core System Modernization',
        'eng-case-detail-legacy-desc': 'Modernized 20-year-old legacy system to cloud-native microservices architecture. Achieved 50% reduction in operational costs and 10x performance improvement.',
        'eng-result-cost-reduction': '50% Cost Reduction',
        'eng-result-performance-10x': '10x Performance Improvement',
        'eng-result-availability': '99.9% Availability',
        'eng-case-detail-fintech': 'FinTech Company',
        'eng-case-detail-mobile-title': 'Mobile App Development',
        'eng-case-detail-mobile-desc': 'Developed financial services mobile app with React Native. Met high security requirements and accelerated user acquisition with simultaneous iOS/Android release.',
        'eng-result-simultaneous-release': 'Simultaneous Release',
        'eng-result-high-security': 'High Security Compliance',
        'eng-result-user-rating': '4.8 User Rating',
        'eng-case-detail-netfinance': 'Online Financial Services',
        'eng-case-detail-aws-title': 'AWS Cloud Infrastructure',
        'eng-case-detail-aws-desc': 'Built cloud infrastructure including CI/CD automation. Significantly improved operational efficiency through IaC infrastructure automation and established 24/7 monitoring system.',
        'eng-result-deploy-time': '90% Deploy Time Reduction',
        'eng-result-availability-9999': '99.99% Availability',
        'eng-result-ops-cost-reduction': '50% Operations Cost Reduction',
        
        // AI Solution Page
        'ai-title': 'AI Solutions Business',
        'ai-subtitle': 'Next-Generation AI Technology Solutions',
        'ai-description': '75+ Multinational AI Engineers Team | Average 7+ Years Industry Experience<br>Cutting-edge technologies in LLM, Deep Learning, Autonomous Driving, Image Recognition<br>Revolutionarily solving your business challenges',
        'ai-stat-projects': 'Annual Projects',
        'ai-stat-accuracy': 'AI Recognition Accuracy',
        'ai-stat-efficiency': 'Business Efficiency Improvement',
        
        'ai-core-title': 'Core Technologies and Solutions',
        'ai-core-llm-title': 'LLM & Deep Learning',
        'ai-core-llm-desc': 'Large language model construction, algorithm optimization, Kaggle-proven engineers on staff',
        'ai-core-autonomous-title': 'Autonomous Driving Technology',
        'ai-core-autonomous-desc': 'Collaboration experience with MaaS companies, mobility data analysis and system design (50+ person-months)',
        'ai-core-ocr-title': 'OCR×AI Image Recognition',
        'ai-core-ocr-desc': 'Medical AI/NLP, logistics AI optimization, targeting 99%+ recognition accuracy',
        'ai-core-cloud-title': 'Cloud AI Platform',
        'ai-core-cloud-desc': '20 AWS/Azure/GCP certified engineers, major financial institution infrastructure construction experience',
        
        'ai-services-title': 'AI Solution Services',
        'ai-market-research-title': 'AI Intelligent Market Research',
        'ai-market-research-badge': 'Industry Innovation',
        'ai-market-research-desc': 'Complete 3-week work within 1 hour. Automatic decomposition and multi-dimensional search by AI Agent',
        'ai-market-research-feature1': 'Big Data search accuracy improvement',
        'ai-market-research-feature2': 'Automatic enterprise knowledge association',
        'ai-market-research-feature3': 'Automatic report generation',
        'ai-market-research-feature4': 'Real-time BI output',
        'ai-market-research-metric1': 'Efficiency: 95% improvement',
        'ai-market-research-metric2': 'Time: 1/500 reduction',
        
        'ai-hr-matching-title': 'AI Human Resource Matching System',
        'ai-hr-matching-badge': 'Patent Pending',
        'ai-hr-matching-desc': 'Process 80 cases per person per day, matching time only 1 minute. Achieving revolutionary efficiency',
        'ai-hr-matching-feature1': 'Intelligent crawling',
        'ai-hr-matching-feature2': 'Personalized matching',
        'ai-hr-matching-feature3': 'Multi-dimensional query support',
        'ai-hr-matching-feature4': 'Automatic scoring',
        'ai-hr-matching-metric1': 'Processing capacity: 80 cases/day',
        'ai-hr-matching-metric2': 'Accuracy: 40% improvement',
        
        'ai-face-recognition-title': 'Face Recognition System',
        'ai-face-recognition-desc': 'Megabank implementation track record. Achieving both security and convenience with high-precision face recognition technology',
        'ai-face-recognition-feature1': 'Real-time face recognition',
        'ai-face-recognition-feature2': 'Mask-wearing support',
        'ai-face-recognition-feature3': 'Access control integration',
        'ai-face-recognition-feature4': 'Attendance management system integration',
        
        'ai-medical-ai-title': 'AI Literature Summarization & Medical AI',
        'ai-medical-ai-desc': 'Collaboration with listed medical data specialist company. 70% reduction in paper reading time',
        'ai-medical-ai-feature1': 'Multi-language support',
        'ai-medical-ai-feature2': 'Medical NLP specialization',
        'ai-medical-ai-feature3': 'Automatic keyword extraction',
        'ai-medical-ai-feature4': '95%+ summarization accuracy',
        
        'ai-service-robot-title': 'Service Robots & Delivery Robots',
        'ai-service-robot-desc': 'Pioneer in Japan\'s first introduction. Strategic partnership with KEENON',
        'ai-service-robot-feature1': 'Voice recognition & dialogue function',
        'ai-service-robot-feature2': 'Autonomous movement & navigation',
        'ai-service-robot-feature3': 'Emotion recognition technology',
        'ai-service-robot-feature4': 'Cloud integration',
        
        'ai-aiot-meter-title': 'AIoT Smart Meter',
        'ai-aiot-meter-desc': 'Customs business DX, factory automation. Fusion of NB-IoT wireless communication and AI image recognition',
        'ai-aiot-meter-feature1': '99% recognition accuracy target',
        'ai-aiot-meter-feature2': 'Anomaly detection & predictive maintenance',
        'ai-aiot-meter-feature3': 'Real-time data collection',
        'ai-aiot-meter-feature4': 'Labor-saving & automation',
        
        'ai-tech-title': 'Technology Stack & Certifications',
        'ai-tech-kaggle': 'Kaggle medalists on staff',
        'ai-tech-cloud-cert': '20+ cloud certified engineers',
        'ai-tech-security': 'Information Security Specialists',
        'ai-tech-pmp': 'PMP certified professionals',
        'ai-tech-ai-framework': 'AI/ML Framework',
        'ai-tech-programming': 'Programming Languages',
        'ai-tech-cloud-infra': 'Cloud & Infrastructure',
        'ai-tech-database': 'Databases',
        
        'ai-cases-title': 'Implementation Results & Major Projects',
        'ai-case-megabank-title': 'Megabank Next-Generation Infrastructure',
        'ai-case-megabank-desc': 'AWS common infrastructure construction & maintenance',
        'ai-case-megabank-scale': '100+ person-months (ongoing)',
        'ai-case-maas-title': 'Major MaaS Company Autonomous Driving',
        'ai-case-maas-desc': 'Mobility data analysis & system design',
        'ai-case-maas-scale': '50+ person-months (ongoing)',
        'ai-case-logistics-title': 'Logistics AI Optimization Project',
        'ai-case-logistics-desc': 'AWS WMS system & image recognition PoC',
        'ai-case-logistics-scale': '200+ person-months (ongoing)',
        'ai-case-medical-data-title': 'Listed Medical Data Specialist Company',
        'ai-case-medical-data-desc': 'Big data analysis platform construction',
        'ai-case-medical-data-scale': '100+ person-months (ongoing)',
        'ai-case-finance-client': 'Major Financial Institution',
        'ai-case-finance-project': 'Face Recognition System Implementation',
        'ai-case-finance-desc': 'Implemented face recognition systems at headquarters and nationwide branches, significantly improving security levels. Development efficiency also improved through CI/CD automation.',
        'ai-case-finance-result1': 'Security Enhancement',
        'ai-case-finance-result2': '30% Cost Reduction',
        'ai-case-finance-result3': '5x Processing Speed',
        'ai-case-medical-client': 'Medical Corporation',
        'ai-case-medical-project': 'AI Literature Summarization System',
        'ai-case-medical-desc': 'Introduced medical paper summarization system to support physicians\' research work. Also achieved diagnostic support through NLP technology.',
        'ai-case-medical-result1': '70% Reading Time Reduction',
        'ai-case-medical-result2': '3x Information Volume',
        'ai-case-medical-result3': 'Research Efficiency Improvement',
        'ai-case-retail-client': 'Large Commercial Facility',
        'ai-case-retail-project': 'Service Robot Implementation',
        'ai-case-retail-desc': 'Japan\'s first implementation of meal serving and cleaning robots. Customer satisfaction improved by 20% through guide and service robots.',
        'ai-case-retail-result1': '20% Satisfaction Improvement',
        'ai-case-retail-result2': '40% Labor Cost Reduction',
        'ai-case-retail-result3': '24/7 Service',
        'ai-case-fintech-client': 'Online Financial Service',
        'ai-case-fintech-project': 'AWS Cloud Infrastructure Construction',
        'ai-case-fintech-desc': 'Built cloud infrastructure including CI/CD automation. Significantly improved operational efficiency through IaC infrastructure automation.',
        'ai-case-fintech-result1': '90% Deploy Time Reduction',
        'ai-case-fintech-result2': '99.99% Availability',
        'ai-case-fintech-result3': '50% Operations Cost Reduction',
        
        'ai-team-title': 'Engineering Team Structure',
        'ai-team-members': '25+ Members',
        'ai-team-members-desc': 'Multinational Engineering Team',
        'ai-team-experience': 'Average 7+ Years',
        'ai-team-experience-desc': 'Industry Experience',
        'ai-team-ai-ratio': '20%',
        'ai-team-ai-ratio-desc': 'AI Specialized Engineer Ratio',
        'ai-team-clients': '20+ Companies Annually',
        'ai-team-clients-desc': 'Client Support Track Record',
        
        'ai-process-title': 'End-to-End Support from RFP to Operations',
        'ai-process-rfp-title': 'RFP & Requirements',
        'ai-process-rfp-desc': 'Participate from upstream processes',
        'ai-process-tech-title': 'Technology Selection & Estimation',
        'ai-process-tech-desc': 'Optimal technology stack proposals',
        'ai-process-dev-title': 'Design & Development',
        'ai-process-dev-desc': 'Agile development',
        'ai-process-ops-title': 'Operations & Maintenance',
        'ai-process-ops-desc': '24/365 support',
        
        'ai-cta-title': 'Creating the Future with AI Solutions',
        'ai-cta-desc': 'With cutting-edge AI technology and extensive track record, we solve your business challenges innovatively.<br>Please share your company\'s challenges with us first. We will propose the optimal solution.',
        'ai-cta-contact': 'Contact Us',
        'ai-cta-download': 'Download Materials',
        
        // Enterprise Solution Page
        'enterprise-title': 'Enterprise Solutions',
        'enterprise-subtitle': 'Enterprise Solutions',
        'enterprise-description': 'We provide comprehensive solutions to support enterprise digital transformation.',
        
        // Human Resource Page
        'hr-title': 'IT Human Resources',
        'hr-subtitle': 'IT Human Resources',
        'hr-description': 'We provide comprehensive human resource solutions from dispatching and recruiting excellent IT talent to training.',
        
        // IoT Systems Page
        'iot-title': 'Smart Devices & IoT',
        'iot-subtitle': 'Smart Devices & IoT',
        'iot-description': 'We realize efficient business environments with cutting-edge IoT technology and smart devices.',
        
        // Blockchain Web3 Page
        'blockchain-title': 'Blockchain & Web3',
        'blockchain-subtitle': 'Blockchain & Web3',
        'blockchain-description': 'We support the development and implementation of next-generation Web3 technology and blockchain solutions.',
        
        // Entry Form
        'form-title': 'Application Form',
        'form-name': 'Full Name',
        'form-furigana': 'Furigana',
        'form-email': 'Email Address',
        'form-phone': 'Phone Number',
        'form-free-input': 'Additional Information',
        'form-placeholder': 'Please enter your motivation, experience, skills, etc.',
        'privacy-title': 'Privacy Policy',
        'privacy-p1': 'Personal information provided during application will be handled in accordance with our personal information protection management system.',
        'privacy-p2': '1. Personal information is used for recruitment purposes.',
        'privacy-p3': '2. The personal information manager is the representative director.',
        'privacy-p4': '3. We do not provide information to third parties.',
        'privacy-p5': '4. External outsourcing for personal information processing is limited to companies with confidentiality agreements.',
        'privacy-p6': '5. Providing personal information to us is voluntary, but incomplete information may prevent us from contacting you.',
        'privacy-p7': '6. For requests regarding disclosure of personal information provided to us, please contact us below.',
        'consent-instruction': 'If you agree, please check below.',
        'consent-warning': '※You cannot proceed to the confirmation screen without checking below.',
        'consent-text': 'I agree to the above "Privacy Policy"',
        'submit-button': 'Go to Confirmation',
        'form-footer-company': 'Terabox Co., Ltd.',
        'form-footer-address': '〒104-0045 6-17-4 Tsukiji, Chuo City, Tokyo REID-C Tsukiji Building 4F',
        'form-footer-tel': 'TEL 03-5542-7798',
        
        // Salary Table Education Levels
        'edu-graduate': 'Graduate School',
        'edu-university': 'University',
        'edu-college': 'Junior College',
        'edu-vocational-4y': 'Vocational (4-year)',
        'edu-vocational': 'Vocational School',
        'edu-high-school': 'High School'
    },
    
    zh: {
        // Navigation
        'nav-strength': '我们的优势',
        'nav-business-news': '业务新闻',
        'nav-company': '公司概况',
        'nav-message': '总裁致辞',
        'nav-business': '业务内容',
        'nav-cases': '导入案例',
        'nav-recruit': '招聘信息',
        'nav-contact': '联系我们',
        
        // Hero Section
        'hero-title': 'TERABOX',
        'hero-subtitle': '我们致力于成为一个推动社会和人们生活变得更加丰富，并带来进化的IT组织',
        'hero-description': '系统工程 • AI/DX解决方案 • 智能机器人导入<br>25名以上专业工程师团队，平均7年以上行业经验<br>为您的商业挑战提供一站式IT解决方案',
        'hero-cta': '了解更多',
        'hero-stat-engineers': '专业工程师',
        'hero-stat-companies': '年服务企业',
        'hero-stat-experience': '平均行业经验',
        
        // Strength Section
        'strength-title': '我们的优势',
        'strength-subtitle': '我们的竞争优势',
        'strength-team-title': '多国籍精英团队',
        'strength-team-text': '日本工程师与外籍工程师协作。在政府和地方自治体项目中拥有丰富的售前、提案、需求定义、招标支持等经验。兼具全球视野和日本国内公共/民间领域的应对能力。',
        'strength-service-title': '端到端服务',
        'strength-service-text': '从RFP（提案请求书）、需求定义等上游工程到技术选型、报价、问题整理、设计到运维的一贯对应。经验丰富的PM/PL带领最适合的团队推进高质量项目。',
        'strength-experience-title': '丰富的行业经验',
        'strength-experience-text': '在金融（大型银行）、医疗、物流、制造业等多个行业拥有实绩。特别是有众多金融保险行业经验者在籍，拥有高度的安全意识和丰富的知识。',
        
        // Business News Section
        'business-news-title': '业务新闻',
        'business-news-subtitle': '最新业务动态',
        
        // News Content
        'news-badge-new': '最新',
        'news-date-1': '2025年1月15日',
        'news-date-2': '2025年1月10日',
        'news-date-3': '2025年1月5日',
        'news-category-press': '新闻发布',
        'news-category-award': '获奖信息',
        'news-category-partnership': '合作伙伴',
        'news-title-1': '向大型制造企业交付AI质量检测系统',
        'news-text-1': '我们开发的基于AI的质量检测系统被国内大型制造企业采用。通过利用深度学习技术，成功将不良品检出率提高至99.8%，检测时间缩短至传统方式的1/3。今后将继续为制造业的DX推进做出贡献。',
        'news-title-2': '获得Google Cloud Partner认证',
        'news-text-2': '我们很高兴地宣布，本公司已正式获得Google Cloud Partner认证。此次认证是对我们迄今为止的云迁移实绩和技术实力的认可。今后将利用Google Cloud的最新技术，为客户提供更高水平的云解决方案。',
        'news-title-3': '与Microsoft公司签署战略合作伙伴关系',
        'news-text-3': '在Microsoft Dynamics 365的导入支援方面，与Microsoft公司签署了战略合作伙伴关系。这将大幅强化面向企业的ERP解决方案提供能力，能够支援更全面的数字化转型。',
        
        // Company Section
        'company-title': '公司概况',
        'company-subtitle': '公司信息',
        'company-headquarters': '总部',
        'company-subsidiary': '关联公司',
        'company-headquarters-title': 'Terabox股份有限公司',
        'company-name-label': '公司名称',
        'company-name-value': 'Terabox股份有限公司',
        'company-address-label': '地址',
        'company-address-value': '〒104-0045 东京都中央区筑地6丁目17-4<br>REID-C筑地大厦 4F',
        'company-tel-label': '电话',
        'company-tel-value': '03-5542-7798',
        'company-email-label': '邮箱',
        'company-email-value': 'info@terabox.jp',
        'company-established-label': '成立日期',
        'company-established-value': '2016年4月',
        'company-capital-label': '注册资本',
        'company-capital-value': '2000万日元',
        'company-ceo-label': '法人代表',
        'company-ceo-value': '荆威',
        'company-certifications-label': '各项资质',
        'company-certifications-value': 'P MARK认证 10825028<br>职业介绍许可证 13-ユ-309628<br>劳动派遣事业许可证 派13-312878<br>Google Cloud Partner',
        'company-lawyer-label': '法律顾问',
        'company-lawyer-value': '饭田综合法律事务所',
        
        // Subsidiary Company Info
        'subsidiary-company-title': '博科思信息科技（广州）有限公司',
        'subsidiary-company-badge': '广州分公司',
        'subsidiary-address-label': '地址',
        'subsidiary-address-value': '〒510000<br>中国广东省广州市<br>海珠区赤岗西路205号A栋210室A16',
        'subsidiary-tel-label': '电话',
        'subsidiary-tel-value': '86-13167022930',
        'subsidiary-established-label': '成立时间',
        'subsidiary-established-value': '2019年12月',
        'subsidiary-capital-label': '注册资本',
        'subsidiary-capital-value': '50万人民币',
        'subsidiary-ceo-label': '法人代表',
        'subsidiary-ceo-value': '荆威',
        'subsidiary-business-label': '经营范围',
        'subsidiary-business-value': '技术开发・离岸开发中心',
        
        // Message Section
        'message-title': '总裁致辞',
        'message-subtitle': '总裁致辞',
        'ceo-name': '荆威',
        'ceo-title': '代表董事',
        'message-greeting': '尊敬的合作伙伴：',
        'message-p1': '很高兴看到贵公司日益繁荣发展。',
        'message-p2': 'Terabox是由在日本企业长期工作并掌握了日本商务知识的经验丰富的精英成员合作成立的。我们将继续作为客户信赖的商业伙伴，真诚地开展业务。',
        'message-p3': '近年来，外资IT企业呈现乱立态势，市场往往陷入人才争夺的局面。我们的创始成员运用逆向思维和丰富的行业经验，构建了能够相互建立合作关系的合作伙伴网络机制。',
        'message-p4': '通过与优秀商业伙伴的紧密合作，我们建立了能够满足客户各种需求的体制。',
        'message-p5': '我们的主要业务范围以系统软件开发业务、AI DX 解决方案业务、智能机器人·IoT业务、IT人才服务业务四大支柱为轴心展开业务。此外，由于有众多金融保险行业经验者在籍，我们也拥有对安全的高度意识和丰富知识。',
        'message-p6': '今后我们将继续结合公司及公司网络的经验值和见解，灵活应对贵公司的要求。我们相信具备了应对这些要求的充分智力和体力。我们将全力以赴满足贵公司的期待，恳请予以考虑。',
        'message-closing': '此致敬礼',
        'message-company': 'Terabox股份有限公司',
        'message-signature': '代表董事 荆威',
        
        // Business Section
        'business-title': '业务内容',
        'business-subtitle': '我们的业务服务',
        'business-engineering-title': '系统软件开发业务',
        'business-engineering-text': '25名以上多国籍工程师团队，平均行业经验7年以上的专业集团',
        'business-ai-title': 'AI DX 解决方案业务',
        'business-ai-text': '从RFP到运维的一站式AI/DX解决方案提供',
        'business-iot-title': '智能机器人·IoT业务',
        'business-iot-text': '服务机器人日本首次导入的先驱',
        'business-hr-title': 'IT人才服务业务',
        'business-hr-text': '提供综合性人才解决方案',
        'business-blockchain-title': '区块链・Web3业务',
        'business-blockchain-text': '下一代Web3技术和区块链解决方案的开发・导入',
        'business-enterprise-title': '企业解决方案业务',
        'business-enterprise-text': '支持企业数字化转型的综合解决方案',
        
        // Cases Section
        'cases-title': '导入案例',
        'cases-subtitle': '我们的业绩',
        'case-megabank-title': '某大型银行 - AWS共通基础设施构建',
        'case-megabank-text': '下一代基础设施构建·运维保守项目。累计100+人月，持续进行中。构建24/7运维体制，实现高可用性和安全性。',
        'case-medical-title': '上市医疗数据专业公司 - 大数据平台',
        'case-medical-text': '包含大数据分析的数据平台构建·运维保守。累计100+人月，持续进行中。利用AI/ML提供高度的分析环境。',
        'case-nursing-title': '养老设施 - 日本首次服务机器人导入',
        'case-nursing-text': '实现配餐·清扫机器人的日本首次导入。85%的使用者感受到负担减轻。成功将作业时间削减25%～70%。',
        
        // Recruit Section
        'recruit-title': '招聘信息',
        'recruit-subtitle': '加入我们的团队',
        'recruit-requirements-title': '招聘要求（应届生·社会人士）',
        'recruit-position-label': '招聘职位',
        'recruit-position-value': '①IT工程师　②综合职位',
        'recruit-hours-label': '工作时间',
        'recruit-hours-value': '9:00～18:00（休息1小时）周末节假日休息　年假计划性安排',
        'recruit-hours-note': '※工作时间和休假可能因职位或部门而异。可协商。',
        'recruit-allowance-label': '各种补助',
        'recruit-allowance-value': '交通补助、家庭补助、勤续补助、职位补助等',
        'recruit-salary-label': '薪资',
        'recruit-salary-new': '应届生',
        'recruit-salary-mid': '社会招聘',
        'recruit-salary-mid-range': '年收入400～1000万日元',
        'recruit-raise-label': '晋升加薪',
        'recruit-raise-value': '半年一次评定',
        'recruit-trial-label': '试用培训期间',
        'recruit-trial-value': '3个月',
        'recruit-vacation-label': '休假',
        'recruit-vacation-value': '周休2日制　有调养假',
        'recruit-training-label': '培训制度',
        'recruit-training-value': '基于能力开发体系的培训<br>技术技能培训<br>在线培训　OJT',
        'recruit-positions-title': '社会招聘职位',
        
        // Mid-Career Positions
        'position-skills-label': '必要技能:',
        'position-apply-btn': '立即申请',
        'position-ai-title': 'AI工程师',
        'position-ai-description': '负责机器学习模型开发优化、数据管道构建、AI产品实施。在追求最新技术趋势的同时，参与创新解决方案的开发。',
        'position-ai-skills': 'Python, TensorFlow/PyTorch, 机器学习基础知识',
        'position-fullstack-title': '全栈工程师',
        'position-fullstack-description': '负责从前端到后端的整个系统设计开发。在使用现代技术栈的开发环境中充分发挥技术实力。',
        'position-fullstack-skills': 'JavaScript, React, Node.js, 云服务',
        'position-cloud-title': '云架构师',
        'position-cloud-description': '负责企业云迁移战略规划、架构设计、基础设施构建。通过提供可扩展且安全的云解决方案，推进客户的数字化转型。',
        'position-cloud-skills': 'AWS/Azure/GCP, Kubernetes, Infrastructure as Code',
        'position-pm-title': '产品经理',
        'position-pm-description': '统筹AI产品的企划开发运营，将市场需求转化为技术要求。与工程团队紧密协作，引领创新产品的创造。',
        'position-pm-skills': '产品企划经验, 技术理解力, 项目管理',
        'position-devops-title': 'DevOps工程师',
        'position-devops-description': '通过CI/CD管道构建、基础设施自动化、监控系统导入，实现开发流程的效率化和质量提升。',
        'position-devops-skills': 'Docker, Kubernetes, CI/CD, 监控工具',
        'position-ds-title': '数据科学家',
        'position-ds-description': '进行大规模数据分析、统计建模、业务问题解决的洞察提取。从数据中创造价值，支持决策的重要角色。',
        'position-ds-skills': 'R/Python, SQL, 统计学知识',
        
        // Access Section
        'access-title': '公司地址',
        'access-subtitle': '公司地址',
        'access-company-label': '公司名称',
        'access-company-value': 'Terabox股份有限公司',
        'access-address-label': '地址',
        'access-address-value': '〒104-0045<br>东京都中央区筑地6丁目17-4<br>REID-C筑地大厦 4F',
        'access-station-label': '最近车站',
        'access-station-value': '东京地下铁日比谷线 筑地站 步行5分钟<br>浅草线 东银座站 步行7分钟<br>大江户线 胜哄车站 步行5分钟',
        'access-phone-label': '电话号码',
        'access-phone-value': '03-5542-7798',
        'access-hours-label': '营业时间',
        'access-hours-value': '工作日 9:00 - 18:00<br>(周末节假日除外)',
        'access-map-text': 'Google Maps',
        
        // Contact Section
        'contact-title': '联系我们',
        'contact-subtitle': '欢迎咨询',
        'contact-description': '系统开发、AI/DX解决方案、人才服务等，<br>欢迎随时咨询。',
        'contact-cta': '联系我们',
        
        // Footer
        'footer-copyright': 'TERABOX Copyright © 2024. All Rights Reserved.',
        
        // Engineering Service Page
        'engineering-title': '系统软件开发业务',
        'engineering-subtitle': '工程服务',
        'engineering-description': '25名以上多国籍工程师团队 | 平均7年以上行业经验<br>系统开发・AI/DX・云技术的尖端专家集团<br>广泛应对客户的IT开发需求，提供高质量的系统开发・运维服务。',
        
        // Engineering Page Content
        'eng-hero-stat-projects': '年度项目',
        'eng-hero-stat-availability': '系统可用性',
        'eng-hero-stat-efficiency': '开发效率提升',
        'eng-services-overview': '服务概览',
        'eng-service-development': '承包开发',
        'eng-service-development-desc': '从需求定义到设计・开发・测试，提供一贯的系统开发服务，实现客户的业务需求。',
        'eng-service-ses': '业务支持（SES）',
        'eng-service-ses-desc': '派遣经验丰富的工程师到客户现场，支持开发项目的成功。',
        'eng-service-operation': '系统开发・运维',
        'eng-service-operation-desc': '从系统构建到运维保守，提供覆盖整个生命周期的综合服务。',
        'eng-service-consulting': '技术咨询',
        'eng-service-consulting-desc': '基于最新技术动向和丰富经验，支持客户的技术战略制定和实施。',
        'eng-development-process': '开发流程',
        'eng-process-subtitle': '引导客户项目走向成功的系统化方法',
        'eng-process-requirements': '需求定义',
        'eng-process-requirements-desc': '详细了解客户的课题和需求，明确系统的要求',
        'eng-process-design': '设计',
        'eng-process-design-desc': '实施系统架构、UI/UX、数据库设计等详细设计',
        'eng-process-development': '开发',
        'eng-process-development-desc': '采用敏捷开发手法，反复构建系统',
        'eng-process-testing': '测试',
        'eng-process-testing-desc': '实施单元测试、集成测试、系统测试，保证质量',
        'eng-process-operations': '运维保守',
        'eng-process-operations-desc': '应对发布后的运维监控、保守维护、功能追加',
        'eng-tech-stack': '技术栈 & 资格认证',
        'eng-tech-frontend': '前端',
        'eng-tech-backend': '后端',
        'eng-tech-mobile': '移动端',
        'eng-tech-database': '数据库',
        'eng-tech-cloud': '云・基础设施',
        'eng-tech-tools': '开发工具',
        'eng-quality-assurance': '质量保证',
        'eng-qa-code': '代码质量管理',
        'eng-qa-code-desc': '通过代码审查、静态分析、单元测试覆盖率保证高质量的代码。',
        'eng-qa-security': '安全测试',
        'eng-qa-security-desc': '通过脆弱性诊断、渗透测试最小化安全风险。',
        'eng-qa-performance': '性能测试',
        'eng-qa-performance-desc': '通过负载测试、压力测试验证系统的性能。',
        'eng-qa-usability': '可用性测试',
        'eng-qa-usability-desc': '从实际用户视角进行测试，追求易用性。',
        'eng-pm-methods': '项目管理手法',
        'eng-pm-agile': '敏捷开发',
        'eng-pm-agile-desc': '通过Scrum・看板手法的反复开发，灵活应对变化的需求。',
        'eng-pm-devops': 'DevOps',
        'eng-pm-devops-desc': '通过CI/CD管道的自动化，实现快速且稳定的软件交付。',
        'eng-case-studies': '导入实绩 & 大型项目',
        'eng-case-megabank': '大型银行下一代基础设施构建',
        'eng-case-megabank-desc': 'AWS共通基础设施构建・运维保守',
        'eng-case-logistics': '物流系统优化',
        'eng-case-logistics-desc': 'AWS WMS系统・图像识别PoC',
        'eng-case-medical': '上市医疗数据专业公司',
        'eng-case-medical-desc': '大数据分析基础设施构建',
        'eng-case-ecommerce': '电商平台构建',
        'eng-case-ecommerce-desc': '中等服装企业的在线销售渠道',
        'eng-cta-title': '用工程服务构建未来',
        'eng-cta-desc': '以最尖端的开发技术和丰富的实绩，革新性地解决客户的系统开发课题。<br>首先请告诉我们贵公司的课题。我们将提出最佳的解决方案。',
        'eng-cta-contact': '联系我们',
        'eng-cta-download': '技术资料下载',
        
        // Case Studies - Detailed
        'case-apparel-title': '中坚服装企业',
        'case-apparel-service': '电商网站构建',
        'case-apparel-desc': '在传统店铺销售基础上，新建在线销售渠道。采用React + Node.js架构开发高性能电商网站，实现销售额提升30%。',
        'case-apparel-result1': '销售额提升30%',
        'case-apparel-result2': '开发周期4个月',
        'case-apparel-result3': '移动端适配',
        
        'case-manufacturing-title': '制造业大型企业',
        'case-manufacturing-service': '核心系统更新',
        'case-manufacturing-desc': '将使用20年的遗留系统更新为云原生微服务架构。实现运营成本削减50%和处理性能提升10倍。',
        'case-manufacturing-result1': '运营成本削减50%',
        'case-manufacturing-result2': '处理性能提升10倍',
        'case-manufacturing-result3': '可用性99.9%',
        
        'case-fintech-title': '金融科技企业',
        'case-fintech-service': '移动应用开发',
        'case-fintech-desc': '使用React Native开发金融服务移动应用。满足高安全要求，通过iOS・Android同时发布加速用户获取。',
        'case-fintech-result1': '同时发布实现',
        'case-fintech-result2': '高安全性对应',
        'case-fintech-result3': '用户评价4.8分',
        
        'case-financial-title': '网络金融服务企业',
        'case-financial-service': 'AWS云基础设施构建',
        'case-financial-desc': '构建包含CI/CD自动化的云基础设施。通过IaC基础设施自动化大幅改善运营效率，实现24/7监控体制。',
        'case-financial-result1': '部署时间缩短90%',
        'case-financial-result2': '可用性99.99%',
        'case-financial-result3': '运营成本削减50%',
        
        // Engineering Service Features/Sub-items
        'eng-feature-web-app': 'Web应用开发',
        'eng-feature-mobile-app': '移动端应用开发',
        'eng-feature-api': 'API开发・连接',
        'eng-feature-legacy': '遗留系统更新',
        'eng-feature-se-dispatch': '系统工程师派遣',
        'eng-feature-pm-dispatch': '项目经理派遣',
        'eng-feature-tech-lead': '技术负责人派遣',
        'eng-feature-term-support': '长期・短期对应',
        'eng-feature-infra-design': '基础设施设计・构建',
        'eng-feature-cloud-migration': '云迁移支持',
        'eng-feature-ops-monitoring': '运维监控・保守',
        'eng-feature-performance': '性能优化',
        'eng-feature-tech-selection': '技术选型支持',
        'eng-feature-arch-design': '架构设计',
        'eng-feature-code-review': '代码审查',
        'eng-feature-tech-training': '技术教育・培训',
        
        // Development Process Tags
        'eng-tag-hearing': '听取需求',
        'eng-tag-requirements': '需求整理',
        'eng-tag-specification': '规格制定',
        'eng-tag-system-design': '系统设计',
        'eng-tag-ui-ux-design': 'UI/UX设计',
        'eng-tag-db-design': '数据库设计',
        'eng-tag-agile-dev': '敏捷开发',
        'eng-tag-code-review-process': '代码审查',
        'eng-tag-quality-mgmt': '质量管理',
        'eng-tag-unit-test': '单元测试',
        'eng-tag-integration-test': '集成测试',
        'eng-tag-quality-assurance': '质量保证',
        'eng-tag-24-7-monitoring': '24/7监控',
        'eng-tag-maintenance': '保守对应',
        'eng-tag-feature-addition': '功能追加',
        
        // Project Management Sub-items
        'eng-pm-2week-sprint': '2周冲刺',
        'eng-pm-daily-standup': '每日站会',
        'eng-pm-sprint-review': '冲刺回顾',
        'eng-pm-retrospective': '回顾会议',
        'eng-pm-auto-build': '自动构建・测试',
        'eng-pm-auto-deploy': '自动部署',
        'eng-pm-iac': '基础设施即代码',
        'eng-pm-monitoring-logs': '监控・日志管理',
        
        // Case Studies Project Scale
        'eng-scale-100-months-ongoing': '总计100+人月（进行中）',
        'eng-scale-200-months-ongoing': '总计200+人月（进行中）',
        'eng-scale-50-months-completed': '总计50+人月（已完成）',
        
        // Detailed Case Studies
        'eng-case-detail-apparel': '中等规模服装企业',
        'eng-case-detail-ec-title': '电商网站构建',
        'eng-case-detail-ec-desc': '在传统店铺销售基础上新建在线销售渠道。采用React + Node.js架构开发高性能电商网站，实现销售额提升30%。',
        'eng-result-sales-increase': '销售额提升30%',
        'eng-result-dev-period': '开发周期4个月',
        'eng-result-mobile-support': '移动端对应',
        'eng-case-detail-manufacturing': '制造业大企业',
        'eng-case-detail-legacy-title': '核心系统更新',
        'eng-case-detail-legacy-desc': '将使用20年的遗留系统更新为云原生微服务架构。实现运维成本削减50%和处理性能提升10倍。',
        'eng-result-cost-reduction': '运维成本削减50%',
        'eng-result-performance-10x': '处理性能提升10倍',
        'eng-result-availability': '可用性99.9%',
        'eng-case-detail-fintech': '金融科技企业',
        'eng-case-detail-mobile-title': '移动端应用开发',
        'eng-case-detail-mobile-desc': '用React Native开发金融服务移动应用。满足高安全要求，通过iOS・Android同时发布加速用户获取。',
        'eng-result-simultaneous-release': '同时发布实现',
        'eng-result-high-security': '高安全性对应',
        'eng-result-user-rating': '用户评价4.8分',
        'eng-case-detail-netfinance': '网络金融服务',
        'eng-case-detail-aws-title': 'AWS云基础设施构建',
        'eng-case-detail-aws-desc': '构建包含CI/CD自动化的云基础设施。通过IaC基础设施自动化大幅改善运维效率，实现24/7监控体制。',
        'eng-result-deploy-time': '部署时间缩短90%',
        'eng-result-availability-9999': '可用性99.99%',
        'eng-result-ops-cost-reduction': '运维成本削减50%',
        
        // AI Solution Page
        'ai-title': 'AI解决方案业务',
        'ai-subtitle': '下一代AI技术解决方案',
        'ai-description': '75名以上多国籍AI工程师团队 | 平均7年以上行业经验<br>LLM・深度学习・自动驾驶・图像识别的前沿技术<br>创新性解决您的业务挑战',
        'ai-stat-projects': '年度项目',
        'ai-stat-accuracy': 'AI识别精度',
        'ai-stat-efficiency': '业务效率改善',
        
        'ai-core-title': '核心技术与解决方案',
        'ai-core-llm-title': 'LLM与深度学习',
        'ai-core-llm-desc': '大规模语言模型构建、算法优化、拥有Kaggle实绩的工程师',
        'ai-core-autonomous-title': '自动驾驶技术',
        'ai-core-autonomous-desc': '与MaaS企业合作实绩、移动数据分析・系统设计（累计50+人月）',
        'ai-core-ocr-title': 'OCR×AI图像识别',
        'ai-core-ocr-desc': '医疗AI/NLP、物流AI优化、目标99%以上识别精度',
        'ai-core-cloud-title': '云AI基础设施',
        'ai-core-cloud-desc': 'AWS/Azure/GCP认证工程师20名、大型金融机构基础设施构建实绩',
        
        'ai-services-title': 'AI解决方案服务',
        'ai-market-research-title': 'AI智能市场调研',
        'ai-market-research-badge': '行业革新',
        'ai-market-research-desc': '3周的工作在1小时内完成。通过AI Agent自动分解・多维度检索',
        'ai-market-research-feature1': '大数据检索精度提升',
        'ai-market-research-feature2': '企业知识自动关联',
        'ai-market-research-feature3': '自动报告生成',
        'ai-market-research-feature4': '实时BI输出',
        'ai-market-research-metric1': '效率：提升95%',
        'ai-market-research-metric2': '时间：缩短至1/500',
        
        'ai-hr-matching-title': 'AI人才匹配系统',
        'ai-hr-matching-badge': '专利申请中',
        'ai-hr-matching-desc': '1人/日可处理80件、匹配时间仅1分钟。实现革命性的效率化',
        'ai-hr-matching-feature1': '智能爬虫',
        'ai-hr-matching-feature2': '个性化匹配',
        'ai-hr-matching-feature3': '多维度查询支持',
        'ai-hr-matching-feature4': '自动评分',
        'ai-hr-matching-metric1': '处理能力：80件/日',
        'ai-hr-matching-metric2': '精度：提升40%',
        
        'ai-face-recognition-title': '人脸识别系统',
        'ai-face-recognition-desc': '大型银行导入实绩。通过高精度人脸识别技术，兼顾安全性与便利性',
        'ai-face-recognition-feature1': '实时人脸识别',
        'ai-face-recognition-feature2': '佩戴口罩时对应',
        'ai-face-recognition-feature3': '出入管理联动',
        'ai-face-recognition-feature4': '考勤管理系统联动',
        
        'ai-medical-ai-title': 'AI文献摘要・医疗AI',
        'ai-medical-ai-desc': '与上市医疗数据专业公司合作。论文阅读时间缩短70%',
        'ai-medical-ai-feature1': '多语言对应',
        'ai-medical-ai-feature2': '医疗NLP特化',
        'ai-medical-ai-feature3': '关键词自动提取',
        'ai-medical-ai-feature4': '摘要精度95%以上',
        
        'ai-service-robot-title': '服务机器人・配送机器人',
        'ai-service-robot-desc': '日本首次导入的先驱。与KEENON公司战略合作伙伴关系',
        'ai-service-robot-feature1': '语音识别・对话功能',
        'ai-service-robot-feature2': '自主移动・导航',
        'ai-service-robot-feature3': '情感识别技术',
        'ai-service-robot-feature4': '云联动',
        
        'ai-aiot-meter-title': 'AIoT智能仪表',
        'ai-aiot-meter-desc': '通关业务DX、工厂自动化。NB-IoT无线通信与AI图像识别的融合',
        'ai-aiot-meter-feature1': '99%识别精度目标',
        'ai-aiot-meter-feature2': '异常检测・预知保全',
        'ai-aiot-meter-feature3': '实时数据收集',
        'ai-aiot-meter-feature4': '省人化・自动化',
        
        'ai-tech-title': '技术栈与资格认证',
        'ai-tech-kaggle': 'Kaggle奖牌获得者在职',
        'ai-tech-cloud-cert': '云认证工程师20名以上',
        'ai-tech-security': '信息安全处理支援师',
        'ai-tech-pmp': 'PMP资格保有者',
        'ai-tech-ai-framework': 'AI/ML框架',
        'ai-tech-programming': '编程语言',
        'ai-tech-cloud-infra': '云・基础设施',
        'ai-tech-database': '数据库',
        
        'ai-cases-title': '导入实绩与大型项目',
        'ai-case-megabank-title': '大型银行下一代基础设施构建',
        'ai-case-megabank-desc': 'AWS共通基础设施构建・运维保守',
        'ai-case-megabank-scale': '累计100+人月（持续中）',
        'ai-case-maas-title': '大型MaaS公司自动驾驶',
        'ai-case-maas-desc': '移动数据分析・系统设计',
        'ai-case-maas-scale': '累计50+人月（持续中）',
        'ai-case-logistics-title': '物流AI优化项目',
        'ai-case-logistics-desc': 'AWS WMS系统・图像识别PoC',
        'ai-case-logistics-scale': '累计200+人月（持续中）',
        'ai-case-medical-data-title': '上市医疗数据专业公司',
        'ai-case-medical-data-desc': '大数据分析基础设施构建',
        'ai-case-medical-data-scale': '累计100+人月（持续中）',
        'ai-case-finance-client': '大型金融机构',
        'ai-case-finance-project': '人脸识别系统导入',
        'ai-case-finance-desc': '在总店及全国支店导入人脸识别系统，大幅提升安全水平。通过CI/CD自动化也改善了开发效率。',
        'ai-case-finance-result1': '安全性提升',
        'ai-case-finance-result2': '成本削减30%',
        'ai-case-finance-result3': '处理速度5倍',
        'ai-case-medical-client': '医疗法人',
        'ai-case-medical-project': 'AI文献摘要系统',
        'ai-case-medical-desc': '导入医疗论文摘要系统，支援医师研究业务。通过NLP技术也实现了诊断支援。',
        'ai-case-medical-result1': '阅读时间缩短70%',
        'ai-case-medical-result2': '信息量增加3倍',
        'ai-case-medical-result3': '研究效率提升',
        'ai-case-retail-client': '大型商业设施',
        'ai-case-retail-project': '服务机器人导入',
        'ai-case-retail-desc': '日本首次导入配餐・清洁机器人。通过导览・接客机器人，客户满意度提升20%。',
        'ai-case-retail-result1': '满意度提升20%',
        'ai-case-retail-result2': '人工费削减40%',
        'ai-case-retail-result3': '24小时对应',
        'ai-case-fintech-client': '网络金融服务',
        'ai-case-fintech-project': 'AWS云基础设施构建',
        'ai-case-fintech-desc': '构建包含CI/CD自动化的云基础设施。通过IaC基础设施自动化大幅改善运维效率。',
        'ai-case-fintech-result1': '部署时间缩短90%',
        'ai-case-fintech-result2': '可用性99.99%',
        'ai-case-fintech-result3': '运维成本削减50%',
        
        'ai-team-title': '工程师团队体制',
        'ai-team-members': '25名以上',
        'ai-team-members-desc': '多国籍工程师团队',
        'ai-team-experience': '平均7年以上',
        'ai-team-experience-desc': '行业经验',
        'ai-team-ai-ratio': '20%',
        'ai-team-ai-ratio-desc': 'AI专业工程师比率',
        'ai-team-clients': '年间20社以上',
        'ai-team-clients-desc': '客户对应实绩',
        
        'ai-process-title': '从RFP到运维的一站式对应',
        'ai-process-rfp-title': 'RFP・需求定义',
        'ai-process-rfp-desc': '从上游工程开始参与',
        'ai-process-tech-title': '技术选定・估算',
        'ai-process-tech-desc': '最优技术栈提案',
        'ai-process-dev-title': '设计・开发',
        'ai-process-dev-desc': '敏捷开发',
        'ai-process-ops-title': '运维・保守',
        'ai-process-ops-desc': '24/365支持',
        
        'ai-cta-title': '用AI解决方案创造未来',
        'ai-cta-desc': '凭借最前沿的AI技术和丰富的实绩，创新性地解决您的业务挑战。<br>请首先告诉我们您公司的课题。我们将为您提案最优的解决方案。',
        'ai-cta-contact': '联系我们',
        'ai-cta-download': '资料下载',
        
        // Enterprise Solution Page
        'enterprise-title': '企业解决方案业务',
        'enterprise-subtitle': '企业解决方案',
        'enterprise-description': '提供支持企业数字化转型的综合解决方案。',
        
        // Human Resource Page
        'hr-title': 'IT人才服务业务',
        'hr-subtitle': 'IT人力资源',
        'hr-description': '从优秀IT人才的派遣・介绍到培养，提供综合性人才解决方案。',
        
        // IoT Systems Page
        'iot-title': '智能机器人・IoT业务',
        'iot-subtitle': '智能机器人与IoT',
        'iot-description': '通过最新的IoT技术和智能机器人，实现高效的业务环境。',
        
        // Blockchain Web3 Page
        'blockchain-title': '区块链・Web3业务',
        'blockchain-subtitle': '区块链与Web3',
        'blockchain-description': '支持下一代Web3技术和区块链解决方案的开发・导入。',
        
        // Entry Form
        'form-title': '申请表单',
        'form-name': '姓名',
        'form-furigana': '姓名读音',
        'form-email': '邮箱地址',
        'form-phone': '电话号码',
        'form-free-input': '自由填写栏',
        'form-placeholder': '请填写求职动机、经验、技能等',
        'privacy-title': '个人信息处理规定',
        'privacy-p1': '应聘时填写的个人信息将根据本公司的个人信息保护管理体系进行处理。',
        'privacy-p2': '1. 个人信息仅用于招聘目的。',
        'privacy-p3': '2. 个人信息管理负责人为公司代表董事。',
        'privacy-p4': '3. 不向第三方提供个人信息。',
        'privacy-p5': '4. 个人信息处理的外部委托仅限与签署保密协议的公司。',
        'privacy-p6': '5. 向本公司提供个人信息为自愿行为，但如填写内容有缺失可能无法联系到您。',
        'privacy-p7': '6. 关于向本公司提供的个人信息的披露等请求，请通过以下方式联系我们。',
        'consent-instruction': '如同意，请在下方打勾。',
        'consent-warning': '※如不在下方打勾，将无法进入确认页面。',
        'consent-text': '我同意上述"个人信息处理规定"',
        'submit-button': '进入确认页面',
        'form-footer-company': 'Terabox股份有限公司',
        'form-footer-address': '〒104-0045 东京都中央区筑地6丁目17-4 REID-C筑地大厦 4F',
        'form-footer-tel': 'TEL 03-5542-7798',
        
        // Salary Table Education Levels
        'edu-graduate': '研究生院毕业',
        'edu-university': '大学毕业',
        'edu-college': '短期大学毕业',
        'edu-vocational-4y': '专门学校（4年制）',
        'edu-vocational': '专门学校毕业',
        'edu-high-school': '高中毕业'
    }
};

// Language switching core functionality
function switchLanguage(lang) {
    // Validate language parameter
    if (!translations[lang]) {
        console.warn(`Language "${lang}" not supported. Defaulting to Japanese.`);
        lang = 'ja';
    }

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key] !== undefined) {
            // Special handling for form placeholder
            if (element.hasAttribute('placeholder') && key === 'form-placeholder') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Store selected language in localStorage
    try {
        localStorage.setItem('terabox-language', lang);
        localStorage.setItem('selectedLanguage', lang); // Also store for strength section
    } catch (e) {
        console.warn('Unable to save language preference to localStorage:', e);
    }
    
    // Call strength section language switch if available
    if (typeof window.strengthSwitchLanguage === 'function') {
        window.strengthSwitchLanguage(lang);
    }

    // Handle language-specific images
    document.querySelectorAll('.lang-image').forEach(img => {
        img.style.display = 'none';
    });
    
    if (lang === 'ja') {
        document.querySelectorAll('.ja-only').forEach(img => {
            img.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.en-zh-only').forEach(img => {
            img.style.display = 'block';
        });
    }

    // Show language switch notification
    const langText = {
        'ja': '日本語に切り替えました',
        'en': 'Switched to English',
        'zh': '已切换到中文'
    };

    showLanguageNotification(langText[lang]);
}

// Show language switch notification with animation
function showLanguageNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.lang-notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.textContent = message;
    
    // Apply inline styles for the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #9FD500, #7FB800);
        color: #000;
        padding: 12px 20px;
        border-radius: 6px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInFade 3s ease-out forwards;
        box-shadow: 0 4px 15px rgba(159, 213, 0, 0.3);
        font-size: 14px;
        min-width: 180px;
        text-align: center;
    `;

    document.body.appendChild(notification);

    // Add animation styles if not already present
    if (!document.querySelector('#lang-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'lang-notification-styles';
        style.textContent = `
            @keyframes slideInFade {
                0% { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
                15% { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
                85% { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
                100% { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Remove notification after animation completes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Initialize language switching functionality
function initLanguageSwitching() {
    // Load saved language preference or default to Japanese
    let savedLang = 'ja'; // Default language
    
    try {
        savedLang = localStorage.getItem('terabox-language') || 'ja';
    } catch (e) {
        console.warn('Unable to access localStorage:', e);
    }

    // Validate and apply saved language
    if (translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        switchLanguage('ja');
    }

    // Add event listeners to language buttons with debugging
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    
    langButtons.forEach((btn, index) => {
        console.log(`Setting up button ${index}:`, btn.getAttribute('data-lang'));
        
        // Remove any existing listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Language button clicked:', this.getAttribute('data-lang'));
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                switchLanguage(lang);
            } else {
                console.error('Language not found:', lang);
            }
        });
        
        // Mark button as having click listener
        newBtn.hasClickListener = true;

        // Add keyboard accessibility
        newBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Utility function to get current language
function getCurrentLanguage() {
    try {
        return localStorage.getItem('terabox-language') || 'ja';
    } catch (e) {
        return 'ja';
    }
}

// Utility function to get translation for a specific key
function getTranslation(key, lang = null) {
    const currentLang = lang || getCurrentLanguage();
    return translations[currentLang] && translations[currentLang][key] 
        ? translations[currentLang][key] 
        : translations['ja'][key] || key;
}

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        initLanguageSwitching,
        getCurrentLanguage,
        getTranslation,
        translations
    };
}

// Auto-initialize when DOM is ready with delay to ensure all elements are loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all DOM elements are properly rendered
    setTimeout(() => {
        initLanguageSwitching();
    }, 100);
});

// Backup initialization on window load
window.addEventListener('load', function() {
    // Double check that language switching is working
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length > 0 && !langButtons[0].hasClickListener) {
        console.log('Backup initialization triggered');
        initLanguageSwitching();
    }
});

// Export to global scope for direct usage
window.LanguageSwitcher = {
    switchLanguage,
    initLanguageSwitching,
    getCurrentLanguage,
    getTranslation,
    translations
};