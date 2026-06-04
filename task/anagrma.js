areAnagrams("eat", "tea") 

areAnagrams("bat", "rat") 
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let count1 = 0;
        let count2 = 0;

        for (let j = 0; j < str1.length; j++) {
            if (str1[i] === str1[j]) count1++;
            if (str1[i] === str2[j]) count2++;
        }

        if (count1 !== count2) {
            console.log(`${str1} and ${str2} are not anagrams`)
            return false;
        }
    }

    console.log(`${str1} and ${str2} are anagrams`)
    return true;
}