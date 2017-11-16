# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def connectEnds(l_stack, prev, merge, head):
    l_val, l_obj, l_next = l_stack[0]
    prev.next = merge = l_obj
    return head


def movePointers(prev, l_obj, merge, l_stack):
    prev.next = prev = merge = l_obj
    l_stack.pop(0)
    return prev, merge


def mergeTwoLinkedLists(l1, l2):
    # Check that both linked lists have elements
    if not l1:
        return l2
    if not l2:
        return l1

    l1_stack = ['dummy']
    l2_stack = ['dummy']
    head, merge, prev = None, None, None
    start = 0


    while l1_stack or l2_stack:
        # Check if either linked list is empty
        if not l1_stack:
            return connectEnds(l2_stack, prev, merge, head)
        if not l2_stack:
            return connectEnds(l1_stack, prev, merge, head)

        # Only runs first time to set header
        if start == 0:
            l1_stack.pop()
            l2_stack.pop()
            if l1.value < l2.value:
                head = prev = l1
                merge = head.next
                l2_stack.append((l2.value, l2, l2.next))
                if l1.next:
                    l1_stack.append((l1.next.value, l1.next, l1.next.next))
                else:
                    connectEnds(l2_stack, prev, merge, head)
            else:
                head = prev = l2
                merge = head.next
                l1_stack.append((l1.value, l1, l1.next))
                if l2.next:
                    l2_stack.append((l2.next.value, l2.next, l2.next.next))
                else:
                    connectEnds(l1_stack, prev, merge, head)
            l1 = l1.next
            l2 = l2.next
            start = 1
            continue

        l1_val, l1_ob, l1_next = l1_stack[0]
        l2_val, l2_ob, l2_next = l2_stack[0]

        if l1_val <= l2_val:
            prev, merge = movePointers(prev, l1_ob, merge, l1_stack)
        else:
            prev, merge = movePointers(prev, l2_ob, merge, l2_stack)
        merge = merge.next

        if l1:
            l1_stack.append((l1.value, l1, l1.next))
            l1 = l1.next
        if l2:
            l2_stack.append((l2.value, l2, l2.next))
            l2 = l2.next
    return head
