const fs = require('fs');

function fixSaju() {
    const indexContent = fs.readFileSync('index.html', 'utf8');
    let sajuContent = fs.readFileSync('saju.html', 'utf8');

    // 1. Extract renderCheonganTab
    const cStart = indexContent.indexOf('function renderCheonganTab');
    const cEnd = indexContent.indexOf('function renderJijiTab');
    const renderCheonganStr = indexContent.substring(cStart, cEnd);

    // 2. Extract renderJijiTab
    const jStart = indexContent.indexOf('function renderJijiTab');
    const jEnd = indexContent.indexOf('function renderCombinerTab');
    const renderJijiStr = indexContent.substring(jStart, jEnd);

    // 3. Extract renderMiniNode (since it's used in the relationship map)
    const mStart = indexContent.indexOf('function renderMiniNode');
    const mEnd = indexContent.indexOf('function getSipseong');
    const renderMiniNodeStr = indexContent.substring(mStart, mEnd);

    // Concept Data
    const sipseongConcept = `
        {
            title: "십성(十星) 및 육친론(六親論)",
            icon: "users",
            desc: "일간(나)을 기준으로 다른 오행과의 생극제화 관계를 10가지 성향과 사회적/가족적 역할로 분류한 이론입니다.",
            details: [
                {
                    subtitle: "비겁 (비견, 겁재)",
                    text: "나와 같은 오행. 주체성, 고집, 투쟁, 형제/자매/동료를 의미합니다."
                },
                {
                    subtitle: "식상 (식신, 상관)",
                    text: "내가 생(生)하는 오행. 표현력, 의식주, 창의력, 부하직원, 여명에게는 자식을 의미합니다."
                },
                {
                    subtitle: "재성 (정재, 편재)",
                    text: "내가 극(剋)하는 오행. 결과물, 재물, 소유욕, 아버지, 남명에게는 아내를 의미합니다."
                },
                {
                    subtitle: "관성 (정관, 편관)",
                    text: "나를 극(剋)하는 오행. 책임감, 규범, 직장, 명예, 여명에게는 남편, 남명에게 자식을 의미합니다."
                },
                {
                    subtitle: "인성 (정인, 편인)",
                    text: "나를 생(生)하는 오행. 학문, 사고력, 문서, 자격증, 어머니, 스승을 의미합니다."
                }
            ]
        },`;

    // Replace renderCheonganTab in saju.html
    const scStart = sajuContent.indexOf('function renderCheonganTab');
    const scEnd = sajuContent.indexOf('function renderJijiTab');
    sajuContent = sajuContent.substring(0, scStart) + renderCheonganStr + sajuContent.substring(scEnd);

    // Replace renderJijiTab in saju.html
    const sjStart = sajuContent.indexOf('function renderJijiTab');
    const sjEnd = sajuContent.indexOf('function renderCombinerTab');
    sajuContent = sajuContent.substring(0, sjStart) + renderJijiStr + sajuContent.substring(sjEnd);

    // Insert renderMiniNode before renderCourseTab if not exists
    if (!sajuContent.includes('function renderMiniNode')) {
        const rcStart = sajuContent.indexOf('function renderCourseTab');
        sajuContent = sajuContent.substring(0, rcStart) + renderMiniNodeStr + sajuContent.substring(rcStart);
    } else {
        // If it exists, replace it to be sure
        const smStart = sajuContent.indexOf('function renderMiniNode');
        const smEnd = sajuContent.indexOf('function getSipseong');
        // wait, saju.html might not have getSipseong right after it?
        // saju.html does have getSipseong!
        // wait, let's just use string replace.
        // Actually renderMiniNode wasn't in saju.html. So the `!includes` block will trigger.
    }

    // Patch Combiner UI
    const targetString = '${gapjaInfo ? `\n                                            <div class="bg-white bg-opacity-70 p-5 rounded-xl mb-4 shadow-sm border border-emerald-100">';
    const patchIdx = sajuContent.indexOf(targetString);
    if (patchIdx !== -1) {
        const sipseongHtml = `\${sipseongInfo ? \`
                                            <div class="bg-white bg-opacity-70 p-5 rounded-xl mb-4 shadow-sm border border-emerald-100 flex flex-col md:flex-row justify-around items-center">
                                                <div class="text-center mb-3 md:mb-0">
                                                    <span class="text-sm font-bold text-emerald-800">일지 십성(十星)</span>
                                                    <div class="text-2xl font-black text-emerald-600 mt-1">\${sipseongInfo.name}</div>
                                                </div>
                                                \${gyukgukInfo ? \`
                                                <div class="text-center">
                                                    <span class="text-sm font-bold text-teal-800">격국(格局)</span>
                                                    <div class="text-2xl font-black text-teal-600 mt-1">\${gyukgukInfo.name}</div>
                                                </div>
                                                \` : ''}
                                            </div>
                                            \` : ''}\n`;
        sajuContent = sajuContent.substring(0, patchIdx + targetString.length) + '\n' + sipseongHtml + sajuContent.substring(patchIdx + targetString.length);
    } else {
        console.log("Combiner patch target not found");
        console.log("Trying alternative target...");
        // maybe it's minified or slightly different spacing?
        const altTarget = '<h3 class="flex items-center text-lg font-bold text-emerald-800 mb-2">';
        const altIdx = sajuContent.indexOf(altTarget);
        if (altIdx !== -1) {
            const sipseongHtml = `\${sipseongInfo ? \`<div class="bg-white bg-opacity-70 p-5 rounded-xl mb-4 shadow-sm border border-emerald-100 flex flex-col md:flex-row justify-around items-center"><div class="text-center mb-3 md:mb-0"><span class="text-sm font-bold text-emerald-800">일지 십성(十星)</span><div class="text-2xl font-black text-emerald-600 mt-1">\${sipseongInfo.name}</div></div>\${gyukgukInfo ? \`<div class="text-center"><span class="text-sm font-bold text-teal-800">격국(格局)</span><div class="text-2xl font-black text-teal-600 mt-1">\${gyukgukInfo.name}</div></div>\` : ''}</div>\` : ''}\n`;
            
            // Go back to the `<div class="bg-white bg-opacity-70 p-5 rounded-xl mb-4` line
            const divIdx = sajuContent.lastIndexOf('<div class="bg-white bg-opacity-70', altIdx);
            sajuContent = sajuContent.substring(0, divIdx) + sipseongHtml + sajuContent.substring(divIdx);
        }
    }

    // Patch Concept Data
    sajuContent = sajuContent.replace('const conceptData = [', 'const conceptData = [' + sipseongConcept);

    fs.writeFileSync('saju.html', sajuContent, 'utf8');
    console.log('Success!');
}

fixSaju();
