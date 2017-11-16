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

This one is pretty straightforward compared to the last problem. There are no time or space limitations so there are a number of ways to solve this problem. I managed to get a pretty slim/concise solution but found another person outdid me by 10 lines, which he did by adding 0 buffer strings in the while loop, whereas I separate out to another function. That same person also returned the answer as a linked list, which I didn't even think to try.

Here are the general steps I followed.

1. Convert linked lists into giant number string.

2. Tricky part is appending zeros. Each number is supposed to be 4 digits long with appended zeroes. Zeroes must be appended when making the two giant number strings that will eventually be added together *AND* for the sum of the addition of the two giant number strings. This part was somewhat confusing for me, but looking over the test cases helped clear things up. Basically, the length of the sum of the two giant numbers needs to be divisible by four and if it isn't zeros have to be appended to make the length divisible by 4.

3. There is a list comprehension I do at the end which creates a list from the total number string grouped into separate digits of four. The strings are converted back into integers with leading zeroes taken out.

## mergeTwoLinkedLists
*Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.*

*Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.*

I'm not proud of my solution for this one. I managed to get in the time constraint but I realized after looking at the top rated solutions that I could have also solved this with an O(1) space constraint. That said, I saw a lot of solutions that didn't even bother with the time constraint, which is some consolation for why my solution looks so ugly.

I create 2 additional stacks which is O(n) space. That was completely unnecessary and I could have used the linked lists like a stack, as they are already sorted. I remember distinctly thinking about this possibility, but I dismissed it immediately because I thought it was strange the question didn't have a space constraint and I thought something about the mechanics of linked lists made it impossible.

Anyways, you live and learn. Next time I'll spend more time planning before I start coding. Here are the general steps I followed:

1. To get the O(l1.length + l2.length) time constraint I have a while loop run until the two stacks I initialize are empty. These stacks are filled every iteration with the linked lists, which makes it so that the loop iterates l1.length + l2.length.

2. I initialize the header (which will return the completed list at the end of the function) in the while loop, which requires a separate if check to look for the first loop. This is pretty ugly and I thought a long time about a more elegant solution but wasn't able to come up with one. One of the top solutions gets around this by creating a new ListNode object before the while loop. Again, for some reason I had a mental block where I thought using the class object was off limits for the question. I also assumed that if I initialized the object with None, that none would be returned with the rest of the list and alter the linked list results, but I guess this isn't the case.

3. Depending which value is greater, the pointers get rearranged. I create a separate function for this called **movePointers**.

4. In case one of the stacks of the linked list is empty, I create a check and simply attach the the pointer to the rest of the stack that isn't empty. I create a separate function for this called **connectEnds**.

## reverseNodesInKGroups

*Note: Your solution should have O(n) time complexity, where n is the number of element in l, and O(1) additional space complexity, since this is what you would be asked to accomplish in an interview.*

*Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that is less than or equal to the length of l. If the number of nodes in the linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.*

*You may not alter the values in the nodes - only the nodes themselves can be changed.*

