# TypeScript Type Error with Spread Syntax on Number Arrays

This repository demonstrates a subtle type error in TypeScript that can occur when using the spread syntax to combine two number arrays.  The error arises because TypeScript's type inference isn't perfectly precise in this scenario.

The `bug.ts` file contains the code exhibiting the error. The `bugSolution.ts` file provides a solution to address the issue.

## Problem

The `combine` function aims to concatenate two number arrays. However, when using the spread syntax (`...`), TypeScript infers the resulting array type as `(string | number)[]`, causing a type error if you attempt to treat the result strictly as a `number[]`.

## Solution

The solution is to explicitly type the return value of the `combine` function as `number[]`.