# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None


def reverseNodesInKGroups(l, k):
    prev, head, i = None, None, 0
    k_start, k_alt = None, None

    while l:
        i += 1
        print head
        if i == k:
            head = prev = l
            l = l.next
            continue

        if l.next == None:
            print head
            if i / k  % 2 == 0:
                k_start.next = k_alt
            else:
                k_alt.next = k_start
            return head

        if i % k == 0:
            if i / k > 1:
                if i / k  % 2 == 0:
                    k_start.next = l
                else:
                    k_alt.next = l


        if i % k == 1:
            if (i - 1) / k % 2 == 0:
                k_start = l
            else:
                k_alt = l
            l = l.next

        next = l.next
        l.next = prev
        prev = l
        l = next