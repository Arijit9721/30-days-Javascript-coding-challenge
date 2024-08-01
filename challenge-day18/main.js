
    
    // bubble sort 
        const bubbleArr = [25,6,78,-8,46,11];
        const bubbleLen = bubbleArr.length;
        
        for(let i=0;i<bubbleLen-1;i++){
            let swapped = false;
            for(let j=0;j<bubbleLen-i-1;j++){
                if(bubbleArr[j]>bubbleArr[j+1]){
                    [bubbleArr[j],bubbleArr[j+1]] = [bubbleArr[j+1],bubbleArr[j]];
                    swapped = true;
                }
            }
            if(swapped === false){
                break;
            }
        }

        console.log(bubbleArr);

    // insertion sort
        insArr = [8,11,18,5,2];
        insLen = insArr.length;

        for(let i=1;i<insLen;i++){
            let key = insArr[i];
            let j= i-1;
            while(j>=0 && key < insArr[j] ){
                insArr[j+1] =insArr[j];
                j--;
            }
            insArr[j+1] =key;
        }
        console.log(insArr);

    // quick sort
    // creating a fucntion that compares all elements to the last element
    const checkPivot = (start,end,arr) =>{
        let pivot = arr[end-1];
        let index = start;
        for (let i = start; i < end - 1; i++) {
            if (arr[i] < pivot) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                index++;
            }
        }
    // now put the last(pivot) element in the place of index
        [arr[index],arr[end-1]] = [arr[end-1],arr[index]]
        return index;
    }

    const quickSort = (start,end,arr)=>{
        if(start<end){
        const pivot = checkPivot(start,end,arr);
        quickSort(start,pivot-1,arr);
        quickSort(pivot+1,end,arr);
        }
    }
    const quickArr = [10, 80, 30, 90, 40]
    quickSort(0,quickArr.length,quickArr);
    // console.log(quickArr);

    // binary search
        const binarySearch = (arr,target) =>{
            let left =0, right = arr.length-1;
            let mid;
            while(left<=right){
                mid = Math.floor((right+left)/2);
                if(arr[mid]=== target){
                    return true;
                }
                else if(arr[mid]>target){
                    right = mid-1;
                }
                else{
                    left = mid+1;
                }
            }
            return false;
        }
        const binArr = [10,25,35,46,87];
        // console.log(binarySearch(binArr,0));

    // finding the number of occurences of each character in a string
        const newMap = new Map();
        const checkChar = (str) =>{
            for(let char of str){
                if(char === " ")
                    continue;
                if(newMap.has(char))
                    newMap.set(char,newMap.get(char)+1);
                
                else
                    newMap.set(char,1);
            }
            return newMap;
        }
        const newStr = "chemmhcek";
        console.log(checkChar(newStr));

    // find the size of the longest non-repeating substring
    const longestSubstring = function(s) {
        let l=0,r=0;
        const map = new Map();
        let count =0;
        while(r<s.length ){
            if(!map.has(s[r])){
                map.set(s[r], 1);
                r++;
                count = Math.max(count,r-l) ;
            }
            else{
                map.set(s[l],map.get(s[l])-1);
                if(map.get(s[l]) === 0){
                    map.delete(s[l]);
                }
                l++;
            }
        }
        return count;
    };
        const str2 = "pwwkew"
        // console.log(longestSubstring(str2));

    // rotate the array kth times
    const reverse = (start,end,arr) =>{
        while(start<end){
           let temp = arr[start];
           arr[start]  = arr[end];
           arr[end]  = temp;
           start++;
           end--; 
        }
     }
        const rotate = function(nums, k) {
            k = k % nums.length;
            // first reverse the entire array
            reverse(0,nums.length-1,nums);
        
            // now reverse the 1st kth values
            reverse(0,k-1,nums);
        
            // now reverse the rest of the values
            reverse(k,nums.length-1,nums);
        };

        const rotateArr = [1,2,3,4,5,6,7];
        rotate(rotateArr,3);
        // console.log(rotateArr);

    // merge 2 sorted arrays into 1 new sorted array
        const mergeArrays = (arr1,arr2,temp) =>{
            let len1 = arr1.length;
            let len2 = arr2.length;
            let p1  = p2 =0;

            while(p1<len1 && p2<len2){
                if(arr1[p1]< arr2[p2]){
                    temp.push(arr1[p1]);
                    p1++;
                }
                else{
                    temp.push(arr2[p2]);
                    p2++;
                }
            }

            while(p1<len1){
                temp.push(arr1[p1]);
                p1++;
            }

            while(p2<len2){
                temp.push(arr2[p2]);
                p2++;
            }
        }

        const arr1 = [2,5,8,13,17];
        const arr2 = [5,7,9,11,15,19,22];
        const newArr = [];
        mergeArrays(arr1,arr2,newArr);
        console.log(newArr);