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

Since the outer loop splits into 2 halves, and the merging of the sorted halves takes O(n) time, we can come up with the following equation:

$T(n) = 2T(n/2) * n$

$T(n) = 4T(n/4) * n$

$T(n) = 2^iT(n/2^i) * n$

$T(n) = nT(1) * \log_{2} n$

$T(n) = n * \log_{2} n$

We know that the worst case is the same as the average and best cases for this algorithm since there are no conditions (no way to bypass the outer or inner loop).

So we can conclude that the $\Theta$ bound for the worst-case runtime is $\Theta$(nlog(n))$
