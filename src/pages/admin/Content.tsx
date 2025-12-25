import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';

type Section = 'home' | 'about' | 'footer' | 'rules';

export default function ContentManagementPage() {
    usePageTitle('Admin - Content');
    const [activeSection, setActiveSection] = useState<Section>('home');

    // Mock content state
    const [homeContent, setHomeContent] = useState({
        heroTitle: 'HIMALAYAN ULTRA',
        heroSubtitle: 'The Ultimate Endurance Challenge',
        introText: 'The Himalayan Ultra is an ultra endurance race that takes place in Hong Kong...',
    });

    const [footerContent, setFooterContent] = useState({
        copyrightText: '© 2025 Himalayan Ultra. All rights reserved.',
        contactEmail: 'info@himalayanultra.com',
    });

    const [rulesContent, setRulesContent] = useState([
        {
            category: "Eligibility & Registration",
            rules: [
                { en: "Participants must be at least 18 years of age on the date that their applicable race starts for the 50 km.", zh: "參加者必須於50KM賽比賽當日最少年滿18歲。" }
            ]
        },
        {
            category: "Race Conduct",
            rules: [
                { en: "Race participants may run, walk or crawl, but may not make use of any motorized or wheeled vehicles during the race. Doing so would be grounds for disqualification.", zh: "比賽期間，參賽者可選擇步行或爬行，但不得使用任何機動式或有車輪的交通工具。違規者可能會被取消參賽資格。" },
                { en: "Race participants must make forward progress exclusively under their own power. Carrying, pulling or pushing by other racers or members of the public is prohibited and is grounds for disqualification.", zh: "參賽者必須靠自己的力量完成賽事。嚴禁借助其他參賽者或公眾人士，以揹、拖動或推行等方式前進，違者將被取消參賽資格。" }
            ]
        },
        {
            category: "Course Rules",
            rules: [
                { en: "Racers must follow the marked course route the entire way and register at each aid station and timing checkpoint. Taking short cuts is grounds for disqualification.", zh: "跑手須全程沿著有標記的跑道路線進行比賽，並在每個支援站及計時站登記。抄捷徑者，例如繞過大帽山道之字形路線，將被取消參賽資格。" },
                { en: "Use of trekking poles is permitted after passing the first checkpoint only. Those wishing to use poles must carry them in a backpack or waist pack with the points facing down. This is a safety measure to prevent runners from tripping over each other's poles before the starting crowd has had the chance to thin out.", zh: "登山杖只允許在檢查站CP1之後才可以使用，在起步時若參賽者自攜登山杖必須把其放在背包或腰包裡，並確保杖腳向下。" },
                { en: "You must obey directions of marshals if you miss any time cut-offs.", zh: "如果你錯過了任何一程的截止時間，請遵從大會工作人員的指示停止前進。" }
            ]
        },
        {
            category: "Race Number & Identification",
            rules: [
                { en: "The race number must be always visible on the outside of the racer's clothing and on the front of the body. The racer should not cover over your race number with any backpack strap or article of clothing.", zh: "你的號碼布必須全程朝外，在身體的前方，衣服的最外層。注意別讓背包的肩帶或其他衣物擋住你的號碼布。" }
            ]
        },
        {
            category: "Mandatory Equipment",
            rules: [
                { en: "You must carry the Mandatory Gear at all times during the event. Random gear checks will be performed during the event. Any participant without the mandatory gear will not be able to proceed until they arrange for the missing item to be replaced. For the sake of fairness to other runners, the penalty for a missing item is disqualification.", zh: "比賽期間，你必須全程貼身攜帶必備工具，工作人員會進行隨機的工具檢查。所有缺少必備工具的參賽者將不能繼續比賽，直至他們找到遺漏工具的替代品。為對其他跑手公平起見，將根據違規行為的嚴重程度，作出時間懲罰甚至取消參賽資格。" },
                { en: "One of the mandatory items is two flashing lights to be worn on the front and back of the participant outside any other garments. This is a safety measure and only applies during the hours of darkness between 17:00-06:30. During daylight hours there is no requirement to wear these flashing lights.", zh: "指定裝備裡兩支閃燈仍為公路安全守則，每位參賽者必須在下午5:00pm至翌日上午6:30am 期間在衣物外前後方戴上。其它日期比賽時段不受此限。" }
            ]
        },
        {
            category: "Environmental Rules",
            rules: [
                { en: "Any littering on the course is strictly prohibited. Race participants are responsible for making sure that anything they throw out goes into a trash barrel. Littering on the course is grounds for disqualification.", zh: "嚴禁在跑道上亂丟垃圾，參賽者有責任確保他們丟掉的東西是否被準確地投進垃圾桶中。亂抛垃圾將導致參賽者被取消資格。" }
            ]
        },
        {
            category: "Withdrawal",
            rules: [
                { en: "If you withdraw from the event, you must notify the closest checkpoint (unless assisted from the course by First Aid crews).", zh: "如果你需要退出比賽，你必須在最近距離的檢查站簽署退出申請書（於賽道上，由急救人員協助離開除外）。" }
            ]
        },
        {
            category: "Aid Stations & Supplies",
            rules: [
                { en: "Race participants may not receive outside support from the general public anywhere along the course other than at check points/aid stations.", zh: "除各個檢查站及支援站以外，參賽者沿途不得接受任何公眾人士的支援。" },
                { en: "Race participants may use their own money that they carry themselves to purchase food and supplies from shops anywhere along the course, such as at the 7-11 and circle K store.", zh: "參賽者可在跑道沿線的商店自資購買食物及補給品。" },
                { en: "Race participants may take as much food and beverage as needed from each aid station provided by the organizer. A full list of what will be provided at each aid station will be made available on the organizer's website prior to the race. Race participants will not be allowed to take any bottles, cans or cups from the site and should plan on carrying and refilling their own hydration systems and cups at the aid stations.", zh: "參賽者可根據需要拿取由主辦方提供的食物及飲品，主辦方會在賽前提供一份完整的清單，列明每個支援站可取用的物資。參賽者不能帶走支援站內的水樽、罐子或杯子。參賽者請自備盛水器具在支援站補給。" }
            ]
        },
        {
            category: "Support Crew Rules",
            rules: [
                { en: "The participant is responsible for the actions of their support crew. Support crews must comply with all instructions from event staff and officials. The participant may be penalised or disqualified for actions or breaches of the rules by their support crew.", zh: "參賽者須對自己的支援人員的行為負責。支援人員須遵照大會工作人員及官方的全部指示。支援人員的不當行為或違規，可導致參賽者受到懲罰或取消參賽資格。" },
                { en: "Support crews must not eat the provided food at checkpoints. The food is for the competitors only.", zh: "支援人員不可食用檢查站提供的食物，站裡的食物僅提供予參賽者。" },
                { en: "Outside assistance is only permitted at the checkpoint 3.", zh: "支援人員只限於檢查站內向參賽者提供協助3。" },
                { en: "Support crews are not permitted to run with nor pace runners.", zh: "支援人員不得陪伴參賽者跑步或設定步速。" },
                { en: "The event organizers are not responsible for the safety or whereabouts of the support crew.", zh: "主辦方概不為支援人員的安全及行蹤負責。" }
            ]
        },
        {
            category: "Protests",
            rules: [
                { en: "Racers wishing to make a protest must notify the race command centre in writing within 60 minutes of finishing the race. Protests will be considered by a three person committee consisting of the race director, a representative from HKNUTRA and a representative of the race timing system service provider.", zh: "參賽者如有異議，必須在完成比賽的60分鐘之內以書面通知控制中心。反對的意見會由一個三人委員會裁決。委員會由賽事總監、HKNUTRA的代表，及一名獨立第三方如賽事計時服務供意商的代表組成。該委員會的決定將為最終決定。" }
            ]
        },
        {
            category: "Adjudication and appeal",
            rules: [
                { en: "The event will have referees and an appeals committee to handle and adjudicate complaints and appeals regarding the competition, and they will have final decision-making authority over the entire event. Participants who have any complaints regarding the results that affect the top ten standings must submit them in writing to the finish line before the award ceremony. The committee will make a judgment and respond after the event.", zh: "大會設有裁判及上訴委員會處理及裁判賽事之投訴及上訴，並對整項賽事的裁決擁有最終決定權。參賽者如對比賽結果有任何投訴而影響首十名之名次，必須頒獎時前提出，以書面形式交回終點，委員會將於賽後作出判決及回覆。" }
            ]
        }
    ]);

    const handleHomeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setHomeContent(prev => ({ ...prev, [name]: value }));
    };

    const handleFooterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFooterContent(prev => ({ ...prev, [name]: value }));
    };

    const handleRuleChange = (catIndex: number, ruleIndex: number, lang: 'en' | 'zh', value: string) => {
        const newRules = [...rulesContent];
        newRules[catIndex].rules[ruleIndex][lang] = value;
        setRulesContent(newRules);
    };

    const handleSave = () => {
        alert('Content updated successfully! (Simulation)');
    };

    return (
        <div className="flex flex-col gap-8">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Site Content Management</h1>
                <button onClick={handleSave} className="btn btn-primary px-6 py-2">Publish Changes</button>
            </header>

            <div className="flex border-b border-white/10 mb-6 overflow-x-auto">
                <button
                    className={`px-6 py-3 font-bold transition-colors border-b-2 whitespace-nowrap ${activeSection === 'home'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                    onClick={() => setActiveSection('home')}
                >
                    Home Page
                </button>
                <button
                    className={`px-6 py-3 font-bold transition-colors border-b-2 whitespace-nowrap ${activeSection === 'footer'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                    onClick={() => setActiveSection('footer')}
                >
                    Footer & Contact
                </button>
                <button
                    className={`px-6 py-3 font-bold transition-colors border-b-2 whitespace-nowrap ${activeSection === 'rules'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                    onClick={() => setActiveSection('rules')}
                >
                    Rules & Regulations
                </button>
            </div>

            <div className="bg-[#15151e] p-8 rounded-xl border border-white/10">
                {activeSection === 'home' && (
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-bold text-white uppercase mb-6 pb-2 border-b border-white/5">Home Page Hero</h2>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Hero Title</label>
                            <input
                                type="text"
                                name="heroTitle"
                                value={homeContent.heroTitle}
                                onChange={handleHomeChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Hero Subtitle</label>
                            <input
                                type="text"
                                name="heroSubtitle"
                                value={homeContent.heroSubtitle}
                                onChange={handleHomeChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Intro Text</label>
                            <textarea
                                name="introText"
                                rows={5}
                                value={homeContent.introText}
                                onChange={handleHomeChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-y"
                            />
                        </div>
                    </div>
                )}

                {activeSection === 'footer' && (
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-bold text-white uppercase mb-6 pb-2 border-b border-white/5">Footer Settings</h2>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Copyright Text</label>
                            <input
                                type="text"
                                name="copyrightText"
                                value={footerContent.copyrightText}
                                onChange={handleFooterChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Contact Email</label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={footerContent.contactEmail}
                                onChange={handleFooterChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                )}

                {activeSection === 'rules' && (
                    <div className="max-w-4xl">
                        <h2 className="text-xl font-bold text-white uppercase mb-6 pb-2 border-b border-white/5">Manage Rules</h2>
                        <div className="space-y-8">
                            {rulesContent.map((category, catIndex) => (
                                <div key={catIndex} className="bg-black/20 p-6 rounded-lg border border-white/5">
                                    <h3 className="text-lg font-bold text-primary mb-4">{category.category}</h3>
                                    <div className="space-y-6">
                                        {category.rules.map((rule, ruleIndex) => (
                                            <div key={ruleIndex} className="space-y-3 pb-4 border-b border-white/5 last:border-0">
                                                <div>
                                                    <label className="block text-gray-500 text-xs font-bold mb-1 uppercase">English</label>
                                                    <textarea
                                                        value={rule.en}
                                                        onChange={(e) => handleRuleChange(catIndex, ruleIndex, 'en', e.target.value)}
                                                        className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary transition-colors resize-y"
                                                        rows={2}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-500 text-xs font-bold mb-1 uppercase">Chinese</label>
                                                    <textarea
                                                        value={rule.zh}
                                                        onChange={(e) => handleRuleChange(catIndex, ruleIndex, 'zh', e.target.value)}
                                                        className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary transition-colors resize-y"
                                                        rows={2}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
