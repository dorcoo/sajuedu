const fs = require('fs');

let saju = fs.readFileSync('saju.html', 'utf8');

// ==========================================
// 1. 천간 관계도: 합/충 해석 추가
// ==========================================
const oldCheonganHap = `<p class="text-xs text-center text-emerald-700 mt-3">* 서로 끌어당겨 하나가 되려는 다정하고 생산적인 기운입니다.</p>`;
const newCheonganHap = `<p class="text-xs text-center text-emerald-700 mt-3">* 서로 끌어당겨 하나가 되려는 다정하고 생산적인 기운입니다.</p>
                                    <div class="mt-3 bg-white rounded-lg p-3 border border-emerald-100 text-xs text-emerald-900 leading-relaxed">
                                        <b class="block text-emerald-700 mb-1">🔍 합(合) 해석 가이드</b>
                                        두 글자가 사주 내에서 이웃하면 '합'이 발동합니다. <b>좋은 점:</b> 나(일간)에게 도움이 되는 기운과 합하면 그 힘이 더욱 강해지고 안정됩니다. 귀인의 도움을 받거나 좋은 인연을 만납니다. <b>주의할 점:</b> 합이 되면 원래 역할을 잃고 다른 오행으로 변하거나(합화), 좋지 않은 기운과 합하면 오히려 나쁜 기운에 붙잡혀 꼼짝 못하는(암합) 상황이 될 수 있습니다.
                                    </div>`;

const oldCheonganChung = `<p class="text-xs text-center text-rose-700 mt-3">* 서로 극(剋)하며 부딪히는 역동적이고 파괴적인 기운입니다.</p>`;
const newCheonganChung = `<p class="text-xs text-center text-rose-700 mt-3">* 서로 극(剋)하며 부딪히는 역동적이고 파괴적인 기운입니다.</p>
                                    <div class="mt-3 bg-white rounded-lg p-3 border border-rose-100 text-xs text-rose-900 leading-relaxed">
                                        <b class="block text-rose-700 mb-1">🔍 충(沖) 해석 가이드</b>
                                        사주나 운에서 충이 발동하면 해당 육친(가족 역할)이나 해당 십성 영역에 변동과 갈등이 생깁니다. <b>긍정적:</b> 정체된 나쁜 기운을 깨고 새 출발을 하거나 큰 변화·이동의 기회가 됩니다. <b>부정적:</b> 충하는 글자가 용신(필요한 기운)이면 건강 이상, 이별, 사고, 직장 변동 등 예기치 못한 충격을 의미합니다. 대운·세운에서 충이 오면 반드시 그 해를 주의해야 합니다.
                                    </div>`;

saju = saju.replace(oldCheonganHap, newCheonganHap);
saju = saju.replace(oldCheonganChung, newCheonganChung);


// ==========================================
// 2. 지지 관계도: 육합/충/삼합 해석 추가
// ==========================================
const oldJijiHap = `<p class="text-[11px] text-center text-emerald-700 mt-3">* 음양의 조화로 서로 긴밀하게 끌어당기며 보호하는 작용입니다.</p>`;
const newJijiHap = `<p class="text-[11px] text-center text-emerald-700 mt-3">* 음양의 조화로 서로 긴밀하게 끌어당기며 보호하는 작용입니다.</p>
                                    <div class="mt-3 bg-white rounded-lg p-3 border border-emerald-100 text-xs text-emerald-900 leading-relaxed">
                                        <b class="block text-emerald-700 mb-1">🔍 육합(六合) 해석 가이드</b>
                                        <b>사주에 있을 때:</b> 두 지지가 육합하면 해당 자리의 욕심, 인연, 이끌림이 강해집니다. 배우자 궁이나 직장 자리에서 합이 일어나면 그 인연과 끈끈하게 묶이는 경향이 있습니다.<br>
                                        <b>운(대운·세운)에서:</b> 나의 용신(필요한 기운)과 합하는 해가 오면 발복(운이 트임)이 일어나지만, 기신(해로운 기운)을 합해 끌어들이는 해는 암합으로 오히려 불운이 깊어질 수 있습니다.
                                    </div>`;

const oldJijiChung = `<p class="text-[11px] text-center text-rose-700 mt-3">* 방위가 반대되는 글자끼리 강하게 부딪혀 변화와 이동을 야기합니다.</p>`;
const newJijiChung = `<p class="text-[11px] text-center text-rose-700 mt-3">* 방위가 반대되는 글자끼리 강하게 부딪혀 변화와 이동을 야기합니다.</p>
                                    <div class="mt-3 bg-white rounded-lg p-3 border border-rose-100 text-xs text-rose-900 leading-relaxed">
                                        <b class="block text-rose-700 mb-1">🔍 지지충(地支沖) 해석 가이드</b>
                                        <b>사주에 있을 때:</b> 일지(배우자 자리)에 충이 내재되면 부부간 갈등, 잦은 이사와 이동이 많습니다. 월지(직업·환경 자리)에 충이 있으면 직장이나 환경 변화가 잦습니다.<br>
                                        <b>운(대운·세운)에서:</b> 충이 오면 이직·이사·이별·수술 등 큰 변화의 시기입니다. 사주의 희신(도움이 되는 기운)이 충을 당하면 불운이고, 기신(해로운 기운)이 충을 당하면 오히려 발복의 기회가 됩니다. "충은 이동이요, 변화다"로 기억하세요.
                                    </div>`;

const oldJijiSamhap = `<p class="text-xs text-center text-blue-700 mt-3">* 세 글자가 모여 하나의 강력한 목적(국, 局)을 이루는 사회적/공적인 결합입니다.</p>`;
const newJijiSamhap = `<p class="text-xs text-center text-blue-700 mt-3">* 세 글자가 모여 하나의 강력한 목적(국, 局)을 이루는 사회적/공적인 결합입니다.</p>
                                <div class="mt-3 bg-white rounded-lg p-3 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                                    <b class="block text-blue-700 mb-1">🔍 삼합(三合) 해석 가이드</b>
                                    삼합은 세 글자가 모여 <b>하나의 강력한 오행 국(局)</b>을 이루는 것으로, 합 중에서 가장 강력한 결합입니다. 세 글자가 모두 있으면 '성국(成局)', 두 글자만 있으면 '반합(半合)'이라 하여 절반의 힘을 발휘합니다.<br><br>
                                    <b>해석 방법:</b>
                                    <ul class="list-disc list-inside mt-1 space-y-1">
                                        <li><b>삼합이 용신 오행을 이루면:</b> 사업 성공, 재물 축적, 귀인 집결 등 강력한 발복 작용이 일어납니다.</li>
                                        <li><b>삼합이 기신 오행을 이루면:</b> 해당 오행의 과다로 건강 문제, 관재(법적 분쟁), 가정 문제 등이 집중적으로 발생합니다.</li>
                                        <li><b>운에서 삼합자가 들어오면:</b> 사주에 이미 두 글자(반합)가 있는데 운에서 나머지 한 글자가 들어오면 삼합이 완성되어 그 오행의 작용이 폭발적으로 강해집니다. 이 시기가 인생의 큰 전환점이 됩니다.</li>
                                    </ul>
                                </div>`;

saju = saju.replace(oldJijiHap, newJijiHap);
saju = saju.replace(oldJijiChung, newJijiChung);
saju = saju.replace(oldJijiSamhap, newJijiSamhap);

fs.writeFileSync('saju.html', saju, 'utf8');
console.log('Done! Relationship interpretation guides added.');
