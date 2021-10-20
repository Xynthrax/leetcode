function isAlienSorted(words: string[], order: string): boolean {

    if( words.length == 1 ) return true;
    
    for( let i = 1 ; i < words.length; i++) {
        let firstLen = words[i-1].length;
        let secondLen = words[i].length;
        
        let longest = firstLen > secondLen ? firstLen : secondLen;
        
        for( let r = 0 ; r < longest; r++ ){
            
            if(!words[i-1][r]) break;
            if(!words[i][r]) return false;
            
            let a = order.indexOf(words[i-1][r]);
            let b = order.indexOf(words[i][r])
            
            if(a < b)  break;
            if(a == b) continue;
            if(a > b) return false;
        }
        
        
    }
    
    return true;
    
};
