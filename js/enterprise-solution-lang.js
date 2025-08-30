// Enterprise Solution Page Language Switching
const enterpriseTranslations = {
    ja: {
        // Header/Navigation (shared)
        'nav-strength': '当社の強み',
        'nav-business-news': '業務新聞',
        'nav-company': '会社概要',
        'nav-message': '代表挨拶',
        'nav-business': '事業内容',
        'nav-cases': '導入実績',
        'nav-recruit': '採用情報',
        'nav-contact': 'お問い合わせ',

        // Hero Section
        'enterprise-title': 'エンタープライズソリューション事業',
        'enterprise-subtitle': 'Enterprise Digital Transformation',
        'enterprise-description': '25名以上の多国籍エンジニアチーム | 平均7年以上の業界経験<br>ローコード・データ分析・セキュリティの専門技術で<br>企業の業務効率化とデジタル変革を支援する総合的なエンタープライズソリューションを提供します。',
        'enterprise-stat1': '企業導入実績',
        'enterprise-stat2': '開発期間短縮',
        'enterprise-stat3': '業務効率向上',

        // Services Overview Section
        'services-title': 'サービス概要 & 企業ソリューション',
        'service1-title': 'ローコードプラットフォーム',
        'service1-desc': 'プログラミング知識不要で業務アプリケーションを構築できるローコード開発プラットフォームを提供します。',
        'service1-feature1': 'ドラッグ&ドロップ操作',
        'service1-feature2': '既存システム連携',
        'service1-feature3': 'ワークフロー自動化',
        'service1-feature4': 'モバイル対応',
        
        'service2-title': '勤怠管理システム',
        'service2-desc': 'クラウドベースの勤怠管理システムで、働き方改革とコンプライアンス強化を同時に実現します。',
        'service2-feature1': '打刻機能（IC・生体認証）',
        'service2-feature2': '有給休暇管理',
        'service2-feature3': '労働時間分析',
        'service2-feature4': '給与計算連携',
        
        'service3-title': 'データ分析・コンサルティング',
        'service3-desc': 'ビッグデータ分析とビジネスインテリジェンスにより、データドリブンな意思決定を支援します。',
        'service3-feature1': 'データウェアハウス構築',
        'service3-feature2': 'ダッシュボード作成',
        'service3-feature3': '予測分析',
        'service3-feature4': 'データマイニング',
        
        'service4-title': 'セキュリティソリューション',
        'service4-desc': 'サイバーセキュリティ対策とコンプライアンス管理により、企業の情報資産を保護します。',
        'service4-feature1': '脅威検知・対応',
        'service4-feature2': 'アクセス権限管理',
        'service4-feature3': '監査ログ管理',
        'service4-feature4': 'セキュリティ教育',

        // Platform Benefits Section
        'benefits-title': 'プラットフォームの特徴 & 競合優位性',
        'benefit1-title': '高速開発',
        'benefit1-desc': '従来の開発期間を70%短縮し、迅速なビジネス要求への対応を実現します。',
        'benefit2-title': 'コスト削減',
        'benefit2-desc': '開発・運用コストを大幅に削減し、IT投資のROIを最大化します。',
        'benefit3-title': 'スケーラビリティ',
        'benefit3-desc': 'ビジネス成長に合わせてシステムを柔軟にスケールアップできます。',
        'benefit4-title': 'ユーザビリティ',
        'benefit4-desc': '直感的なインターフェースで、IT専門知識不要の操作を実現します。',

        // Integration Section
        'integration-title': 'システム連携機能 & エコシステム',
        'integration-platform': 'Terabox<br>Platform',
        'integration1': 'メールシステム',
        'integration2': 'カレンダー',
        'integration3': '文書管理',
        'integration4': '基幹システム',
        'integration5': '会計システム',
        'integration6': 'CRM',
        'integration7': 'BI ツール',
        'integration8': 'クラウドサービス',

        // Industry Solutions Section
        'industry-title': '業界別ソリューション & 専門技術',
        'industry1-title': '金融・保険業界',
        'industry1-desc': '規制対応とリスク管理に特化したソリューション',
        'industry1-feature1': 'コンプライアンス管理',
        'industry1-feature2': 'リスク分析システム',
        'industry1-feature3': '顧客管理（KYC対応）',
        
        'industry2-title': '製造業界',
        'industry2-desc': '生産管理と品質管理の最適化ソリューション',
        'industry2-feature1': '生産計画最適化',
        'industry2-feature2': '品質管理システム',
        'industry2-feature3': '在庫管理',
        
        'industry3-title': '小売・流通業界',
        'industry3-desc': '顧客体験向上と売上最大化ソリューション',
        'industry3-feature1': '顧客分析システム',
        'industry3-feature2': '在庫最適化',
        'industry3-feature3': 'POSシステム連携',
        
        'industry4-title': '医療・ヘルスケア',
        'industry4-desc': '患者情報管理と医療業務効率化ソリューション',
        'industry4-feature1': '電子カルテ連携',
        'industry4-feature2': '予約管理システム',
        'industry4-feature3': '医療データ分析',

        // Success Metrics Section
        'metrics-title': '導入効果 & ROI実績',
        'metric1-number': '70%',
        'metric1-label': '開発期間短縮',
        'metric1-desc': '従来の開発手法と比較して大幅な時間短縮を実現',
        'metric2-number': '60%',
        'metric2-label': '運用コスト削減',
        'metric2-desc': '自動化とクラウド活用による運用費用の大幅削減',
        'metric3-number': '85%',
        'metric3-label': '業務効率向上',
        'metric3-desc': 'ワークフロー自動化による業務プロセスの大幅改善',
        'metric4-number': '95%',
        'metric4-label': '顧客満足度',
        'metric4-desc': '導入企業からの高い評価と継続利用率',

        // Case Studies Section
        'cases-title': '導入実績 & 成功事例',
        'case1-client': '大手銀行様',
        'case1-title': 'ローコードプラットフォーム導入',
        'case1-desc': '支店業務のデジタル化をローコードで実現。従来3ヶ月かかった新システム開発を3週間に短縮し、業務効率を大幅改善。',
        'case1-result1': '開発期間75%短縮',
        'case1-result2': '業務効率50%向上',
        'case1-result3': 'コスト40%削減',
        
        'case2-client': '製造業大手様',
        'case2-title': 'データ分析プラットフォーム',
        'case2-desc': '全工場のデータを統合分析し、予防保全システムを構築。機械故障による生産停止時間を80%削減し、品質向上も実現。',
        'case2-result1': '生産停止80%削減',
        'case2-result2': '品質不良率半減',
        'case2-result3': '保全コスト30%削減',
        
        'case3-client': '総合商社様',
        'case3-title': '勤怠管理システム刷新',
        'case3-desc': 'グローバル展開する全拠点の勤怠管理を統一。多様な働き方に対応した柔軟なシステムで、人事業務の効率化を実現。',
        'case3-result1': '人事業務60%効率化',
        'case3-result2': '労務コンプライアンス強化',
        'case3-result3': '従業員満足度向上',

        // Contact CTA Section
        'cta-title': 'エンタープライズでデジタル変革を加速する',
        'cta-desc': '最先端のローコード技術と豊富な導入実績で、お客様の業務効率化とDXを実現します。<br>まずは現在の課題をお聞かせください。最適なエンタープライズソリューションをご提案いたします。',
        'cta-button1': 'お問い合わせ',
        'cta-button2': 'DX導入ガイド',

        // Footer
        'footer-news': 'お知らせ',
        'footer-company': '会社概要',
        'footer-message': '代表挨拶',
        'footer-business': '事業内容',
        'footer-recruit': '採用情報',
        'footer-access': 'アクセス',
        'footer-contact': 'お問い合わせ'
    },
    en: {
        // Header/Navigation
        'nav-strength': 'Our Strengths',
        'nav-business-news': 'Business News',
        'nav-company': 'Company Overview',
        'nav-message': 'CEO Message',
        'nav-business': 'Business Areas',
        'nav-cases': 'Case Studies',
        'nav-recruit': 'Careers',
        'nav-contact': 'Contact Us',

        // Hero Section
        'enterprise-title': 'Enterprise Solution Business',
        'enterprise-subtitle': 'Enterprise Digital Transformation',
        'enterprise-description': '25+ Multinational Engineering Team | Average 7+ Years Industry Experience<br>Providing comprehensive enterprise solutions to support business efficiency<br>and digital transformation through specialized technologies in low-code, data analytics, and security.',
        'enterprise-stat1': 'Enterprise Implementations',
        'enterprise-stat2': 'Development Time Reduction',
        'enterprise-stat3': 'Business Efficiency Improvement',

        // Services Overview Section
        'services-title': 'Service Overview & Enterprise Solutions',
        'service1-title': 'Low-Code Platform',
        'service1-desc': 'Providing low-code development platform that allows building business applications without programming knowledge.',
        'service1-feature1': 'Drag & Drop Operations',
        'service1-feature2': 'Existing System Integration',
        'service1-feature3': 'Workflow Automation',
        'service1-feature4': 'Mobile Compatible',
        
        'service2-title': 'Attendance Management System',
        'service2-desc': 'Cloud-based attendance management system that simultaneously achieves work style reform and compliance strengthening.',
        'service2-feature1': 'Clock-in Functions (IC/Biometric)',
        'service2-feature2': 'Paid Leave Management',
        'service2-feature3': 'Work Hour Analysis',
        'service2-feature4': 'Payroll Integration',
        
        'service3-title': 'Data Analytics & Consulting',
        'service3-desc': 'Supporting data-driven decision making through big data analytics and business intelligence.',
        'service3-feature1': 'Data Warehouse Construction',
        'service3-feature2': 'Dashboard Creation',
        'service3-feature3': 'Predictive Analytics',
        'service3-feature4': 'Data Mining',
        
        'service4-title': 'Security Solutions',
        'service4-desc': 'Protecting corporate information assets through cybersecurity measures and compliance management.',
        'service4-feature1': 'Threat Detection & Response',
        'service4-feature2': 'Access Permission Management',
        'service4-feature3': 'Audit Log Management',
        'service4-feature4': 'Security Training',

        // Platform Benefits Section
        'benefits-title': 'Platform Features & Competitive Advantages',
        'benefit1-title': 'Rapid Development',
        'benefit1-desc': 'Reducing traditional development time by 70% and enabling quick response to business requirements.',
        'benefit2-title': 'Cost Reduction',
        'benefit2-desc': 'Significantly reducing development and operational costs while maximizing IT investment ROI.',
        'benefit3-title': 'Scalability',
        'benefit3-desc': 'Flexibly scaling up systems in accordance with business growth.',
        'benefit4-title': 'Usability',
        'benefit4-desc': 'Achieving operations without IT expertise through intuitive interfaces.',

        // Integration Section
        'integration-title': 'System Integration Features & Ecosystem',
        'integration-platform': 'Terabox<br>Platform',
        'integration1': 'Email System',
        'integration2': 'Calendar',
        'integration3': 'Document Management',
        'integration4': 'Core System',
        'integration5': 'Accounting System',
        'integration6': 'CRM',
        'integration7': 'BI Tools',
        'integration8': 'Cloud Services',

        // Industry Solutions Section
        'industry-title': 'Industry-Specific Solutions & Specialized Technology',
        'industry1-title': 'Financial & Insurance Industry',
        'industry1-desc': 'Solutions specialized in regulatory compliance and risk management',
        'industry1-feature1': 'Compliance Management',
        'industry1-feature2': 'Risk Analysis System',
        'industry1-feature3': 'Customer Management (KYC Support)',
        
        'industry2-title': 'Manufacturing Industry',
        'industry2-desc': 'Production and quality management optimization solutions',
        'industry2-feature1': 'Production Planning Optimization',
        'industry2-feature2': 'Quality Management System',
        'industry2-feature3': 'Inventory Management',
        
        'industry3-title': 'Retail & Distribution Industry',
        'industry3-desc': 'Customer experience improvement and sales maximization solutions',
        'industry3-feature1': 'Customer Analytics System',
        'industry3-feature2': 'Inventory Optimization',
        'industry3-feature3': 'POS System Integration',
        
        'industry4-title': 'Healthcare',
        'industry4-desc': 'Patient information management and healthcare efficiency solutions',
        'industry4-feature1': 'Electronic Medical Record Integration',
        'industry4-feature2': 'Appointment Management System',
        'industry4-feature3': 'Medical Data Analytics',

        // Success Metrics Section
        'metrics-title': 'Implementation Results & ROI Performance',
        'metric1-number': '70%',
        'metric1-label': 'Development Time Reduction',
        'metric1-desc': 'Achieving significant time savings compared to traditional development methods',
        'metric2-number': '60%',
        'metric2-label': 'Operating Cost Reduction',
        'metric2-desc': 'Major reduction in operational expenses through automation and cloud utilization',
        'metric3-number': '85%',
        'metric3-label': 'Business Efficiency Improvement',
        'metric3-desc': 'Significant business process improvement through workflow automation',
        'metric4-number': '95%',
        'metric4-label': 'Customer Satisfaction',
        'metric4-desc': 'High evaluation and continued usage rate from implementing companies',

        // Case Studies Section
        'cases-title': 'Implementation Results & Success Stories',
        'case1-client': 'Major Bank',
        'case1-title': 'Low-Code Platform Implementation',
        'case1-desc': 'Digitalized branch operations with low-code. Shortened new system development from 3 months to 3 weeks and significantly improved business efficiency.',
        'case1-result1': '75% Development Time Reduction',
        'case1-result2': '50% Business Efficiency Improvement',
        'case1-result3': '40% Cost Reduction',
        
        'case2-client': 'Major Manufacturer',
        'case2-title': 'Data Analytics Platform',
        'case2-desc': 'Integrated analysis of all factory data and built predictive maintenance system. Reduced production downtime due to machine failures by 80% and achieved quality improvement.',
        'case2-result1': '80% Production Downtime Reduction',
        'case2-result2': '50% Quality Defect Rate Reduction',
        'case2-result3': '30% Maintenance Cost Reduction',
        
        'case3-client': 'General Trading Company',
        'case3-title': 'Attendance Management System Renewal',
        'case3-desc': 'Unified attendance management for all globally expanding locations. Achieved HR efficiency through flexible system supporting diverse work styles.',
        'case3-result1': '60% HR Efficiency Improvement',
        'case3-result2': 'Labor Compliance Strengthening',
        'case3-result3': 'Employee Satisfaction Improvement',

        // Contact CTA Section
        'cta-title': 'Accelerate Digital Transformation with Enterprise Solutions',
        'cta-desc': 'We realize business efficiency and DX for our customers with cutting-edge low-code technology and extensive implementation experience.<br>Please tell us your current challenges first. We will propose the optimal enterprise solution.',
        'cta-button1': 'Contact Us',
        'cta-button2': 'DX Implementation Guide',

        // Footer
        'footer-news': 'News',
        'footer-company': 'Company',
        'footer-message': 'CEO Message',
        'footer-business': 'Business',
        'footer-recruit': 'Careers',
        'footer-access': 'Access',
        'footer-contact': 'Contact'
    },
    zh: {
        // Header/Navigation
        'nav-strength': '公司优势',
        'nav-business-news': '业务新闻',
        'nav-company': '公司概要',
        'nav-message': '代表致辞',
        'nav-business': '业务内容',
        'nav-cases': '导入实绩',
        'nav-recruit': '招聘信息',
        'nav-contact': '联系我们',

        // Hero Section
        'enterprise-title': '企业解决方案业务',
        'enterprise-subtitle': '企业数字化转型',
        'enterprise-description': '25名以上多国籍工程师团队 | 平均7年以上行业经验<br>通过低代码·数据分析·安全的专业技术<br>提供支持企业业务效率化和数字化转型的综合性企业解决方案。',
        'enterprise-stat1': '企业导入实绩',
        'enterprise-stat2': '开发期间缩短',
        'enterprise-stat3': '业务效率提升',

        // Services Overview Section
        'services-title': '服务概要 & 企业解决方案',
        'service1-title': '低代码平台',
        'service1-desc': '提供无需编程知识即可构建业务应用程序的低代码开发平台。',
        'service1-feature1': '拖拽操作',
        'service1-feature2': '现有系统集成',
        'service1-feature3': '工作流自动化',
        'service1-feature4': '移动端兼容',
        
        'service2-title': '考勤管理系统',
        'service2-desc': '基于云的考勤管理系统，同时实现工作方式改革和合规强化。',
        'service2-feature1': '打卡功能（IC·生物认证）',
        'service2-feature2': '带薪假期管理',
        'service2-feature3': '工作时间分析',
        'service2-feature4': '工资计算联动',
        
        'service3-title': '数据分析·咨询',
        'service3-desc': '通过大数据分析和商业智能，支持数据驱动的决策制定。',
        'service3-feature1': '数据仓库构建',
        'service3-feature2': '仪表板创建',
        'service3-feature3': '预测分析',
        'service3-feature4': '数据挖掘',
        
        'service4-title': '安全解决方案',
        'service4-desc': '通过网络安全对策和合规管理，保护企业信息资产。',
        'service4-feature1': '威胁检测·对应',
        'service4-feature2': '访问权限管理',
        'service4-feature3': '审计日志管理',
        'service4-feature4': '安全教育',

        // Platform Benefits Section
        'benefits-title': '平台特征 & 竞争优势',
        'benefit1-title': '高速开发',
        'benefit1-desc': '缩短传统开发期间的70%，实现对业务需求的快速响应。',
        'benefit2-title': '成本削减',
        'benefit2-desc': '大幅削减开发·运营成本，最大化IT投资的ROI。',
        'benefit3-title': '可扩展性',
        'benefit3-desc': '能够根据业务增长灵活地扩展系统。',
        'benefit4-title': '易用性',
        'benefit4-desc': '通过直观的界面，实现无需IT专业知识的操作。',

        // Integration Section
        'integration-title': '系统联动功能 & 生态系统',
        'integration-platform': 'Terabox<br>Platform',
        'integration1': '邮件系统',
        'integration2': '日历',
        'integration3': '文档管理',
        'integration4': '核心系统',
        'integration5': '会计系统',
        'integration6': 'CRM',
        'integration7': 'BI 工具',
        'integration8': '云服务',

        // Industry Solutions Section
        'industry-title': '行业解决方案 & 专业技术',
        'industry1-title': '金融·保险行业',
        'industry1-desc': '专门针对法规对应和风险管理的解决方案',
        'industry1-feature1': '合规管理',
        'industry1-feature2': '风险分析系统',
        'industry1-feature3': '客户管理（KYC对应）',
        
        'industry2-title': '制造行业',
        'industry2-desc': '生产管理和质量管理的优化解决方案',
        'industry2-feature1': '生产计划优化',
        'industry2-feature2': '质量管理系统',
        'industry2-feature3': '库存管理',
        
        'industry3-title': '零售·流通行业',
        'industry3-desc': '客户体验提升和销售最大化解决方案',
        'industry3-feature1': '客户分析系统',
        'industry3-feature2': '库存优化',
        'industry3-feature3': 'POS系统联动',
        
        'industry4-title': '医疗·健康护理',
        'industry4-desc': '患者信息管理和医疗业务效率化解决方案',
        'industry4-feature1': '电子病历联动',
        'industry4-feature2': '预约管理系统',
        'industry4-feature3': '医疗数据分析',

        // Success Metrics Section
        'metrics-title': '导入效果 & ROI实绩',
        'metric1-number': '70%',
        'metric1-label': '开发期间缩短',
        'metric1-desc': '与传统开发手法相比实现大幅时间缩短',
        'metric2-number': '60%',
        'metric2-label': '运营成本削减',
        'metric2-desc': '通过自动化和云利用大幅削减运营费用',
        'metric3-number': '85%',
        'metric3-label': '业务效率提升',
        'metric3-desc': '通过工作流自动化大幅改善业务流程',
        'metric4-number': '95%',
        'metric4-label': '客户满意度',
        'metric4-desc': '导入企业的高评价和持续利用率',

        // Case Studies Section
        'cases-title': '导入实绩 & 成功案例',
        'case1-client': '大型银行',
        'case1-title': '低代码平台导入',
        'case1-desc': '通过低代码实现支店业务的数字化。将原本需要3个月的新系统开发缩短到3周，大幅改善业务效率。',
        'case1-result1': '开发期间缩短75%',
        'case1-result2': '业务效率提升50%',
        'case1-result3': '成本削减40%',
        
        'case2-client': '制造业大型企业',
        'case2-title': '数据分析平台',
        'case2-desc': '统合分析全工厂数据，构建预防保全系统。将机械故障导致的生产停止时间削减80%，同时实现品质提升。',
        'case2-result1': '生产停止削减80%',
        'case2-result2': '品质不良率减半',
        'case2-result3': '保全成本削减30%',
        
        'case3-client': '综合商社',
        'case3-title': '考勤管理系统更新',
        'case3-desc': '统一全球展开的全据点考勤管理。通过对应多样工作方式的灵活系统，实现人事业务的效率化。',
        'case3-result1': '人事业务效率化60%',
        'case3-result2': '劳务合规强化',
        'case3-result3': '员工满意度提升',

        // Contact CTA Section
        'cta-title': '通过企业解决方案加速数字化转型',
        'cta-desc': '凭借最先进的低代码技术和丰富的导入实绩，实现客户的业务效率化和DX。<br>首先请告诉我们您目前的课题。我们将提出最适合的企业解决方案。',
        'cta-button1': '联系我们',
        'cta-button2': 'DX导入指南',

        // Footer
        'footer-news': '通知',
        'footer-company': '公司概要',
        'footer-message': '代表致辞',
        'footer-business': '业务内容',
        'footer-recruit': '招聘信息',
        'footer-access': '交通',
        'footer-contact': '联系我们'
    }
};

// Language switching function
function enterpriseSwitchLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (enterpriseTranslations[lang] && enterpriseTranslations[lang][key]) {
            element.innerHTML = enterpriseTranslations[lang][key];
        }
    });
    
    // Update document title
    const titles = {
        ja: 'エンタープライズソリューション事業 - TERABOX',
        en: 'Enterprise Solution Business - TERABOX',
        zh: '企业解决方案业务 - TERABOX'
    };
    document.title = titles[lang] || titles.ja;
}

// Initialize language switching on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get the saved language preference or default to Japanese
    const savedLang = localStorage.getItem('selectedLanguage') || 'ja';
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            enterpriseSwitchLanguage(lang);
        });
    });
    
    // Apply the saved language
    enterpriseSwitchLanguage(savedLang);
});