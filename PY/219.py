class Solution:
    def containsNearbyDuplicate(self, nums, k) -> bool:
        d = {}
        for idx, n in enumerate(nums):
            if d.get(n) is None:
                d[n] = [idx]
            else:
                oldArray = d[n]
                oldArray.append(idx)
                d[n] = oldArray
                if len(oldArray) >= 2:
                    old = None
                    for singleValue in oldArray:
                        if(old is None):
                            old = singleValue
                            continue
                        
                        if(abs(old - singleValue) <= k):
                            return True
                        
                        old = singleValue
        return False
