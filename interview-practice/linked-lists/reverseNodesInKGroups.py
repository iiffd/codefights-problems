# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None


def reverseNodesInKGroups(l, k):
    # If k is one, then just return list
    if k == 1:
        return l

    prev, head, i = None, None, 0
    k1, k2 = None, None

    while l:
        i += 1

        # Seperate into groups of k
        if i == k:
            head = l
        elif i % k == 0:
            if i / 3 % 2 == 0:
                k2.next = l
            else:
                k1.next = l

        # Check if value should hold alternating value
        if i % k == 1:
            if (i - 1) / k % 2 == 1:
                k2 = l
            else:
                k1 = l

        # Check if next is None
        if l.next == None:
            if (i - (i % k)) / k % 2 == 1:
                print k1.value, k2.value
            else:
                #k2.next = k1
                print 'k2', k2.value, 'k1', k1.value
            return head

        next = l.next
        if i % k == 1:
            l.next == None
        else:
            l.next = prev
        prev = l
        l = next