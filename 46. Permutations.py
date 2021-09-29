class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        res = [];
        
        self.rec(res,nums,0)
        
        return res
        
    def swap(self,list, pos1, pos2):
        list[pos1], list[pos2] = list[pos2], list[pos1]
        # print(list)
        return list
        
    def rec(self,res, nums, k):
        if k == len(nums)-1:
            res.append(nums[:])
            # print(res)
            return
        for i in range(k,len(nums)):
            self.swap(nums, i, k)
            # print(nums)
            self.rec(res,nums,k+1)
            self.swap(nums, k, i)
            # print(nums,i)
    
    
        
