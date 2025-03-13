# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        anotherHead = head
        numbers = []
        while (anotherHead is not None):
            numbers.append(anotherHead.val)
            anotherHead = anotherHead.next
        
        formattedNumbers = list(reversed(numbers))
        initNode = ListNode()
        actualNode = None
        for idx, n in enumerate(formattedNumbers):
            if actualNode is not None:
                actualNode.val = n
                if(len(formattedNumbers) == idx + 1):
                    return initNode
                else:
                    newActualNode = ListNode()
                    actualNode.next = newActualNode
                    actualNode = newActualNode
            else:
                initNode.val = n
                if(len(formattedNumbers) != 1):
                    actualNode = ListNode()
                    initNode.next = actualNode
                else:
                    return initNode