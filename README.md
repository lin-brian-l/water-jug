The following is a repo containing a solution and tests for the "Water Jug Problem". The problem is as follows:

Suppose you had an array of `n` water jugs, each one with a different capacity. Let's say you have a target amount of water `t` you'd like inside a cup. 

Write a program that outputs the shortest sequence of actions needed to put the target amount `t` inside a cup. Raise an exception if `t` cannot be formed.

There are three possible actions:

1. Fill a cup to its capacity
2. Empty a cup to 0 oz.
3. Pour cup `i`'s content into another cup `j`. The amount of water you pour into cup `j` is given by `min(cup[i], capacity[j] - cup[j])`

----------------------------------

For example, suppose the array `[1, 3]` were passed in. This represents a cup of 1 oz (`cup 0`) and 3 oz (`cup 1`). Let `t = 2`; we want the amount 2 oz in one of these cups.

A sequence of actions, with the corresponding states of the cups, might be (if we zero indexed the cups)

1. `"Fill cup 1: (0, 3)"  # Remember, cup 1 is the 3 oz cup`
2. `"Pour cup 1's contents into cup 0: (1, 2)"`

This is the end state, since `cup 1` now has 2 ounces. An unoptimized sequence may be

1. `"Fill cup 0: (1, 0)"`
2. `"Pour cup 0's contents into cup 1: (0, 1)"`
3. `"Fill cup 0: (1, 1)"`
4. `"Pour cup 0's contents into cup 1: (0, 2)"`