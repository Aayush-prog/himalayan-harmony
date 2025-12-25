import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { BookOpen, Shield, AlertTriangle, Backpack, Users, MapPin, Clock, Flag, Trash2, UserCheck, Footprints, Gavel } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

interface Rule {
    en: string;
    zh: string;
}

interface RuleCategory {
    title: string;
    titleZh: string;
    icon: React.ReactNode;
    rules: Rule[];
}

const RulesAndRegulations = () => {
    usePageTitle('Rules & Regulations');
    const ruleCategories: RuleCategory[] = [
        {
            title: "Adjudication and appeal",
            titleZh: "裁判及上訴",
            icon: <Gavel className="w-5 h-5" />,
            rules: [
                {
                    en: "The event will have referees and an appeals committee to handle and adjudicate complaints and appeals regarding the competition, and they will have final decision-making authority over the entire event. Participants who have any complaints regarding the results that affect the top ten standings must submit them in writing to the finish line before the award ceremony. The committee will make a judgment and respond after the event.",
                    zh: "大會設有裁判及上訴委員會處理及裁判賽事之投訴及上訴，並對整項賽事的裁決擁有最終決定權。參賽者如對比賽結果有任何投訴而影響首十名之名次，必須頒獎時前提出，以書面形式交回終點，委員會將於賽後作出判決及回覆。"
                }
            ]
        },
        {
            title: "Eligibility & Registration",
            titleZh: "參賽資格",
            icon: <UserCheck className="w-5 h-5" />,
            rules: [
                {
                    en: "Participants must be at least 18 years of age on the date that their applicable race starts for the 50 km.",
                    zh: "參加者必須於50KM賽比賽當日最少年滿18歲。"
                }
            ]
        },
        {
            title: "Race Conduct",
            titleZh: "比賽行為",
            icon: <Footprints className="w-5 h-5" />,
            rules: [
                {
                    en: "Race participants may run, walk or crawl, but may not make use of any motorized or wheeled vehicles during the race. Doing so would be grounds for disqualification.",
                    zh: "比賽期間，參賽者可選擇步行或爬行，但不得使用任何機動式或有車輪的交通工具。違規者可能會被取消參賽資格。"
                },
                {
                    en: "Race participants must make forward progress exclusively under their own power. Carrying, pulling or pushing by other racers or members of the public is prohibited and is grounds for disqualification.",
                    zh: "參賽者必須靠自己的力量完成賽事。嚴禁借助其他參賽者或公眾人士，以揹、拖動或推行等方式前進，違者將被取消參賽資格。"
                }
            ]
        },
        {
            title: "Course Rules",
            titleZh: "賽道規則",
            icon: <MapPin className="w-5 h-5" />,
            rules: [
                {
                    en: "Racers must follow the marked course route the entire way and register at each aid station and timing checkpoint. Taking short cuts is grounds for disqualification.",
                    zh: "跑手須全程沿著有標記的跑道路線進行比賽，並在每個支援站及計時站登記。抄捷徑者，例如繞過大帽山道之字形路線，將被取消參賽資格。"
                },
                {
                    en: "Use of trekking poles is permitted after passing the first checkpoint only. Those wishing to use poles must carry them in a backpack or waist pack with the points facing down. This is a safety measure to prevent runners from tripping over each other's poles before the starting crowd has had the chance to thin out.",
                    zh: "登山杖只允許在檢查站CP1之後才可以使用，在起步時若參賽者自攜登山杖必須把其放在背包或腰包裡，並確保杖腳向下。"
                },
                {
                    en: "You must obey directions of marshals if you miss any time cut-offs.",
                    zh: "如果你錯過了任何一程的截止時間，請遵從大會工作人員的指示停止前進。"
                }
            ]
        },
        {
            title: "Race Number & Identification",
            titleZh: "號碼布及識別",
            icon: <Flag className="w-5 h-5" />,
            rules: [
                {
                    en: "The race number must be always visible on the outside of the racer's clothing and on the front of the body. The racer should not cover over your race number with any backpack strap or article of clothing.",
                    zh: "你的號碼布必須全程朝外，在身體的前方，衣服的最外層。注意別讓背包的肩帶或其他衣物擋住你的號碼布。"
                }
            ]
        },
        {
            title: "Mandatory Equipment",
            titleZh: "必備裝備",
            icon: <Backpack className="w-5 h-5" />,
            rules: [
                {
                    en: "You must carry the Mandatory Gear at all times during the event. Random gear checks will be performed during the event. Any participant without the mandatory gear will not be able to proceed until they arrange for the missing item to be replaced. For the sake of fairness to other runners, the penalty for a missing item is disqualification.",
                    zh: "比賽期間，你必須全程貼身攜帶必備工具，工作人員會進行隨機的工具檢查。所有缺少必備工具的參賽者將不能繼續比賽，直至他們找到遺漏工具的替代品。為對其他跑手公平起見，將根據違規行為的嚴重程度，作出時間懲罰甚至取消參賽資格。"
                },
                {
                    en: "One of the mandatory items is two flashing lights to be worn on the front and back of the participant outside any other garments. This is a safety measure and only applies during the hours of darkness between 17:00-06:30. During daylight hours there is no requirement to wear these flashing lights.",
                    zh: "指定裝備裡兩支閃燈仍為公路安全守則，每位參賽者必須在下午5:00pm至翌日上午6:30am 期間在衣物外前後方戴上。其它日期比賽時段不受此限。"
                }
            ]
        },
        {
            title: "Environmental Rules",
            titleZh: "環境規則",
            icon: <Trash2 className="w-5 h-5" />,
            rules: [
                {
                    en: "Any littering on the course is strictly prohibited. Race participants are responsible for making sure that anything they throw out goes into a trash barrel. Littering on the course is grounds for disqualification.",
                    zh: "嚴禁在跑道上亂丟垃圾，參賽者有責任確保他們丟掉的東西是否被準確地投進垃圾桶中。亂抛垃圾將導致參賽者被取消資格。"
                }
            ]
        },
        {
            title: "Withdrawal",
            titleZh: "退出比賽",
            icon: <Clock className="w-5 h-5" />,
            rules: [
                {
                    en: "If you withdraw from the event, you must notify the closest checkpoint (unless assisted from the course by First Aid crews).",
                    zh: "如果你需要退出比賽，你必須在最近距離的檢查站簽署退出申請書（於賽道上，由急救人員協助離開除外）。"
                }
            ]
        },
        {
            title: "Aid Stations & Supplies",
            titleZh: "支援站及補給",
            icon: <Shield className="w-5 h-5" />,
            rules: [
                {
                    en: "Race participants may not receive outside support from the general public anywhere along the course other than at check points/aid stations.",
                    zh: "除各個檢查站及支援站以外，參賽者沿途不得接受任何公眾人士的支援。"
                },
                {
                    en: "Race participants may use their own money that they carry themselves to purchase food and supplies from shops anywhere along the course, such as at the 7-11 and Circle K store.",
                    zh: "參賽者可在跑道沿線的商店自資購買食物及補給品。"
                },
                {
                    en: "Race participants may take as much food and beverage as needed from each aid station provided by the organizer. A full list of what will be provided at each aid station will be made available on the organizer's website prior to the race. Race participants will not be allowed to take any bottles, cans or cups from the site and should plan on carrying and refilling their own hydration systems and cups at the aid stations.",
                    zh: "參賽者可根據需要拿取由主辦方提供的食物及飲品，主辦方會在賽前提供一份完整的清單，列明每個支援站可取用的物資。參賽者不能帶走支援站內的水樽、罐子或杯子。參賽者請自備盛水器具在支援站補給。"
                }
            ]
        },
        {
            title: "Support Crew Rules",
            titleZh: "支援人員規則",
            icon: <Users className="w-5 h-5" />,
            rules: [
                {
                    en: "The participant is responsible for the actions of their support crew. Support crews must comply with all instructions from event staff and officials. The participant may be penalised or disqualified for actions or breaches of the rules by their support crew.",
                    zh: "參賽者須對自己的支援人員的行為負責。支援人員須遵照大會工作人員及官方的全部指示。支援人員的不當行為或違規，可導致參賽者受到懲罰或取消參賽資格。"
                },
                {
                    en: "Support crews must not eat the provided food at checkpoints. The food is for the competitors only.",
                    zh: "支援人員不可食用檢查站提供的食物，站裡的食物僅提供予參賽者。"
                },
                {
                    en: "Outside assistance is only permitted at checkpoint 3.",
                    zh: "支援人員只限於檢查站內向參賽者提供協助3。"
                },
                {
                    en: "Support crews are not permitted to run with nor pace runners.",
                    zh: "支援人員不得陪伴參賽者跑步或設定步速。"
                },
                {
                    en: "The event organizers are not responsible for the safety or whereabouts of the support crew.",
                    zh: "主辦方概不為支援人員的安全及行蹤負責。"
                }
            ]
        },
        {
            title: "Protests",
            titleZh: "異議申訴",
            icon: <BookOpen className="w-5 h-5" />,
            rules: [
                {
                    en: "Racers wishing to make a protest must notify the race command centre in writing within 60 minutes of finishing the race. Protests will be considered by a three person committee consisting of the race director, a representative from HKNUTRA and a representative of the race timing system service provider.",
                    zh: "參賽者如有異議，必須在完成比賽的60分鐘之內以書面通知控制中心。反對的意見會由一個三人委員會裁決。委員會由賽事總監、HKNUTRA的代表，及一名獨立第三方如賽事計時服務供意商的代表組成。該委員會的決定將為最終決定。"
                }
            ]
        }
    ];

    const mandatoryGear = [
        { item: "Torch / Headlamp", itemZh: "電筒 / 頭燈", detail: "50km only", icon: "🔦" },
        { item: "Mobile Phone", itemZh: "手機", detail: "Fully charged", icon: "📱" },
        { item: "Hydration System", itemZh: "水袋/水樽", detail: "Min. 1.5L", icon: "💧" },
        { item: "Cash / Octopus", itemZh: "現金 / 八達通", detail: "HKD 200+", icon: "💵" },
        { item: "Windbreaker", itemZh: "防風外套", detail: "Waterproof recommended", icon: "🧥" },
        { item: "Whistle", itemZh: "哨子", detail: "Emergency use", icon: "📢" },
        { item: "Flashing Lights (x2)", itemZh: "閃燈 (x2)", detail: "Front & Back 17:00-06:30", icon: "🔴" },
        { item: "Personal Cup", itemZh: "個人水杯", detail: "For aid stations", icon: "🥤" }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Rules & Regulations" subtitle="規則及條例 | Safety First, Race Hard" />

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* Mandatory Equipment - Grid Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-red-600 p-3 transform skew-x-[-12deg] shadow-lg shadow-red-500/20">
                            <Backpack className="w-6 h-6 text-white skew-x-[12deg]" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black uppercase italic tracking-wider text-white">Mandatory Equipment</h2>
                            <p className="text-red-400 text-sm font-bold uppercase tracking-widest">必備裝備</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {mandatoryGear.map((gear, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#1a0505] border border-red-500/20 p-4 hover:border-red-500 hover:bg-red-500/10 transition-colors group cursor-default relative overflow-hidden"
                                initial={{ skewX: -6 }}
                                whileHover={{ y: -5, skewX: -6, boxShadow: '4px 4px 0px 0px rgba(239, 68, 68, 0.4)' }}
                            >
                                <div className="absolute -right-2 -top-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">{gear.icon}</div>
                                <div className="skew-x-[6deg]">
                                    <h3 className="font-black text-white uppercase italic tracking-wide mb-0.5 text-sm">{gear.item}</h3>
                                    <p className="text-gray-400 text-xs mb-1">{gear.itemZh}</p>
                                    <span className="text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-2 py-0.5 inline-block">{gear.detail}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* General Rules Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary p-3 transform skew-x-[-12deg] shadow-lg shadow-primary/20">
                            <BookOpen className="w-6 h-6 text-white skew-x-[12deg]" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black uppercase italic tracking-wider text-white">General Rules</h2>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest">一般規則</p>
                        </div>
                    </div>
                </motion.div>

                {/* Rule Categories */}
                <div className="space-y-6 mb-16">
                    {ruleCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + catIndex * 0.05 }}
                            whileHover={{ y: -3 }}
                            className="relative bg-[#0a193c] border border-white/10 p-6 hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Corner decorations */}
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 translate-x-1 -translate-y-1" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 -translate-x-1 translate-y-1" />

                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                                <div className="bg-primary/20 p-2 text-primary">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-white uppercase italic tracking-wide">{category.title}</h3>
                                    <p className="text-gray-400 text-xs">{category.titleZh}</p>
                                </div>
                            </div>

                            {/* Rules List */}
                            <div className="space-y-4">
                                {category.rules.map((rule, ruleIndex) => (
                                    <div key={ruleIndex} className="group">
                                        <div className="flex gap-3">
                                            <span className="font-mono text-primary font-black text-sm italic bg-black/20 w-8 h-8 flex items-center justify-center border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors shrink-0 mt-1">
                                                {String(ruleIndex + 1).padStart(2, '0')}
                                            </span>
                                            <div className="space-y-2">
                                                <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                                                    {rule.en}
                                                </p>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {rule.zh}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Weather Policy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                        y: -5,
                        borderColor: 'rgba(59, 130, 246, 0.8)',
                        boxShadow: '8px 8px 0px 0px rgba(59, 130, 246, 0.4)'
                    }}
                    className="bg-[#0a152e] border-l-4 border-blue-500 p-8 border-y border-r border-blue-500/20 mb-16"
                >
                    <h2 className="text-2xl font-black mb-2 flex items-center gap-3 text-blue-400 uppercase italic">
                        <AlertTriangle className="w-8 h-8" /> Weather Policy
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">惡劣天氣政策</p>
                    <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-300">
                        <div className="bg-blue-900/20 p-4 border border-blue-500/20">
                            <strong className="text-white block uppercase tracking-widest mb-2 border-b border-blue-500/30 pb-2">Typhoon Signal 8 / 八號風球</strong>
                            <p>Race cancelled if signal is hoisted up to 2 hours before start time.</p>
                            <p className="text-gray-400 mt-2">如於開賽前2小時仍懸掛八號風球，比賽將取消。</p>
                        </div>
                        <div className="bg-blue-900/20 p-4 border border-blue-500/20">
                            <strong className="text-white block uppercase tracking-widest mb-2 border-b border-blue-500/30 pb-2">Signal 3 / Thunderstorm 三號風球 / 雷暴</strong>
                            <p>Decision made 15 mins before start. Race Director reserves the right to postpone or cancel.</p>
                            <p className="text-gray-400 mt-2">開賽前15分鐘作決定。賽事總監保留延期或取消比賽的權利。</p>
                        </div>
                    </div>
                </motion.div>

                {/* Important Reminders */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-red-900/30 to-red-800/10 border border-red-500/30 p-6"
                >
                    <h3 className="text-xl font-black text-red-400 uppercase italic mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> Important Reminders / 重要提醒
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-red-400 font-bold mt-0.5">•</span>
                            <div>
                                <p className="text-gray-300">Disqualification may result from: using vehicles, taking shortcuts, littering, missing mandatory gear, or receiving unauthorized support.</p>
                                <p className="text-gray-500 mt-1">可導致取消資格的情況：使用交通工具、抄捷徑、亂丟垃圾、缺少必備裝備或接受未經授權的支援。</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-400 font-bold mt-0.5">•</span>
                            <div>
                                <p className="text-gray-300">All participants must carry mandatory gear at ALL times. Random checks will be conducted.</p>
                                <p className="text-gray-500 mt-1">所有參賽者必須全程攜帶必備裝備。工作人員會進行隨機檢查。</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>

            </div>
        </div>
    );
};

export default RulesAndRegulations;
