// Blockchain & Web3 Page Language Switching
const blockchainTranslations = {
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
        'blockchain-title': 'Blockchain & Web3事業',
        'blockchain-subtitle': 'Next Generation Web3 Technology',
        'blockchain-description': '2016年から蓄積してきた豊富な開発実績と技術力で、次世代Web3ソリューションを提供。<br>エンタープライズ向けブロックチェーンから公链開発まで、幅広い領域をカバーします。',
        'blockchain-achievement1': '🏆 Cosmos国際ハッカソン2020 二等賞',
        'blockchain-achievement2': '🔐 上海銀行票据プラットフォーム実装',
        'blockchain-achievement3': '⚡ 9年以上の実績',

        // Development Timeline Section
        'timeline-title': '開発実績・技術革新の歩み',
        'timeline-2016-title': '基礎技術研究フェーズ',
        'timeline-2016-desc': 'ブロックチェーン技術の調査研究開始。分散型システムアーキテクチャの設計と基礎インフラ構築。',
        'timeline-2016-tech1': '分散ファイルシステム（Seaweedfs）',
        'timeline-2016-tech2': 'ログ収集・分析基盤',
        'timeline-2016-tech3': 'マイクロサービスアーキテクチャ',
        
        'timeline-2018-title': 'エンタープライズブロックチェーン実装',
        'timeline-2018-desc': '<strong>上海銀行との協業プロジェクト</strong> - Hyperledger Fabricを活用した票据取引プラットフォームの設計・実装に成功。',
        'timeline-2018-tech1': 'Hyperledger Fabric 0.6 & 1.1',
        'timeline-2018-tech2': 'Mesos + Docker クラウド管理',
        'timeline-2018-tech3': '銀行グレードのセキュリティ実装',
        
        'timeline-2019-title': 'パブリックチェーン開発',
        'timeline-2019-desc': '独自公链の研究開発。Ethereum及びCosmosベースの公链実装、テストネット・メインネット運用。',
        'timeline-2019-tech1': 'Ethereum & Solidity スマートコントラクト',
        'timeline-2019-tech2': 'Tendermint/Cosmos-SDK フレームワーク',
        'timeline-2019-tech3': 'コンセンサスメカニズム設計',
        'timeline-2019-tech4': 'P2Pネットワーク最適化',
        
        'timeline-2020-title': '🏆 国際的認知獲得',
        'timeline-2020-desc': '<strong>Cosmos & Tendermint国際ハッカソン2020 二等賞受賞</strong><br>「Flares - マルチアセット決済ネットワーク」プロジェクトで革新的なクロスチェーン技術を実証。',
        'timeline-2020-tech1': 'クロスチェーン技術 (Cassini)',
        'timeline-2020-tech2': 'マルチアセット支払いネットワーク',
        'timeline-2020-tech3': 'GitHub: wangfeiping/flares',
        
        'timeline-2023-title': 'DeFi & スマートコントラクト専門化',
        'timeline-2023-desc': 'EthereumとTron上でのDeFiプロトコル開発。中央集権型暗号資産カストディサービスの構築。',
        'timeline-2023-tech1': 'Solidity高度なスマートコントラクト',
        'timeline-2023-tech2': 'マルチチェーン対応ウォレット',
        'timeline-2023-tech3': 'セキュアな鍵管理システム',
        'timeline-2023-tech4': 'Python チェーンデータ分析',
        
        'timeline-current-title': '次世代Web3イノベーション',
        'timeline-current-desc': 'AI駆動の量化戦略とブロックチェーン資産管理2.0の融合。最先端技術の研究開発を推進。',
        'timeline-current-tech1': '暗号資産カストディ2.0',
        'timeline-current-tech2': 'AI量化取引アルゴリズム',
        'timeline-current-tech3': '同態暗号・MPC技術',
        'timeline-current-tech4': 'ゼロ知識証明実装',

        // Core Competencies Section
        'competencies-title': 'コア技術力',
        'competency1-title': '実証済みの技術力',
        'competency1-item1': '国際ハッカソン受賞実績',
        'competency1-item2': '金融機関との共同開発経験',
        'competency1-item3': '公链メインネット運用実績',
        'competency1-item4': '23年以上の開発経験',
        
        'competency2-title': '多様な技術スタック',
        'competency2-item1': 'Go, Java, Rust, Python',
        'competency2-item2': 'Solidity スマートコントラクト',
        'competency2-item3': 'Hyperledger, Cosmos, Ethereum',
        'competency2-item4': '暗号学・コンセンサスアルゴリズム',
        
        'competency3-title': '高度なセキュリティ',
        'competency3-item1': '同態暗号技術',
        'competency3-item2': 'マルチパーティ計算(MPC)',
        'competency3-item3': 'ゼロ知識証明',
        'competency3-item4': 'HSMベース鍵管理',

        // Services Overview Section
        'services-title': 'サービス概要',
        'service1-title': 'DeFiソリューション',
        'service1-desc': '実戦で磨かれたDeFiプロトコル開発力。流動性プール、イールドファーミング、自動取引戦略の実装経験。',
        'service1-feature1': '流動性プール設計・実装',
        'service1-feature2': 'イールドファーミング最適化',
        'service1-feature3': 'AI駆動の自動取引戦略',
        'service1-feature4': 'リスク管理システム',
        
        'service2-title': 'NFTプラットフォーム',
        'service2-desc': 'マルチチェーン対応のNFTマーケットプレイス構築。メタデータ管理からロイヤリティ分配まで包括的に対応。',
        'service2-feature1': 'Ethereum/Tron/BSC対応',
        'service2-feature2': 'ロイヤリティ自動分配',
        'service2-feature3': 'フラクショナルNFT',
        'service2-feature4': 'IPFS統合メタデータ管理',
        
        'service3-title': 'スマートコントラクト開発',
        'service3-desc': '6年以上のSolidity開発経験。監査済みの安全なコントラクト設計と、ガス最適化の実績。',
        'service3-feature1': 'Solidity高度な開発',
        'service3-feature2': 'セキュリティ監査対応',
        'service3-feature3': 'ガス最適化技術',
        'service3-feature4': 'アップグレード可能設計',
        
        'service4-title': '暗号資産カストディ',
        'service4-desc': '金融機関グレードのセキュリティを備えた暗号資産管理ソリューション。MPC技術による安全な鍵管理。',
        'service4-feature1': 'MPC分散鍵管理',
        'service4-feature2': 'マルチシグ対応',
        'service4-feature3': 'ハードウェアウォレット連携',
        'service4-feature4': 'リアルタイム監視・警報',
        
        'service5-title': 'クロスチェーン技術',
        'service5-desc': 'Cassiniプロジェクトで培ったクロスチェーン技術。異なるブロックチェーン間の相互運用性を実現。',
        'service5-feature1': 'チェーン間通信プロトコル',
        'service5-feature2': 'アトミックスワップ',
        'service5-feature3': 'ブリッジ構築',
        'service5-feature4': 'Cosmos IBC統合',
        
        'service6-title': 'ブロックチェーン分析',
        'service6-desc': 'Elasticsearchベースのデータ分析基盤。チェーン上データの収集、分析、可視化を提供。',
        'service6-feature1': 'リアルタイムデータ収集',
        'service6-feature2': 'Prometheus監視統合',
        'service6-feature3': 'カスタムダッシュボード',
        'service6-feature4': '異常検知アラート',

        // Blockchain Technology Section
        'blockchain-tech-title': '対応ブロックチェーン',
        'blockchain-ethereum-title': 'Ethereum',
        'blockchain-ethereum-desc': '6年以上の開発実績',
        'blockchain-ethereum-badge': '✓ 実装済',
        'blockchain-hyperledger-title': 'Hyperledger Fabric',
        'blockchain-hyperledger-desc': '銀行システム実装経験',
        'blockchain-hyperledger-badge': '✓ 実装済',
        'blockchain-cosmos-title': 'Cosmos/Tendermint',
        'blockchain-cosmos-desc': '国際ハッカソン受賞',
        'blockchain-cosmos-badge': '✓ 実装済',
        'blockchain-tron-title': 'Tron',
        'blockchain-tron-desc': 'DeFiプロトコル運用中',
        'blockchain-tron-badge': '✓ 実装済',
        'blockchain-bsc-title': 'Binance Smart Chain',
        'blockchain-bsc-desc': '高速・低コストのDeFiエコシステム',
        'blockchain-bsc-badge': '開発予定',
        'blockchain-polygon-title': 'Polygon',
        'blockchain-polygon-desc': 'Ethereumのレイヤー2スケーリング',
        'blockchain-polygon-badge': '開発予定',
        'blockchain-solana-title': 'Solana',
        'blockchain-solana-desc': '高性能・低遅延のブロックチェーン',
        'blockchain-solana-badge': '開発予定',
        'blockchain-polkadot-title': 'Polkadot',
        'blockchain-polkadot-desc': 'マルチチェーン相互運用プラットフォーム',
        'blockchain-polkadot-badge': '開発予定',

        // Notable Projects Section
        'projects-title': '主要プロジェクト実績',
        'project1-title': 'Flares - マルチアセット決済ネットワーク',
        'project1-award': '🏆 Cosmos & Tendermint 国際ハッカソン2020 二等賞',
        'project1-desc': 'ブロックチェーンベースのマルチアセット決済ネットワーク。クロスチェーン技術により、異なるブロックチェーン間での資産移動を実現。',
        'project1-github': 'GitHub',
        'project1-devpost': 'Devpost',
        
        'project2-title': '上海銀行票据プラットフォーム',
        'project2-desc': 'Hyperledger Fabricを活用した企業向け票据取引システム。銀行グレードのセキュリティと高可用性を実現。',
        'project2-tech1': 'Hyperledger Fabric 1.1',
        'project2-tech2': 'Docker + Mesos',
        'project2-tech3': 'エンタープライズグレード',
        
        'project3-title': 'Cassini クロスチェーンプロジェクト',
        'project3-desc': '異なるブロックチェーン間の相互運用性を実現する研究開発プロジェクト。チェーン間通信とクロスチェーン取引を可能に。',
        'project3-tech1': 'オープンソース',
        'project3-tech2': 'IBC プロトコル',
        'project3-tech3': '継続的な研究開発',
        
        'project4-title': '暗号資産カストディ2.0',
        'project4-desc': '次世代の暗号資産管理プラットフォーム。MPC技術とAI駆動の量化戦略を統合した革新的なソリューション。',
        'project4-tech1': 'Go言語による再構築',
        'project4-tech2': 'AI量化アルゴリズム',
        'project4-tech3': 'マルチチェーン対応',

        // Technical Expertise Section
        'expertise-title': '技術専門性',
        'expertise-programming': 'プログラミング言語',
        'expertise-blockchain': 'ブロックチェーンフレームワーク',
        'expertise-security': 'セキュリティ・暗号技術',
        'expertise-devops': 'インフラ・DevOps',

        // Use Cases Section
        'cases-title': '活用事例',
        'case1-client': '金融機関様',
        'case1-title': '上海銀行票据取引システム',
        'case1-desc': 'Hyperledger Fabricを活用した企業間票据取引プラットフォーム。ブロックチェーン技術により取引の透明性と効率性を大幅に向上。',
        'case1-result1': '取引効率化',
        'case1-result2': '改ざん防止',
        'case1-result3': '監査透明性',
        
        'case2-client': '暗号資産取引所様',
        'case2-title': 'カストディ&DeFi統合プラットフォーム',
        'case2-desc': '中央集権型と分散型の長所を組み合わせたハイブリッド資産管理システム。AI駆動の量化戦略により収益最大化を実現。',
        'case2-result1': 'セキュア管理',
        'case2-result2': 'AI最適化',
        'case2-result3': '24時間取引',
        
        'case3-client': '国際決済事業者様',
        'case3-title': 'クロスボーダー決済ネットワーク',
        'case3-desc': 'Cosmosベースのマルチアセット決済システム。異なる法定通貨と暗号資産間のシームレスな価値移転を実現。',
        'case3-result1': '即時決済',
        'case3-result2': '低手数料',
        'case3-result3': 'マルチ通貨',

        // Contact CTA Section
        'cta-title': '9年以上の実績を持つブロックチェーン専門チーム',
        'cta-desc': '国際的に認められた技術力と豊富な実装経験で、お客様のWeb3ビジネスを成功に導きます。',
        'cta-stat1': '年の開発実績',
        'cta-stat2': '完了プロジェクト',
        'cta-stat3': '対応チェーン',
        'cta-button': 'お問い合わせ',

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
        'blockchain-title': 'Blockchain & Web3 Business',
        'blockchain-subtitle': 'Next Generation Web3 Technology',
        'blockchain-description': 'Providing next-generation Web3 solutions with rich development experience and technical expertise accumulated since 2016.<br>Covering a wide range of areas from enterprise blockchain to public chain development.',
        'blockchain-achievement1': '🏆 Cosmos International Hackathon 2020 2nd Prize',
        'blockchain-achievement2': '🔐 Shanghai Bank Bill Platform Implementation',
        'blockchain-achievement3': '⚡ 9+ Years of Experience',

        // Development Timeline Section
        'timeline-title': 'Development Track Record & Innovation Journey',
        'timeline-2016-title': 'Fundamental Technology Research Phase',
        'timeline-2016-desc': 'Initiated blockchain technology research. Designed distributed system architecture and built basic infrastructure.',
        'timeline-2016-tech1': 'Distributed File System (Seaweedfs)',
        'timeline-2016-tech2': 'Log Collection & Analysis Platform',
        'timeline-2016-tech3': 'Microservices Architecture',
        
        'timeline-2018-title': 'Enterprise Blockchain Implementation',
        'timeline-2018-desc': '<strong>Collaboration Project with Shanghai Bank</strong> - Successfully designed and implemented a bill trading platform using Hyperledger Fabric.',
        'timeline-2018-tech1': 'Hyperledger Fabric 0.6 & 1.1',
        'timeline-2018-tech2': 'Mesos + Docker Cloud Management',
        'timeline-2018-tech3': 'Bank-grade Security Implementation',
        
        'timeline-2019-title': 'Public Chain Development',
        'timeline-2019-desc': 'Research and development of proprietary public chains. Implemented Ethereum and Cosmos-based public chains, operated testnet and mainnet.',
        'timeline-2019-tech1': 'Ethereum & Solidity Smart Contracts',
        'timeline-2019-tech2': 'Tendermint/Cosmos-SDK Framework',
        'timeline-2019-tech3': 'Consensus Mechanism Design',
        'timeline-2019-tech4': 'P2P Network Optimization',
        
        'timeline-2020-title': '🏆 International Recognition',
        'timeline-2020-desc': '<strong>Cosmos & Tendermint International Hackathon 2020 2nd Prize Winner</strong><br>Demonstrated innovative cross-chain technology with "Flares - Multi-Asset Payment Network" project.',
        'timeline-2020-tech1': 'Cross-chain Technology (Cassini)',
        'timeline-2020-tech2': 'Multi-Asset Payment Network',
        'timeline-2020-tech3': 'GitHub: wangfeiping/flares',
        
        'timeline-2023-title': 'DeFi & Smart Contract Specialization',
        'timeline-2023-desc': 'DeFi protocol development on Ethereum and Tron. Built centralized cryptocurrency custody services.',
        'timeline-2023-tech1': 'Advanced Solidity Smart Contracts',
        'timeline-2023-tech2': 'Multi-chain Compatible Wallets',
        'timeline-2023-tech3': 'Secure Key Management Systems',
        'timeline-2023-tech4': 'Python Chain Data Analysis',
        
        'timeline-current-title': 'Next-Generation Web3 Innovation',
        'timeline-current-desc': 'Fusion of AI-driven quantitative strategies and blockchain asset management 2.0. Advancing cutting-edge technology research and development.',
        'timeline-current-tech1': 'Cryptocurrency Custody 2.0',
        'timeline-current-tech2': 'AI Quantitative Trading Algorithms',
        'timeline-current-tech3': 'Homomorphic Encryption & MPC Technology',
        'timeline-current-tech4': 'Zero-Knowledge Proof Implementation',

        // Core Competencies Section
        'competencies-title': 'Core Technical Capabilities',
        'competency1-title': 'Proven Technical Expertise',
        'competency1-item1': 'International hackathon award track record',
        'competency1-item2': 'Joint development experience with financial institutions',
        'competency1-item3': 'Public chain mainnet operation experience',
        'competency1-item4': '23+ years of development experience',
        
        'competency2-title': 'Diverse Technology Stack',
        'competency2-item1': 'Go, Java, Rust, Python',
        'competency2-item2': 'Solidity Smart Contracts',
        'competency2-item3': 'Hyperledger, Cosmos, Ethereum',
        'competency2-item4': 'Cryptography & Consensus Algorithms',
        
        'competency3-title': 'Advanced Security',
        'competency3-item1': 'Homomorphic Encryption Technology',
        'competency3-item2': 'Multi-Party Computation (MPC)',
        'competency3-item3': 'Zero-Knowledge Proofs',
        'competency3-item4': 'HSM-based Key Management',

        // Services Overview Section
        'services-title': 'Services Overview',
        'service1-title': 'DeFi Solutions',
        'service1-desc': 'Battle-tested DeFi protocol development capabilities. Implementation experience in liquidity pools, yield farming, and automated trading strategies.',
        'service1-feature1': 'Liquidity Pool Design & Implementation',
        'service1-feature2': 'Yield Farming Optimization',
        'service1-feature3': 'AI-driven Automated Trading Strategies',
        'service1-feature4': 'Risk Management Systems',
        
        'service2-title': 'NFT Platform',
        'service2-desc': 'Multi-chain NFT marketplace development. Comprehensive support from metadata management to royalty distribution.',
        'service2-feature1': 'Ethereum/Tron/BSC Support',
        'service2-feature2': 'Automatic Royalty Distribution',
        'service2-feature3': 'Fractional NFT',
        'service2-feature4': 'IPFS Integrated Metadata Management',
        
        'service3-title': 'Smart Contract Development',
        'service3-desc': '6+ years of Solidity development experience. Audited secure contract design and gas optimization track record.',
        'service3-feature1': 'Advanced Solidity Development',
        'service3-feature2': 'Security Audit Compliance',
        'service3-feature3': 'Gas Optimization Technology',
        'service3-feature4': 'Upgradeable Contract Design',
        
        'service4-title': 'Cryptocurrency Custody',
        'service4-desc': 'Financial institution-grade security cryptocurrency management solutions. Secure key management using MPC technology.',
        'service4-feature1': 'MPC Distributed Key Management',
        'service4-feature2': 'Multi-signature Support',
        'service4-feature3': 'Hardware Wallet Integration',
        'service4-feature4': 'Real-time Monitoring & Alerts',
        
        'service5-title': 'Cross-chain Technology',
        'service5-desc': 'Cross-chain technology cultivated through the Cassini project. Enabling interoperability between different blockchains.',
        'service5-feature1': 'Inter-chain Communication Protocols',
        'service5-feature2': 'Atomic Swaps',
        'service5-feature3': 'Bridge Construction',
        'service5-feature4': 'Cosmos IBC Integration',
        
        'service6-title': 'Blockchain Analytics',
        'service6-desc': 'Elasticsearch-based data analysis platform. Providing on-chain data collection, analysis, and visualization.',
        'service6-feature1': 'Real-time Data Collection',
        'service6-feature2': 'Prometheus Monitoring Integration',
        'service6-feature3': 'Custom Dashboards',
        'service6-feature4': 'Anomaly Detection Alerts',

        // Blockchain Technology Section
        'blockchain-tech-title': 'Supported Blockchains',
        'blockchain-ethereum-title': 'Ethereum',
        'blockchain-ethereum-desc': '6+ years development experience',
        'blockchain-ethereum-badge': '✓ Implemented',
        'blockchain-hyperledger-title': 'Hyperledger Fabric',
        'blockchain-hyperledger-desc': 'Banking system implementation experience',
        'blockchain-hyperledger-badge': '✓ Implemented',
        'blockchain-cosmos-title': 'Cosmos/Tendermint',
        'blockchain-cosmos-desc': 'International hackathon winner',
        'blockchain-cosmos-badge': '✓ Implemented',
        'blockchain-tron-title': 'Tron',
        'blockchain-tron-desc': 'DeFi protocol in operation',
        'blockchain-tron-badge': '✓ Implemented',
        'blockchain-bsc-title': 'Binance Smart Chain',
        'blockchain-bsc-desc': 'High-speed, low-cost DeFi ecosystem',
        'blockchain-bsc-badge': 'Planned',
        'blockchain-polygon-title': 'Polygon',
        'blockchain-polygon-desc': 'Ethereum Layer 2 scaling',
        'blockchain-polygon-badge': 'Planned',
        'blockchain-solana-title': 'Solana',
        'blockchain-solana-desc': 'High-performance, low-latency blockchain',
        'blockchain-solana-badge': 'Planned',
        'blockchain-polkadot-title': 'Polkadot',
        'blockchain-polkadot-desc': 'Multi-chain interoperability platform',
        'blockchain-polkadot-badge': 'Planned',

        // Notable Projects Section
        'projects-title': 'Notable Project Achievements',
        'project1-title': 'Flares - Multi-Asset Payment Network',
        'project1-award': '🏆 Cosmos & Tendermint International Hackathon 2020 2nd Prize',
        'project1-desc': 'Blockchain-based multi-asset payment network. Enables asset transfer between different blockchains using cross-chain technology.',
        'project1-github': 'GitHub',
        'project1-devpost': 'Devpost',
        
        'project2-title': 'Shanghai Bank Bill Platform',
        'project2-desc': 'Enterprise bill trading system using Hyperledger Fabric. Achieved bank-grade security and high availability.',
        'project2-tech1': 'Hyperledger Fabric 1.1',
        'project2-tech2': 'Docker + Mesos',
        'project2-tech3': 'Enterprise Grade',
        
        'project3-title': 'Cassini Cross-chain Project',
        'project3-desc': 'Research and development project enabling interoperability between different blockchains. Enables inter-chain communication and cross-chain transactions.',
        'project3-tech1': 'Open Source',
        'project3-tech2': 'IBC Protocol',
        'project3-tech3': 'Continuous R&D',
        
        'project4-title': 'Cryptocurrency Custody 2.0',
        'project4-desc': 'Next-generation cryptocurrency management platform. Innovative solution integrating MPC technology with AI-driven quantitative strategies.',
        'project4-tech1': 'Go Language Reconstruction',
        'project4-tech2': 'AI Quantitative Algorithms',
        'project4-tech3': 'Multi-chain Support',

        // Technical Expertise Section
        'expertise-title': 'Technical Expertise',
        'expertise-programming': 'Programming Languages',
        'expertise-blockchain': 'Blockchain Frameworks',
        'expertise-security': 'Security & Cryptography',
        'expertise-devops': 'Infrastructure & DevOps',

        // Use Cases Section
        'cases-title': 'Use Cases',
        'case1-client': 'Financial Institution',
        'case1-title': 'Shanghai Bank Bill Trading System',
        'case1-desc': 'Inter-enterprise bill trading platform using Hyperledger Fabric. Dramatically improved transaction transparency and efficiency through blockchain technology.',
        'case1-result1': 'Transaction Efficiency',
        'case1-result2': 'Tamper Prevention',
        'case1-result3': 'Audit Transparency',
        
        'case2-client': 'Cryptocurrency Exchange',
        'case2-title': 'Custody & DeFi Integrated Platform',
        'case2-desc': 'Hybrid asset management system combining the advantages of centralized and decentralized systems. Maximized returns through AI-driven quantitative strategies.',
        'case2-result1': 'Secure Management',
        'case2-result2': 'AI Optimization',
        'case2-result3': '24/7 Trading',
        
        'case3-client': 'International Payment Provider',
        'case3-title': 'Cross-border Payment Network',
        'case3-desc': 'Cosmos-based multi-asset payment system. Enables seamless value transfer between different fiat currencies and cryptocurrencies.',
        'case3-result1': 'Instant Settlement',
        'case3-result2': 'Low Fees',
        'case3-result3': 'Multi-currency',

        // Contact CTA Section
        'cta-title': 'Blockchain Specialist Team with 9+ Years of Experience',
        'cta-desc': 'Internationally recognized technical capabilities and extensive implementation experience to lead your Web3 business to success.',
        'cta-stat1': 'years development experience',
        'cta-stat2': 'completed projects',
        'cta-stat3': 'supported chains',
        'cta-button': 'Contact Us',

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
        'blockchain-title': '区块链与Web3业务',
        'blockchain-subtitle': '下一代Web3技术',
        'blockchain-description': '凭借自2016年积累的丰富开发实绩和技术实力，提供下一代Web3解决方案。<br>涵盖从企业级区块链到公链开发的广泛领域。',
        'blockchain-achievement1': '🏆 Cosmos国际黑客松2020 二等奖',
        'blockchain-achievement2': '🔐 上海银行票据平台实施',
        'blockchain-achievement3': '⚡ 9年以上实绩',

        // Development Timeline Section
        'timeline-title': '开发实绩·技术创新历程',
        'timeline-2016-title': '基础技术研究阶段',
        'timeline-2016-desc': '开始区块链技术调查研究。设计分布式系统架构和基础设施构建。',
        'timeline-2016-tech1': '分布式文件系统（Seaweedfs）',
        'timeline-2016-tech2': '日志收集·分析平台',
        'timeline-2016-tech3': '微服务架构',
        
        'timeline-2018-title': '企业级区块链实施',
        'timeline-2018-desc': '<strong>与上海银行的协作项目</strong> - 成功设计并实施了使用Hyperledger Fabric的票据交易平台。',
        'timeline-2018-tech1': 'Hyperledger Fabric 0.6 & 1.1',
        'timeline-2018-tech2': 'Mesos + Docker 云管理',
        'timeline-2018-tech3': '银行级安全实施',
        
        'timeline-2019-title': '公链开发',
        'timeline-2019-desc': '独自公链的研究开发。实施基于Ethereum及Cosmos的公链，运营测试网·主网。',
        'timeline-2019-tech1': 'Ethereum & Solidity 智能合约',
        'timeline-2019-tech2': 'Tendermint/Cosmos-SDK 框架',
        'timeline-2019-tech3': '共识机制设计',
        'timeline-2019-tech4': 'P2P网络优化',
        
        'timeline-2020-title': '🏆 获得国际认知',
        'timeline-2020-desc': '<strong>Cosmos & Tendermint国际黑客松2020 二等奖获奖</strong><br>通过"Flares - 多资产支付网络"项目实证了创新的跨链技术。',
        'timeline-2020-tech1': '跨链技术 (Cassini)',
        'timeline-2020-tech2': '多资产支付网络',
        'timeline-2020-tech3': 'GitHub: wangfeiping/flares',
        
        'timeline-2023-title': 'DeFi与智能合约专业化',
        'timeline-2023-desc': '在Ethereum和Tron上的DeFi协议开发。构建中心化加密资产托管服务。',
        'timeline-2023-tech1': 'Solidity高级智能合约',
        'timeline-2023-tech2': '多链兼容钱包',
        'timeline-2023-tech3': '安全密钥管理系统',
        'timeline-2023-tech4': 'Python 链数据分析',
        
        'timeline-current-title': '下一代Web3创新',
        'timeline-current-desc': 'AI驱动的量化策略与区块链资产管理2.0的融合。推进最先进技术的研究开发。',
        'timeline-current-tech1': '加密资产托管2.0',
        'timeline-current-tech2': 'AI量化交易算法',
        'timeline-current-tech3': '同态加密·MPC技术',
        'timeline-current-tech4': '零知识证明实施',

        // Core Competencies Section
        'competencies-title': '核心技术实力',
        'competency1-title': '已验证的技术实力',
        'competency1-item1': '国际黑客松获奖实绩',
        'competency1-item2': '与金融机构的共同开发经验',
        'competency1-item3': '公链主网运营实绩',
        'competency1-item4': '23年以上的开发经验',
        
        'competency2-title': '多样化技术栈',
        'competency2-item1': 'Go、Java、Rust、Python',
        'competency2-item2': 'Solidity 智能合约',
        'competency2-item3': 'Hyperledger、Cosmos、Ethereum',
        'competency2-item4': '密码学·共识算法',
        
        'competency3-title': '高级安全性',
        'competency3-item1': '同态加密技术',
        'competency3-item2': '多方计算(MPC)',
        'competency3-item3': '零知识证明',
        'competency3-item4': '基于HSM的密钥管理',

        // Services Overview Section
        'services-title': '服务概要',
        'service1-title': 'DeFi解决方案',
        'service1-desc': '在实战中磨练的DeFi协议开发能力。流动性池、收益耕作、自动交易策略的实施经验。',
        'service1-feature1': '流动性池设计·实施',
        'service1-feature2': '收益耕作优化',
        'service1-feature3': 'AI驱动的自动交易策略',
        'service1-feature4': '风险管理系统',
        
        'service2-title': 'NFT平台',
        'service2-desc': '多链兼容的NFT市场构建。从元数据管理到版税分配的全面对应。',
        'service2-feature1': 'Ethereum/Tron/BSC对应',
        'service2-feature2': '版税自动分配',
        'service2-feature3': '分割NFT',
        'service2-feature4': 'IPFS集成元数据管理',
        
        'service3-title': '智能合约开发',
        'service3-desc': '6年以上的Solidity开发经验。经过审计的安全合约设计和Gas优化实绩。',
        'service3-feature1': 'Solidity高级开发',
        'service3-feature2': '安全审计对应',
        'service3-feature3': 'Gas优化技术',
        'service3-feature4': '可升级设计',
        
        'service4-title': '加密资产托管',
        'service4-desc': '具备金融机构级安全性的加密资产管理解决方案。通过MPC技术实现安全的密钥管理。',
        'service4-feature1': 'MPC分布式密钥管理',
        'service4-feature2': '多重签名对应',
        'service4-feature3': '硬件钱包联动',
        'service4-feature4': '实时监控·报警',
        
        'service5-title': '跨链技术',
        'service5-desc': '通过Cassini项目培养的跨链技术。实现不同区块链之间的互操作性。',
        'service5-feature1': '链间通信协议',
        'service5-feature2': '原子交换',
        'service5-feature3': '桥梁构建',
        'service5-feature4': 'Cosmos IBC集成',
        
        'service6-title': '区块链分析',
        'service6-desc': '基于Elasticsearch的数据分析平台。提供链上数据的收集、分析、可视化。',
        'service6-feature1': '实时数据收集',
        'service6-feature2': 'Prometheus监控集成',
        'service6-feature3': '自定义仪表板',
        'service6-feature4': '异常检测警报',

        // Blockchain Technology Section
        'blockchain-tech-title': '支持的区块链',
        'blockchain-ethereum-title': 'Ethereum',
        'blockchain-ethereum-desc': '6年以上开发实绩',
        'blockchain-ethereum-badge': '✓ 已实施',
        'blockchain-hyperledger-title': 'Hyperledger Fabric',
        'blockchain-hyperledger-desc': '银行系统实施经验',
        'blockchain-hyperledger-badge': '✓ 已实施',
        'blockchain-cosmos-title': 'Cosmos/Tendermint',
        'blockchain-cosmos-desc': '国际黑客松获奖',
        'blockchain-cosmos-badge': '✓ 已实施',
        'blockchain-tron-title': 'Tron',
        'blockchain-tron-desc': 'DeFi协议运营中',
        'blockchain-tron-badge': '✓ 已实施',
        'blockchain-bsc-title': 'Binance Smart Chain',
        'blockchain-bsc-desc': '高速·低成本的DeFi生态系统',
        'blockchain-bsc-badge': '开发预定',
        'blockchain-polygon-title': 'Polygon',
        'blockchain-polygon-desc': 'Ethereum的Layer 2扩展',
        'blockchain-polygon-badge': '开发预定',
        'blockchain-solana-title': 'Solana',
        'blockchain-solana-desc': '高性能·低延迟的区块链',
        'blockchain-solana-badge': '开发预定',
        'blockchain-polkadot-title': 'Polkadot',
        'blockchain-polkadot-desc': '多链互操作平台',
        'blockchain-polkadot-badge': '开发预定',

        // Notable Projects Section
        'projects-title': '主要项目实绩',
        'project1-title': 'Flares - 多资产支付网络',
        'project1-award': '🏆 Cosmos & Tendermint 国际黑客松2020 二等奖',
        'project1-desc': '基于区块链的多资产支付网络。通过跨链技术实现不同区块链间的资产移动。',
        'project1-github': 'GitHub',
        'project1-devpost': 'Devpost',
        
        'project2-title': '上海银行票据平台',
        'project2-desc': '利用Hyperledger Fabric的企业票据交易系统。实现了银行级的安全性和高可用性。',
        'project2-tech1': 'Hyperledger Fabric 1.1',
        'project2-tech2': 'Docker + Mesos',
        'project2-tech3': '企业级',
        
        'project3-title': 'Cassini 跨链项目',
        'project3-desc': '实现不同区块链间互操作性的研究开发项目。使链间通信和跨链交易成为可能。',
        'project3-tech1': '开源',
        'project3-tech2': 'IBC 协议',
        'project3-tech3': '持续研究开发',
        
        'project4-title': '加密资产托管2.0',
        'project4-desc': '下一代加密资产管理平台。集成MPC技术和AI驱动的量化策略的创新解决方案。',
        'project4-tech1': 'Go语言重构',
        'project4-tech2': 'AI量化算法',
        'project4-tech3': '多链对应',

        // Technical Expertise Section
        'expertise-title': '技术专业性',
        'expertise-programming': '编程语言',
        'expertise-blockchain': '区块链框架',
        'expertise-security': '安全·密码技术',
        'expertise-devops': '基础设施·DevOps',

        // Use Cases Section
        'cases-title': '应用案例',
        'case1-client': '金融机构',
        'case1-title': '上海银行票据交易系统',
        'case1-desc': '利用Hyperledger Fabric的企业间票据交易平台。通过区块链技术大幅提升了交易的透明性和效率性。',
        'case1-result1': '交易效率化',
        'case1-result2': '防篡改',
        'case1-result3': '审计透明性',
        
        'case2-client': '加密资产交易所',
        'case2-title': '托管&DeFi集成平台',
        'case2-desc': '结合中心化和去中心化优点的混合资产管理系统。通过AI驱动的量化策略实现收益最大化。',
        'case2-result1': '安全管理',
        'case2-result2': 'AI优化',
        'case2-result3': '24小时交易',
        
        'case3-client': '国际支付事业者',
        'case3-title': '跨境支付网络',
        'case3-desc': '基于Cosmos的多资产支付系统。实现不同法定货币和加密资产间的无缝价值转移。',
        'case3-result1': '即时结算',
        'case3-result2': '低手续费',
        'case3-result3': '多货币',

        // Contact CTA Section
        'cta-title': '拥有9年以上实绩的区块链专业团队',
        'cta-desc': '凭借国际认可的技术实力和丰富的实施经验，引导您的Web3业务走向成功。',
        'cta-stat1': '年开发实绩',
        'cta-stat2': '完成项目',
        'cta-stat3': '支持链',
        'cta-button': '联系我们',

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
function blockchainSwitchLanguage(lang) {
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
        if (blockchainTranslations[lang] && blockchainTranslations[lang][key]) {
            element.innerHTML = blockchainTranslations[lang][key];
        }
    });
    
    // Update document title
    const titles = {
        ja: 'Blockchain & Web3事業 - TERABOX',
        en: 'Blockchain & Web3 Business - TERABOX',
        zh: '区块链与Web3业务 - TERABOX'
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
            blockchainSwitchLanguage(lang);
        });
    });
    
    // Apply the saved language
    blockchainSwitchLanguage(savedLang);
});