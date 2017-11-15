# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#

def addZeros(num, fill):
    if len(num) < fill:
        for _ in range(fill - len(num)):
            num = '0' + num
    return num


def addTwoHugeNumbers(a, b):
    big_a, big_b, zero_fill = '', '', 0
    lead_zeros = ''

    while a:
        num = str(a.value)
        num = addZeros(num, 4)
        big_a += num
        a = a.next
    while b:
        num = str(b.value)
        num = addZeros(num, 4)
        big_b += num
        b = b.next

    total = str(int(big_a) + int(big_b))
    if len(total) % 4 != 0:
        zero_fill = 4 - len(total) % 4
    total = addZeros(total, len(total) + zero_fill)

    return [int(total[i:i + 4]) for i in xrange(0, len(total), 4)]
