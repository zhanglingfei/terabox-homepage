// IoT Systems Page Multilingual Support
// Dedicated translation file for iot-systems.html to avoid token limitations

const iotTranslations = {
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
        'iot-title': 'IoT・スマートシステム事業',
        'iot-subtitle': 'IoT & Smart Devices',
        'iot-description': '25名以上の多国籍エンジニアチーム | 平均7年以上の業界経験<br>IoT・スマートデバイス・エッジコンピューティング技術で<br>リアルタイム監視・管理・最適化を実現し、効率的な業務環境を構築します。',
        'iot-stat-devices': 'デバイス管理実績',
        'iot-stat-uptime': 'システム稼働率',
        'iot-stat-cost': '運用コスト削減',
        
        // Services Overview
        'iot-services-title': 'IoTサービス概要 & 革新技術',
        'iot-shelf-label-title': '電子棚札システム',
        'iot-shelf-label-desc': 'リアルタイムで価格更新が可能な電子棚札により、小売業務の効率化と価格管理の自動化を実現します。',
        'iot-shelf-label-feature1': 'リアルタイム価格更新',
        'iot-shelf-label-feature2': '在庫連動表示',
        'iot-shelf-label-feature3': '多店舗一括管理',
        'iot-shelf-label-feature4': '省電力設計',
        
        'iot-smart-meter-title': 'スマート検針システム',
        'iot-smart-meter-desc': '電気・ガス・水道の使用量を自動で検針し、クラウド経由でリアルタイムデータ管理を行います。',
        'iot-smart-meter-feature1': '自動検針機能',
        'iot-smart-meter-feature2': '異常使用量検知',
        'iot-smart-meter-feature3': 'クラウドデータ管理',
        'iot-smart-meter-feature4': '省エネ分析レポート',
        
        'iot-stamp-card-title': '電子スタンプカード',
        'iot-stamp-card-desc': '従来の紙のスタンプカードをデジタル化し、顧客管理とマーケティング機能を統合したシステムです。',
        'iot-stamp-card-feature1': 'NFCタッチ決済',
        'iot-stamp-card-feature2': 'ポイント自動付与',
        'iot-stamp-card-feature3': '顧客行動分析',
        'iot-stamp-card-feature4': 'キャンペーン機能',
        
        'iot-smart-home-title': 'スマートホームシステム',
        'iot-smart-home-desc': '家電機器の統合制御、セキュリティ管理、エネルギー最適化を実現するトータルソリューションです。',
        'iot-smart-home-feature1': '音声制御対応',
        'iot-smart-home-feature2': '学習型自動制御',
        'iot-smart-home-feature3': '外部連携API',
        'iot-smart-home-feature4': 'セキュリティ監視',
        
        // Architecture Section
        'iot-arch-title': 'IoTアーキテクチャ & システム構成',
        'iot-arch-subtitle': '多層構造による堅牢で拡張性の高いIoTエコシステム',
        'iot-arch-device-layer': 'デバイス層',
        'iot-arch-device-sensor': 'センサー',
        'iot-arch-device-comm': '通信モジュール',
        'iot-arch-device-power': '電源管理',
        'iot-arch-comm-layer': '通信層',
        'iot-arch-comm-cellular': '4G/5G',
        'iot-arch-comm-wifi': 'Wi-Fi',
        'iot-arch-comm-bluetooth': 'Bluetooth',
        'iot-arch-data-layer': 'データ処理層',
        'iot-arch-data-cloud': 'クラウド処理',
        'iot-arch-data-db': 'データベース',
        'iot-arch-data-analytics': '分析エンジン',
        'iot-arch-app-layer': 'アプリケーション層',
        'iot-arch-app-mobile': 'モバイルアプリ',
        'iot-arch-app-web': 'Webダッシュボード',
        'iot-arch-app-notification': '通知システム',
        
        // Features Section
        'iot-features-title': '技術的特徴 & コア技術',
        'iot-feature-security-title': '高セキュリティ',
        'iot-feature-security-desc': 'エンドツーエンド暗号化とデバイス認証により、データの安全性を確保します。',
        'iot-feature-scalability-title': 'スケーラビリティ',
        'iot-feature-scalability-desc': 'クラウドネイティブ設計により、デバイス数の増加に柔軟に対応可能です。',
        'iot-feature-realtime-title': 'リアルタイム処理',
        'iot-feature-realtime-desc': 'エッジコンピューティングにより低遅延でのデータ処理を実現します。',
        'iot-feature-power-title': '省電力設計',
        'iot-feature-power-desc': '最適化されたプロトコルとハードウェア設計で長期間動作を実現します。',
        
        // Case Studies
        'iot-cases-title': '導入実績 & 成功事例',
        'iot-case-supermarket-title': '大手スーパーマーケット様',
        'iot-case-supermarket-service': '電子棚札システム導入',
        'iot-case-supermarket-desc': '全店舗に電子棚札を導入し、価格変更作業時間を80%削減。リアルタイム在庫連動により品切れ損失も大幅改善。',
        'iot-case-supermarket-result1': '作業時間80%削減',
        'iot-case-supermarket-result2': '品切れ損失改善',
        'iot-case-supermarket-result3': '価格精度向上',
        
        'iot-case-power-title': '電力会社様',
        'iot-case-power-service': 'スマート検針システム',
        'iot-case-power-desc': '従来の人的検針から自動検針への移行により、検針コストを60%削減。異常使用検知により設備トラブルの早期発見も実現。',
        'iot-case-power-result1': '検針コスト60%削減',
        'iot-case-power-result2': '異常検知機能',
        'iot-case-power-result3': 'データ精度向上',
        
        'iot-case-cafe-title': 'カフェチェーン様',
        'iot-case-cafe-service': '電子スタンプカード',
        'iot-case-cafe-desc': '紙のスタンプカードから電子化により、顧客データ分析が可能に。リピート率が25%向上し、売上増加を実現。',
        'iot-case-cafe-result1': 'リピート率25%向上',
        'iot-case-cafe-result2': '顧客分析可能',
        'iot-case-cafe-result3': '運用コスト削減',
        
        // Contact CTA
        'iot-cta-title': 'IoTで未来のスマート環境を実現する',
        'iot-cta-desc': '最先端のIoT技術と豊富な実績で、お客様の業務効率化と革新を実現します。<br>まずは現在の課題をお聞かせください。最適なIoTソリューションをご提案いたします。',
        'iot-cta-contact': 'お問い合わせ',
        'iot-cta-guide': 'IoT導入ガイド'
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
        'iot-title': 'IoT & Smart Systems Business',
        'iot-subtitle': 'IoT & Smart Devices',
        'iot-description': '25+ multinational engineer team | Average 7+ years industry experience<br>IoT, Smart Devices, Edge Computing technologies<br>Realize real-time monitoring, management, optimization for efficient business environments',
        'iot-stat-devices': 'Device Management Track Record',
        'iot-stat-uptime': 'System Uptime Rate',
        'iot-stat-cost': 'Operational Cost Reduction',
        
        // Services Overview
        'iot-services-title': 'IoT Service Overview & Innovative Technologies',
        'iot-shelf-label-title': 'Electronic Shelf Label System',
        'iot-shelf-label-desc': 'Electronic shelf labels with real-time price updates enable retail efficiency and automated price management.',
        'iot-shelf-label-feature1': 'Real-time Price Updates',
        'iot-shelf-label-feature2': 'Inventory-linked Display',
        'iot-shelf-label-feature3': 'Multi-store Centralized Management',
        'iot-shelf-label-feature4': 'Power-saving Design',
        
        'iot-smart-meter-title': 'Smart Metering System',
        'iot-smart-meter-desc': 'Automatically meter electricity, gas, and water usage with real-time cloud-based data management.',
        'iot-smart-meter-feature1': 'Automatic Metering Function',
        'iot-smart-meter-feature2': 'Abnormal Usage Detection',
        'iot-smart-meter-feature3': 'Cloud Data Management',
        'iot-smart-meter-feature4': 'Energy Analysis Reports',
        
        'iot-stamp-card-title': 'Electronic Stamp Card',
        'iot-stamp-card-desc': 'Digitize traditional paper stamp cards with integrated customer management and marketing functionality.',
        'iot-stamp-card-feature1': 'NFC Touch Payment',
        'iot-stamp-card-feature2': 'Automatic Point Rewards',
        'iot-stamp-card-feature3': 'Customer Behavior Analysis',
        'iot-stamp-card-feature4': 'Campaign Features',
        
        'iot-smart-home-title': 'Smart Home System',
        'iot-smart-home-desc': 'Total solution realizing integrated appliance control, security management, and energy optimization.',
        'iot-smart-home-feature1': 'Voice Control Support',
        'iot-smart-home-feature2': 'Learning-based Automation',
        'iot-smart-home-feature3': 'External Integration APIs',
        'iot-smart-home-feature4': 'Security Monitoring',
        
        // Architecture Section
        'iot-arch-title': 'IoT Architecture & System Configuration',
        'iot-arch-subtitle': 'Robust and scalable IoT ecosystem with multi-layered architecture',
        'iot-arch-device-layer': 'Device Layer',
        'iot-arch-device-sensor': 'Sensors',
        'iot-arch-device-comm': 'Communication Modules',
        'iot-arch-device-power': 'Power Management',
        'iot-arch-comm-layer': 'Communication Layer',
        'iot-arch-comm-cellular': '4G/5G',
        'iot-arch-comm-wifi': 'Wi-Fi',
        'iot-arch-comm-bluetooth': 'Bluetooth',
        'iot-arch-data-layer': 'Data Processing Layer',
        'iot-arch-data-cloud': 'Cloud Processing',
        'iot-arch-data-db': 'Database',
        'iot-arch-data-analytics': 'Analytics Engine',
        'iot-arch-app-layer': 'Application Layer',
        'iot-arch-app-mobile': 'Mobile Apps',
        'iot-arch-app-web': 'Web Dashboard',
        'iot-arch-app-notification': 'Notification System',
        
        // Features Section
        'iot-features-title': 'Technical Features & Core Technologies',
        'iot-feature-security-title': 'High Security',
        'iot-feature-security-desc': 'Ensure data safety through end-to-end encryption and device authentication.',
        'iot-feature-scalability-title': 'Scalability',
        'iot-feature-scalability-desc': 'Cloud-native design allows flexible response to increasing device numbers.',
        'iot-feature-realtime-title': 'Real-time Processing',
        'iot-feature-realtime-desc': 'Edge computing enables low-latency data processing.',
        'iot-feature-power-title': 'Power-saving Design',
        'iot-feature-power-desc': 'Optimized protocols and hardware design achieve long-term operation.',
        
        // Case Studies
        'iot-cases-title': 'Implementation Results & Success Stories',
        'iot-case-supermarket-title': 'Major Supermarket Chain',
        'iot-case-supermarket-service': 'Electronic Shelf Label System Implementation',
        'iot-case-supermarket-desc': 'Implemented electronic shelf labels across all stores, reducing price change work time by 80%. Real-time inventory integration significantly improved out-of-stock losses.',
        'iot-case-supermarket-result1': '80% Work Time Reduction',
        'iot-case-supermarket-result2': 'Out-of-stock Loss Improvement',
        'iot-case-supermarket-result3': 'Price Accuracy Enhancement',
        
        'iot-case-power-title': 'Power Utility Company',
        'iot-case-power-service': 'Smart Metering System',
        'iot-case-power-desc': 'Transition from manual to automated metering reduced metering costs by 60%. Abnormal usage detection enabled early equipment trouble detection.',
        'iot-case-power-result1': '60% Metering Cost Reduction',
        'iot-case-power-result2': 'Anomaly Detection Function',
        'iot-case-power-result3': 'Data Accuracy Improvement',
        
        'iot-case-cafe-title': 'Cafe Chain',
        'iot-case-cafe-service': 'Electronic Stamp Card',
        'iot-case-cafe-desc': 'Digitization from paper stamp cards enabled customer data analysis. Repeat rate improved by 25%, achieving sales increase.',
        'iot-case-cafe-result1': '25% Repeat Rate Improvement',
        'iot-case-cafe-result2': 'Customer Analysis Enabled',
        'iot-case-cafe-result3': 'Operational Cost Reduction',
        
        // Contact CTA
        'iot-cta-title': 'Realize Future Smart Environments with IoT',
        'iot-cta-desc': 'With cutting-edge IoT technology and extensive track record, we realize customer business efficiency and innovation.<br>First, please share your current challenges. We will propose optimal IoT solutions.',
        'iot-cta-contact': 'Contact Us',
        'iot-cta-guide': 'IoT Implementation Guide'
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
        'iot-title': 'IoT・智能系统事业',
        'iot-subtitle': 'IoT & Smart Devices',
        'iot-description': '25名以上多国籍工程师团队 | 平均7年以上行业经验<br>IoT・智能设备・边缘计算技术<br>实现实时监控・管理・优化，构建高效的业务环境',
        'iot-stat-devices': '设备管理实绩',
        'iot-stat-uptime': '系统运行率',
        'iot-stat-cost': '运营成本削减',
        
        // Services Overview
        'iot-services-title': 'IoT服务概要 & 革新技术',
        'iot-shelf-label-title': '电子货架标签系统',
        'iot-shelf-label-desc': '通过可实时更新价格的电子货架标签，实现零售业务的效率化和价格管理的自动化。',
        'iot-shelf-label-feature1': '实时价格更新',
        'iot-shelf-label-feature2': '库存联动显示',
        'iot-shelf-label-feature3': '多店铺统一管理',
        'iot-shelf-label-feature4': '节能设计',
        
        'iot-smart-meter-title': '智能抄表系统',
        'iot-smart-meter-desc': '自动抄取电力、燃气、自来水的使用量，通过云端进行实时数据管理。',
        'iot-smart-meter-feature1': '自动抄表功能',
        'iot-smart-meter-feature2': '异常使用量检测',
        'iot-smart-meter-feature3': '云数据管理',
        'iot-smart-meter-feature4': '节能分析报告',
        
        'iot-stamp-card-title': '电子印章卡',
        'iot-stamp-card-desc': '将传统纸质印章卡数字化，整合客户管理和营销功能的系统。',
        'iot-stamp-card-feature1': 'NFC触控支付',
        'iot-stamp-card-feature2': '积分自动授予',
        'iot-stamp-card-feature3': '客户行为分析',
        'iot-stamp-card-feature4': '促销活动功能',
        
        'iot-smart-home-title': '智能家居系统',
        'iot-smart-home-desc': '实现家电设备统一控制、安全管理、能源优化的综合解决方案。',
        'iot-smart-home-feature1': '语音控制对应',
        'iot-smart-home-feature2': '学习型自动控制',
        'iot-smart-home-feature3': '外部联接API',
        'iot-smart-home-feature4': '安全监控',
        
        // Architecture Section
        'iot-arch-title': 'IoT架构 & 系统构成',
        'iot-arch-subtitle': '通过多层结构实现坚固且可扩展性高的IoT生态系统',
        'iot-arch-device-layer': '设备层',
        'iot-arch-device-sensor': '传感器',
        'iot-arch-device-comm': '通信模块',
        'iot-arch-device-power': '电源管理',
        'iot-arch-comm-layer': '通信层',
        'iot-arch-comm-cellular': '4G/5G',
        'iot-arch-comm-wifi': 'Wi-Fi',
        'iot-arch-comm-bluetooth': '蓝牙',
        'iot-arch-data-layer': '数据处理层',
        'iot-arch-data-cloud': '云处理',
        'iot-arch-data-db': '数据库',
        'iot-arch-data-analytics': '分析引擎',
        'iot-arch-app-layer': '应用层',
        'iot-arch-app-mobile': '移动应用',
        'iot-arch-app-web': 'Web仪表盘',
        'iot-arch-app-notification': '通知系统',
        
        // Features Section
        'iot-features-title': '技术特征 & 核心技术',
        'iot-feature-security-title': '高安全性',
        'iot-feature-security-desc': '通过端到端加密和设备认证，确保数据的安全性。',
        'iot-feature-scalability-title': '可扩展性',
        'iot-feature-scalability-desc': '云原生设计，可灵活应对设备数量的增加。',
        'iot-feature-realtime-title': '实时处理',
        'iot-feature-realtime-desc': '通过边缘计算实现低延迟的数据处理。',
        'iot-feature-power-title': '节能设计',
        'iot-feature-power-desc': '通过优化的协议和硬件设计实现长期运行。',
        
        // Case Studies
        'iot-cases-title': '导入实绩 & 成功案例',
        'iot-case-supermarket-title': '大型超市企业',
        'iot-case-supermarket-service': '电子货架标签系统导入',
        'iot-case-supermarket-desc': '在全店铺导入电子货架标签，价格变更作业时间削减80%。通过实时库存联动大幅改善缺货损失。',
        'iot-case-supermarket-result1': '作业时间削减80%',
        'iot-case-supermarket-result2': '缺货损失改善',
        'iot-case-supermarket-result3': '价格精度提升',
        
        'iot-case-power-title': '电力公司',
        'iot-case-power-service': '智能抄表系统',
        'iot-case-power-desc': '从传统人工抄表迁移到自动抄表，抄表成本削减60%。通过异常使用检测实现设备故障的早期发现。',
        'iot-case-power-result1': '抄表成本削减60%',
        'iot-case-power-result2': '异常检测功能',
        'iot-case-power-result3': '数据精度提升',
        
        'iot-case-cafe-title': '咖啡连锁店',
        'iot-case-cafe-service': '电子印章卡',
        'iot-case-cafe-desc': '从纸质印章卡电子化，使客户数据分析成为可能。回头率提升25%，实现销售额增加。',
        'iot-case-cafe-result1': '回头率提升25%',
        'iot-case-cafe-result2': '客户分析可能',
        'iot-case-cafe-result3': '运营成本削减',
        
        // Contact CTA
        'iot-cta-title': '用IoT实现未来的智能环境',
        'iot-cta-desc': '以最尖端的IoT技术和丰富的实绩，实现客户的业务效率化和革新。<br>首先请告诉我们现在的课题。我们将提出最佳的IoT解决方案。',
        'iot-cta-contact': '联系我们',
        'iot-cta-guide': 'IoT导入指南'
    }
};

// Language switching functionality specifically for IoT Systems page
function iotSwitchLanguage(lang) {
    // Validate language parameter
    if (!iotTranslations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }

    const translations = iotTranslations[lang];
    
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

// Initialize IoT Systems page language functionality
function initIoTLanguageSwitcher() {
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            iotSwitchLanguage(lang);
        });
    });
    
    // Load saved language preference or default to Japanese
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ja';
    iotSwitchLanguage(savedLanguage);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(initIoTLanguageSwitcher, 100);
});