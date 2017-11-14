# Definition for singly-linked list:
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


def isListPalindrome(l):
    s = l
    f = l
    r = l
    i = 1

    prev = None
    rev = None
    while s:
        # Look for end of list. Count length of list
        if f.next != None and f.next.next != None:
            f = f.next.next
            i += 2
            s = s.next
        else:
            if f.next != None:
                f = f.next
                i += 1
                s = s.next
                continue

            # Reverse last half of linked list
            rev = s
            next = s.next
            s.next = prev
            prev = s
            s = next

    # Compare first half and reverse of second half
    for index in range(i/2):
        if r.value != rev.value:
            return False
        r = r.next
        rev = rev.next
    return True


# Dummy data to use for isListPalindrome function.
l = ListNode(2)
a = ListNode(3)
p = ListNode(1)

l.next = a
a.next = p

h = isListPalindrome(l)
