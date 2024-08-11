
    // merge k sorted lists - leetcode question 23 
    const mergeKLists = function(lists) {
    // creating a new LL with a dummy node  
   let dummy = new ListNode(0);
    let curr = dummy;
    let mini = [];

    // we first take the value of the first nodes and the first nodes itself in the array
     for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {  
            mini.push([lists[i].val, lists[i]]);
        }
    }

    // as we don't have an inbuilt min-heap, we use an array and sort based on the
    // first value 
    mini.sort((a, b) => a[0] - b[0]);

    while (mini.length !== 0) {
    // find the val and node of the smallest element from the heap/array
        let [val, node] = mini.shift();
        curr.next = new ListNode(val);
        curr = curr.next;

    // If there's a next node, we push it in the array and sort the array
        if (node.next !== null) {
            mini.push([node.next.val, node.next]);
            mini.sort((a, b) => a[0] - b[0]);
        }
    }
    // we return after the dummy node
    return dummy.next;
    };

    // find median of 2 sorted arrays - leetcode question 4
    const findMedianSortedArrays = function(nums1, nums2) {
        // we first find the total size of the 2 arrays combined an then use 2-pointers
        let total = nums1.length + nums2.length;
        let l1 =0,l2=0;
       
        // if the size is odd, there will be 1 median. that is total/2   
        if(total%2 !== 0){
            let count = Math.floor(total/2);
            let ans;
        // now we find the median in the arrays by using 2-pointer approach 
            while(count>=0){
            // move l1 only when the value is smaller or either l1 or 12 is 
            // out of bounds
                if(l1 < nums1.length && (nums1[l1]<nums2[l2] || l2>=nums2.length)){
                    ans = nums1[l1];
                    l1++;
                } 
            // else move l2
                else{
                    ans =nums2[l2];
                    l2++;
                }
                count--;
            }
            return ans;
        }
        // if the total is even we have 2 answers, total/2 and total/2-1
        else{
            let count1 = total/2;
            let count2 = count1-1;
            let check1,check2;
    
            // we find the value of both count1 and count2 and then the median
            while(count1>=0){
                 if(l1 < nums1.length && (nums1[l1]<nums2[l2] || l2 >=nums2.length)){
                    check1 = nums1[l1];
                    
                    if(count2 === 0){
                        check2 = nums1[l1];
                    }
                    l1++;
                } 
                else{
                    check1 = nums2[l2];
                   
                    if(count2 === 0){
                        check2 = nums2[l2];
                    }
                     l2++;
                }
                count1--;
                count2--;
            }
            return (check1 + check2)/2;
        }
        
    };

    // trap rain water - leetcode question 42
    const trap = function(height) {
        //  As the left and right boundaries donot have maxLeft or makRight building
        //  they can never store water 
            let maxHeight = 0;
            let index = -1;
            let maxLeft = height[0];
            let maxRight = height[height.length-1]
            let water = 0;
        
            // first we find the tallest building
            for (let i = 0; i < height.length; i++) {
            if (maxHeight < height[i]) {
                maxHeight = height[i];
                index = i;
                }
            }   
        
            // then from the second element till the tallest building,we compare the height of
            // the biggesr left and max bulding and deduct it with the current building height
            for(let j=1;j<index;j++){
            // if the current building is bigger,it will not store water
                if(height[j] > maxLeft) maxLeft = height[j]
                else if(Math.min(maxHeight,maxLeft) - height[j] > 0){
                    water += Math.min(maxHeight,maxLeft) -height[j]; 
                }
            }
        
            // we do the same but from the 2nd last element till the biggest building
            for(let j=height.length-2;j>index;j--){
            // if the current building is bigger,it will not store water
                if(height[j] > maxRight) maxRight = height[j]
                else if(Math.min(maxHeight,maxRight) - height[j] > 0){
                    water += Math.min(maxHeight,maxRight) -height[j]; 
                }
            }
        
                return water;    
        };