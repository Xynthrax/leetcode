function checkInclusion(s1: string, s2: string): boolean {
    
    if( s1.length > s2.length) return false;
    let len = s1.length;
    let R = len;
    let count = len;
    let tmp = {};
    for( let c of s1.split('')) {
        if(tmp[c] == null){
             tmp[c] = 1;
        }else{
            tmp[c]++;
        }
    }
    // console.log(tmp);
    while( R <= s2.length){
        // console.log(R + " " + s2.substring(R-len+1,R+1));
        if( s1.indexOf(s2[R-1]) > -1) {
            count++;
            if(count >= s1.length-1){
                let test = {};
                Object.assign(test,tmp);
                if(isPerm(test,s2.substring(R-len,R))) return true;
            }
        }else{
            count=0;
        }
        
        R++;
        // console.log(R);
    }
    return false;
    
};

let isPerm = (tmp, str2: string) => {
    let ch2 = str2.split('');
    // console.log(tmp['a']);
    for( let c of ch2) {
        // console.log(tmp[c],c);
        if(tmp[c] == null) return false;
        tmp[c]--;
        if(tmp[c] < 0) return false;
    }
 
    return true;
}
