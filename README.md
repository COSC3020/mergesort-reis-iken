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

The mergesort function should have a time complexity of log(n) considering the fact that I am incrementing both the outer loop and the inner loop exponentially.

The sort function actually has a time complexity of n^2 considering the outer loop could iterate for up to n times, and the inner loop could also iterate up to n times.

Since mergesort iteratively calls sort(), then our worst-case runtime should be n^2 * log(n).

So we can conclude that the $\Theta$ bound for the worst-case runtime is $\Theta$(n^2log(n))$
