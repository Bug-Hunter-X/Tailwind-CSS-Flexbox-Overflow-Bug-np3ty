# Tailwind CSS Flexbox Overflow Bug
This repository demonstrates a common yet subtle bug encountered when using Tailwind CSS's flexbox utilities. The issue arises from unexpected overflow within flex containers, even when fractional widths seem to be correctly applied.

## Problem
The primary problem is that flex items do not automatically wrap onto a new line like block elements.  If the content within a flex item exceeds the available space allocated by its width, it will overflow. This issue becomes more problematic in responsive designs as screen size changes.

## Solution
The solution involves explicitly setting a `flex-wrap` property to either `wrap` or `wrap-reverse` to allow flex items to wrap onto multiple lines and prevent overflow.

This repository provides a clear example of the issue and its resolution using Tailwind CSS.