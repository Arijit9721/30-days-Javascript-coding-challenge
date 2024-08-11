
    // two sum - leetcode question 1 
    const arr1 = [2,7,11,15];
    const t1 = 9;
    
    const twoSum = function(nums, target) {
        const map = new Map();
        for(let i=0;i<nums.length;i++){
            let complement = target - nums[i];
            if(map.has(complement)){
                return [map.get(complement),i];
            }
            map.set(nums[i],i)
        }
        return null;
    };
    console.log(twoSum(arr1,t1));

    // reverse integer - leetcode question 7
    const reverse = function(x) {
        const isNegative = x < 0;
        // first break it into an array of induvidual charecters. Then reverse and join
        let ans = Math.abs(x).toString().split("").reverse().join("");
       
        // now convert it back to a number,this will ommit the negative sign
        ans = parseInt(ans);
        
        // if the number was originally negative,turn it into negative
        if(isNegative) ans = -ans
    
        // check if the ans is greater or smaller than 32-bit limit or not
          if(ans > 2**31-1 || ans< -(2**31)){
            return 0;
        }
        return ans;
    };

    // check palindrome number - leetcode question 9
    const isPalindrome = function(x) {
    
    if(x<0) return false;

    let new1 = 0;
    let new2 = x;
    while(new2 !== 0){
    new1 =((new1*10) + (new2%10));
    new2 = Math.floor(new2/10);
    }
    return new1 === x;
};

        // merge 2 sorted lists - leetcode problem 21
    const mergeTwoLists = function(list1, list2) {
    // creating a dummy node
    const ansList = new ListNode(0,null);
    let curr = ansList;
    while(list1 !== null && list2 !== null){
        if(list1.val< list2.val){
            curr.next = new ListNode(list1.val);
            curr = curr.next;
            list1 = list1.next;
        }
        else{
            curr.next = new ListNode(list2.val);
            curr = curr.next;
            list2 = list2.next;
        }
    }
    while(list1 !== null){
           curr.next = new ListNode(list1.val);
            curr = curr.next;
            list1 = list1.next;
    }

    while(list2 !== null){
            curr.next = new ListNode(list2.val);
            curr = curr.next;
            list2 = list2.next;
    }

    // return the node after the dummy node
    return ansList.next;
};

    // valid parentheses - leetcode question 20
    const isValid = function(s) {
    // lets take an array an use it as a stack(as no inbuilt stack class)
    let st = [];
    for(let i of s){
    // if the element is open brackets, put in in the  stack 
        if(i === '(' || i === '{' || i === '['){
            st.push(i);
        }
        else{
    // if the element is closing brackets and the previous is not the 
    // corresponding opening brackets, return false
        let top = st.pop();
            if(i === ')' && top !==  '('){
               return false;
            }

            else if(i === '}' && top !==  '{'){
                return false;
            }

             else if(i === ']' && top !==  '['){
                return false;
            }
        }    
     }
    return st.length === 0;
};