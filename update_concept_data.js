const fs = require('fs');

const newConceptData = `const conceptData = [
            {
                id: 'intro', icon: 'fa-seedling', title: '0. 음양오행과 사주팔자',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">우주의 바코드, 사주팔자(四柱八字)</h2>
                            <p class="text-slate-600 mb-6 text-lg leading-relaxed">우리가 태어난 연, 월, 일, 시라는 네 개의 기둥(四柱)과 그 기둥을 이루는 여덟 개의 글자(八字)를 뜻합니다. 이는 태어난 순간 우주와 자연으로부터 부여받은 에너지의 바코드와 같습니다.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div class="bg-sky-50 p-6 rounded-xl border border-sky-100">
                                    <h3 class="font-bold text-sky-800 text-xl mb-3"><i class="fas fa-cloud text-sky-500 mr-2"></i>천간 (天干) - 10글자</h3>
                                    <p class="text-sky-700 leading-relaxed mb-3">하늘의 기운이자 나의 정신, 이상, 사회적으로 겉으로 드러나는 모습입니다.</p>
                                    <p class="text-sm text-sky-600">갑(甲), 을(乙), 병(丙), 정(丁), 무(戊), 기(己), 경(庚), 신(辛), 임(壬), 계(癸)</p>
                                </div>
                                <div class="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                    <h3 class="font-bold text-amber-800 text-xl mb-3"><i class="fas fa-mountain text-amber-500 mr-2"></i>지지 (地支) - 12글자</h3>
                                    <p class="text-amber-700 leading-relaxed mb-3">땅의 기운이자 나의 현실, 환경, 무의식 속에 숨겨진 끈질긴 성향입니다.</p>
                                    <p class="text-sm text-amber-600">자(子), 축(丑), 인(寅), 묘(卯), 진(辰), 사(巳), 오(午), 미(未), 신(申), 유(酉), 술(戌), 해(亥)</p>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-slate-800 mb-4 mt-8">세상의 5가지 원소 : 오행(五行)</h3>
                            <p class="text-slate-600 mb-4">우주 만물은 나무(木), 불(火), 흙(土), 쇠(金), 물(水)의 5가지 에너지로 이루어져 끊임없이 상호작용합니다.</p>
                            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                                <div class="wood p-5 rounded-xl text-center border">
                                    <div class="font-bold text-xl mb-1">木 (목)</div>
                                    <div class="text-sm font-semibold mb-2">탄생과 성장</div>
                                    <p class="text-xs opacity-90 text-left">봄의 기운. 위로 곧게 뻗어 나가며 시작하는 에너지. 인자함(仁)과 추진력을 상징합니다.</p>
                                </div>
                                <div class="fire p-5 rounded-xl text-center border">
                                    <div class="font-bold text-xl mb-1">火 (화)</div>
                                    <div class="text-sm font-semibold mb-2">팽창과 발산</div>
                                    <p class="text-xs opacity-90 text-left">여름의 기운. 화려하게 피어나며 확산하는 에너지. 예의(禮)와 열정, 밝음을 상징합니다.</p>
                                </div>
                                <div class="earth p-5 rounded-xl text-center border">
                                    <div class="font-bold text-xl mb-1">土 (토)</div>
                                    <div class="text-sm font-semibold mb-2">중재와 포용</div>
                                    <p class="text-xs opacity-90 text-left">계절의 환절기. 모든 것을 품어주고 조율하는 에너지. 신용(信)과 안정감, 끈기를 상징합니다.</p>
                                </div>
                                <div class="metal p-5 rounded-xl text-center border">
                                    <div class="font-bold text-xl mb-1">金 (금)</div>
                                    <div class="text-sm font-semibold mb-2">결실과 단절</div>
                                    <p class="text-xs opacity-90 text-left">가을의 기운. 열매를 맺고 불필요한 것을 잘라내는 에너지. 의리(義)와 결단력을 상징합니다.</p>
                                </div>
                                <div class="water p-5 rounded-xl text-center border">
                                    <div class="font-bold text-xl mb-1">水 (수)</div>
                                    <div class="text-sm font-semibold mb-2">저장과 지혜</div>
                                    <p class="text-xs opacity-90 text-left">겨울의 기운. 안으로 갈무리하며 유연하게 흐르는 에너지. 지혜(智)와 융통성을 상징합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                \`
            },
            {
                id: 'shishen', icon: 'fa-project-diagram', title: '1. 십신 (나와 세상의 관계)',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-2">십신(十神) : 나는 세상을 어떻게 대하는가?</h2>
                            <p class="text-slate-500 mb-6">나(일간)를 기준으로 다른 오행들이 나와 맺는 관계를 10가지로 분류한 것입니다. 사람의 사회적 심리와 직업, 재물운을 파악하는 핵심 도구입니다.</p>
                            <div class="space-y-4">
                                <div class="p-5 bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-5 text-8xl"><i class="fas fa-users"></i></div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <span class="px-3 py-1 bg-slate-700 text-white rounded text-sm font-bold">비겁(比劫)</span>
                                        <h3 class="font-bold text-lg">나와 같은 기운 (나, 주체성, 경쟁, 동료)</h3>
                                    </div>
                                    <p class="text-slate-600 text-sm mb-3">"내 인생은 내가 주도한다." 독립심, 뚝심, 추진력을 의미하며 과하면 아집이 됩니다.</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div class="bg-white p-3 rounded shadow-sm">
                                            <div class="font-bold text-slate-700 mb-1">비견 (比肩)</div>
                                            <p class="text-slate-500">나와 음양마저 같은 글자. 주관, 평등, 협동, 자존심. 친구나 동업자의 조력을 의미합니다.</p>
                                        </div>
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-slate-400">
                                            <div class="font-bold text-slate-700 mb-1">겁재 (劫財)</div>
                                            <p class="text-slate-500">나와 음양이 다른 글자. 강한 승부욕, 경쟁심, 투기성. 재물을 빼앗거나 남을 이기려는 권력욕을 뜻합니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 bg-green-50 rounded-xl border border-green-100 relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-5 text-8xl text-green-900"><i class="fas fa-comment-dots"></i></div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <span class="px-3 py-1 bg-green-600 text-white rounded text-sm font-bold">식상(食傷)</span>
                                        <h3 class="font-bold text-lg">내가 낳는 기운 (행동, 언변, 재능, 생산)</h3>
                                    </div>
                                    <p class="text-slate-600 text-sm mb-3">"내가 가진 것을 세상에 보여주겠다." 창의력, 손재주, 언변, 감성, 의식주를 상징합니다.</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-400">
                                            <div class="font-bold text-slate-700 mb-1">식신 (食神)</div>
                                            <p class="text-slate-500">한우물을 파는 연구심, 전문 기술. 성품이 온화하고 평생 먹을 복이 두터운 아주 좋은 길성입니다.</p>
                                        </div>
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-emerald-400">
                                            <div class="font-bold text-slate-700 mb-1">상관 (傷官)</div>
                                            <p class="text-slate-500">기존의 틀을 깨는 순발력과 혁신. 화려하고 유창한 언변과 기예, 뛰어난 예술성과 친화력을 가집니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 bg-amber-50 rounded-xl border border-amber-100 relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-5 text-8xl text-amber-900"><i class="fas fa-coins"></i></div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <span class="px-3 py-1 bg-amber-500 text-white rounded text-sm font-bold">재성(財星)</span>
                                        <h3 class="font-bold text-lg">내가 극하는 기운 (결과, 재물, 현실감각)</h3>
                                    </div>
                                    <p class="text-slate-600 text-sm mb-3">"노력한 만큼 성과를 쟁취하겠다." 현실적인 이익, 돈, 시장성, 결단력을 뜻합니다.</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-amber-400">
                                            <div class="font-bold text-slate-700 mb-1">정재 (正財)</div>
                                            <p class="text-slate-500">정당한 땀방울로 모은 안정적인 재물(월급). 꼼꼼하고 알뜰하며 신용과 저축, 현실성을 중시합니다.</p>
                                        </div>
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-yellow-400">
                                            <div class="font-bold text-slate-700 mb-1">편재 (偏財)</div>
                                            <p class="text-slate-500">사업, 투자, 횡재수 등 스케일이 큰 유동적인 재물. 통제력이 뛰어나고 사람을 다루는 매니지먼트 능력이 좋습니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 bg-red-50 rounded-xl border border-red-100 relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-5 text-8xl text-red-900"><i class="fas fa-gavel"></i></div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <span class="px-3 py-1 bg-red-500 text-white rounded text-sm font-bold">관성(官星)</span>
                                        <h3 class="font-bold text-lg">나를 극하는 기운 (명예, 규칙, 직장, 책임감)</h3>
                                    </div>
                                    <p class="text-slate-600 text-sm mb-3">"규칙과 틀 안에서 인정받겠다." 법, 조직, 억압, 통제력, 체면을 상징합니다.</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-red-400">
                                            <div class="font-bold text-slate-700 mb-1">정관 (正官)</div>
                                            <p class="text-slate-500">합리적인 규칙과 반듯한 명예. 안정적인 직장과 모범적인 생활 태도, 도덕성을 의미합니다.</p>
                                        </div>
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-rose-400">
                                            <div class="font-bold text-slate-700 mb-1">편관 (칠살)</div>
                                            <p class="text-slate-500">나를 강하게 억압하는 혹독한 기운. 엄청난 카리스마, 권력, 위험을 이겨내는 군검경 등의 직업과 연관됩니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 bg-blue-50 rounded-xl border border-blue-100 relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-5 text-8xl text-blue-900"><i class="fas fa-book-open"></i></div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <span class="px-3 py-1 bg-blue-500 text-white rounded text-sm font-bold">인성(印星)</span>
                                        <h3 class="font-bold text-lg">나를 생하는 기운 (수용성, 학문, 자격증, 보호)</h3>
                                    </div>
                                    <p class="text-slate-600 text-sm mb-3">"배우고 받아들여 나를 채우겠다." 생각, 아이디어, 인내, 권리증서(부동산)를 뜻합니다.</p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-blue-400">
                                            <div class="font-bold text-slate-700 mb-1">정인 (正印)</div>
                                            <p class="text-slate-500">어머니의 맹목적인 사랑과 같은 포근함. 정통 학문, 도덕성, 보편적 진리를 수용하는 착한 성품입니다.</p>
                                        </div>
                                        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-sky-400">
                                            <div class="font-bold text-slate-700 mb-1">편인 (偏印)</div>
                                            <p class="text-slate-500">비판적 수용과 눈치, 남들이 잘 안하는 특수한 학문. 철학, 종교, 예술, 전문 기술, 눈치가 백단입니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                \`
            },
            {
                id: 'yukchin', icon: 'fa-people-roof', title: '2. 육친 (가족 대입 공식)',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-2">육친(六親) 대입하기</h2>
                            <p class="text-slate-500 mb-6">십신의 원리를 인간관계에 비유한 공식입니다. 남녀가 음양의 위치가 다르듯 육친 해석도 확연히 다릅니다.</p>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                    <thead>
                                        <tr class="bg-slate-800 text-white">
                                            <th class="p-4 border-b-2">십신</th>
                                            <th class="p-4 border-b-2">남자 사주 (건명)</th>
                                            <th class="p-4 border-b-2">여자 사주 (곤명)</th>
                                            <th class="p-4 border-b-2 text-sm font-normal text-slate-300">원리 해설</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-slate-700">
                                        <tr class="border-b hover:bg-slate-50 transition">
                                            <td class="p-4 font-bold">비견/겁재</td>
                                            <td class="p-4 font-semibold text-blue-700">형제, 동료</td>
                                            <td class="p-4 font-semibold text-pink-700">형제자매, 동료</td>
                                            <td class="p-4 text-sm text-slate-500">나와 기운이 같아 어깨를 나란히 함</td>
                                        </tr>
                                        <tr class="border-b hover:bg-slate-50 transition">
                                            <td class="p-4 font-bold">식신/상관</td>
                                            <td class="p-4 font-semibold text-blue-700">장모, 부하직원</td>
                                            <td class="p-4 font-bold text-pink-700 bg-pink-50 rounded">자식 (아들, 딸)</td>
                                            <td class="p-4 text-sm text-slate-500">여자가 자신의 몸(기운)을 희생해 낳고 기르는 존재</td>
                                        </tr>
                                        <tr class="border-b hover:bg-slate-50 transition">
                                            <td class="p-4 font-bold">정재/편재</td>
                                            <td class="p-4 font-bold text-blue-700 bg-blue-50 rounded">아내 (배우자), 아버지</td>
                                            <td class="p-4 font-semibold text-pink-700">아버지, 시어머니</td>
                                            <td class="p-4 text-sm text-slate-500">남자가 책임지고 통제하며 부양하는 대상</td>
                                        </tr>
                                        <tr class="border-b hover:bg-slate-50 transition">
                                            <td class="p-4 font-bold">정관/편관</td>
                                            <td class="p-4 font-bold text-blue-700 bg-blue-50 rounded">자식 (아들, 딸)</td>
                                            <td class="p-4 font-bold text-pink-700 bg-pink-50 rounded">남편 (배우자)</td>
                                            <td class="p-4 text-sm text-slate-500">나의 행동을 제약하고 책임감과 틀을 부여하는 존재</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition">
                                            <td class="p-4 font-bold">정인/편인</td>
                                            <td class="p-4 font-bold text-blue-700 bg-blue-50 rounded">어머니, 장인</td>
                                            <td class="p-4 font-bold text-pink-700 bg-pink-50 rounded">어머니</td>
                                            <td class="p-4 text-sm text-slate-500">나를 무조건적으로 수용하고 낳아 기르는 젖줄</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                                <p class="text-sm text-slate-700"><strong>💡 참고:</strong> 현대 사회에서는 이 공식에 얽매이지 않고 식상을 나의 '창작물, 프로젝트', 관성을 나의 '직장, 고객', 인성을 '자격증, 후원자'로 더욱 폭넓게 해석합니다.</p>
                            </div>
                        </div>
                    </div>
                \`
            },
            {
                id: 'jijanggan', icon: 'fa-box-archive', title: '3. 지장간 (땅 속의 비밀)',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-2">지장간(支藏干) : 지지 속에 숨은 10개의 천간</h2>
                            <p class="text-slate-500 mb-6 leading-relaxed">하늘(천간)의 기운은 순수하지만, 땅(지지)의 기운은 계절의 변화와 온갖 복잡한 기운들이 섞여 있습니다. 그래서 지지 글자 안에는 2~3개의 천간이 몰래 숨어 있으며, 이를 통해 사람의 진짜 속마음이나 숨겨진 잠재력(비상금 등)을 파악할 수 있습니다.</p>
                            
                            <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div class="text-center w-full md:w-1/3 bg-white p-4 rounded shadow-sm">
                                    <div class="text-xs text-slate-500 mb-1">과거의 미련</div>
                                    <div class="font-bold text-slate-800 text-lg">여기 (餘氣)</div>
                                    <div class="text-sm mt-2 text-slate-600">지난 달에서 넘기지 못하고 <br>남아있는 끈질긴 기운</div>
                                </div>
                                <i class="fas fa-chevron-right text-slate-400 hidden md:block"></i>
                                <div class="text-center w-full md:w-1/3 bg-white p-4 rounded shadow-sm">
                                    <div class="text-xs text-slate-500 mb-1">미래를 향한 변화</div>
                                    <div class="font-bold text-slate-800 text-lg">중기 (中氣)</div>
                                    <div class="text-sm mt-2 text-slate-600">새롭게 잉태되거나, 창고에 <br>소중하게 보관되는 기운</div>
                                </div>
                                <i class="fas fa-chevron-right text-slate-400 hidden md:block"></i>
                                <div class="text-center w-full md:w-1/3 bg-white p-4 rounded shadow-sm border-b-4 border-indigo-500">
                                    <div class="text-xs text-slate-500 mb-1">현재의 본질</div>
                                    <div class="font-bold text-indigo-700 text-lg">정기 (正氣) / 본기</div>
                                    <div class="text-sm mt-2 text-slate-600">해당 지지를 지배하는 <br>가장 강력하고 핵심적인 본성</div>
                                </div>
                            </div>
                            
                            <h3 class="text-xl font-bold text-slate-800 mb-4 border-b pb-2">지지 글자들의 특성 분류</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="border rounded-xl p-5 shadow-sm border-t-4 border-t-green-500 bg-green-50">
                                    <h4 class="font-bold text-center mb-3 text-green-900"><i class="fas fa-rocket mr-2"></i>사생지 (시작, 역마)</h4>
                                    <div class="flex justify-around font-black text-2xl mb-4 text-green-800"><span>寅</span><span>申</span><span>巳</span><span>亥</span></div>
                                    <p class="text-sm text-slate-700 text-center leading-relaxed">계절의 첫 달입니다. 무언가를 폭발적으로 시작하려는 에너지가 넘치며 돌아다니기를 좋아하는 역마성을 띕니다. (여기/중기/정기 모두 활발)</p>
                                </div>
                                <div class="border rounded-xl p-5 shadow-sm border-t-4 border-t-red-500 bg-red-50">
                                    <h4 class="font-bold text-center mb-3 text-red-900"><i class="fas fa-star mr-2"></i>사왕지 (절정, 도화)</h4>
                                    <div class="flex justify-around font-black text-2xl mb-4 text-red-800"><span>子</span><span>午</span><span>卯</span><span>酉</span></div>
                                    <p class="text-sm text-slate-700 text-center leading-relaxed">계절의 한가운데 달입니다. 자기 주관이 뚜렷하고 다른 기운과 잘 섞이지 않는 순수함이 있어 도화살(매력)로 작용합니다.</p>
                                </div>
                                <div class="border rounded-xl p-5 shadow-sm border-t-4 border-t-amber-500 bg-amber-50">
                                    <h4 class="font-bold text-center mb-3 text-amber-900"><i class="fas fa-box-open mr-2"></i>사고지 (저장, 묘지)</h4>
                                    <div class="flex justify-around font-black text-2xl mb-4 text-amber-800"><span>辰</span><span>戌</span><span>丑</span><span>未</span></div>
                                    <p class="text-sm text-slate-700 text-center leading-relaxed">환절기의 달입니다. 과거의 기운을 무덤(창고)에 쓸어 담아 묻어두고 다음 계절을 엽니다. 복잡한 기운이 섞여 끈기가 엄청납니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                \`
            },
            {
                id: 'gung', icon: 'fa-sitemap', title: '4. 궁성론 (4기둥의 비밀)',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-2">궁성론(宮星論) : 인생의 시기와 자리의 의미</h2>
                            <p class="text-slate-500 mb-6 leading-relaxed">사주의 네 기둥(년, 월, 일, 시)은 식물이 자라는 근묘화실(根苗花實)의 법칙을 따릅니다. 글자가 어느 기둥에 있느냐에 따라 그 글자의 영향력이 발휘되는 인생의 시기와 인간관계가 다릅니다.</p>
                            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div class="bg-stone-50 border-2 border-stone-200 rounded-xl p-5 text-center relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-10px] top-[-10px] opacity-10 text-6xl text-stone-900"><i class="fas fa-seedling"></i></div>
                                    <h3 class="font-bold text-xl text-stone-800 border-b-2 border-stone-200 pb-2 mb-3">년주 (年柱)</h3>
                                    <div class="font-black text-stone-700 text-2xl mb-1">뿌리 (根)</div>
                                    <p class="text-sm font-bold text-stone-500 mb-4 bg-stone-200 py-1 rounded">0 ~ 20세 (초년기)</p>
                                    <div class="bg-white py-3 px-2 rounded-lg border border-stone-200 text-left">
                                        <p class="font-bold text-slate-800 mb-1"><i class="fas fa-home mr-1"></i>조상궁</p>
                                        <p class="text-xs text-slate-600">내가 태어난 근본적인 환경. 국가, 가문, 할아버지, 초년의 학창시절을 뜻합니다.</p>
                                    </div>
                                </div>
                                <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 text-center relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-10px] top-[-10px] opacity-10 text-6xl text-emerald-900"><i class="fas fa-leaf"></i></div>
                                    <h3 class="font-bold text-xl text-emerald-800 border-b-2 border-emerald-200 pb-2 mb-3">월주 (月柱)</h3>
                                    <div class="font-black text-emerald-700 text-2xl mb-1">새싹 (苗)</div>
                                    <p class="text-sm font-bold text-emerald-600 mb-4 bg-emerald-200 py-1 rounded">21 ~ 40세 (청년기)</p>
                                    <div class="bg-white py-3 px-2 rounded-lg border border-emerald-200 text-left">
                                        <p class="font-bold text-slate-800 mb-1"><i class="fas fa-user-friends mr-1"></i>부모·사회궁</p>
                                        <p class="text-xs text-slate-600">사주에서 가장 강력한 자리! 직장 환경, 사회적 활동 무대, 부모님의 영향을 뜻합니다.</p>
                                    </div>
                                </div>
                                <div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5 text-center relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-10px] top-[-10px] opacity-10 text-6xl text-rose-900"><i class="fas fa-fan"></i></div>
                                    <h3 class="font-bold text-xl text-rose-800 border-b-2 border-rose-200 pb-2 mb-3">일주 (日柱)</h3>
                                    <div class="font-black text-rose-700 text-2xl mb-1">꽃 (花)</div>
                                    <p class="text-sm font-bold text-rose-600 mb-4 bg-rose-200 py-1 rounded">41 ~ 60세 (장년기)</p>
                                    <div class="bg-white py-3 px-2 rounded-lg border border-rose-200 text-left">
                                        <p class="font-bold text-slate-800 mb-1"><i class="fas fa-heart mr-1"></i>나와 배우자궁</p>
                                        <p class="text-xs text-slate-600">일간은 '나 자신'이며, 일지는 평생 동반자인 '배우자'를 의미합니다. 나의 속마음입니다.</p>
                                    </div>
                                </div>
                                <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 text-center relative overflow-hidden transition hover:shadow-md">
                                    <div class="absolute right-[-10px] top-[-10px] opacity-10 text-6xl text-amber-900"><i class="fas fa-apple-whole"></i></div>
                                    <h3 class="font-bold text-xl text-amber-800 border-b-2 border-amber-200 pb-2 mb-3">시주 (時柱)</h3>
                                    <div class="font-black text-amber-700 text-2xl mb-1">열매 (實)</div>
                                    <p class="text-sm font-bold text-amber-600 mb-4 bg-amber-200 py-1 rounded">61세 ~ (노년기)</p>
                                    <div class="bg-white py-3 px-2 rounded-lg border border-amber-200 text-left">
                                        <p class="font-bold text-slate-800 mb-1"><i class="fas fa-baby mr-1"></i>자식·결과궁</p>
                                        <p class="text-xs text-slate-600">나의 비밀스러운 무기, 은밀한 취미, 말년의 삶의 질과 자식과의 인연을 뜻합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                \`
            },
            {
                id: 'hapchung', icon: 'fa-bolt', title: '5. 합(合)과 충(沖) (기운의 변화)',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-2">합(合)과 충(沖) : 사주의 역동성</h2>
                            <p class="text-slate-500 mb-6 leading-relaxed">사주의 글자들은 가만히 있지 않고 자석처럼 서로 끌어당겨 묶이거나(합), 적군처럼 강하게 부딪혀 깨집니다(충). 이로 인해 인생에 사건 사고나 긍정적 결실이 맺어집니다.</p>
                            <div class="space-y-6">
                                <div class="border border-indigo-200 rounded-xl overflow-hidden shadow-sm">
                                    <div class="bg-indigo-50 p-4 border-b border-indigo-200 flex items-center gap-3">
                                        <div class="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"><i class="fas fa-link"></i></div>
                                        <h3 class="font-bold text-indigo-900 text-xl">합 (合) : 결속, 타협, 생산, 묶임</h3>
                                    </div>
                                    <div class="p-6 flex flex-col md:flex-row gap-6 bg-white">
                                        <div class="flex-1">
                                            <h4 class="font-bold text-indigo-800 mb-3 border-b pb-2"><i class="fas fa-users mr-2"></i>삼합 (三合) - 사회적 결속</h4>
                                            <p class="text-sm text-slate-600 mb-3 leading-relaxed">생지, 왕지, 고지가 만나 거대한 목적(국)을 이룹니다. 뜻이 맞는 세력들의 강한 연대입니다.</p>
                                            <div class="bg-slate-50 p-3 rounded border space-y-2 text-sm font-medium">
                                                <div class="flex justify-between items-center"><span class="text-green-700">해묘미 (亥卯未)</span> <i class="fas fa-arrow-right text-slate-300"></i> <span class="bg-green-100 px-2 py-1 rounded">목국(木)</span></div>
                                                <div class="flex justify-between items-center"><span class="text-red-700">인오술 (寅午戌)</span> <i class="fas fa-arrow-right text-slate-300"></i> <span class="bg-red-100 px-2 py-1 rounded">화국(火)</span></div>
                                                <div class="flex justify-between items-center"><span class="text-slate-700">사유축 (巳酉丑)</span> <i class="fas fa-arrow-right text-slate-300"></i> <span class="bg-slate-200 px-2 py-1 rounded">금국(金)</span></div>
                                                <div class="flex justify-between items-center"><span class="text-blue-700">신자진 (申子辰)</span> <i class="fas fa-arrow-right text-slate-300"></i> <span class="bg-blue-100 px-2 py-1 rounded">수국(水)</span></div>
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <h4 class="font-bold text-indigo-800 mb-3 border-b pb-2"><i class="fas fa-heart mr-2"></i>육합 (六合) - 사적인 연애</h4>
                                            <p class="text-sm text-slate-600 mb-3 leading-relaxed">자석의 N극과 S극처럼 딱 달라붙는 1:1 관계입니다. 부부합, 연애합으로도 불리며 몰래 만나는 은밀한 속성이 있습니다.</p>
                                            <p class="text-sm bg-slate-50 p-3 border rounded text-slate-700 leading-relaxed font-medium">자축합, 인해합, 묘술합, 진유합, 사신합, 오미합. <br><br>※ 합이 많으면 다정다감하지만 맺고 끊음이 약해집니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border border-orange-200 rounded-xl overflow-hidden shadow-sm">
                                    <div class="bg-orange-50 p-4 border-b border-orange-200 flex items-center gap-3">
                                        <div class="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"><i class="fas fa-bolt"></i></div>
                                        <h3 class="font-bold text-orange-900 text-xl">충 (沖) : 충돌, 분리, 파괴, 빠른 변화</h3>
                                    </div>
                                    <div class="p-6 bg-white">
                                        <p class="text-slate-700 mb-4 leading-relaxed">서로 정반대의 계절을 가진 기운끼리의 치열한 충돌입니다. 기존의 것을 부수고 새로운 변화나 이동(역마), 사고를 유발합니다. 고여있던 것을 뻥 뚫어주는 개척의 에너지이기도 합니다.</p>
                                        <div class="grid grid-cols-2 md:grid-cols-6 gap-3 text-sm">
                                            <div class="border border-orange-200 bg-orange-50 p-2 rounded text-center font-bold text-orange-800">자오충 (물-불)</div>
                                            <div class="border border-orange-200 bg-orange-50 p-2 rounded text-center font-bold text-orange-800">묘유충 (나무-칼)</div>
                                            <div class="border border-orange-200 bg-orange-50 p-2 rounded text-center font-bold text-orange-800">인신충 (봄-가을)</div>
                                            <div class="border border-orange-200 bg-orange-50 p-2 rounded text-center font-bold text-orange-800">사해충 (여름-겨울)</div>
                                            <div class="border border-orange-200 bg-orange-50 p-2 rounded text-center font-bold text-orange-800">진술충 (흙끼리)</div>
                                            <div class="border border-orange-200 bg-orange-50 p-2 rounded text-center font-bold text-orange-800">축미충 (흙끼리)</div>
                                        </div>
                                        <p class="mt-4 text-sm text-slate-500"><i class="fas fa-info-circle mr-1"></i> 그 밖에도 서로 미워하는 <strong>원진(怨嗔)살</strong>, 억지로 끼워 맞추며 고통이 수반되는 <strong>형(刑)살</strong> 등 여러 작용이 있습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                \`
            },
            {
                id: 'woon', icon: 'fa-road', title: '6. 운 (타이밍과 흐름)',
                content: \`
                    <div class="max-w-4xl mx-auto space-y-6 fade-in">
                        <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 class="text-2xl font-bold text-slate-800 mb-4">운(運) : 운명은 정해져 있지 않다</h2>
                            <p class="text-slate-600 mb-8 text-lg leading-relaxed">사주 원국이 내가 타고난 <strong>'자동차의 종류(스포츠카, 트럭 등)'</strong>라면, 운은 내가 달려가야 할 <strong>'도로의 상태와 날씨'</strong>입니다. 아무리 좋은 스포츠카도 비포장도로에서는 덜컹거리고, 낡은 경차도 뻥 뚫린 고속도로에서는 쌩쌩 달릴 수 있습니다.</p>
                            <div class="flex flex-col md:flex-row gap-6 mb-8">
                                <div class="flex-1 border-2 border-slate-800 rounded-xl p-8 relative overflow-hidden bg-slate-900 text-white shadow-lg">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-10 text-9xl"><i class="fas fa-calendar-alt"></i></div>
                                    <div class="inline-block bg-white text-slate-900 font-black px-3 py-1 rounded text-sm mb-4">10년 주기</div>
                                    <h3 class="text-3xl font-black mb-3">대운 (大運)</h3>
                                    <div class="text-yellow-400 font-bold mb-5 text-lg">인생을 바꾸는 거대한 계절의 변화</div>
                                    <p class="text-slate-300 leading-relaxed mb-4">
                                        사주 풀이에서 가장 중요하게 보는 큰 흐름입니다. 10년마다 나의 생각, 직업, 환경 등 삶의 배경이 송두리째 바뀝니다.
                                    </p>
                                    <ul class="text-sm text-slate-400 space-y-2">
                                        <li>• "대운이 바뀌면 만나는 사람의 부류가 바뀐다"</li>
                                        <li>• 봄에서 여름으로, 가을에서 겨울로 넘어가는 교체기에는 인생의 큰 변동(이직, 이사, 결혼, 이혼 등)이 잦습니다.</li>
                                    </ul>
                                </div>
                                <div class="flex-1 border-2 border-indigo-200 rounded-xl p-8 bg-indigo-50 relative overflow-hidden shadow-sm">
                                    <div class="absolute right-[-20px] top-[-20px] opacity-5 text-9xl text-indigo-900"><i class="fas fa-sun"></i></div>
                                    <div class="inline-block bg-indigo-600 text-white font-black px-3 py-1 rounded text-sm mb-4">1년 주기</div>
                                    <h3 class="text-3xl font-black text-slate-800 mb-3">세운 (歲運)</h3>
                                    <div class="text-indigo-700 font-bold mb-5 text-lg">올해 일어날 구체적인 날씨와 사건</div>
                                    <p class="text-slate-600 leading-relaxed mb-4">
                                        갑진년(2024년), 을사년(2025년)과 같이 매년 누구에게나 똑같이 들어오는 그 해의 기운입니다.
                                    </p>
                                    <ul class="text-sm text-slate-600 space-y-2">
                                        <li>• 대운이 허락한 범위 내에서 올해 구체적으로 취업이 될지, 돈을 벌지, 헤어질지 등의 사건이 격발됩니다.</li>
                                        <li>• 대운이 흉하더라도 세운이 길하면 그 해만큼은 숨통이 트입니다.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 class="font-bold text-slate-800 mb-2"><i class="fas fa-compass text-slate-500 mr-2"></i>운을 대하는 우리의 자세</h4>
                                <p class="text-slate-600 text-sm leading-relaxed">
                                    추운 겨울(기신운, 나쁜 운)이 오면 외출을 삼가고 집에서 공부를 하며 내실을 다지듯, 운이 안 좋을 때는 투자를 줄이고 스펙을 쌓으며 웅크려야 합니다. 반면 봄과 여름(용신운, 좋은 운)이 오면 실패를 두려워하지 말고 밖으로 나가 적극적으로 씨를 뿌리고 쟁취해야 합니다. <strong>사주 명리학의 진짜 목적은 '일기예보'를 보고 내 인생의 나아갈 때와 물러설 때를 아는 지혜에 있습니다.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                \`
            }
        ];`;

let content = fs.readFileSync('saju.html', 'utf-8');
content = content.replace(/const conceptData = \[[\s\S]*?\];/m, newConceptData);
fs.writeFileSync('saju.html', content, 'utf-8');
console.log('Concept Data Updated!');
