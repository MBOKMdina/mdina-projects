let nums = [10, 20, 30]
nums[2] = 99;
console.log(nums);
let lastValue = 0;
function getLastValueArray(array)
{
    for(let i = 0; i < array.length; i++)
    {
        lastValue = array[i];
    }
    return lastValue;
}
console.log([55, 60, 45, 100]);
console.log(getLastValueArray([55, 60, 45, 100]));

function arraySwap(array)
{
    lastValue = getLastValueArray(array);
    array[array.length-1] = array[0]
    array[0] = lastValue;
    return array;
}

console.log('11c: ' + arraySwap(['Hello', 'Good morning', 'how', 'are you']));
console.log('11d:');
for(let i = 0; i <= 10; i++)
{
    console.log(i );
    i += 1;
}
console.log('11e:');
for(let i = 5; i >= 0; i--)
{
    console.log(i);
}
console.log('11f:');
let i = 0;
while (i <= 10)
{
    console.log(i);
    i = i + 2;
}
i = 5
while (i >= 0)
{
    console.log(i);
    i--;
}
console.log('11g&h:');
function addOne(array)
{
    for(let i = 0; i < array.length; i++)
    {
        array[i] += 1
    }
    return array
}
console.log(addOne([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
console.log('11i:');
function addNum(array, num)
{
    for(let i = 0; i < array.length; i++)
    {
        array[i] += num;
    }
    return array
}
console.log(addNum([20, 30, 40, 50, 60], 40));
console.log('11j:');
function addArrays(array1, array2)
{
    sum = [];
    for(let i = 0; i < array1.length; i++)
    {
        sum.push(array1[i] + array2[i]);
    }
    return sum;
}
console.log(addArrays([5, 20, 30],[10, 20, 30]));
console.log('11k:');
function countPositives(nums)
{
    let count = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] >= 0 )
        {
            count++
        }
    }
    return count;
}
console.log(countPositives([10, -2, -3, 4, 6, 7]));
console.log('Challenge exercises:');
console.log('11l&m:');
function minMax(nums)
{
    let maxNum = 0;
    let minNum = maxNum;
    if (nums.length === 0)
    {
        let maxMin =
        {
            maxNumber: null,
            minNumber: null,
        }
        return maxMin;
    }
    else
    {
        for(let i = 0; i < nums.length; i++)
        {
            if(nums[i]>maxNum)
            {
                maxNum = nums[i];
            }

        }
        minNum = maxNum;
        for(let i = 0; i < nums.length; i++)
        {
            if(nums[i]<minNum)
            {
                minNum = nums[i];
            }
        }
        let maxMin=
        {
            maxNumber: maxNum,
            minNumber: minNum
        }
        return maxMin;
    }
}
console.log(minMax([3]));
console.log('11n:');
function countWords(words)
{
    let count = 0;
    let word =
    {

    }
    for(let i = 0; i < words.length; i++)
    {
        if(typeof word[words[i]] === 'undefined')
        {
            count = 0;
            for(let j = i; j < words.length; j++)
            {
                if(words[i] === words[j])
                {
                    count++;
                }
            }
            word[words[i]] = count;
        }
    }
    return word
}
console.log(countWords(['hello', 'retarded', 'hello', 'Khumbo', 'Khumbo', 'Khumbo', 'Khumbo']));
