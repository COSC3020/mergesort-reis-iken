[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

**MY ANSWER:**

The mergesort function should have a time complexity of nlog(n) considering the fact that I am incrementing both the outer loop and the inner loop exponentially, and the time it takes to merge the subarrays is n.

The sort function should have a time complexity of n considering it iterates through all the elements once.

Since the dominant term here is nlog(n), we can ignore the term n.

So we can conclude that the $\Theta$ bound for the worst-case runtime is $\Theta$(nlog(n))$
