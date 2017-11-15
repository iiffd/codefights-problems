# Codefights Solutions
Purpose of this repo is to maximize my learning by journaling the problems I solve.

## isListPalindrome
*Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.*

This one was pretty tough for me, mostly because I'm not used to the behavior or the idea of linked lists, as I usually work with higher level languages. I think I wasted a lot of time trying to figure out the basic mechanics. But, I guess the best way to learn is to make them.

My code is pretty ugly, but it solves the problem in the O(n) time and O(1) additional space requirement. One of these days I'll get around to refactoring. Here are the subtasks that my code attempts to deal with.

1. Need to get the pointer to the middle of the list. I think this is the hardest part of this question. I wish I could say I came up with the idea myself, but while reading through the comments to understand the linked list mechanics I saw the solution. It is pretty brilliant, I couldn't unsee the solution.

**SPOILER:**



Have two pointers. One traverses the usual one step, while the other traverses two step, i.e. `list.next` and `other_list.next.next`. When the double time pointer reaches the end of the list, the slow pointer will be in the middle.



**END SPOILER**

2. Next, the second half of the list needs to be reversed. For more detail, you can look at my code or google reverse linked list algorithm. Basically you change the direction of the pointer. You will need some buffer values so you can traverse to the next node in the list.

3. Finally, compare the reversed second half of the list with the first half and return true if all values are equal, otherwise, false.

## addTwoHugeNumbers
*You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.*


