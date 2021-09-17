import java.util.HashSet;
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        List<Integer> set = new ArrayList<Integer>();
        for( int i:nums1) set.add(i);
        for( int i:nums2) set.add(i);
        
        Collections.sort(set);
        
        int size = set.size();
        
        List<Integer> list = new ArrayList<Integer>(set);
        
        if(size%2 == 0) return ((double)list.get(size/2 -1) + (double)list.get(size/2))/2;
        return list.get(size/2);
    }
}
