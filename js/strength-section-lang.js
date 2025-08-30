// Dedicated language switcher for Strength Section Business Cards Tags
// Handles trilingual switching for achievement tags in business cards

const strengthTranslations = {
    ja: {
        // System Engineering tags
        'tag-engineering-companies': '年間20社以上',
        'tag-engineering-experience': '延べ100+人月実績',
        
        // AI/DX Solution tags
        'tag-ai-kaggle': 'Kaggle受賞エンジニア',
        'tag-ai-enterprise': '大手企業実績',
        
        // Smart Device/IoT tags
        'tag-iot-care': '介護施設初導入',
        'tag-iot-satisfaction': '85%利用者満足度',
        
        // HR Service tags
        'tag-hr-license': '正規許可取得',
        'tag-hr-training': '研修体制完備',
        
        // Blockchain & Web3 tags
        'tag-blockchain-experience': '9年以上の実績',
        'tag-blockchain-award': '国際ハッカソン受賞',
        
        // Enterprise Solution tags
        'tag-enterprise-ready': 'エンタープライズ対応',
        'tag-enterprise-partner': 'Microsoft Partner',
        
        // Business Services - System Engineering
        'service-engineering-ses': 'SES（システムエンジニア派遣）',
        'service-engineering-contract': '受託開発',
        'service-engineering-aws': 'AWS/クラウド基盤構築',
        'service-engineering-maintenance': 'システム開発・運用保守',
        
        // Business Services - AI/DX Solution
        'service-ai-research': 'AI智能市場調査',
        'service-ai-matching': 'AI人材マッチング',
        'service-ai-ocr': 'OCR×AI画像認識',
        'service-ai-llm': 'LLMモデル構築',
        
        // Business Services - IoT
        'service-iot-keenon': 'KEENONサービスロボット',
        'service-iot-smart': 'AIoTスマートメーター',
        'service-iot-cleaning': '清掃ロボット',
        'service-iot-delivery': '配膳ロボット',
        
        // Business Services - HR
        'service-hr-recruitment': '人材紹介',
        'service-hr-training': 'IT技能研修',
        'service-hr-dispatch': '人材派遣',
        'service-hr-platform': '人材プラットフォーム運営',
        
        // Business Services - Blockchain
        'service-blockchain-ethereum': 'Ethereum/Solidity開発',
        'service-blockchain-fabric': 'Hyperledger Fabric',
        'service-blockchain-defi': 'DeFiプロトコル',
        'service-blockchain-cosmos': 'Cosmos/Tendermint',
        
        // Business Services - Enterprise
        'service-enterprise-dynamics': 'Microsoft Dynamics 365',
        'service-enterprise-lowcode': 'ローコードプラットフォーム',
        'service-enterprise-attendance': '勤怠管理システム',
        'service-enterprise-bi': 'データ分析・BI'
    },
    
    en: {
        // System Engineering tags
        'tag-engineering-companies': '20+ Companies Annually',
        'tag-engineering-experience': '100+ Person-Month Track Record',
        
        // AI/DX Solution tags
        'tag-ai-kaggle': 'Kaggle Award Winner',
        'tag-ai-enterprise': 'Enterprise Client Success',
        
        // Smart Device/IoT tags
        'tag-iot-care': 'First Care Facility Implementation',
        'tag-iot-satisfaction': '85% User Satisfaction',
        
        // HR Service tags
        'tag-hr-license': 'Official License Obtained',
        'tag-hr-training': 'Complete Training System',
        
        // Blockchain & Web3 tags
        'tag-blockchain-experience': '9+ Years Experience',
        'tag-blockchain-award': 'International Hackathon Winner',
        
        // Enterprise Solution tags
        'tag-enterprise-ready': 'Enterprise Ready',
        'tag-enterprise-partner': 'Microsoft Partner',
        
        // Business Services - System Engineering
        'service-engineering-ses': 'SES (System Engineer Staffing)',
        'service-engineering-contract': 'Contract Development',
        'service-engineering-aws': 'AWS/Cloud Infrastructure',
        'service-engineering-maintenance': 'System Development & Maintenance',
        
        // Business Services - AI/DX Solution
        'service-ai-research': 'AI Market Research',
        'service-ai-matching': 'AI Talent Matching',
        'service-ai-ocr': 'OCR×AI Image Recognition',
        'service-ai-llm': 'LLM Model Development',
        
        // Business Services - IoT
        'service-iot-keenon': 'KEENON Service Robot',
        'service-iot-smart': 'AIoT Smart Meter',
        'service-iot-cleaning': 'Cleaning Robot',
        'service-iot-delivery': 'Delivery Robot',
        
        // Business Services - HR
        'service-hr-recruitment': 'HR Recruitment',
        'service-hr-training': 'IT Skills Training',
        'service-hr-dispatch': 'HR Staffing',
        'service-hr-platform': 'HR Platform Operations',
        
        // Business Services - Blockchain
        'service-blockchain-ethereum': 'Ethereum/Solidity Development',
        'service-blockchain-fabric': 'Hyperledger Fabric',
        'service-blockchain-defi': 'DeFi Protocol',
        'service-blockchain-cosmos': 'Cosmos/Tendermint',
        
        // Business Services - Enterprise
        'service-enterprise-dynamics': 'Microsoft Dynamics 365',
        'service-enterprise-lowcode': 'Low-Code Platform',
        'service-enterprise-attendance': 'Attendance Management System',
        'service-enterprise-bi': 'Data Analytics & BI'
    },
    
    zh: {
        // System Engineering tags
        'tag-engineering-companies': '年服务企业20+家',
        'tag-engineering-experience': '累计100+人月实绩',
        
        // AI/DX Solution tags
        'tag-ai-kaggle': 'Kaggle获奖工程师',
        'tag-ai-enterprise': '大型企业实绩',
        
        // Smart Device/IoT tags
        'tag-iot-care': '护理设施首次导入',
        'tag-iot-satisfaction': '85%用户满意度',
        
        // HR Service tags
        'tag-hr-license': '正规许可证取得',
        'tag-hr-training': '完善培训体制',
        
        // Blockchain & Web3 tags
        'tag-blockchain-experience': '9年以上实绩',
        'tag-blockchain-award': '国际黑客马拉松获奖',
        
        // Enterprise Solution tags
        'tag-enterprise-ready': '企业级解决方案',
        'tag-enterprise-partner': 'Microsoft合作伙伴',
        
        // Business Services - System Engineering
        'service-engineering-ses': 'SES（系统工程师派遣）',
        'service-engineering-contract': '承包开发',
        'service-engineering-aws': 'AWS/云基础设施建设',
        'service-engineering-maintenance': '系统开发·运营维护',
        
        // Business Services - AI/DX Solution
        'service-ai-research': 'AI智能市场调研',
        'service-ai-matching': 'AI人才匹配',
        'service-ai-ocr': 'OCR×AI图像识别',
        'service-ai-llm': 'LLM模型构建',
        
        // Business Services - IoT
        'service-iot-keenon': 'KEENON服务机器人',
        'service-iot-smart': 'AIoT智能仪表',
        'service-iot-cleaning': '清洁机器人',
        'service-iot-delivery': '配餐机器人',
        
        // Business Services - HR
        'service-hr-recruitment': '人才招聘',
        'service-hr-training': 'IT技能培训',
        'service-hr-dispatch': '人才派遣',
        'service-hr-platform': '人才平台运营',
        
        // Business Services - Blockchain
        'service-blockchain-ethereum': 'Ethereum/Solidity开发',
        'service-blockchain-fabric': 'Hyperledger Fabric',
        'service-blockchain-defi': 'DeFi协议',
        'service-blockchain-cosmos': 'Cosmos/Tendermint',
        
        // Business Services - Enterprise
        'service-enterprise-dynamics': 'Microsoft Dynamics 365',
        'service-enterprise-lowcode': '低代码平台',
        'service-enterprise-attendance': '考勤管理系统',
        'service-enterprise-bi': '数据分析·BI'
    }
};

function strengthSwitchLanguage(lang) {
    // Get translations for the selected language
    const translations = strengthTranslations[lang];
    if (!translations) return;
    
    // Update strength section specific elements with data-lang-key attributes
    document.querySelectorAll('[data-lang-key^="tag-"], [data-lang-key^="service-"]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Make this function globally available so it can be called by main language switcher
window.strengthSwitchLanguage = strengthSwitchLanguage;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language or default to Japanese
    const savedLang = localStorage.getItem('selectedLanguage') || 'ja';
    strengthSwitchLanguage(savedLang);
});