

    // recursion function for finding  factorial 
    const fact  = (num)=>{
        if(num===0 || num===1){
            return 1;
        }
       return num * fact(num - 1);
    }  
    console.log(fact(5));

    // recursion function for finding fibonacci number
        const fibo = (num)=>{
            if(num===0){
                return 0;
            }
            if(num===1){
                return 1;
            }
            return fibo(num-2) + fibo(num-1);
        }
        console.log(fibo(5));

    // finding sum and max element in an array using recursion
        let testArray = [2,54,9,3,7,42,-4]; 
        function sum(arr){
            function actualSum(n){
            if(n < 0){
                return 0;
            }
            return arr[n]+actualSum(n-1);
            }
            return actualSum(arr.length-1);
        }

        console.log(sum(testArray));

        const maxElement = (arr) =>{
            function biggest(n){
                if(n<0){
                    return -(10e9);
                }
                return Math.max(arr[n],biggest(n-1));
            }
            return biggest(arr.length - 1);
        }

        console.log(maxElement(testArray));

        // find if the string is a palindrome or not using recursion
            const str = "raman";

            function isPalindrome(str){
                function palindrome(l,r){
                if(l>=r){
                    return true;
                    }
                if(str[l] !== str[r]){
                    return false;
                }
                return palindrome(l+1,r-1);
                }
                return palindrome(0,str.length -1);
            }

            console.log(isPalindrome(str));

        // reverse the string using recursion
            const reverseStr = (str)=>{
                let newStr = "";
                function reverse(n){
                    if(n<0){
                        return;
                    }
                    newStr += str[n];
                   return reverse(n-1); 
                }
                reverse(str.length - 1);
                return newStr;
            }
            console.log(reverseStr(str));