
    // add 2 numbers - leetcode question 2
    const addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }

    return res.next;    
};

    // container with most water - leetcode question 11
    const maxArea = function(height) {
        let l = 0,r = height.length-1;
        let ans = 0;
        while(l<r){
            let minHeight = Math.min(height[l],height[r]);
            let size = r-l;
            let totalWater = size*minHeight;
            ans = Math.max(ans,totalWater);
    
            if(height[l]>height[r]){
                r--;
            } 
            else {
                l++;
        }
    }
        return ans;
    };

    // 3sum - leetcode question 15
    const threeSum = function(nums) {
        let ans  = [];
    
        // first sort the array 
        nums.sort((a, b) => a - b);
    
        // then we take 2 pointers and a for loop value i which is used to check all the 
        // elements till n-2.
        for(let i=0;i<nums.length-2;i++){
    
        // if the current element is same as the previous, ignore it
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let l = i+1,r = nums.length-1
    
        while(l<r){
            let temp = [];
            let sum = nums[l] + nums[i] + nums[r];
        // if the answer is found push it in the array and make the pointer gap smaller
            if(sum === 0){
                temp.push(nums[i]);
                temp.push(nums[l]);
                temp.push(nums[r]);
                ans.push(temp);
    
            // if the next elements are duplicates as well,keep moving
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
    
            // once we know that the next elements are not duplicates, then we then
            // move the  pointer to the non-duplicate elements
                l++;
                r--;
            }
            // if the sum is less than 0, move the left pointer and increase the sum
            else if(sum < 0){
               l++;
            }
            // if the sum is more than 0, move the right pointer and decrease the sum
            else{
                r--;
            }
        }
        }
        return ans;
    };

    // group anagrams - leetcode question 49
    const groupAnagrams = function(strs) {
        let anagram = new Map();
        for(let i=0;i<strs.length;i++){
            let temp = new Array(26).fill(0); 
            for(let char of strs[i]){
                temp[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            if(!anagram[temp]){
                anagram[temp] = []
            }
            anagram[temp].push(strs[i]);
        }
        
        return Object.values(anagram);
    };
   
    let s = "aAbBCc";
    let prevBig = s.charCodeAt(0) - 'A'.charCodeAt(0);
    let prevSmall = s.charCodeAt(0) - 'a'.charCodeAt(0); 
    count = 0;
    for(let i=1;i<s.length;i++){
        let big = s.charCodeAt(i) - 'A'.charCodeAt(0);
        let small = s.charCodeAt(i) - 'a'.charCodeAt(0);
        
       if(prevBig !== big && prevBig !== small &&  prevSmall !== big && prevSmall !== small) count++

       prevBig = big;
       prevSmall = small;
    }
    console.log(count);
    
    