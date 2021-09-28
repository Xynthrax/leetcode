class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        results = []
        
        nums = [i for i in range(1,n+1)]
        
        self.dfs(nums,k,results,[],0)
        
        return results
        
        
    def dfs(self, nums, k, result, comb, start):
        if len(comb) == k:
            result.append(list(comb))
            return
        
        for i in range(start,len(nums)):
            num = nums[i]
            
            comb.append(num)
            self.dfs(nums,k, result, comb, i+1)
            comb.pop()
