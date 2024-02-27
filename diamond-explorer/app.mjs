import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const generateRandomLength = () => Math.floor(Math.random() * 1000);

function generateTestCase() {
    const chars = '<>.';
    let test_case = '';
    const length = generateRandomLength();
    for (let i = 0; i < length; i++) {
        test_case += chars[Math.floor(Math.random() * chars.length)];
    }
    return test_case;
}

function explorerDiamonds(test_case) {
    let count_diamond = 0;
    let i = 0;
    while (i < test_case.length) {
        if (test_case[i] == '<') {
            let diamond = test_case[i];
            let j = i + 1;
            while (test_case[j] == '.') {
                diamond += test_case[j];
                j++;
            }
            if(test_case[j] == '>') {
                diamond += test_case[j];
                count_diamond++;
                console.log(`Diamond founded ${diamond}! we have ${count_diamond} diamonds`);
                // replace test case:
                test_case = test_case.slice(0, i) + test_case.slice(j + 1);
                console.log(`Rest: ${test_case}`);
                i = 0;
            } else i++;
        } else i++;
    }

    console.log(`\n FINAL
        Diamonds: ${count_diamond}
        Rest: ${test_case}
---------------------------------------------------- \n`);

}

// Run
const rl = readline.createInterface({ input, output });
const quantity = await rl.question('How many test cases do you want?');
rl.close();

for (let cases = 0; cases < quantity; cases++) {
    let test_case = generateTestCase();
    console.log(`Test case ${cases + 1}: ${test_case} \n`);
    explorerDiamonds(test_case);
}
