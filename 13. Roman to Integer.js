function romanToInt(s: string): number {

    let res = 0;
    
    let i =0;
    
    while( i< s.length){
        
        switch(s[i]){
            case 'M':
                res += 1000;
                i++;
                break;
            case 'D':
                res += 500;
                i++;
                break;
            case 'C':
                if( i+1 < s.length && s[i+1] == 'D'){
                    res+= 400;
                    i+=2;
                }else if ( i+1 < s.length && s[i+1] == 'M'){
                    res+= 900;
                    i+=2;
                }else{
                    res+=100;
                    i++;
                }
                break;
            case 'L':
                res += 50;
                i++;
                break;
            case 'X':
                if( i+1 < s.length && s[i+1] == 'C'){
                    res+= 90;
                    i+=2;
                }else if(i+1 < s.length && s[i+1] == 'L'){
                    res+= 40;
                    i+=2;
                }else{
                    res+=10;
                    i++;
                }
                break;
            case 'V':
                res += 5;
                i++;
                break;
            case 'I':
                if( i+1 < s.length && s[i+1] == 'V'){
                    res+= 4;
                    i+=2;
                }else if(i+1 < s.length && s[i+1] == 'X'){
                    res+= 9;
                    i+=2;
                }else{
                    res+=1;
                    i++;
                }
                break;
        }
    }
    return res;
    
};
