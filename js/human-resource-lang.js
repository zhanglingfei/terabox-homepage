// Human Resource Page Multilingual Support
// Dedicated translation file for human-resource.html to avoid token limitations

const hrTranslations = {
    ja: {
        // Navigation (shared with main site)
        'nav-strength': '当社の強み',
        'nav-business-news': '業務新聞',
        'nav-company': '会社概要',
        'nav-message': '代表挨拶',
        'nav-business': '事業内容',
        'nav-cases': '導入実績',
        'nav-recruit': '採用情報',
        'nav-contact': 'お問い合わせ',
        
        // Hero Section
        'hr-title': 'IT人材サービス事業',
        'hr-subtitle': 'IT Human Resource Solutions',
        'hr-description': '25名以上の多国籍エンジニアチーム | 平均7年以上の業界経験<br>年間20社以上の企業様へ最適な人材ソリューションを提供<br>人材紹介・派遣・教育訓練・プラットフォーム運営の総合サービス',
        'hr-license1': '職業紹介許可証: 13-ユ-309628',
        'hr-license2': '労働派遣事業許可証: 派13-312878',
        
        // Organization Structure
        'hr-org-title': '事業部組織体制',
        'hr-org-main': 'IT人材サービス事業部',
        'hr-org-recruitment-title': 'IT人材紹介部',
        'hr-org-recruitment-desc': '企業と人材の最適マッチング',
        'hr-org-training-title': 'IT人材教育訓練部',
        'hr-org-training-desc': '実践的スキルアップ支援',
        'hr-org-platform-title': '人材プラットフォーム運営部',
        'hr-org-platform-desc': 'AI活用による効率的な人材管理',
        
        // Core Services
        'hr-services-title': '中核サービス',
        'hr-ses-category': '人材派遣サービス（SES）',
        'hr-ses-service-title': '常駐型派遣',
        'hr-ses-service-desc': '原則2名以上のチーム体制で現場対応。過去3年間で最大12名同時常駐案件も対応実績あり。',
        'hr-ses-feature1': 'システム開発支援',
        'hr-ses-feature2': 'クラウド基盤構築',
        'hr-ses-feature3': 'データ分析・BI構築',
        'hr-ses-feature4': '運用保守サポート',
        'hr-ses-metric1': '年間20社以上',
        'hr-ses-metric2': '定着率98%',
        
        'hr-recruitment-category': '人材紹介サービス',
        'hr-recruitment-service-title': 'スペシャリスト紹介',
        'hr-recruitment-service-desc': '各技術領域の専門人材を企業ニーズに合わせて的確にマッチング。',
        'hr-recruitment-feature1': 'エンジニア紹介',
        'hr-recruitment-feature2': 'PM/PLクラス紹介',
        'hr-recruitment-feature3': 'ITコンサルタント紹介',
        'hr-recruitment-feature4': 'バイリンガル人材紹介',
        'hr-recruitment-metric1': 'マッチング成功率95%',
        'hr-recruitment-metric2': '1年後定着率98%',
        
        'hr-development-category': '受託開発サービス',
        'hr-development-service-title': 'プロジェクト受託',
        'hr-development-service-desc': '10件以上の受託開発実績。AI・Web・業務システムまで幅広く対応。',
        'hr-development-feature1': 'AI・機械学習開発',
        'hr-development-feature2': 'Webアプリケーション開発',
        'hr-development-feature3': '業務システム構築',
        'hr-development-feature4': 'モバイルアプリ開発',
        'hr-development-metric1': 'プロジェクト完遂率100%',
        'hr-development-metric2': 'リピート率85%',
        
        // Team Strength
        'hr-team-title': 'チーム実力と資格保有',
        'hr-team-size': '25名以上',
        'hr-team-size-desc': '多国籍エンジニア',
        'hr-team-experience': '平均7年以上',
        'hr-team-experience-desc': '業界経験',
        'hr-team-certs': '20名以上',
        'hr-team-certs-desc': 'クラウド認定資格',
        'hr-team-kaggle': 'Kaggle実績',
        'hr-team-kaggle-desc': 'メダリスト在籍',
        'hr-certifications-title': '保有資格・認定',
        'hr-cert-aws': 'AWS認定',
        'hr-cert-azure': 'Azure認定',
        'hr-cert-gcp': 'GCP認定',
        'hr-cert-pmp': 'PMP資格',
        'hr-cert-security': '情報処理安全確保支援士',
        
        // Technical Stack
        'hr-tech-title': '技術スタック & 専門領域',
        'hr-tech-programming': 'プログラミング言語',
        'hr-tech-aiml': 'AI/ML技術',
        'hr-tech-cloud': 'クラウド & インフラ',
        'hr-tech-database': 'データベース',
        
        // Training Programs
        'hr-training-title': '人材育成プログラム',
        'hr-training-philosophy-title': '育成理念',
        'hr-training-philosophy-desc': '能力開発体系に基づく体系的な研修プログラムで、初心者からエキスパートまで段階的なスキルアップを支援します。',
        
        'hr-training-basic-title': '新人・基礎研修',
        'hr-training-basic-it-title': '基礎ITスキル研修',
        'hr-training-basic-it-desc': 'プログラミング基礎、データベース、ネットワーク基礎知識',
        'hr-training-basic-it-duration': '期間: 3ヶ月',
        'hr-training-basic-it-format': '形式: 集合研修 + OJT',
        'hr-training-business-title': 'ビジネスマナー研修',
        'hr-training-business-desc': '社会人基礎、コミュニケーション、プレゼンテーション',
        'hr-training-business-duration': '期間: 2週間',
        'hr-training-business-format': '形式: 集合研修',
        
        'hr-training-technical-title': '技術スキル研修',
        'hr-training-cloud-title': 'クラウド技術研修',
        'hr-training-cloud-desc': 'AWS/Azure認定資格取得支援、実践的なクラウド構築',
        'hr-training-cloud-duration': '期間: 2ヶ月',
        'hr-training-cloud-format': '形式: ハンズオン + eラーニング',
        'hr-training-ai-title': 'AI・機械学習研修',
        'hr-training-ai-desc': 'Python、TensorFlow、機械学習アルゴリズム実装',
        'hr-training-ai-duration': '期間: 3ヶ月',
        'hr-training-ai-format': '形式: プロジェクト型学習',
        'hr-training-devops-title': 'DevOps研修',
        'hr-training-devops-desc': 'CI/CD、コンテナ技術、インフラ自動化',
        'hr-training-devops-duration': '期間: 1.5ヶ月',
        'hr-training-devops-format': '形式: 実践型ワークショップ',
        
        'hr-training-management-title': 'マネジメント研修',
        'hr-training-pm-title': 'プロジェクト管理研修',
        'hr-training-pm-desc': 'PMP資格取得支援、アジャイル開発手法、リスク管理',
        'hr-training-pm-duration': '期間: 2ヶ月',
        'hr-training-pm-format': '形式: ケーススタディ',
        'hr-training-leadership-title': 'リーダーシップ研修',
        'hr-training-leadership-desc': 'チームマネジメント、人材育成、組織運営',
        'hr-training-leadership-duration': '期間: 1ヶ月',
        'hr-training-leadership-format': '形式: ワークショップ',
        
        // Industry Experience
        'hr-industry-title': '重点対応業界',
        'hr-industry-finance-title': '金融・保険',
        'hr-industry-finance-desc': '多数の金融保険業界経験者在籍。高度なセキュリティ意識と専門知識を保有。',
        'hr-industry-finance-project1': 'メガバンク基盤構築',
        'hr-industry-finance-project2': 'FinTechシステム開発',
        'hr-industry-finance-project3': 'リスク管理システム',
        
        'hr-industry-healthcare-title': '医療・ヘルスケア',
        'hr-industry-healthcare-desc': '医療AI/NLP、ビッグデータ分析の専門知識と豊富な実績。',
        'hr-industry-healthcare-project1': '医療データ分析基盤',
        'hr-industry-healthcare-project2': 'AI診断支援システム',
        'hr-industry-healthcare-project3': '電子カルテシステム',
        
        'hr-industry-logistics-title': '物流・製造',
        'hr-industry-logistics-desc': '物流最適化、工場自動化、IoTソリューションの実装経験。',
        'hr-industry-logistics-project1': 'WMSシステム開発',
        'hr-industry-logistics-project2': 'AI画像認識PoC',
        'hr-industry-logistics-project3': 'IoT機器連携',
        
        'hr-industry-retail-title': '小売・EC',
        'hr-industry-retail-desc': 'ECプラットフォーム構築、データ分析、顧客体験最適化。',
        'hr-industry-retail-project1': 'ECサイト構築',
        'hr-industry-retail-project2': '推薦システム開発',
        'hr-industry-retail-project3': '在庫管理システム',
        
        // Service Models
        'hr-models-title': '柔軟な協業モデル',
        'hr-model-ses-title': '常駐型（SES）',
        'hr-model-ses-desc': 'お客様のオフィスに常駐し、プロジェクトチームの一員として業務遂行',
        'hr-model-ses-feature1': '2名以上のチーム体制',
        'hr-model-ses-feature2': '現場密着型サポート',
        'hr-model-ses-feature3': '柔軟な期間設定',
        
        'hr-model-contract-title': '受託開発型',
        'hr-model-contract-desc': '要件定義から納品まで、プロジェクト全体を弊社で請負実施',
        'hr-model-contract-feature1': '固定価格契約対応',
        'hr-model-contract-feature2': '品質保証付き',
        'hr-model-contract-feature3': 'アフターサポート',
        
        'hr-model-hybrid-title': 'ハイブリッド型',
        'hr-model-hybrid-desc': 'プロジェクトフェーズに応じて、常駐と受託を柔軟に組み合わせ',
        'hr-model-hybrid-feature1': 'フェーズ別最適化',
        'hr-model-hybrid-feature2': 'コスト効率向上',
        'hr-model-hybrid-feature3': 'リスク分散',
        
        'hr-model-remote-title': 'リモート型',
        'hr-model-remote-desc': '完全リモートまたはハイブリッドワークでの業務遂行',
        'hr-model-remote-feature1': 'グローバル人材活用',
        'hr-model-remote-feature2': '24時間サポート可能',
        'hr-model-remote-feature3': 'コスト削減',
        
        // Platform Features
        'hr-platform-title': '人材プラットフォーム',
        'hr-platform-intro-title': 'AI搭載の次世代人材管理システム',
        'hr-platform-intro-desc': '機械学習アルゴリズムによる高精度マッチングと、リアルタイムスキル評価で人材活用を最適化',
        'hr-platform-ai-title': 'AIマッチング技術',
        'hr-platform-ai-desc': '1人/日80件処理可能、マッチング時間1分の革新的システム',
        'hr-platform-skill-title': 'スキル可視化',
        'hr-platform-skill-desc': '技術スキル、ソフトスキルを多角的に評価し、レーダーチャートで可視化',
        'hr-platform-evaluation-title': '実績評価システム',
        'hr-platform-evaluation-desc': 'プロジェクト成果、顧客評価、同僚評価を統合した総合評価システム',
        'hr-platform-career-title': 'キャリアパス提案',
        'hr-platform-career-desc': '個人のスキルと市場動向を分析し、最適なキャリアパスを提案',
        
        // Success Metrics
        'hr-metrics-title': '実績データ',
        'hr-metric-talent': '登録人材数',
        'hr-metric-companies': '年間取引企業数',
        'hr-metric-matching': 'マッチング成功率',
        'hr-metric-retention': '1年後定着率',
        
        // Client Stories
        'hr-stories-title': '導入事例',
        'hr-story-bank-title': 'メガバンク様',
        'hr-story-bank-category': '金融・基盤構築',
        'hr-story-bank-project': 'AWS共通基盤構築プロジェクト',
        'hr-story-bank-desc': '次期基盤構築に向けて、クラウドアーキテクト5名、DevOpsエンジニア8名を派遣。プロジェクト期間中、安定的な人材供給により計画通りの進行を実現。',
        'hr-story-bank-result1': '派遣人数: 13名',
        'hr-story-bank-result2': '期間: 継続中（100+人月）',
        'hr-story-bank-result3': '満足度: ★★★★★',
        
        'hr-story-maas-title': '大手MaaS企業様',
        'hr-story-maas-category': '自動運転・AI開発',
        'hr-story-maas-project': '自動運転モビリティ開発支援',
        'hr-story-maas-desc': 'AIエンジニア、データサイエンティストを中心に専門チームを編成。機械学習モデル開発からシステム設計まで一貫して支援。',
        'hr-story-maas-result1': '派遣人数: 8名',
        'hr-story-maas-result2': '期間: 継続中（50+人月）',
        'hr-story-maas-result3': '技術領域: AI/ML/自動運転',
        
        // Career Support
        'hr-support-title': 'キャリア支援サービス',
        'hr-support-counseling-title': 'キャリアカウンセリング',
        'hr-support-counseling-desc': '専門カウンセラーによる個別相談で、最適なキャリアパスを一緒に描きます',
        'hr-support-certification-title': '資格取得支援',
        'hr-support-certification-desc': '受験費用支援、学習教材提供、専門講師による対策講座',
        'hr-support-job-title': '転職活動支援',
        'hr-support-job-desc': '履歴書・職務経歴書の添削、面接対策、企業研究サポート',
        'hr-support-community-title': 'コミュニティ活動',
        'hr-support-community-desc': '技術勉強会、業界交流会、メンタリングプログラム',
        
        // Contact CTA
        'hr-cta-title': 'IT人材のことなら、TERABOXにお任せください',
        'hr-cta-desc': '人材採用・育成・活用に関するあらゆるお悩みを解決します。<br>25名以上の多国籍エンジニアチームと豊富な実績で、貴社の成長を支援します。',
        'hr-cta-contact': 'お問い合わせ',
        'hr-cta-download': 'サービス資料ダウンロード'
    },
    
    en: {
        // Navigation (shared with main site)
        'nav-strength': 'Our Strengths',
        'nav-business-news': 'Business News',
        'nav-company': 'Company Overview',
        'nav-message': 'CEO Message',
        'nav-business': 'Business Areas',
        'nav-cases': 'Case Studies',
        'nav-recruit': 'Careers',
        'nav-contact': 'Contact Us',
        
        // Hero Section
        'hr-title': 'IT Human Resource Services',
        'hr-subtitle': 'IT Human Resource Solutions',
        'hr-description': '25+ multinational engineer team | Average 7+ years industry experience<br>Providing optimal talent solutions to 20+ companies annually<br>Comprehensive services: recruitment, staffing, training, platform operations',
        'hr-license1': 'Employment Agency License: 13-Yu-309628',
        'hr-license2': 'Labor Dispatch Business License: Dispatch 13-312878',
        
        // Organization Structure
        'hr-org-title': 'Business Unit Organization',
        'hr-org-main': 'IT Human Resource Services Division',
        'hr-org-recruitment-title': 'IT Talent Recruitment Department',
        'hr-org-recruitment-desc': 'Optimal matching of companies and talent',
        'hr-org-training-title': 'IT Talent Training Department',
        'hr-org-training-desc': 'Practical skill development support',
        'hr-org-platform-title': 'Talent Platform Operations Department',
        'hr-org-platform-desc': 'Efficient talent management using AI',
        
        // Core Services
        'hr-services-title': 'Core Services',
        'hr-ses-category': 'Staff Dispatch Services (SES)',
        'hr-ses-service-title': 'On-site Staffing',
        'hr-ses-service-desc': 'On-site support with teams of 2+ members in principle. Track record of up to 12 simultaneous on-site personnel over the past 3 years.',
        'hr-ses-feature1': 'System Development Support',
        'hr-ses-feature2': 'Cloud Infrastructure Construction',
        'hr-ses-feature3': 'Data Analysis & BI Development',
        'hr-ses-feature4': 'Operations & Maintenance Support',
        'hr-ses-metric1': '20+ companies annually',
        'hr-ses-metric2': '98% retention rate',
        
        'hr-recruitment-category': 'Talent Recruitment Services',
        'hr-recruitment-service-title': 'Specialist Placement',
        'hr-recruitment-service-desc': 'Accurate matching of specialized talent in each technical field to meet company needs.',
        'hr-recruitment-feature1': 'Engineer Placement',
        'hr-recruitment-feature2': 'PM/PL Class Placement',
        'hr-recruitment-feature3': 'IT Consultant Placement',
        'hr-recruitment-feature4': 'Bilingual Talent Placement',
        'hr-recruitment-metric1': '95% matching success rate',
        'hr-recruitment-metric2': '98% retention rate after 1 year',
        
        'hr-development-category': 'Contract Development Services',
        'hr-development-service-title': 'Project Outsourcing',
        'hr-development-service-desc': '10+ contract development projects completed. Wide-ranging support from AI to web and business systems.',
        'hr-development-feature1': 'AI & Machine Learning Development',
        'hr-development-feature2': 'Web Application Development',
        'hr-development-feature3': 'Business System Construction',
        'hr-development-feature4': 'Mobile App Development',
        'hr-development-metric1': '100% project completion rate',
        'hr-development-metric2': '85% repeat client rate',
        
        // Team Strength
        'hr-team-title': 'Team Capabilities & Certifications',
        'hr-team-size': '25+ Members',
        'hr-team-size-desc': 'Multinational Engineers',
        'hr-team-experience': 'Average 7+ Years',
        'hr-team-experience-desc': 'Industry Experience',
        'hr-team-certs': '20+ Certified',
        'hr-team-certs-desc': 'Cloud Certifications',
        'hr-team-kaggle': 'Kaggle Track Record',
        'hr-team-kaggle-desc': 'Medal Winners',
        'hr-certifications-title': 'Certifications & Credentials',
        'hr-cert-aws': 'AWS Certified',
        'hr-cert-azure': 'Azure Certified',
        'hr-cert-gcp': 'GCP Certified',
        'hr-cert-pmp': 'PMP Qualified',
        'hr-cert-security': 'Information Security Professional',
        
        // Technical Stack
        'hr-tech-title': 'Technology Stack & Expertise',
        'hr-tech-programming': 'Programming Languages',
        'hr-tech-aiml': 'AI/ML Technologies',
        'hr-tech-cloud': 'Cloud & Infrastructure',
        'hr-tech-database': 'Databases',
        
        // Training Programs
        'hr-training-title': 'Talent Development Programs',
        'hr-training-philosophy-title': 'Training Philosophy',
        'hr-training-philosophy-desc': 'Systematic training programs based on capability development framework, supporting step-by-step skill enhancement from beginners to experts.',
        
        'hr-training-basic-title': 'New Employee & Basic Training',
        'hr-training-basic-it-title': 'Basic IT Skills Training',
        'hr-training-basic-it-desc': 'Programming fundamentals, databases, network basics',
        'hr-training-basic-it-duration': 'Duration: 3 months',
        'hr-training-basic-it-format': 'Format: Group training + OJT',
        'hr-training-business-title': 'Business Manner Training',
        'hr-training-business-desc': 'Professional fundamentals, communication, presentation',
        'hr-training-business-duration': 'Duration: 2 weeks',
        'hr-training-business-format': 'Format: Group training',
        
        'hr-training-technical-title': 'Technical Skills Training',
        'hr-training-cloud-title': 'Cloud Technology Training',
        'hr-training-cloud-desc': 'AWS/Azure certification support, practical cloud construction',
        'hr-training-cloud-duration': 'Duration: 2 months',
        'hr-training-cloud-format': 'Format: Hands-on + e-learning',
        'hr-training-ai-title': 'AI & Machine Learning Training',
        'hr-training-ai-desc': 'Python, TensorFlow, machine learning algorithm implementation',
        'hr-training-ai-duration': 'Duration: 3 months',
        'hr-training-ai-format': 'Format: Project-based learning',
        'hr-training-devops-title': 'DevOps Training',
        'hr-training-devops-desc': 'CI/CD, container technology, infrastructure automation',
        'hr-training-devops-duration': 'Duration: 1.5 months',
        'hr-training-devops-format': 'Format: Practical workshops',
        
        'hr-training-management-title': 'Management Training',
        'hr-training-pm-title': 'Project Management Training',
        'hr-training-pm-desc': 'PMP certification support, agile development methods, risk management',
        'hr-training-pm-duration': 'Duration: 2 months',
        'hr-training-pm-format': 'Format: Case studies',
        'hr-training-leadership-title': 'Leadership Training',
        'hr-training-leadership-desc': 'Team management, talent development, organizational operations',
        'hr-training-leadership-duration': 'Duration: 1 month',
        'hr-training-leadership-format': 'Format: Workshops',
        
        // Industry Experience
        'hr-industry-title': 'Key Industry Focus',
        'hr-industry-finance-title': 'Finance & Insurance',
        'hr-industry-finance-desc': 'Many financial and insurance industry experienced professionals. Possess advanced security awareness and specialized knowledge.',
        'hr-industry-finance-project1': 'Megabank Infrastructure Construction',
        'hr-industry-finance-project2': 'FinTech System Development',
        'hr-industry-finance-project3': 'Risk Management Systems',
        
        'hr-industry-healthcare-title': 'Healthcare & Medical',
        'hr-industry-healthcare-desc': 'Specialized knowledge and extensive experience in medical AI/NLP, big data analysis.',
        'hr-industry-healthcare-project1': 'Medical Data Analysis Platform',
        'hr-industry-healthcare-project2': 'AI Diagnostic Support System',
        'hr-industry-healthcare-project3': 'Electronic Medical Record System',
        
        'hr-industry-logistics-title': 'Logistics & Manufacturing',
        'hr-industry-logistics-desc': 'Implementation experience in logistics optimization, factory automation, IoT solutions.',
        'hr-industry-logistics-project1': 'WMS System Development',
        'hr-industry-logistics-project2': 'AI Image Recognition PoC',
        'hr-industry-logistics-project3': 'IoT Device Integration',
        
        'hr-industry-retail-title': 'Retail & E-commerce',
        'hr-industry-retail-desc': 'E-commerce platform construction, data analysis, customer experience optimization.',
        'hr-industry-retail-project1': 'E-commerce Site Development',
        'hr-industry-retail-project2': 'Recommendation System Development',
        'hr-industry-retail-project3': 'Inventory Management System',
        
        // Service Models
        'hr-models-title': 'Flexible Collaboration Models',
        'hr-model-ses-title': 'On-site Staffing (SES)',
        'hr-model-ses-desc': 'Work on-site at client offices as project team members',
        'hr-model-ses-feature1': 'Teams of 2+ members',
        'hr-model-ses-feature2': 'On-site dedicated support',
        'hr-model-ses-feature3': 'Flexible duration',
        
        'hr-model-contract-title': 'Contract Development',
        'hr-model-contract-desc': 'Full project outsourcing from requirements definition to delivery',
        'hr-model-contract-feature1': 'Fixed-price contracts',
        'hr-model-contract-feature2': 'Quality guarantee',
        'hr-model-contract-feature3': 'After-sales support',
        
        'hr-model-hybrid-title': 'Hybrid Model',
        'hr-model-hybrid-desc': 'Flexible combination of on-site and contract work based on project phases',
        'hr-model-hybrid-feature1': 'Phase-specific optimization',
        'hr-model-hybrid-feature2': 'Cost efficiency improvement',
        'hr-model-hybrid-feature3': 'Risk distribution',
        
        'hr-model-remote-title': 'Remote Model',
        'hr-model-remote-desc': 'Fully remote or hybrid work execution',
        'hr-model-remote-feature1': 'Global talent utilization',
        'hr-model-remote-feature2': '24/7 support available',
        'hr-model-remote-feature3': 'Cost reduction',
        
        // Platform Features
        'hr-platform-title': 'Talent Platform',
        'hr-platform-intro-title': 'Next-Generation AI-Powered Talent Management System',
        'hr-platform-intro-desc': 'Optimize talent utilization with high-precision matching through machine learning algorithms and real-time skill evaluation',
        'hr-platform-ai-title': 'AI Matching Technology',
        'hr-platform-ai-desc': 'Revolutionary system processing 80 cases per person per day, 1-minute matching time',
        'hr-platform-skill-title': 'Skill Visualization',
        'hr-platform-skill-desc': 'Multi-dimensional evaluation of technical and soft skills, visualized in radar charts',
        'hr-platform-evaluation-title': 'Performance Evaluation System',
        'hr-platform-evaluation-desc': 'Comprehensive evaluation system integrating project results, customer evaluations, and peer reviews',
        'hr-platform-career-title': 'Career Path Recommendations',
        'hr-platform-career-desc': 'Analyze individual skills and market trends to propose optimal career paths',
        
        // Success Metrics
        'hr-metrics-title': 'Performance Data',
        'hr-metric-talent': 'Registered Talent',
        'hr-metric-companies': 'Annual Client Companies',
        'hr-metric-matching': 'Matching Success Rate',
        'hr-metric-retention': '1-Year Retention Rate',
        
        // Client Stories
        'hr-stories-title': 'Implementation Cases',
        'hr-story-bank-title': 'Megabank Client',
        'hr-story-bank-category': 'Finance & Infrastructure',
        'hr-story-bank-project': 'AWS Common Infrastructure Project',
        'hr-story-bank-desc': 'Dispatched 5 cloud architects and 8 DevOps engineers for next-generation infrastructure. Stable talent supply ensured project proceeded as planned.',
        'hr-story-bank-result1': 'Personnel: 13 members',
        'hr-story-bank-result2': 'Duration: Ongoing (100+ person-months)',
        'hr-story-bank-result3': 'Satisfaction: ★★★★★',
        
        'hr-story-maas-title': 'Major MaaS Company',
        'hr-story-maas-category': 'Autonomous Driving & AI Development',
        'hr-story-maas-project': 'Autonomous Mobility Development Support',
        'hr-story-maas-desc': 'Formed specialist team centered on AI engineers and data scientists. Provided consistent support from ML model development to system design.',
        'hr-story-maas-result1': 'Personnel: 8 members',
        'hr-story-maas-result2': 'Duration: Ongoing (50+ person-months)',
        'hr-story-maas-result3': 'Technology: AI/ML/Autonomous Driving',
        
        // Career Support
        'hr-support-title': 'Career Support Services',
        'hr-support-counseling-title': 'Career Counseling',
        'hr-support-counseling-desc': 'Individual consultations with professional counselors to design optimal career paths together',
        'hr-support-certification-title': 'Certification Support',
        'hr-support-certification-desc': 'Exam fee support, learning materials, specialized instructor courses',
        'hr-support-job-title': 'Job Search Support',
        'hr-support-job-desc': 'Resume and CV editing, interview preparation, company research support',
        'hr-support-community-title': 'Community Activities',
        'hr-support-community-desc': 'Technical study groups, industry networking, mentoring programs',
        
        // Contact CTA
        'hr-cta-title': 'For IT Human Resources, Trust TERABOX',
        'hr-cta-desc': 'We solve all your concerns regarding talent recruitment, development, and utilization.<br>Support your company\'s growth with our 25+ multinational engineer team and extensive track record.',
        'hr-cta-contact': 'Contact Us',
        'hr-cta-download': 'Service Materials Download'
    },
    
    zh: {
        // Navigation (shared with main site)
        'nav-strength': '公司优势',
        'nav-business-news': '业务新闻',
        'nav-company': '公司概要',
        'nav-message': '董事长致辞',
        'nav-business': '业务内容',
        'nav-cases': '导入实绩',
        'nav-recruit': '招聘信息',
        'nav-contact': '联系我们',
        
        // Hero Section
        'hr-title': 'IT人材服务事业',
        'hr-subtitle': 'IT Human Resource Solutions',
        'hr-description': '25名以上多国籍工程师团队 | 平均7年以上行业经验<br>每年为20家以上企业提供最优人才解决方案<br>人才介绍・派遣・教育培训・平台运营的综合服务',
        'hr-license1': '有偿职业介绍许可证: 13-ユ-309628',
        'hr-license2': '劳动者派遣事业许可证: 派13-312878',
        
        // Organization Structure
        'hr-org-title': '事业部组织体制',
        'hr-org-main': 'IT人材服务事业部',
        'hr-org-recruitment-title': 'IT人才介绍部',
        'hr-org-recruitment-desc': '企业与人才的最优匹配',
        'hr-org-training-title': 'IT人才教育培训部',
        'hr-org-training-desc': '实践性技能提升支持',
        'hr-org-platform-title': '人才平台运营部',
        'hr-org-platform-desc': 'AI活用的高效人才管理',
        
        // Core Services
        'hr-services-title': '核心服务',
        'hr-ses-category': '人才派遣服务（SES）',
        'hr-ses-service-title': '常驻型派遣',
        'hr-ses-service-desc': '原则上以2名以上的团队体制进行现场对应。过去3年间有最大12名同时常驻案件的对应实绩。',
        'hr-ses-feature1': '系统开发支持',
        'hr-ses-feature2': '云基础设施构建',
        'hr-ses-feature3': '数据分析・BI构建',
        'hr-ses-feature4': '运维保守支持',
        'hr-ses-metric1': '年间20家以上',
        'hr-ses-metric2': '留存率98%',
        
        'hr-recruitment-category': '人才介绍服务',
        'hr-recruitment-service-title': '专家介绍',
        'hr-recruitment-service-desc': '根据企业需求，准确匹配各技术领域的专业人才。',
        'hr-recruitment-feature1': '工程师介绍',
        'hr-recruitment-feature2': 'PM/PL级别介绍',
        'hr-recruitment-feature3': 'IT顾问介绍',
        'hr-recruitment-feature4': '双语人才介绍',
        'hr-recruitment-metric1': '匹配成功率95%',
        'hr-recruitment-metric2': '1年后留存率98%',
        
        'hr-development-category': '受托开发服务',
        'hr-development-service-title': '项目承包',
        'hr-development-service-desc': '10件以上的受托开发实绩。从AI・Web・业务系统到广泛对应。',
        'hr-development-feature1': 'AI・机器学习开发',
        'hr-development-feature2': 'Web应用开发',
        'hr-development-feature3': '业务系统构建',
        'hr-development-feature4': '移动应用开发',
        'hr-development-metric1': '项目完成率100%',
        'hr-development-metric2': '重复率85%',
        
        // Team Strength
        'hr-team-title': '团队实力与资格保有',
        'hr-team-size': '25名以上',
        'hr-team-size-desc': '多国籍工程师',
        'hr-team-experience': '平均7年以上',
        'hr-team-experience-desc': '行业经验',
        'hr-team-certs': '20名以上',
        'hr-team-certs-desc': '云认证资格',
        'hr-team-kaggle': 'Kaggle实绩',
        'hr-team-kaggle-desc': '奖牌获得者在籍',
        'hr-certifications-title': '保有资格・认定',
        'hr-cert-aws': 'AWS认定',
        'hr-cert-azure': 'Azure认定',
        'hr-cert-gcp': 'GCP认定',
        'hr-cert-pmp': 'PMP资格',
        'hr-cert-security': '信息处理安全确保支援士',
        
        // Technical Stack
        'hr-tech-title': '技术栈 & 专门领域',
        'hr-tech-programming': '编程语言',
        'hr-tech-aiml': 'AI/ML技术',
        'hr-tech-cloud': '云 & 基础设施',
        'hr-tech-database': '数据库',
        
        // Training Programs
        'hr-training-title': '人才培养项目',
        'hr-training-philosophy-title': '培养理念',
        'hr-training-philosophy-desc': '基于能力开发体系的系统性研修项目，支持从初学者到专家的阶段性技能提升。',
        
        'hr-training-basic-title': '新人・基础研修',
        'hr-training-basic-it-title': '基础IT技能研修',
        'hr-training-basic-it-desc': '编程基础、数据库、网络基础知识',
        'hr-training-basic-it-duration': '期间: 3个月',
        'hr-training-basic-it-format': '形式: 集合研修 + OJT',
        'hr-training-business-title': '商务礼仪研修',
        'hr-training-business-desc': '社会人基础、沟通、演示',
        'hr-training-business-duration': '期间: 2周',
        'hr-training-business-format': '形式: 集合研修',
        
        'hr-training-technical-title': '技术技能研修',
        'hr-training-cloud-title': '云技术研修',
        'hr-training-cloud-desc': 'AWS/Azure认定资格取得支援、实践性云构建',
        'hr-training-cloud-duration': '期间: 2个月',
        'hr-training-cloud-format': '形式: 动手实操 + e-learning',
        'hr-training-ai-title': 'AI・机器学习研修',
        'hr-training-ai-desc': 'Python、TensorFlow、机器学习算法实现',
        'hr-training-ai-duration': '期间: 3个月',
        'hr-training-ai-format': '形式: 项目型学习',
        'hr-training-devops-title': 'DevOps研修',
        'hr-training-devops-desc': 'CI/CD、容器技术、基础设施自动化',
        'hr-training-devops-duration': '期间: 1.5个月',
        'hr-training-devops-format': '形式: 实践型研讨会',
        
        'hr-training-management-title': '管理研修',
        'hr-training-pm-title': '项目管理研修',
        'hr-training-pm-desc': 'PMP资格取得支援、敏捷开发手法、风险管理',
        'hr-training-pm-duration': '期间: 2个月',
        'hr-training-pm-format': '形式: 案例研究',
        'hr-training-leadership-title': '领导力研修',
        'hr-training-leadership-desc': '团队管理、人才培养、组织运营',
        'hr-training-leadership-duration': '期间: 1个月',
        'hr-training-leadership-format': '形式: 研讨会',
        
        // Industry Experience
        'hr-industry-title': '重点对应行业',
        'hr-industry-finance-title': '金融・保险',
        'hr-industry-finance-desc': '众多金融保险行业经验者在籍。拥有高度的安全意识和专门知识。',
        'hr-industry-finance-project1': '大型银行基础设施构建',
        'hr-industry-finance-project2': 'FinTech系统开发',
        'hr-industry-finance-project3': '风险管理系统',
        
        'hr-industry-healthcare-title': '医疗・健康护理',
        'hr-industry-healthcare-desc': '医疗AI/NLP、大数据分析的专门知识和丰富实绩。',
        'hr-industry-healthcare-project1': '医疗数据分析基础设施',
        'hr-industry-healthcare-project2': 'AI诊断支持系统',
        'hr-industry-healthcare-project3': '电子病历系统',
        
        'hr-industry-logistics-title': '物流・制造',
        'hr-industry-logistics-desc': '物流优化、工厂自动化、IoT解决方案的实现经验。',
        'hr-industry-logistics-project1': 'WMS系统开发',
        'hr-industry-logistics-project2': 'AI图像识别PoC',
        'hr-industry-logistics-project3': 'IoT设备联接',
        
        'hr-industry-retail-title': '零售・EC',
        'hr-industry-retail-desc': 'EC平台构建、数据分析、客户体验优化。',
        'hr-industry-retail-project1': 'EC网站构建',
        'hr-industry-retail-project2': '推荐系统开发',
        'hr-industry-retail-project3': '库存管理系统',
        
        // Service Models
        'hr-models-title': '灵活的合作模式',
        'hr-model-ses-title': '常驻型（SES）',
        'hr-model-ses-desc': '常驻客户办公室，作为项目团队成员执行业务',
        'hr-model-ses-feature1': '2名以上的团队体制',
        'hr-model-ses-feature2': '现场密着型支持',
        'hr-model-ses-feature3': '灵活的期间设定',
        
        'hr-model-contract-title': '受托开发型',
        'hr-model-contract-desc': '从需求定义到交付，整个项目由本公司承包实施',
        'hr-model-contract-feature1': '固定价格合同对应',
        'hr-model-contract-feature2': '品质保证',
        'hr-model-contract-feature3': '售后支持',
        
        'hr-model-hybrid-title': '混合型',
        'hr-model-hybrid-desc': '根据项目阶段，灵活组合常驻和承包',
        'hr-model-hybrid-feature1': '阶段别优化',
        'hr-model-hybrid-feature2': '成本效率提升',
        'hr-model-hybrid-feature3': '风险分散',
        
        'hr-model-remote-title': '远程型',
        'hr-model-remote-desc': '完全远程或混合工作的业务执行',
        'hr-model-remote-feature1': '全球人才活用',
        'hr-model-remote-feature2': '24小时支持可能',
        'hr-model-remote-feature3': '成本削减',
        
        // Platform Features
        'hr-platform-title': '人才平台',
        'hr-platform-intro-title': 'AI搭载的下一代人才管理系统',
        'hr-platform-intro-desc': '通过机器学习算法的高精度匹配和实时技能评价，优化人才活用',
        'hr-platform-ai-title': 'AI匹配技术',
        'hr-platform-ai-desc': '每人每日80件处理可能，匹配时间1分钟的革新系统',
        'hr-platform-skill-title': '技能可视化',
        'hr-platform-skill-desc': '多角度评价技术技能、软技能，用雷达图可视化',
        'hr-platform-evaluation-title': '实绩评价系统',
        'hr-platform-evaluation-desc': '整合项目成果、客户评价、同事评价的综合评价系统',
        'hr-platform-career-title': '职业路径建议',
        'hr-platform-career-desc': '分析个人技能和市场动向，提出最优职业路径',
        
        // Success Metrics
        'hr-metrics-title': '实绩数据',
        'hr-metric-talent': '注册人才数',
        'hr-metric-companies': '年间交易企业数',
        'hr-metric-matching': '匹配成功率',
        'hr-metric-retention': '1年后留存率',
        
        // Client Stories
        'hr-stories-title': '导入事例',
        'hr-story-bank-title': '大型银行',
        'hr-story-bank-category': '金融・基础设施构建',
        'hr-story-bank-project': 'AWS共通基础设施构建项目',
        'hr-story-bank-desc': '为了下一代基础设施构建，派遣了云架构师5名、DevOps工程师8名。项目期间，通过稳定的人才供给实现了按计划进行。',
        'hr-story-bank-result1': '派遣人数: 13名',
        'hr-story-bank-result2': '期间: 继续中（100+人月）',
        'hr-story-bank-result3': '满意度: ★★★★★',
        
        'hr-story-maas-title': '大型MaaS企业',
        'hr-story-maas-category': '自动驾驶・AI开发',
        'hr-story-maas-project': '自动驾驶移动性开发支援',
        'hr-story-maas-desc': '以AI工程师、数据科学家为中心组建专门团队。从机器学习模型开发到系统设计一贯支援。',
        'hr-story-maas-result1': '派遣人数: 8名',
        'hr-story-maas-result2': '期间: 继续中（50+人月）',
        'hr-story-maas-result3': '技术领域: AI/ML/自动驾驶',
        
        // Career Support
        'hr-support-title': '职业支援服务',
        'hr-support-counseling-title': '职业咨询',
        'hr-support-counseling-desc': '通过专业咨询师的个别咨询，一起描绘最优职业路径',
        'hr-support-certification-title': '资格取得支援',
        'hr-support-certification-desc': '应试费用支援、学习教材提供、专门讲师的对策讲座',
        'hr-support-job-title': '求职活动支援',
        'hr-support-job-desc': '简历・工作经历书的修改、面试对策、企业研究支持',
        'hr-support-community-title': '社区活动',
        'hr-support-community-desc': '技术学习会、行业交流会、导师项目',
        
        // Contact CTA
        'hr-cta-title': 'IT人才的事情，就交给TERABOX',
        'hr-cta-desc': '解决关于人才采用・培养・活用的所有烦恼。<br>以25名以上的多国籍工程师团队和丰富实绩，支援贵公司的成长。',
        'hr-cta-contact': '联系我们',
        'hr-cta-download': '服务资料下载'
    }
};

// Language switching functionality specifically for Human Resource page
function hrSwitchLanguage(lang) {
    // Validate language parameter
    if (!hrTranslations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }

    const translations = hrTranslations[lang];
    
    // Update all elements with data-lang-key attributes
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key]) {
            // Handle HTML content (like line breaks)
            if (translations[key].includes('<br>')) {
                element.innerHTML = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Handle organization chart images
    const jaImages = document.querySelectorAll('.ja-only');
    const enZhImages = document.querySelectorAll('.en-zh-only');
    
    if (lang === 'ja') {
        jaImages.forEach(img => img.style.display = 'block');
        enZhImages.forEach(img => img.style.display = 'none');
    } else {
        jaImages.forEach(img => img.style.display = 'none');
        enZhImages.forEach(img => img.style.display = 'block');
    }
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Store current language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize Human Resource page language functionality
function initHRLanguageSwitcher() {
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            hrSwitchLanguage(lang);
        });
    });
    
    // Load saved language preference or default to Japanese
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ja';
    hrSwitchLanguage(savedLanguage);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(initHRLanguageSwitcher, 100);
});